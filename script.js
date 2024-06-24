const header=document.querySelector("header");
const form = document.querySelector(".contact-form");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", this.window.scrollY > 130);
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    menulist.classList.toggle('open');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    menulist.classList.remove('open');
}


var typed = new Typed(".input" ,{
    strings: ["Web Developer.","Learner.","Coder."],
    typeSpeed: 120,
    backSpeed: 70,
    loop:true
})

const fullname = document.querySelector('.full-name');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');
const subject = document.querySelector('.subject');
const message = document.querySelector('.message');
const subbtn= document.querySelector('.sub-btn');
function sendEmail(){
    const bodymessage = `Full name : ${fullname.value} <br>
                        Email : ${email.value} <br>
                        Phone Number : ${phone.value} <br>
                        Message : ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "diliptelli38@gmail.com",
        Password : "13BDA96813276C8F7750A0C396646C10F87C",
        To : "diliptelli38@gmail.com",
        From : "diliptelli38@gmail.com",
        Subject : subject.value,
        Body : bodymessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    sendEmail();
})