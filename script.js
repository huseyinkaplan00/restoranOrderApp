import { menuArray } from "./data.js";

const container = document.querySelector(".container")
const popup = document.querySelector(".card-popup")
const allInputs = document.querySelectorAll("input")
const constForm = document.getElementById("formOne")
const orderAmount = document.querySelector(".order-amount")
const orderFinish = document.querySelector(".order-finish")


document.addEventListener("click", function (e) {

    const isClickedPopUp = popup.contains(e.target)

    if (e.target.id === "complete-btn") {

        completeBTN()

    }



    else if (e.target.id === "submitInBtn") {

        submitBTN()
    }

    else if (e.target.id === "close-btn") {

        closeBTN()

    }


    else if (e.target.dataset.plusOne) {
        console.log("tikladi btn 1 ")
    }


    else if (e.target.dataset.plusTwo) {
        console.log("tikladi btn 2 +")
    }


    else if (e.target.dataset.plusThree) {
        console.log("tikladi 3 btn.")
    }


    else if (!isClickedPopUp) {
        popup.style.display = "none"
    }





})

function completeBTN() {
    return popup.style.display = "flex"
}


function submitBTN() {

}


function closeBTN() {
    return popup.style.display = "none"
}






