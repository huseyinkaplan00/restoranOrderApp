import { menuArray } from "./data.js";

const container = document.querySelector(".container")
const popup = document.querySelector(".card-popup")
const allInputs = document.querySelectorAll("input")
const constForm = document.getElementById("formOne")
const orderAmount = document.querySelector(".order-amount")
const orderFinish = document.querySelector(".order-finish")
const pizza = document.querySelector(".pizza")
const menuSection = document.querySelector(".menu")
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


    else if (e.target.dataset.zero) {
        pizzAddBTN()
    }


    else if (e.target.dataset.one) {
        hamburgerAddBTN()
    }


    else if (e.target.dataset.two) {
        beerAddBTN()
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








function pizzAddBTN() {

    console.log("tik1")
    let pizzaHTML = `
    
            <div class="order-titles">
                    <h1 class="pizza">Pizza</h1>
                    <p class="remove">remove</p>
                    <div class="price">
                        <h2>$14</h2>
                    </div>
            </div>
    
    
    `

}

function hamburgerAddBTN() {
    console.log("tik2")
    let hamburgerHTML = `
    
    <div class="order-titles">
                    <h1>Hamburger</h1>
                    <p class="remove">remove</p>
                    <div class="price">
                        <h2>$12</h2>
                    </div>

     </div>


`



}



function beerAddBTN() {
    console.log("tik3")
    let beerHTML = `
        <div class="order-titles">
            <h1>Beer</h1>
            <p class="remove">remove</p>
            <div class="price">
                <h2>$12</h2>
            </div>

        </div>
    `



}


function render() {
    let htmlCont = ``

    menuArray.forEach(function (content) {
        if (content.id === "zero") {
            console.log(content.name)
        }

        else if (content.id === 1) {

            console.log(content.name)

        }

        else if (content.id === 2) {

            console.log(content.name)

        }

        htmlCont += `
        
       

                <div class="item">
                    <img src="${content.img}" alt="">
                    <div class="order-detail">
                        <h1>${content.name}</h1>
                        <p>${content.ingredients}</p>
                        <h2>${content.price}$</h2>
                    </div>
                    <div class="plus-btn" id="${content.id}" data-${content.id}="${content.id}">
                        +
                    </div>

                </div>
                


            

        
        `




    })

    return htmlCont


}

function renderHTML() {
    menuSection.innerHTML = render()

}

renderHTML()