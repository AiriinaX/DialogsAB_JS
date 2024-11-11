// https://www.w3schools.com/js.asp


let numbers = 0;
while (numbers <= 30) {
  console.log(numbers);
  numbers++;
}

document.getElementById("demo").innerHTML = document.getElementById("demo").innerText + "<br><br> Dati pēc kārtošanas: "+ numbers;