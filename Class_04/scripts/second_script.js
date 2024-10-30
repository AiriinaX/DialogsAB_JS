a = 10;
console.log("a mainīgā vērtība: " + a);
{
  a = 30;
  var a = 40;
}
console.log("a mainīgā vērtība: " + a);

{
let text = "Some text";

document.getElementById("demo").innerHTML = text;

text = "Some other text";

document.getElementById("demo").innerHTML = text;
}

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
  }