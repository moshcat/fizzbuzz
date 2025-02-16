// ambil input user 
// print no 1 sampai no yg diinput user
// print fizz untuk angka yang dibagi 3 tanpa sisa
// print buzz untuk angka yang dibagi 5 tanpa sisa
// dan print fizz buzz untuk angka yang bisa dibagi 3 dan 5 tanpa sisa

let jawab = parseInt(prompt("Masukkan angka anda"))

if(isNaN(jawab)){
    alert("jawaban bukan nomor");
    jawab = parseInt(prompt("Masukkan angka anda"))
} else {
    console.log("benar");
    for (let i = 1; i <= jawab; i++) {
    
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 3 === 0){
            console.log("fizz");
        } else {
            console.log(i);
        
        }
        
    }
    
}





