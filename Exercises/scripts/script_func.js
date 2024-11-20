//function count(from, to, choice, [exclusions]){ … }
//count(1, 30, ’all’); – tiks attēloti visi veseli skaitļi no 1 līdz 30
//count(1, 30, ’odd’); – tiks attēloti visi nepāru veseli skaitļi no 1 līdz 30
//count(1, 30, ’even’); – tiks attēloti visi pāru veseli skaitļi no 1 līdz 30
//count(1, 30, ’odd’, [5, 11]); – tiks attēloti visi nepāru veseli skaitļi no 1 līdz 30, izņemot 5 un 11
//count(1, 30, ’even’, [12, 14, 16, 18]); – tiks attēloti visi pāru veseli skaitļi no 1 līdz 30, izņemot 12, 14, 16, 18

function showNumbers() {
    for (let i = 1; i <= 30; i++) {
        console.log(i);
    }
    ocument.getElementById("demo").innerText = "Dati pirms kārtošanas: "+ showNumbers;
}

showNumbers();
document.getElementById("demo").innerHTML = document.getElementById("demo").innerText + "<br><br> Dati pēc kārtošanas: "+ showNumbers;