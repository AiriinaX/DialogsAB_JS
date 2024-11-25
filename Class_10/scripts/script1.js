// https://www.w3schools.com/js/js_object_display.asp

const person = {
  name: "John",
  age: 30,
  city: "New York",
  yearOfBirth: function () {
    return 2024 - this.age;
  },
};

//document.getElementById("demo").innerHTML = person;

// document.getElementById("demo").innerHTML = person.name + "," + person.age + "," + person.city;
// document.getElementById("demo").innerHTML = person["name"] + ", " + person["age"] + ", " + person["city"];

// Build a Text
let text = "";
console.log("Testa rindas saturs pirms cikla for: " + text);

/*
for (let x in person) {
  console.log(x);
  text += person[x] + " "; // text = text + person[x] + " "; // "" -> "" + "John" + " " -> "John "
                                                             // "John " -> "John " + "30" + " " -> "John 30 "
                                                             // ...
  console.log(text);
}
console.log("Testa rindas saturs pēc cikla for: "+text);
*/

/*
const values_of_prop_of_person = Object.values(person);
for (let x of values_of_prop_of_person) {
  console.log(x);
  text += x + " ";
  console.log(text);
}
console.log("Testa rindas saturs pēc cikla for: " + text);
*/

const names_and_values_of_prop_of_person = Object.entries(person);
for (let [x, y] of names_and_values_of_prop_of_person) {
  // x - property_name
  // y - property_value
  /*if (y instanceof Function) {
    console.log(y + " ir funkcijas apraksts");
  } else {
    console.log(y + " nav funkcijas apraksts");
  }*/
  //console.log(x + ": " + y + "("+ y instanceof Function ? "tas ir funkcijas apraksts" : "tas nav funkcijas apraksts" +")");
  console.log(
    `${x} : ${y} (${
      y instanceof Function
        ? "tas ir funkcijas apraksts"
        : "tas nav funkcijas apraksts"
    })`
  );
  //console.log(x+": "+person[x])
  // text += y + " (this value of "+ x +" property) ";
  if (y instanceof Function != true) {
    text += y + " ";
  }
  console.log(text);
}
console.log("Testa rindas saturs pēc cikla for: " + text);

//text = JSON.stringify(person);

document.getElementById("demo").innerHTML = text;