// https://api.weatherapi.com/v1/current.json?key=14ef04eb0f6344f4a58193620250809&q=Bangalore&aqi=no


const temperatureField = document.querySelector(".temp p");
const locationField = document.querySelector(".time_location p");
const dateandTimefield = document.querySelector(".time_location p");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");


form.addEventListener("submit", searchForLocation)

let target = 'Bangalore';

const fetchResults = async(targetlocation) =>{
    let url = `https://api.weatherapi.com/v1/current.json?key=14ef04eb0f6344f4a58193620250809&q=${targetlocation}&aqi=no`;

    const res = await fetch(url);

    const data  = await res.json();

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    updateDetails(temp,locationName,time,condition);
};

function updateDetails(temp,locationName,time,condition){

    temperatureField.innerText = `${temp}°C`;
    locationField.innerText = locationName;
    dateandTimefield.innerText = time;
    conditionField.innerText = condition;
}


function searchForLocation(e)
{
    e.preventDefault();

    target = searchField.value;

    fetchResults(target);
}


fetchResults(target);
