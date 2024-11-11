// https://www.w3schools.com/js/js_array_sort.asp

let dati = [1, 10, 3, 98, 7, 30, 109 ];

  let i = 0;
  let len = dati.length;
  let text = "";
  document.getElementById("demo").innerText = "Dati pirms kārtošanas: "+ dati;
  
  dati.sort(function(a, b){return a - b});

  document.getElementById("demo").innerHTML = document.getElementById("demo").innerText + "<br><br> Dati pēc kārtošanas: "+ dati;
  