fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => {
        let places = [];

        for (let i = 0;i < data.beaches.length;i++){
            places.push(data.beaches[i].name);
            console.log(places);        
        }
        for (let y = 0;y < data.countries.length;y++){
            places.push(data.countries[y].name);
            console.log(places);        
        }
        for (let x = 0;x < data.temples.length;x++){
            places.push(data.temples[x].name);
            console.log(places);        
        }
        console.log(data)
         }
        )        
    .catch(error => console.log(error));

const searchButton = document.getElementById('searchButton');
const resetButton = document.getElementById('resetButton');

searchButton.addEventListener('click', (e)=>{
    searchButton.preventdefault;
    ;
    
})

const searchClick = function () {

};