window.onload = ()=>{
    let input_sign = document.getElementById('n_72');
    input_sign.addEventListener('focus', function(){
       document.querySelector('label').style.fontSize = '10px';
       document.querySelector('label').style.top = '.2rem';
    });
    
    input_sign.addEventListener('blur', function(){
        if(input_sign.value === ""){
            document.querySelector('label').style.fontSize = '1rem';
            document.querySelector('label').style.top = '.6rem';
        }else{
            document.querySelector('label').style.fontSize = '10px';
            document.querySelector('label').style.top = '.2rem';
        }
     });
}