
let email = document.getElementById('email');
let password = document.getElementById('pwd');
let logbtn = document.getElementById('loginbutton');
let invalidmsg = document.getElementById('invalidmsg');
let invalidmsg1 = document.getElementById('invalidmsg1');


logbtn.addEventListener('click',function(event){
    event.preventDefault();
       
        if(email.value == 'sankey901@solutions.com' && password.value == 'mindset')
        {
            
            console.log("hello");
            window.location.href='new.html';
        }
        else if(email.value != 'sankey901@solutions.com')
        {
            invalidmsg.innerText='Invalid username/Email';
            invalidmsg.style="color:red";
        }
        else if(password.value != 'mindset')
        {
            invalidmsg1.innerText='Invalid Password';
            invalidmsg1.style="color:red";
        }
        else
        {
            console.log('Invalid credentials');
        }
});
