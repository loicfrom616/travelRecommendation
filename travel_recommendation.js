fetch("travel_recommendation_api.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));