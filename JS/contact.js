// contact form 

let contactForm = document.querySelector("#contactForm")

let spanName = document.querySelector("#namespan");
let spanEmail = document.querySelector("#emailspan");
let spanSubject = document.querySelector("#subjectspan");
let spanMessage = document.querySelector("#messagespan");

let successMsg = document.querySelector("#successMsg");


contactForm.addEventListener("submit", function (event) {

    spanName.innerText = "";
    spanEmail.innerText = "";
    spanSubject.innerText = "";
    spanMessage.innerText = "";

    successMsg.innerText = "";

    let formName = document.querySelector("#name").value;
    let formEmail = document.querySelector("#email").value;
    let formSubject = document.querySelector("#subject").value;
    let formMessage = document.querySelector("#message").value;


    // Name
    if (formName.trim() === "") {
        event.preventDefault();
        spanName.innerText = "Plese Enter Your Name";
    }

    // Email
    if (formEmail.trim() === "") {
        event.preventDefault();
        spanEmail.innerText = "Plese Enter Your Email";
    }

    // subject
    if (formSubject.trim() === "") {
        event.preventDefault();
        spanSubject.innerText = "Plese Enter Subject";
    }

    // Form Message
    if (formMessage.trim() === "") {
        event.preventDefault();
        spanMessage.innerText = "Plese Enter Your Message";
    }

    // success Message 
    if(formName.trim() !== "" && formEmail.trim() !== "" && formSubject.trim() !== "" && formMessage.trim() !== ""){
        event.preventDefault();
        successMsg.innerText = "Message Submitted Successfully!"
    }

    setTimeout(function(){
        successMsg.innerText = "";
    }, 4000)

})

