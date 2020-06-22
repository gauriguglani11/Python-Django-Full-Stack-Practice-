var roster = [];

//function to add new name
function add(){
    var newname= prompt("Would you like to add a new name?");
  roster.push(newname);
}

//function to remove name
function remove(){
    var remname = prompt("which name you would like to remove?");
    var index = roster.indexOf(remname);
    roster.splice(index,1);
}

//function to display
function display(){
    var dispnew = console.log(roster);
}

 
var start = prompt("Would you like to start the Roster Web App? Y/N")
var request = "empty";

if(start === 'y')
{
    while(request !== "quit" ){
        request = prompt("which option you would like to choose: add,remove,display,quit");
        if(request === 'add')
        {
            add();
        }
        else if(request === 'remove'){
            remove();
        }
        else if(request === 'display')
        {
            display();
        }
        else{
            alert("not recognized");
            //request === quit;
        }
    }
}
alert("Thanks for using Student Rastro Web App");
