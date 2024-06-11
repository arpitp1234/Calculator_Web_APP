let screen=document.getElementById("screen");
let button=document.querySelectorAll('button');
let screenValue;
for(let element of button){
      element.addEventListener('click',(element)=>{
            
          let buttontext=element.target.innerText;
          console.log("text is",buttontext);
          if(buttontext=="="){
              screenValue=eval(screen.value);
              screen.value =screenValue;
          }
          else if(buttontext=="C"){
               screenValue=" ";
               screen.value=screenValue;
          }else{
              screenValue=buttontext;
              screen.value +=screenValue;
          }
      })
}
