//given object
var employee = {
  name: "Gauri Guglani",
  Job: "programmer",
  Age: 20
}

//problem 1:- add a method called namelength that prints out the length of the employers name to the console.
solution:
var employee = {
  name: "Gauri Guglani",
  Job: "programmer",
  Age: 20,
  namelength: function(){
    console.log(this.name)
  }
}

//problem 2:- write the program that will create an alert in the browser of each of the object's value for the key values
solution:
var employee = {
  name: "Gauri Guglani",
  Job: "programmer",
  Age: 20,
  report: function(){
    alert("name is "+this.name+", job is "+this.job+", age is "+this.age)
  }
}

//problem 3:- add method called lastname that prints out the employee's last name to the console
solution:
var employee = {
  name: "Gauri Guglani",
  Job: "programmer",
  Age: 20,
  lastname: function(){
    console.log(this.name.split("")[1])
  }
}
