
function searchDestination () {
    const userInput = document.getElementById('searchDestinationField').value.toLowerCase();
    const resultContainer = document.getElementById('resultContainer');

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
                                              <h2>${data.beaches[i].name}</h2>`;

                resultContainer.style.right = "10%";

                // displayResult(data.beaches[i].imageUrl,data.beaches[i].name);
            }

                console.log(data);
        break;
        case "temples":
        case "temple" : 
            for (let y = 0;y < data.temples.length;y++){
            places.push(data.temples[y].name);}
            console.log(temples)
        break;
        case "countries":
        case "country" : 
            for (let u = 0;u < data.countries.length;u++){
            places.push(data.countries[u].name);}
        break;
        default:
            console.log("no match, sorry")       
        }})        
    .catch(error => console.log(error));

}

const searchButton = document.getElementById('searchButton');
const resetButton = document.getElementById('resetButton');

searchButton.addEventListener('click', ()=>{
    searchButton.preventdefault;
    searchDestination();    
})

const displayResult = function (imageSrc,recommandationName) {
    const resultContainer = document.getElementById('resultContainer');
        
    const showCase =  document.createElement('div');
    showCase.className = 'displayResult';
    resultContainer.appendChild(showCase);

    const showImage = document.createElement('img');
    showImage.className = 'displayImage';
    showCase.appendChild(showImage);
    showImage.setAttribute('src',imageSrc);

    const showName = document.createElement('h1');
    showName.className = 'displayName';
    showCase.appendChild(showName);
    showName.innerText = recommandationName;

    const fog =  document.createElement('div');
    fog.id = 'fog';
    document.body.appendChild(fog);

 
  };