const searchButton = document.getElementById('searchButton');
const resetButton = document.getElementById('resetButton');

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

                resultContainer.innerHTML += `<div class="destinationContainer">
                                              <img src="${data.beaches[i].imageUrl}"></img><br>
                                              <h2>${data.beaches[i].name}</h2>
                                              <p>${data.beaches[i].description}</p>
                                              <button style="margin:5px;width:100px;background:navy;border-radius:5px;border:solid,white">Book now</button>
                                              </div>`;

                resultContainer.style.right = "10%";
                resultContainer.style.display = "block";
            }
                console.log(data);
        break;
        case "temples":
        case "temple" : 
            for (let i = 0;i < data.temples.length;i++){
            places.push(data.temples[i].name);
            
            resultContainer.innerHTML += `<div class="destinationContainer">
            <img src="${data.temples[i].imageUrl}"></img><br>
            <h2>${data.temples[i].name}</h2>
            <p>${data.temples[i].description}</p>
            <button style="margin:5px;width:100px;background:navy;border-radius:5px;border:solid,white">Book now</button>
            </div>`;
            
resultContainer.style.right = "10%";
resultContainer.style.display = "block";

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
             
                resultContainer.innerHTML += `<div class="destinationContainer">
            <img src="${recommandedCities.imageUrl}"></img><br>
            <h2>${recommandedCities.name}</h2>
            <p>${recommandedCities.description}</p>
            <button style="margin:5px;width:100px;background:navy;border-radius:5px;border:solid,white">Book now</button>
            </div>`;            

resultContainer.style.right = "10%";
resultContainer.style.display = "block";
        }
        }   ;
        break;
        default:
            console.log("no match, sorry");  
            resultContainer.innerHTML += `<div class="noMatchContainer">
            <h2>No match, sorry</h2>
            </div>`;      
            resultContainer.style.right = "10%";
            resultContainer.style.display = "block";            
        }
    })        
    .catch(error => console.log(error));    
}



searchButton.addEventListener('click', ()=>{
    searchButton.preventdefault;
    searchDestination();    
});

resetButton.addEventListener('click', ()=>{
    resetButton.preventdefault;
    resultContainer.innerHTML = "";
    resultContainer.style.display = "none";

});
