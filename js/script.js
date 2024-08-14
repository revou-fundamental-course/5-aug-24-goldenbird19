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
        return 'Underweight';
    } else if (bmi < 25) {
        return 'Normal weight';
    } else if (bmi < 30) {
        return 'Overweight';
    } else {
        return 'Obese';
    }
}

function getBMIDescription(bmi) {
    if (bmi < 18.5) {
        return 'You are underweight. You may need to gain some weight.';
    } else if (bmi < 25) {
        return 'You are normal weight. Congratulations!';
    } else if (bmi < 30) {
        return 'You are overweight. You may need to lose some weight.';
    } else {
        return 'You are obese. You may need to lose a significant amount of weight.';
    }
}
