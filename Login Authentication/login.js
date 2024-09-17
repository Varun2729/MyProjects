document.getElementById('loginform').addEventListener('submit', function(event){
    event.preventDefault();
    const username= document.getElementById('username').value;
    const password=document.getElementById('password').value;
    const validUsername ='user';
    const validPassword ='password';
    if(username===validUsername && password=== validPassword){
        alert('login Sucessfull!');
        document.getElementById('message').textCont = '';
    }
    else{
        document.getElementById('message').textCont='Invalid Username or Password';
    }
});