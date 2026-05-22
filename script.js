let MERITS = {
  // ─── Management / Social Sciences ───
  "Management Sciences": 72.58,
  "Metallurgical Engineering": 66.33,
  "Polymer & Petroleum Engineering": 65.32,
  "Applied Physics": 63.65,
  "Development Studies": 59.22,
  "Economics & Finance": 69.98,
  "English Linguistics": 62.65,
  "Industrial Chemistry": 64.19,
  "Textile Sciences": 63.89,
  "Civil Engineering (Thar Campus)": 62.00,
  "Computer Science (Thar Campus)": 62.00,

  // ─── Engineering / Tech ───
  "Computational Finance": 78.98,
  "Telecommunication Engineering": 76.40,
  "Civil Engineering": 72.34,
  "Textile Engineering": 71.30,
  "Food Engineering": 70.32,
  "Architecture": 69.60,
  "Construction Engineering": 69.56,
  "Petroleum Engineering": 70.20,
  "Urban Engineering": 68.83,
  "Biomedical Engineering": 73.88,
  "Materials Engineering": 68.12,
  "Automotive Engineering": 74.54,

  // ─── CS / IT / Advanced Computing ───
  "Software Engineering": 87.53,
  "Computer Systems Engineering": 85.84,
  "Computer Science & Information Technology": 85.82,

  // ─── Electrical / Mechanical / Core ───
  "Electrical Engineering": 80.02,
  "Electronic Engineering": 80.25,
  "Mechanical Engineering": 78.30,
  "Industrial & Manufacturing Engineering": 77.43,
  "Chemical Engineering": 76.00
};
let Merit;
const XIPercentage = document.getElementById('XI')
const fieldSelector = document.getElementById('fieldSelect')
const meritInput = document.getElementById('merit-input')
const mainCard = document.getElementById('main-card')
const resultCard = document.getElementById('result-card')

fieldSelector.addEventListener('change', e =>{
    Merit = MERITS[fieldSelector.value]
   meritInput.value = Merit
   console.log(fieldSelector.value)
   
})


function CalculateScore(){
    if(XIPercentage.value == "" || meritInput.value == "" ||
        XIPercentage.value == NaN || meritInput.value == NaN
    ) return

    let XiScore = XIPercentage.value
    let y = Merit
    let reqScore;

    reqScore = (5*y - 2*XiScore)/3

    if(reqScore >= 100) document.getElementById('tagline').innerText = "Choro Dunyawi cheezen han."
    document.getElementById('score').innerText = reqScore.toFixed(2)

    mainCard.style.display = "none"
    resultCard.style.display = "flex"
    
}

function Return(){
    Merit = undefined
    console.log(fieldSelector.value)

    resultCard.style.display = "none"
        mainCard.style.display = "flex"
    

}

