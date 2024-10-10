const screen=document.getElementById('calculator-screen');
const buttons=document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click',()=>{
        const value=button.value;

        if (value==='all-clear'){
            screen.value='';
        }
        else if(value==='='){
            try{
                screen.value=eval(screen.value);
            }catch(error){
                screen.value='Error';
            }
        }
        else{
            screen.value+=value;
        }
    })
});

