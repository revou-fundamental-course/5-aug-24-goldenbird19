function calculateBMI(event) {
    event.preventDefault(); // Mencegah form di-submit
    console.log("calculateBMI dipanggil"); // Debugging

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    console.log("Weight:", weight);
    console.log("Height:", height);

    if (weight && height) {
        const bmi = calculateBMIValue(weight, height);
        const weightStatus = getWeightStatus(bmi);
        const bmiDescription = getBMIDescription(bmi);

        console.log("BMI:", bmi);
        console.log("Weight Status:", weightStatus);
        console.log("BMI Description:", bmiDescription);

        // Menampilkan hasil ke form
        document.getElementById('bmi-value').value = bmi.toFixed(2);
        document.getElementById('weight-status').value = weightStatus;
        document.getElementById('bmi-description').value = bmiDescription;
    } else {
        alert('Silakan masukkan nilai berat badan dan tinggi badan!');
    }
}


function calculateBMIValue(weight, height) {
    return weight / Math.pow(height / 100, 2);
}

function getWeightStatus(bmi) {
    if (bmi < 18.5) {
        return 'kekurangan berat badan';
    } else if (bmi < 25) {
        return 'Normal(ideal)';
    } else if (bmi < 30) {
        return 'kelebihan berat badan';
    } else {
        return 'kegemukan(obesitas)';
    }
}

function getBMIDescription(bmi) {
    let description = '';
    if (bmi < 18.5) {
      description = 'Anda kekurangan berat badan. Anda mungkin perlu menambah berat badan untuk mencapai kesehatan yang optimal.';
    } else if (bmi < 25) {
      description = 'Berat badan Anda berada dalam rentang normal. Selamat, Anda memiliki berat badan ideal!';
    } else if (bmi < 30) {
      description = 'Anda memiliki kelebihan berat badan. Anda mungkin perlu mempertimbangkan untuk menurunkan berat badan untuk meningkatkan kesehatan Anda.';
    } else {
      description = 'Anda mengalami obesitas. Anda mungkin perlu melakukan perubahan signifikan pada pola makan dan gaya hidup untuk meningkatkan kesehatan Anda. Disarankan untuk berkonsultasi dengan profesional medis.';
    }
    return description.replace(/\n/g, ' ').trim();
  }

document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const bmi = weight / ((height / 100) ** 2);

    const bmiDescription = getBMIDescription(bmi);
    document.getElementById('bmi-description').value = bmiDescription.trim();
});


const resetButton = document.querySelector('.bg-reset');

resetButton.addEventListener('click', () => {
  location.reload();
});