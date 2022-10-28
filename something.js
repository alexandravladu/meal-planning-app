const mainSection = document.querySelector("section")
const input = document.createElement("input")
const body = document.querySelector("body")
const button = document.querySelector("button")
let list = [11111, 12100, 33310]

body.append(input)
input.classList.add("block")

// input.addEventListener("input", (whateEverTheInputIs) => {
//     console.log(whateEverTheInputIs)
// https://picsum.photos/200/300

// const img1 = document.createElement("img")
// const img2 = document.createElement("img")
// const img3 = document.createElement("img")

// img1.setAttribute("id", "image-1")
// img2.setAttribute("id", "image-2")
// img3.setAttribute("id", "image-3")

// img1.src = "https://picsum.photos/201/300"
// img2.src = "https://picsum.photos/202/300"
// img3.src = "https://picsum.photos/203/300"

userSpaced = false

let string = ""
let string2 = ""

// mainSection.append(img1, img2, img3)

input.addEventListener("input", (enteredText) => {
    if (enteredText.inputType == "deleteContentBackward") {
        string = string.slice(0, -1)
    }else if(enteredText.inputType == "deleteSoftLineBackward") {
        string = ""
    } else if (userSpaced == false) {
        string += enteredText.data
    }

    if (enteredText.data == " ")  {
        userSpaced = true
    }
    if (enteredText.inputType == "deleteContentBackward") {
        string2 = string2.slice(0, -1)
    }else if(enteredText.inputType == "deleteSoftLineBackward") {
        string2 = ""
    } else if (userSpaced === true) {
        string2 += enteredText.data
    }
    console.log(string, string2, userSpaced)
    //Make it not add to string2 when you have erased everything
    // if (mainSection.getElementById("#image-1") && mainSection.getElementById("#image-2") && mainSection.getElementById("image-3")) {

    // } else {
        
    // }

    // list.forEach(element => {
    //     if (string == element) {

    //     }
    // })

    //Imagine we had a button here that clicked that ran the next part idk give me more ideas my brain is fried
    //This is so there won't be too many requests at once
    //Also might add another listener incase the user inputs "Enter"                         
})

button.addEventListener("click", () => {
    async function returnAll(diet, cuisine) {                                                                 //idk what we would put for cuisine. Do we need 2?
        mainSection.innerHTML = ""
        let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=${diet}&cuisine=${cuisine}&apiKey=b2d0a2fd5e6c48b1a41fef1086ed3a7d&includeNutrition=true`)
        data = await response.json()
        results = data.results
        let a = 0
        console.log(results)
        results.forEach(element => {
            if (a <= 2) {
                // creating elements
            let image = document.createElement("img")
            let div = document.createElement("div")
            let h1 = document.createElement("h1")
            let p = document.createElement("p")
            // giving elements their tet and sources
            h1.innerText = element.title
            p.innerText = element.id
            image.src = element.image
            //Adding evertyhing to the "cards"
            div.append(h1, image, p)
            mainSection.append(div)
            list.push(element.id)
            
            a = a + 1
            }
            
        })
    }
    returnAll(string, "italian")
})





// getRecipeData("vegan", "chinese")