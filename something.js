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

let string1 = ""
let string2 = ""

// mainSection.append(img1, img2, img3)

input.addEventListener("input", (enteredText) => {
    
    if (enteredText.data == " ")  {
        userSpaced = true
    } 
    if (enteredText.inputType == "deleteContentBackward" && userSpaced == false) {
        string1 = string1.slice(0, -1)
    }else if(enteredText.inputType == "deleteSoftLineBackward" && userSpaced == false) {
        string1 = ""
    } else if (userSpaced == false) {
        string1 += enteredText.data
    }
    

    if (enteredText.inputType == "deleteContentBackward") {
        string2 = string2.slice(0, -1)
    }else if(enteredText.inputType == "deleteSoftLineBackward") {
        string2 = ""
    } else if (userSpaced === true) {
        string2 += enteredText.data
    
    }

    

    if(string2.indexOf(" ") == 0) {
        
        userSpaced = true;
        console.log("There is a space")
    } else {
        userSpaced = false;
        console.log("There is not a space")
    }

   console.log(string2.indexOf(" "));

    console.log(string1)
    console.log("-----")
    console.log(string2)
    



    
    //Make it not add to string when you have erased everything
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
    returnAll(string1, string2)
})





// getRecipeData("vegan", "chinese")