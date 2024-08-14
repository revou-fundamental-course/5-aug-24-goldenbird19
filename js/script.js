function calculateBMI(event) {
    event.preventDefault(); // Mencegah form dari submit default, agar tidak refresh halaman
    console.log("calculateBMI dipanggil"); // Debugging: log saat fungsi dipanggil

    // Mengambil nilai berat dan tinggi dari input form
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    console.log("Weight:", weight); // Debugging: log nilai berat badan
    console.log("Height:", height); // Debugging: log nilai tinggi badan

    // Mengecek apakah nilai berat dan tinggi sudah diisi
    if (weight && height) {
        // Menghitung BMI menggunakan fungsi calculateBMIValue
        const bmi = calculateBMIValue(weight, height);
        // Mendapatkan status berat badan berdasarkan BMI
        const weightStatus = getWeightStatus(bmi);
        // Mendapatkan deskripsi BMI berdasarkan BMI yang dihitung
        const bmiDescription = getBMIDescription(bmi);

        console.log("BMI:", bmi); // Debugging: log nilai BMI
        console.log("Weight Status:", weightStatus); // Debugging: log status berat badan
        console.log("BMI Description:", bmiDescription); // Debugging: log deskripsi BMI

        // Menampilkan hasil perhitungan BMI ke form
        document.getElementById('bmi-value').value = bmi.toFixed(2); // Menampilkan nilai BMI dengan 2 desimal
        document.getElementById('weight-status').value = weightStatus; // Menampilkan status berat badan
        document.getElementById('bmi-description').value = bmiDescription; // Menampilkan deskripsi BMI
    } else {
        // Menampilkan peringatan jika nilai berat atau tinggi belum diisi
        alert('Silakan masukkan nilai berat badan dan tinggi badan!');
    }
}

// Fungsi untuk menghitung nilai BMI berdasarkan berat dan tinggi badan
function calculateBMIValue(weight, height) {
    return weight / Math.pow(height / 100, 2); // Rumus BMI: berat (kg) dibagi tinggi (m) kuadrat
}

// Fungsi untuk mendapatkan status berat badan berdasarkan nilai BMI
function getWeightStatus(bmi) {
    if (bmi < 18.5) {
        return 'kekurangan berat badan'; // Status untuk BMI < 18.5
    } else if (bmi < 25) {
        return 'Normal(ideal)'; // Status untuk BMI antara 18.5 dan 24.9
    } else if (bmi < 30) {
        return 'kelebihan berat badan'; // Status untuk BMI antara 25 dan 29.9
    } else {
        return 'kegemukan(obesitas)'; // Status untuk BMI 30 atau lebih
    }
}

// Fungsi untuk mendapatkan deskripsi BMI berdasarkan nilai BMI
function getBMIDescription(bmi) {
    let description = ''; // Inisialisasi variabel deskripsi
    if (bmi < 18.5) {
        description = 'Anda kekurangan berat badan. Anda mungkin perlu menambah berat badan untuk mencapai kesehatan yang optimal.';
    } else if (bmi < 25) {
        description = 'Berat badan Anda berada dalam rentang normal. Selamat, Anda memiliki berat badan ideal!';
    } else if (bmi < 30) {
        description = 'Anda memiliki kelebihan berat badan. Anda mungkin perlu mempertimbangkan untuk menurunkan berat badan untuk meningkatkan kesehatan Anda.';
    } else {
        description = 'Anda mengalami obesitas. Anda mungkin perlu melakukan perubahan signifikan pada pola makan dan gaya hidup untuk meningkatkan kesehatan Anda. Disarankan untuk berkonsultasi dengan profesional medis.';
    }
    return description.replace(/\n/g, ' ').trim(); // Menghapus baris baru dan spasi berlebih dari deskripsi
}

// Menambahkan event listener untuk form submit
document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari submit default
    const height = parseFloat(document.getElementById('height').value); // Ambil dan ubah nilai tinggi menjadi float
    const weight = parseFloat(document.getElementById('weight').value); // Ambil dan ubah nilai berat menjadi float
    const bmi = weight / ((height / 100) ** 2); // Hitung BMI

    const bmiDescription = getBMIDescription(bmi); // Dapatkan deskripsi BMI
    document.getElementById('bmi-description').value = bmiDescription.trim(); // Tampilkan deskripsi di form
});

// Event listener untuk tombol reset, untuk me-reload halaman
const resetButton = document.querySelector('.bg-reset');

resetButton.addEventListener('click', () => {
  location.reload(); // Reload halaman untuk reset form
});
