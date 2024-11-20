// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 1000,
    fullName: function() {
    return this.firstName + " " + this.lastName;},
    address: {country: "Latvia", city: "Rīga"}
    };

// Create an Greeting
    person["greeting"] = function(greeting_phrase){
    return greeting_phrase + " " + this.fullName() + "!";
    }; 

// Create unwritable, unconfigurable Property
Object.defineProperty(person,"id",{value: 60, writable: false, configurable: false});


// Display Properties
document.getElementById("demo").innerHTML =
person.firstName + "," + person.lastName + "," + person.id;

