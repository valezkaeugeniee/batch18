let nama = "udin";
console.log(nama);

if (nama === "Valezka") {
    console.log("Nama saya adalah Valezka");
} else {
    console.log("Nama saya bukan Valezka");
}

switch (nama) {
    case "udin":
        console.log("Nama saya adalah udin");
        break;
    case "Valezka":
        console.log("Nama saya adalah Valezka");
        break;
    default:
        console.log("Nama saya bukan udin atau Valezka");
}

let angka = 10;
if (angka > 5) {
    console.log("Angka lebih besar dari 5");
} else {
    console.log("Angka lebih kecil atau sama dengan 5");
}

switch (true) {
    case angka > 5:
        console.log("Angka lebih besar dari 5");
        break;
    case angka === 5:
        console.log("Angka sama dengan 5");
        break;
    default:
        console.log("Angka lebih kecil dari 5");
}

while (angka > 0) {
    console.log("Angka saat ini: " + angka);
    angka--;
}

for (let i = 0; i < 5; i++) {
    console.log("Perulangan ke-" + i);
}