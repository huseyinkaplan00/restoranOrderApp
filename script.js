import { menuArray } from "./data.js";


const popup = document.querySelector(".card-popup")
const popupContainer = document.querySelector(".card-container")
const submitForm = document.getElementById("formOne")
const allInputs = document.querySelectorAll("input")
const orderAmount = document.querySelector(".order-amount")
const orderFinish = document.querySelector(".order-finish")
const pizza = document.querySelector(".pizza")

const orderItem = []

document.addEventListener("submit", function (e) {
    if (e.target.id === "formOne") {
        const submitFormData = new FormData(submitForm)
        const name = submitFormData.get("fullName")
        e.preventDefault()

        setTimeout(() => {
            popupContainer.innerHTML = `

            <div class="svgFile">

            <svg xmlns="http://www.w3.org/2000/svg" width="460" height="100" viewBox="0 0 120 30" fill="#000">
                <circle cx="15" cy="15" r="15">
                    <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15"
                        calcMode="linear" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1"
                        calcMode="linear" repeatCount="indefinite" />
                </circle>
                <circle cx="60" cy="15" r="9" fill-opacity="0.3">
                    <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9"
                        calcMode="linear" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s"
                        values=".5;1;.5" calcMode="linear" repeatCount="indefinite" />
                </circle>
                <circle cx="105" cy="15" r="15">
                    <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15"
                        calcMode="linear" repeatCount="indefinite" />
                    <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1"
                        calcMode="linear" repeatCount="indefinite" />
                </circle>
            </svg>
            <p>
            your order is being created, please wait
            </p>
        </div> 
            
            
            `
        }, 100);


        setTimeout(() => {
            popup.classList.add("d-none")
            orderAmount.classList.add("d-none")
            orderFinish.classList.remove("d-none")
        }, 2000);


        orderFinish.innerHTML = `
        
        <div class="order-finish">
                <p>Thanks, ${name}! Your order is on its way!</p>
            </div>
        
        
        `

    }
})


document.addEventListener("click", function (e) {

    const isClickedPopUp = popup.contains(e.target)



    if (e.target.id === "complete-btn") {

        completeBTN()

    }


    else if (e.target.dataset.add) {

        addClick(e.target.dataset.add)

    }

    else if (e.target.id === "close-btn") {

        closeBTN()

    }




    else if (!isClickedPopUp) {
        popup.style.display = "none"
    }

})



function completeBTN() {
    return popup.style.display = "flex"
}



function closeBTN() {
    return popup.style.display = "none"
}



function addClick(itemID) {

    const itemObj = menuArray.filter(function (selectedItem) {
        return selectedItem.id == itemID
    })[0]

    itemObj.orderCount++
    itemObj.price++
    itemObj.sum = itemObj.price * itemObj.orderCount

    if (!orderItem.includes(itemObj)) {

        orderItem.push(itemObj)

    }

    recap()
}



function recap() {
    let orderRecap = ``


    orderAmount.classList.remove("d-none")

    orderItem.forEach(function (data) {

        orderRecap += `
        
        <div class="order-titles">
                        <h1 class="pizza">${data.name}</h1>
                        <p class="remove">remove</p>
                        <div class="price">
                        <span>${data.orderCount}</span>    
                        <h2>$${data.price}</h2>
                            
                        </div>
                    </div>
`



    })


    document.querySelector(".orderDet").innerHTML = orderRecap

}



function render() {
    let htmlCont = ``
    menuArray.forEach(function (content) {

        htmlCont += `

                <div class="item">
                    <img src="${content.img}" alt="">
                    <div class="order-detail">
                        <h1>${content.name}</h1>
                        <p>${content.ingredients}</p>
                        <h2>${content.price}$</h2>
                    </div>
                    <button type="button" class="plus-btn"
                    data-add="${content.id}">
                        +
                    </button>

                </div>
        `




    })

    return htmlCont


}

function renderHTML() {
    document.querySelector(".menu").innerHTML = render()

}

renderHTML()



