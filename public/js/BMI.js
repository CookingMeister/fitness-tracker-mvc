// let heightInches = 4;
// let heightFeet = 5;
// let weightLBS = 165;

document
  .querySelector(".submit-user-btn")
  .addEventListener("click", async function (event) {
    const heightFeet = await document.querySelector("#userHeightFeet").value;
    const heightInches = await document.querySelector("#userHeightInches")
      .value;
    const weightLBS = await document.querySelector("#userWeight").value;

    event.preventDefault();
    console.log(heightFeet);
    console.log(heightInches);
    console.log(weightLBS);
    return heightFeet, heightInches, weightLBS;
  });

function calculateBMI(heightFeet, heightInches, weightLBS) {
  const heightConvertedInches = heightFeet * 12 + heightInches;
  console.log(heightConvertedInches);

  const inchesSquared = heightConvertedInches ** 2;
  console.log(inchesSquared);

  const weightHeightDivision = weightLBS / inchesSquared;
  console.log(weightHeightDivision);

  const BMI = weightHeightDivision * 703;
  console.log(BMI);
}

calculateBMI();
