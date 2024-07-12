function CalculateLength(){
    var frominput=Number(document.getElementById("frominput").value);
       //start Calculation
       var Fromunit=document.getElementById("Fromunit").value;
       var Tounit=document.getElementById("Tounit").value;
       var toinput=document.getElementById("toinput");
   var  ans=ConvertLength(frominput,Fromunit,Tounit);
   toinput.value=Number(ans).toFixed(2); 
   //alert(ans);
}
function ConvertLength(frominput,Fromunit,Tounit){
   x=Number(frominput);
   if(Fromunit==="Fahreneit" && Tounit==="Fahreneit"){
        result=x;

   }
   if(Fromunit==="Fahreneit" && Tounit==="Celsius"){
        result=((x - 32)*5)/9;
   }
   if(Fromunit==="Celsius" && Tounit==="Fahreneit"){
         result=(9*x/5)+32;
   }
   if(Fromunit==="Celsius" && Tounit==="Celsius"){
      result=x;
   }
   console.log(result);
 return result;
}
