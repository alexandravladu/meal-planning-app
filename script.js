console.log("running")


//? first parameter = first value (vegi), & second parameter = second value (api key)

async function getRecipeData(diet, cuisine) {
    let theUrl = `https://api.spoonacular.com/recipes/complexSearch?diet=${diet}&cuisine=${cuisine}&apiKey=0c4d5d44095645ea9087a149dd32da6d&includeNutrition=true.`
    console.log(theUrl)
    let response = await fetch(theUrl)

    if(response.status == 200) {
        let apiResult = await response.json();
        console.log(apiResult)

    }


}



getRecipeData("vegan", "chinese");