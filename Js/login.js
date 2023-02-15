


function getValueFromInput(elementId){
    const emailElement =  document.getElementById(elementId);
    const inputValue = emailElement.value;
    return inputValue;
    
}
document.getElementById('login-btn').addEventListener('click',function(){
    const email = getValueFromInput('email-field');
    const password = getValueFromInput("pass-field");
    // console.log(email,password);

    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert("wrong email or password!")
    }
  
})


