// register

const form=document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')

form.addEventListener('submit',(e)=>{
   
   if(!validateInputs()){
    e.preventDefault();
   } 
})

function validateInputs(){
    const usernameval=username.value.trim()
    const emailval=email.value.trim()
    const passwordval=password.value.trim()
    const cpasswordval=cpassword.value.trim()
    let Suceess=true

   if(usernameval===''){
    Suceess=false;
    setErr(username,'User name is required')
   }
   else{
    setSuceess(username)
   }
  
   if(emailval===''){
    Suceess=false;
    setErr(email,'Email is required')
   }
   else if(!validateEmail(emailval)){
    Suceess=false;
    setErr(email,'Enter valid email')
   }
   else{
    setSuceess(email)
   }

   if(passwordval ==''){
    Suceess=false;
    setErr(password,'Password is required')   
    }
    else if(passwordval.length<8){
     Suceess=false;
    setErr(password,'Password must be atleast 8 characters long')
    }
    else{
    setSuceess(password)
    }

   if(cpasswordval===''){
    Suceess=false;
    setErr(cpassword,'Confirm password is required')
   }
   else if(cpasswordval!==passwordval){
    Suceess=false;
    setErr(cpassword,'Password does not match')
   }
   else{
    setSuceess(cpassword)
   }
   return Suceess
}
    

// get element and show error message
function setErr(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')   
}

function setSuceess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')   
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };




