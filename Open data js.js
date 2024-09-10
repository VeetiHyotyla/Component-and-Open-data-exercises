
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                if (data.meals) {
                    displayRecipes(data.meals);
                } else {
                    searchResults.innerHTML = 'No recipes found.';
                }
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
            });
    } else {
        alert('Please enter a dish name.');
    }
});

function displayRecipes(recipes) {
    searchResults.innerHTML = '';  
    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        
        const ingredientsList = createIngredientsList(recipe);

        recipeDiv.innerHTML = `
            <h3>${recipe.strMeal}</h3>
            <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
            <p><strong>Category:</strong> ${recipe.strCategory}</p>
            <p><strong>Cuisine:</strong> ${recipe.strArea}</p>
            <h4>Ingredients:</h4>
            <ul>${ingredientsList}</ul>
            <h4>Instructions:</h4>
            <p>${recipe.strInstructions}</p>
        `;

        searchResults.appendChild(recipeDiv);
    });
}

function createIngredientsList(recipe) {
    let ingredients = '';
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient) {
            ingredients += `<li>${measure} ${ingredient}</li>`;
        }
    }
    return ingredients;
}
