const bulancd = document.getElementById('bulan');
const haricd = document.getElementById('hari');
const jamcd = document.getElementById('jam');
const menitcd = document.getElementById('menit');
const detikcd = document.getElementById('detik');

//const kiamatDekat = '30 June 2022';

function countDown() {
    const tanggalKiamat = new Date(kiamatDekat);
    const tanggalSkrg = new Date();

    // konversi milidetik ke detik
    const konversiDetik = (tanggalKiamat - tanggalSkrg) / 1000;

    const detik = Math.floor(konversiDetik % 60);

    // konversi detik ke menit
    const menit = Math.floor(konversiDetik / 60 % 60); 

    // konversi menit ke jam
    const jam = Math.floor(konversiDetik / 3600 % 60);

    // konversi jam ke hari
    const hari = Math.floor(konversiDetik / 3600 / 24);

    // konversi hari ke bulan
    const bulan = Math.floor(konversiDetik / 3600 / 24 % 30);
    
    bulancd.innerHTML = bulan;
    haricd.innerHTML = hari;
    jamcd.innerHTML = jam;
    menitcd.innerHTML = menit;
    detikcd.innerHTML = detik;
}

// jgn lupa di-call

countDown();

setInterval(countDown, 1000);