// https://www.w3schools.com/js/js_array_sort.asp

let dati = [1, 10, 3, 5, 7, 30, 109 ];
  document.getElementById("demo").innerText = "Dati pirms kārtošanas: "+ dati;
  // dati.sort(function(a, b){return a - b});
  dati.sort(function(a, b){return b - a});
  document.getElementById("demo").innerHTML = document.getElementById("demo").innerText + "<br><br> Dati pēc kārtošanas: "+ dati;