function CalculateLength(){
     var frominput=Number(document.getElementById("frominput").value);
     if(ValidateinputConverter(frominput)){
        //start Calculation
        var Fromunit=document.getElementById("Fromunit").value;
        var Tounit=document.getElementById("Tounit").value;
        var toinput=document.getElementById("toinput");
     }
    var  ans=ConvertLength(frominput,Fromunit,Tounit);
    toinput.value=Number(ans).toFixed(2); 
   // alert(ans);
}
//creating a function for conversion
/*Step1:- make our fromLength as Millimeter*/
/*Step2:- make Millimeter to our target unit;*/

function ConvertLength(frominput,Fromunit,Tounit){
    /*Step1:- make our fromLength as Millimeter*/
    /*Step2:-make Millimeter to our target unit*/
    x=Number(frominput);
    var inMillimeter=0;
    var makeThisMillimeter=0;
    var result=0;
    
    switch(Fromunit){
        case "Millimeter":
          makeThisMillimeter=1;
          break;
        case "Centimeter":
          makeThisMillimeter=10;
          break;
        case "Decimeter":
          makeThisMillimeter=100;
          break;
        case "Meter":
            makeThisMillimeter=1000;
            break;
        case "Kilometer":
            makeThisMillimeter=1000000;
            break;
        case "Foot":
            makeThisMillimeter=304.8;
            break;
        case "Inch":
            makeThisMillimeter=25.4;
            break;
        case "Mile":
            makeThisMillimeter=1609344;
            break;
        case "Yard":
            makeThisMillimeter=914.4;
         break;
    }
    inMillimeter =x*makeThisMillimeter;

    switch(Tounit){
        case "Millimeter":
          result=inMillimeter;
          break;
        case "Centimeter":
          result=inMillimeter/10;
          break;
        case "Decimeter":
          result=inMillimeter/100;
          break;
        case "Meter":
            result=inMillimeter/1000;
            break;
        case "Kilometer":
            result=inMillimeter/1000000;
            break;
        case "Foot":
            result=inMillimeter/304.8;
            break;
        case "Inch":
            result=inMillimeter/25.4;
            break;
        case "Mile":
            result=inMillimeter/1609344;
            break;
        case "Yard":
          result=inMillimeter/914.4;
         break;
    }
    console.log(result)
  return result;
}


//Create a function to validate form
function ValidateinputConverter(frominput){
    if(frominput<=0){
        alert("Please enter the valid value");
        return false;
    }
    return true;
}