const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();

    const emailAddress = document.getElementById("enter_email").value;
    const passWord = document.getElementById("enter_password").value;

    var form = document.getElementById("form")
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    if( emailAddress == "" && passWord == ""){
        swal(
            'Opps..!',
            'input field has no value!',
            'error'
        );
    }
    else
    {
        if(emailAddress == Email && passWord == Password){
            swal(
                'Good job!',
                'login successful!',
                'success'
            );
            setTimeout(()=>{
                window.location.href='HomePage.html';
                },1000)
        }else
        {
            swal(
                'Opps..!',
                'Something is wrong!',
                'error'
            );
        }
    };


};

function validation() {
    var form = document.getElementById("form")
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if(email.match(pattern))
            {
                form.classList.add("valid");
                form.classList.remove("invalid");
                text.innerHTML = "Your e-mail is valid";
                text.style.color = "#00ff00";
            }
            else {
                form.classList.remove("valid");
                form.classList.add("invalid");
                text.innerHTML = "Please, enter valid e-mail.";
                text.style.color = "#ff0000";
            }

            if(email == "")
            {
                form.classList.remove("valid");
                form.classList.remove("invalid");
                text.innerHTML = "";
                text.style.color = "#00ff00";
            }
}

var state = false;
function toggle(){
    if(state) {
        document.getElementById("enter_password").setAttribute("type","password");
        document.getElementById("closeeye").setAttribute("class","fa fa-eye-slash");
        document.getElementById("closeeye").style.color='#7a797e';
        state = false;
    }
    else {
        document.getElementById("enter_password").setAttribute("type","text");
        document.getElementById("closeeye").setAttribute("class","fa fa-eye");
        document.getElementById("closeeye").style.color='#5887ef';
        state = true;
    }
}