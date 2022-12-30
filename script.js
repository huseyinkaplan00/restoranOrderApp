import { menuArray } from "./data.js";


const popup = document.querySelector(".card-popup")
const allInputs = document.querySelectorAll("input")
const orderAmount = document.querySelector(".order-amount")
const orderFinish = document.querySelector(".order-finish")
const pizza = document.querySelector(".pizza")
const menuSection = document.querySelector(".menu")


document.addEventListener("submit", function (e) {
    if (e.target.id === "formOne") {
        e.preventDefault()
        console.log("tikladi")
        popup.classList.add("d-none")
        orderAmount.classList.add("d-none")
        orderFinish.classList.remove("d-none")
    }
})


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
        pizzAddBTN(e.target.dataset.zero)
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








function pizzAddBTN(item) {

    const targetObj = menuArray.filter(function (piz) {
        return item
    })[0]

    targetObj.click += 14



    console.log(targetObj.click)
    renderHTML()

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
    let mainCont = ``
    menuArray.forEach(function (content) {
        if (content.id === "zero") {

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
    mainCont += ``


    return htmlCont


}

function renderHTML() {
    menuSection.innerHTML = render()

}

renderHTML()