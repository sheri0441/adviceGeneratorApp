const btn = document.querySelector(`.btn`);
const adviceNum = document.querySelector(`#number`);
const adbviceBox =document.querySelector(`#advice`);

async function giveAdvice ()  {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    const advice = await data.slip.advice;
    const adviceNumber = await data.slip.id;
    adviceNum.textContent = adviceNumber;
    adbviceBox.textContent = advice;
}


// Promise.resolve(fetch("https://api.adviceslip.com/advice")
// .then(res => res.json()).then(data => console.log(data.slip.advice)))

// const giveAdvice = () => {
//     var advice = JSON.parse(fetch("https://api.adviceslip.com/advice")
//             .then(res => res.json()));
// }


btn.addEventListener("click",  giveAdvice);
giveAdvice();