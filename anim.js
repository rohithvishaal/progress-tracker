var wrap1 = document.querySelector('.wrap1')
var empID = document.getElementById("employeeID");
var wrap2 = document.querySelector('.wrap2')
var OTP = document.getElementById("employeeOTP");

wrap1.addEventListener('click', animateEvent);
empID.addEventListener('click', animateEvent);
function animateEvent(){
    wrap1.style.setProperty('--anim', "top-move .4s ease forwards");
    if(!OTP.value)
    wrap2.style.setProperty('--anim', 'reset .4s ease forwards');
    console.log("event");
    empID.focus()
}



wrap2.addEventListener('click', animateEvent1);
OTP.addEventListener('click', animateEvent1);
function animateEvent1(){
    wrap2.style.setProperty('--anim', "top-move .4s ease forwards");
    console.log("event1");
    if(!empID.value)
    wrap1.style.setProperty('--anim', 'reset .4s ease forwards');
    OTP.focus()
}