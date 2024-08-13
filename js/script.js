/**
 * Fungsi untuk menghitung BMI berdasarkan berat badan dan tinggi badan.
 * @param {number} weight - Berat badan dalam kilogram.
 * @param {number} height - Tinggi badan dalam centimeter.
 * @returns {number} - Hasil BMI.
 */
function calculateBMI() {
    // Ambil nilai dari form input
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Konversi ke meter
    const weight = parseFloat(document.getElementById('weight').value);


    // Hitung BMI
    const bmi = weight / (height * height);
    
    // Tentukan kategori BMI
    let category;
    if (bmi < 18.5) {
        category = 'Kekurangan berat badan';
    } else if (bmi < 24.9) {
        category = 'Normal';
    } else if (bmi < 29.9) {
        category = 'Kelebihan berat badan';
    } else {
        category = 'Kegemukan (Obesitas)';
    }

    // Tampilkan hasil
    document.getElementById('bmi-value').textContent = `BMI Anda adalah ${bmi.toFixed(2)}`;
    document.getElementById('bmi-category').textContent = `Kategori: ${category}`;
    document.getElementById('result').classList.remove('hidden');
}
