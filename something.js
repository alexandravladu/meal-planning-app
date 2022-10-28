const mainSection = document.querySelector("section")
const input = document.createElement("input")
const body = document.querySelector("body")
const button = document.querySelector("button")
let list = [11111, 12100, 33310]

body.append(input)
input.classList.add("block")


//this string will allow us to manage whatever the user inputs inside the input if they havnt inserted space yet
let string1 = ""
//string2 is what we will manage after the user has inserted a space
let string2 = ""
//userSpaced is the boolean that will tell us if the user has spaced or not
userSpaced = false


input.addEventListener("input", (enteredText) => {
    //This is to check whether the user spaced or not
    //this checks every time the user inputs something
    if (enteredText.data == " ")  {
        //If the user has inserted a space userSpaced will be true for the rest of the lines
        userSpaced = true
    }

    //this if statement checks if the user backspaced and they havnt pressed space yet so it can then remove the last letter of string1
    //this checks every time the user inputs something
    if (enteredText.inputType == "deleteContentBackward" && userSpaced == false) {
        string1 = string1.slice(0, -1)
        //this if statement checks if the user harsh backspaced and they havnt pressed space yet
        //this checks every time the user inputs something
    }else if(enteredText.inputType == "deleteSoftLineBackward" && userSpaced == false) {
        string1 = ""
        //if they user presses any key and havnt pressed space whatever key they pressed will be inserted into string1
        
    } else if (userSpaced == false) {
        string1 += enteredText.data
    }

    //this if statement checks if the user backspaced and they HAVE pressed space so it can then remove the last letter of string2
    //this checks every time the user inputs something
    if (enteredText.inputType == "deleteContentBackward") {
        string2 = string2.slice(0, -1)
        //Same for here but harsh backspace
    }else if(enteredText.inputType == "deleteSoftLineBackward") {
        string2 = ""
        //Copies to whatever the user inputted inside string2
    } else if (userSpaced === true) {
        string2 += enteredText.data
    
    }
    //this checks if the string has a space in it
    if(string2.indexOf(" ") == 0) {
        //Makes userSpaced equal to true because the user has spaced
        userSpaced = true;
        console.log("There is a space")
    } else {
        //If there isnt a space in string2 userSpaced is then set back to false
        userSpaced = false;
        console.log("There is not a space")
    }
    console.log(string1)
    console.log("-----")
    console.log(string2)                         
})

button.addEventListener("click", () => {
    async function returnAll(diet, cuisine) {                                                                 //idk what we would put for cuisine. Do we need 2?
        mainSection.innerHTML = ""
        //fetches the search of whatever diet and cuisine is
        let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=${diet}&cuisine=${cuisine}&apiKey=b2d0a2fd5e6c48b1a41fef1086ed3a7d&includeNutrition=true`)
        data = await response.json()
        results = data.results
        let a = 0
        //"results" is a array which returns objects which we will be messing with the following forEach function/method
        results.forEach(element => {
            if (a <= 2) {
            // creating elements
            let image = document.createElement("img")
            let div = document.createElement("div")
            let h1 = document.createElement("h1")
            let p = document.createElement("p")
            // giving elements their text and sources
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