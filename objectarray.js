// Example start just ignore this bunch of code this only for my example purpose

// var x ={
//        nam:"saumya",
//        pw : "Encrypt",
//        job:"No",
//        certificate:["+2","10th"]
// };
// var y =[
//     {
//         nam:"Ram",
//        pw : "8089"
//     },
//     {
//         nam:"Tam",
//        pw :"8568"
//     }
// ];





// Example End
/*
function signin(){
    if(nam.value==data.username && pas.value==data.password){
        return true;
    }
    else{
        alert("Sorry, Your user name and password both are incorect");
        return false;
    }
}
*/

// Main code start from here 
//only this usernme password can sign in
var data =[
    {
        username:"Saumya",
        password:"123123"
    },
    {
        username:"Liku",
        password:"121212"
    },
    {
        username:"Munu",
        password:"121212"
    }
];

var nam = document.getElementById("nam");
var pas = document.getElementById("pas");


function isValueThere(){
    for(var i = 0;i<data.length;i++){
        if(nam.value==data[i].username && pas.value==data[i].password){
            return true;
        }
    }
    return false;
}

function signin(){
    if(isValueThere()==true){
        return true;
    }
    else{
        alert("Please Enter Your Corect Username And Password");
        return false;
    }
}

var userInput = document.getElementById("userInput");
var submitBtn = document.getElementById("submitBtn");
var ol = document.getElementById("ol");

function keypr(key){  //how to link this function in else if part
    let x =key.keyCode;
    return x;

}

function addGroceries(){
    if(userInput.value.length>0){
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(userInput.value));
        ol.appendChild(li);
        userInput.value='';
        userInput.focus();
    }
    else if(userInput.value.length>0 && addGroceries()){  //im not prity sure th
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(userInput.value));
        ol.appendChild(li);
        userInput.value='';
        userInput.focus();
    }
    
   
    // else{
       
    // }
    
}
