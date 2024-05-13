function searchDestination () {
    const userInput = document.getElementById('searchDestinationField').value.toLowerCase();
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = "";

    let places = [];

    fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
        switch (userInput) {
        case "beach":
        case "beaches": 
            for (let i = 0;i < data.beaches.length;i++){
                places.push(data.beaches[i].name);

                resultContainer.innerHTML += `<img src="${data.beaches[i].imageUrl}"></img><br>
                                              <h2>${data.beaches[i].name}</h2>
                                              <p>${data.beaches[i].description}</p>`;

                resultContainer.style.right = "10%";
            }
                console.log(data);
        break;
        case "temples":
        case "temple" : 
            for (let i = 0;i < data.temples.length;i++){
            places.push(data.temples[i].name);
            
            resultContainer.innerHTML += `<img src="${data.temples[i].imageUrl}"></img><br>
                                              <h2>${data.temples[i].name}</h2>
                                              <p>${data.temples[i].description}</p>`;

            resultContainer.style.right = "10%";
            }
            console.log(data);
        break;
        case "countries":
        case "country" : 
        for (let i = 0;i < data.countries.length;i++){
            let recommandedCountries = data.countries[i];     
            for (let y = 0; y < recommandedCountries.cities.length;y++){
                let recommandedCities = recommandedCountries.cities[y];
                    console.log(recommandedCities);
                resultContainer.innerHTML += `<img src="${recommandedCities.imageUrl}"></img><br>
                <h2>${recommandedCities.name}</h2>
                <p>${recommandedCities.description}</p>`;        
                resultContainer.style.right = "10%";
        }
        }   ;
        break;
        default:
            console.log("no match, sorry");       
        }
    })        
    .catch(error => console.log(error));    
}

const searchButton = document.getElementById('searchButton');
const resetButton = document.getElementById('resetButton');

searchButton.addEventListener('click', ()=>{
    searchButton.preventdefault;
    searchDestination();    
});


// fetch("travel_recommendation_api.json")
//     .then(response => response.json())
//     .then(data => {
// for (let i = 0;i < data.countries.length;i++){
//     let recommandedCountries = data.countries[i]     
//     // console.log(data.countries[i]);
//     for (let y = 0; y < recommandedCountries.cities.length;y++){
//         let recommandedCities = recommandedCountries.cities[y];
//             console.log(recommandedCities);
//         resultContainer.innerHTML += `<img src="${recommandedCities.imageUrl}"></img><br>
//         <h2>${recommandedCities.name}</h2>
//         <p>${recommandedCities.description}</p>`;

// resultContainer.style.right = "10%";
// }
//     }
//     }
// );