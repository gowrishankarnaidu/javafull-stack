let greeting = ["good morning", "good afternoon", "good evening", "good night"];
let num=0;   
function  greet_afternoon(){
    let text = document.getElementById("greet");
        text.innerHTML = greeting[num];
    num+=1; 
    if(num>3){
        num=0;
    }
}
function turn_on(){
    let light= document.getElementById("on");
    light.src="img2.jpeg";
}
function turn_off(){
    let light1= document.getElementById("on");
    light1.src="img1.jpeg";
}   
function change_color(){
    let colour= document.getElementById("cap");
    colour.style.backgroundColor="black";
    let txt1= document.getElementById("data");
    txt1.style.color="white";
}
