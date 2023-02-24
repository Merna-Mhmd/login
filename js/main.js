
let nameInput=document.getElementById('nameInput');
let emailInput=document.getElementById('emailInput');
let passInput=document.getElementById('passInput');
let signUpp=document.getElementById('signUp');
let alert=document.getElementById('alert');
let logIn=document.getElementById('logIn');
let welcome=document.getElementById('welcome');
let logOutt=document.getElementById('logOut')
let container=[];

if(logIn != null)
{
    logIn.addEventListener('click',btn)
}


let user={
    Name:nameInput.value,
    email:emailInput.value,
    password:passInput.value
}




function btn()
{


    

   
    if(emailInput.value=='' || passInput.value=='')
    {
        getAlert('All inputs required','red')
    }
    else
    {
        let tmpn= container.find(ele=> ele.email==emailInput.value && ele.password==passInput.value);
        if(tmpn == undefined)
        {
          getAlertMessage('Email or password not correct','red'); 
        }
        else
        {
          localStorage.setItem('userName',JSON.stringify(tmpn.Name));
          window.location.href='home.html'
      
        }
    }
}
