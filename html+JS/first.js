var firstname= prompt("Hello and Welcome. Please enter you First name");
var lastname= prompt("Please enter your last name");
var age= prompt("How Old are you?");
var cm= prompt("How tall are you in centimetres?");
var pet= prompt("What is the name of your pet?");
alert("thank you so much for the information!");

var namecond= null;
var agecond= null;
var htcond= null;
var petcond= null;

if(firstname[0]===lastname[0]){
  namecond= true;
}else{
  namecond= false;
}

if(age>20 && age<30){
  agecond= true;
}else{
  agecond= false;
}

if(cm>=170){
  htcond= true;
}else{
  htcond= false;
}

if(pet[pet.length-1]{
  petcond= true;
}else{
  petcond= false;
}

if(namecond && agecond && htcond && petcond){
  console.log("welcome");
}else{
  console.log("sorry");
}




















if(firstname[0]===lastname[0]











  && age>20 && age<30  && cm>=170 && pet[pet.length-1]===y){
      console.log("you've passed the test");
  }
  else{
    console.log("sorry wrong infor");
  }
