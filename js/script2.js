let nameInput=document.getElementById('nameInput');
let emailInput=document.getElementById('emailInput');
let passInput=document.getElementById('passInput');
let signUpp=document.getElementById('signUp');
let alert=document.getElementById('alert');
let logIn=document.getElementById('logIn');
let welcome=document.getElementById('welcome');
let logOutt=document.getElementById('logOut')
let container=[];

// ===================================
if(localStorage.getItem('Users')!=null)
{
   container=JSON.parse(localStorage.getItem('Users'));
}

if(signUpp != null)
{
    signUpp.addEventListener('click',signUp)
}

if(logIn != null)
{
    logIn.addEventListener('click',btn)
}



if(logOutt != null)
{
    logOutt.addEventListener('click',logOut)
}
if(welcome!= null)
{
    let user=JSON.parse(localStorage.getItem('userName'))
    welcome.innerHTML ='Welcome  '+user;
}


// ==========================================


function signUp()

{
   
    let user={
        Name:nameInput.value,
        email:emailInput.value,
        password:passInput.value
    }
    
    



    if(nameInput=='' ||emailInput.value==''||passInput.value==''||checkEmailExist() !=-1 )
    {
        if(nameInput=='' ||emailInput.value==''||passInput.value=='')
        {
            getAlert('All inputs required','red');
        }
        if(checkEmailExist() !=-1)
        {
            getAlert('email is already exist','red');
        }
    }
    else
    {
        getAlert('Success','green')
        container.push(user);
        localStorage.setItem('Users',JSON.stringify(container));
      
    }  
}

// ===========================================
function getAlert(str,color)
{
    alert.innerHTML=str;
    alert.classList.replace('d-none','d-block');
    alert.style.color=color;   
}
// =============================================
function checkEmailExist()
{
   let tmp=  container.findIndex(elem=>elem.email==emailInput.value);
   return tmp;
}

// =================================================

function btn()
{


    
   
    if(emailInput.value=='' || passInput.value=='')
    {
        getAlert('All inputs required','red')
        
   console.log(emailInput)
    }
    else
    {
        let tmp= container.find(elem=>elem.email==emailInput.value && elem.password==passInput.value);
        if(tmp == undefined)
        {
          getAlert('Email or password not correct','red'); 
        }
        else
        {
          localStorage.setItem('userName',JSON.stringify(tmp.Name));
          window.location.href='home.html'
      
        }
    }
}

















// ===========================
function logOut()
{ 
    window.location.href='index.html'
}