"use strict"


function calculateAge() {

    const dayFeild = document.querySelector(`.day_feild`)

    const monthFeild = document.querySelector(`.month_feild`)

    const yearFeild = document.querySelector(`.year_feild`)

    if (!dayFeild.value) {
        return
    } else if (!monthFeild.value) {
        return
    } else if (!yearFeild.value) {
        return
    }


    const yearOfToday = new Date()
    const monthOfToday = new Date()
    const dayOfToday = new Date()


    //RECORD CURRENT DATE
    let currentYear = yearOfToday.getFullYear()
    let currentMonth = monthOfToday.getMonth() + 1
    let currentDay = dayOfToday.getDate()


    //RECORD USER INPUTS
    let userYear = document.querySelector(`.year_feild`).value
    let userMonth = document.querySelector(`.month_feild`).value
    let userDay = document.querySelector(`.day_feild`).value


    if (userYear > currentYear) {
        alert(`Please enter a valid year`)
        return
    }


    
    let resultYear = ""
    if (currentMonth < userMonth) {
        resultYear = (currentYear - userYear) -1
    }else { resultYear = currentYear - userYear} //COMPLETE

    let resultMonth = ""

    if (userYear != currentYear) {
        resultMonth = (currentYear - (currentYear - 1)) * 12 + (currentMonth - userMonth) //COMPLETE
    } else {
    resultMonth = (currentMonth - userMonth) //COMPLETE
    }

    let resultDay = (currentDay - userDay) //COMPLETE

    //APPLY HTML
    const resultYearElement = document.querySelector(`.result_years`)
    const resultMonthElement = document.querySelector(`.result_months`)
    const resultDaysElement = document.querySelector(`.result_days`)

    //APPLY HTML
    resultYearElement.innerHTML = resultYear
    resultMonthElement.innerHTML = resultMonth
    resultDaysElement.innerHTML = resultDay

    //STOP PAGE RELOAD AFTER SUBMIT
    const form = document.querySelector(`form`);

    form.addEventListener(`submit`, function(event) {
        event.preventDefault()
    })

}

