var cross = document.querySelectorAll(".fa-times")
var heart = document.querySelectorAll(".fa-heart")
var plusButtons = document.querySelectorAll(".plus")
var minusButtons = document.querySelectorAll('.moin')
var somme = document.querySelector('.total')
Array.from(cross).map(el => {
    el.addEventListener("click", () => {
        let qty = parseInt(el.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[3].innerHTML)
        if (el.nextElementSibling.className === 'fas fa-heart red-heart' || qty > 0) {
            alert('impossible de suprimer larticle')

        } else {
            el.parentNode.parentNode.remove()
        }
    })
})
Array.from(heart).map(el => {
    el.addEventListener("click", () => {
        el.classList.toggle('red-heart')
    })
})
var i = 0
Array.from(plusButtons).map(el => {
    el.addEventListener("click", () => {
        el.nextElementSibling.innerHTML++
        var unitPrice = parseInt(el.parentNode.nextElementSibling.innerHTML)

        somme.innerHTML = parseInt(somme.innerHTML) + unitPrice

    })

})
Array.from(minusButtons).map(el => {
    el.addEventListener("click", () => {
        if (el.previousElementSibling.innerHTML === "0") alert("la quantité est toujours posetif")
        else {
            el.previousElementSibling.innerHTML--
            var unitPrice = parseInt(el.parentNode.nextElementSibling.innerHTML)

            somme.innerHTML = parseInt(somme.innerHTML) - unitPrice

        }



    })

})


// parentNode
// nextsibling