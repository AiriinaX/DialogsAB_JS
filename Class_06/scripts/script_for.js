// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

console.log("Cikls for!");
//let 


console.log(`Salidzināšanas rezultāts pirms cikla - ${n} < ${3} ir ${n < 3}`);

for (n = 0 ; n < 3 ;  n++) {
  console.log(`Salidzināšanas rezultāts ciklā (pēc n pieauguma) - ${n} < ${3} ir ${n < 3}`);
}

console.log(`Salidzināšanas rezultāts pēc cikla - ${n} < ${3} ir ${n < 3}`);
console.log(n);
// Expected output: 3

//let 
for (a = 1, A = 3, b = 1, B = 4 ; a <= A ; a++){
    for (b = 1 ; b <= B ; b++){
        console.log(a+" "+b);
    }
}