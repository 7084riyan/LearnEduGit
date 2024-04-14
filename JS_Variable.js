// const student = {
//     name :"satria",
//     class: 2
// }

// student.faculty = "sainteks";
// console.log(student);

// const student = ['sandi', 'Agung', 'agus'];
// student.push('Eka');
// console.log(student);

let x = "10" + 10 + 10;
let y = 10 + 10 + "10";

console.log("Nilai x:", x); // Output: "101010"
console.log("Nilai y:", y); // Output: "2010"

// Dalam variabel `x`, karena string `"10"` ditambahkan pertama kali, 
// maka operasi penjumlahan akan dianggap sebagai penggabungan string, sehingga hasilnya adalah `"101010"`.

// Sedangkan dalam variabel `y`, karena angka `10` ditambahkan terlebih dahulu, 
//maka operasi penjumlahan akan dilakukan sebagai penjumlahan numerik, dan kemudian string `"10"` ditambahkan, sehingga hasilnya adalah `"2010"`.