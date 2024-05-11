const userInput = document.getElementById('searchDestinationField').value.tolowercase;

function searchDestination () {
    let places = [];

    fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
        switch (userInput) {
        case "beach" : 
            for (let i = 0;i < data.beaches.length;i++){
            places.push(data.beaches[i].name);}
        break;
        case "temples" || "temple" : 
            for (let i = 0;i < data.temples.length;i++){
            places.push(data.temples[i].name);}
        break;
        case "countries" || "country" : 
            for (let i = 0;i < data.countries.length;i++){
            places.push(data.countries[i].name);}
        break;
        default:
            console.log("no match, sorry")       
        }})        
    .catch(error => console.log(error));

    console.log(places)
}

const searchButton = document.getElementById('searchButton');
const resetButton = document.getElementById('resetButton');

searchButton.addEventListener('click', ()=>{
    searchButton.preventdefault;
    searchDestination();    
})
