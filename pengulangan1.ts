let start = 1;
let end = 100;
let batchSize = 10;

for (let i = 1; i <= end / batchSize; i++) {
    console.log(`Perulangan 10 ke-${i}:`);
    let sum = 0;
    let count = 0;

    for (let j = start; count < 5; j++) {
        if (i % 2 !== 0 && j % 2 !== 0) { // Untuk batch ganjil, ambil angka ganjil
            console.log(j);
            sum += j;
            count++;
        } else if (i % 2 === 0 && j % 2 === 0) { // Untuk batch genap, ambil angka genap
            console.log(j);
            sum += j;
            count++;
        }
    }
    
    console.log("--------------------------");
    console.log(`Jumlah: ${sum}`);
    start += batchSize;
}
