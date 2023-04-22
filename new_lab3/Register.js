
const submit_button = document.querySelector(".button");

submit_button.onclick = (e) => {
    e.preventDefault();
    const fname = document.getElementById("first-name").value;
    const lname = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const cpass = document.getElementById("confirm-password").value;
    
    var form = document.getElementById("form")
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    localStorage.setItem('FirstName', fname);
    localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    localStorage.setItem('Cpassword', cpass);

    if(fname == "" && lname == "" && email == "" && pass == "" && cpass == ""){
        swal('Opps..!','input field has no value!','error');
    }
    else
    {
        if(pass.length >= 6 && pass.length <= 20)
    {
        if( pass !== cpass){
            swal('Opps..!','Password not matching!','error');
        }
        else
        {
           
            if(email.match(pattern))
            {
                form.classList.add("valid");
                form.classList.remove("invalid");
                text.innerHTML = "Your e-mail is valid";
                text.style.color = "#00ff00";
                swal('Good job!','Register successful!','success'
            );
            setTimeout(()=>{
                    location.href='LoginPage.html';
                    },3000)
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
    }
    else
    {
        swal('Opps..!','Input mim six digit password!','error');
    }
    }
}

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
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("closeeye").setAttribute("class","fa fa-eye-slash");
        document.getElementById("closeeye").style.color='#7a797e';
        state = false;
    }
    else {
        document.getElementById("password").setAttribute("type","text");
        document.getElementById("closeeye").setAttribute("class","fa fa-eye");
        document.getElementById("closeeye").style.color='#5887ef';
        state = true;
    }
}

var state_confirm = false;
function toggle_confirm(){
    if(state_confirm) {
        document.getElementById("confirm-password").setAttribute("type","password");
        document.getElementById("closeeye_confirm").setAttribute("class","fa fa-eye-slash");
        document.getElementById("closeeye_confirm").style.color='#7a797e';
        state_confirm = false;
    }
    else {
        document.getElementById("confirm-password").setAttribute("type","text");
        document.getElementById("closeeye_confirm").setAttribute("class","fa fa-eye");
        document.getElementById("closeeye_confirm").style.color='#5887ef';
        state_confirm = true;
    }
}


