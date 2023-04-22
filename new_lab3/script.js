const wrapper__carousel = document.querySelector(".wrapper__carousel"),
firstImg = wrapper__carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = wrapper__carousel.scrollWidth - wrapper__carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = wrapper__carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = wrapper__carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        wrapper__carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(wrapper__carousel.scrollLeft - (wrapper__carousel.scrollWidth - wrapper__carousel.clientWidth) > -1 || wrapper__carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(wrapper__carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return wrapper__carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    wrapper__carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = wrapper__carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    wrapper__carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    wrapper__carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    wrapper__carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

wrapper__carousel.addEventListener("mousedown", dragStart);
wrapper__carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
wrapper__carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
wrapper__carousel.addEventListener("touchend", dragStop);