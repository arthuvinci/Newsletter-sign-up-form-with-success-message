const submit = document.querySelector('.form .submit');
const input = document.getElementById('email')
const invalidMessage = document.getElementsByClassName('invalid-label hidden')[0];
const emailConfirm = document.querySelector('.email-text p');  
const emailValidPage = document.getElementsByClassName('valid-email hidden')[0];
const dismiss = document.getElementsByClassName('dismiss')[0];
const card = document.getElementById('card');

submit.addEventListener('click',function(e){

    e.preventDefault()
    if(input.validity.typeMismatch){
        invalidMessage.classList.remove('hidden');
        input.classList.add('invalid');
        invalidMessage.innerText = 'Valid email required'; 

    }else if(input.validity.valueMissing){
        input.classList.add('invalid');
        invalidMessage.classList.remove('hidden');  
        invalidMessage.innerText ='Email required'; 

    }else{
        const email = input.value;
        emailConfirm.innerHTML=`A confirmation email was sent to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription`;
        emailValidPage.classList.remove('hidden');
        card.classList.add('blur');
    }
})

dismiss.addEventListener('click',function(){
    emailValidPage.classList.add('hidden');
    card.classList.remove('blur');
    location.reload();
})


