document.getElementById('btn-field').addEventListener('click',function(){
    //email
    const emailField=document.getElementById('email-field');
    const email=emailField.value;
    
    //password
    const passwordField=document.getElementById('password-field');
    const password=passwordField.value;
    if(email==='sneha@gmail.com'&& password==='123456'){
        window.location.href='bank.html'
    }
    else{
        alert('Incorrect user!'.style.ba)
    }
})