const mainSection = document.querySelector("section")

async function getRecipeData(diet, cuisine) {
    let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?diet=${diet}&cuisine=${cuisine}&apiKey=b2d0a2fd5e6c48b1a41fef1086ed3a7d&includeNutrition=true`)
        data = await response.json()
        results = data.results
        
        results.forEach(element => {
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
        });
}

getRecipeData("vegan", "chinese")