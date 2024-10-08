const display = document.getElementById("disp");

function appdis(input){
    display.value+=input;
}

function claculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function clearrdisp(){
    display.value="";
}