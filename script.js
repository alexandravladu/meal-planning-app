console.log("running")

const searchButton = document.getElementById('#search-button-d')


//? first parameter = first value (vegi), & second parameter = second value (api key)

async function getRecipeData(diet, cuisine, minCalories, maxCalories) {
    let theUrl = `https://api.spoonacular.com/recipes/complexSearch?diet=${diet}&cuisine=${cuisine}&minCalories=${minCalories}&maxCalories=${maxCalories}&apiKey=0c4d5d44095645ea9087a149dd32da6d&includeNutrition=true.`
    console.log(theUrl)
    let response = await fetch(theUrl)

    if(response.status == 200) {
        let apiResult = await response.json();

        console.log(apiResult)
        
        // let imageUrl = apiResult.results[0].image;

        // let idNum = apiResult.results[0].id;


    }

}






    getRecipeData("vegan", "chinese", 100, 800);

    async function returnAll(diet, cuisine, minCalories, maxCalories) {
        let theUrl = `https://api.spoonacular.com/recipes/complexSearch?diet=${diet}&cuisine=${cuisine}&minCalories=${minCalories}&maxCalories=${maxCalories}&apiKey=0c4d5d44095645ea9087a149dd32da6d&includeNutrition=true.`
        let response = await fetch(theUrl)

        if(response.status == 200) {
                   
            console.log("test")

            let apiResult = await response.json();

            for(i = 0; i < apiResult.results.length; i++) {

                var div = document.createElement('div')
        p = document.createElement("p")
                p.innerHTML = apiResult.results[i].title

                        p2 = document.createElement("p")
                p2.innerHTML = apiResult.results[i].id

                const img = document.createElement("img")
                img.src = apiResult.results[i].image

                div.append(p, img, p2)
            
            }

        }

}

returnAll("vegan", "italian", 100, 800)


//Might need later
                // let title = apiResult.results[i].title;
                // console.log(title)
           
                // let imageUrl = apiResult.results[i].image;
                // console.log(imageUrl)

                // let idNum = apiResult.results[i].id;
                // console.log(idNum)






   