//DOM ELEMENTS
const card = document.getElementById('card');
const cardBody = document.getElementById('card-body');
const image = document.getElementById('image');
const title = document.getElementById('title');

//Api request
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
let randomMeal;

//Get data from API
getMeal = async () => {
    const resp = await fetch(apiUrl);
    const respData = await resp.json();
    const meal = respData['meals'][0];
    randomMeal = meal;
    return meal;
}

//Add random meal to MainPage
addRandomMeal = (meal) => {
    image.src = meal['strMealThumb'];
    title.innerText = meal['strMeal'];
}

//On click add meal description
card.addEventListener('click', () => {
    cardBody.innerHTML = `
    <h5 class="card-title">${randomMeal['strMeal']}</h5>
    <p class="card-text">${randomMeal['strInstructions']}</p>
    `;
});
getMeal().then(meal => addRandomMeal(meal));


const searchInput = document.getElementById('search_input');
const searchImg = document.getElementById('search_img');

const searchUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
let searchMeal;

//Get data from API
getSearchMeal = async (search) => {
    const resp = await fetch(searchUrl + search);
    const respData = await resp.json();
    const meal = respData['meals'];
    searchMeal = meal;
    return meal;
}

//search
searchAndDisplay = async (search) => {
    card.innerHTML = '';
    await getSearchMeal(searchInput.value);
    for (let i = 0; i < searchMeal.length; i++) {
        const newCard = document.createElement('div');
        newCard.className = 'card';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = searchMeal[i]['strMealThumb'];

        const body = document.createElement('div');
        body.className = 'card-body';

        const newTitle = document.createElement('h5');
        newTitle.className = 'card-title';
        newTitle.innerText = searchMeal[i]['strMeal'];

        const newDescription = document.createElement('p');
        newDescription.className = 'card-text';


        const br = document.createElement('br');

        const id = searchMeal[i]['idMeal'];
        newCard.setAttribute('id', id);

        newCard.appendChild(img);
        newCard.appendChild(body);
        body.appendChild(newTitle);
        body.appendChild(newDescription);
        card.appendChild(newCard);
        card.appendChild(br);

        newCard.addEventListener('click', () => {
            const apiDesc = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i='
            getMealDesc = async (id) => {
                const resp = await fetch(apiDesc + id);
                const respData = await resp.json();
                console.log(respData['meals'][0]);
                const meal = respData['meals'][0];
                return meal;
            }
            getMealDesc(id).then(meal => {
                newDescription.innerText = meal['strInstructions'];
            });
        });

    }
}

//on enter search
searchInput.addEventListener('keyup', async (e) => {
    if (e.key === 'Enter') {
        await searchAndDisplay(searchInput.value);
    }
});

searchImg.addEventListener('click', async () => {
    await searchAndDisplay(searchInput.value);
});
