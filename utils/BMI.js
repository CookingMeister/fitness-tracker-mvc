// const heightFeet = document.querySelector().val();
// const heightInches = document.querySelector().val();
// const weightLBS = document.querySelector().val();

let heightInches = 4;
let heightFeet = 5;
let weightLBS = 165;

function calculateBMI() {
    const heightConvertedInches = heightFeet * 12 + heightInches;
    console.log(heightConvertedInches);

    const inchesSquared = heightConvertedInches ** 2;
    console.log(inchesSquared);

    const weightHeightDivision = weightLBS / inchesSquared;
    console.log(weightHeightDivision);

    const BMI = weightHeightDivision * 703;
    console.log(BMI);
};

calculateBMI();
