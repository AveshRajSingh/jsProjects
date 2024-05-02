let BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies"
let dropDown = document.querySelectorAll(".dropDown select")
const btn = document.querySelector("button")
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const msg = document.querySelector(".msg")
let amount = document.querySelector(".amount input")
 

for (let select of dropDown) {
    for (currCode in countryList) {
        let newOption = document.createElement("option")
        newOption.innerText = currCode
        newOption.value = currCode
        select.append(newOption)
        if (select.name === "From" && currCode === "USD") {
            newOption.selected = "selected"
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected"
        }

    }
    select.addEventListener("change", (evnt) => {
        updateFlag(evnt.target)
    })
}
btn.addEventListener('click', async (evt) => {
    evt.preventDefault()
    let amtVal = amount.value
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }
    // console.log(fromCurr.value, toCurr.value)
    let URl = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`
    let response = await fetch(URl);
    let data = await response.json()
    let rate = data[fromCurr.value.toLowerCase()]
    let value = rate[toCurr.value.toLowerCase()]
    let finalAmt = amtVal * Math.floor(value)
    console.log(finalAmt)

    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`
})


function updateFlag(element) {
    let currCode = element.value
   
    let countryCode = countryList[currCode]
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newSrc;
}
