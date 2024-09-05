const btnArchitecture = document.querySelectorAll('.nav__list_item_link')[0];
const btnArtFashion = document.querySelectorAll('.nav__list_item_link')[1];
const btnBiography = document.querySelectorAll('.nav__list_item_link')[2];
const btnBusiness = document.querySelectorAll('.nav__list_item_link')[3];
const btnCraftsHobbies = document.querySelectorAll('.nav__list_item_link')[4];
const btnDrama = document.querySelectorAll('.nav__list_item_link')[5];
const btnFiction = document.querySelectorAll('.nav__list_item_link')[6];
const btnFoodDrink = document.querySelectorAll('.nav__list_item_link')[7];
const btnHealthWellbeing = document.querySelectorAll('.nav__list_item_link')[8];
const btnHistoryPolitics = document.querySelectorAll('.nav__list_item_link')[9];
const btnHumor = document.querySelectorAll('.nav__list_item_link')[10];
const btnPoetry = document.querySelectorAll('.nav__list_item_link')[11];
const btnPsychology = document.querySelectorAll('.nav__list_item_link')[12];
const btnScience = document.querySelectorAll('.nav__list_item_link')[13];
const btnTechnology = document.querySelectorAll('.nav__list_item_link')[14];
const btnTravelMaps = document.querySelectorAll('.nav__list_item_link')[15];
let ref = 'https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=AIzaSyDW3dLsWOl7fhnyiGOeLz9QzB2RqE3zhQU&printType=books&startIndex=0&maxResults=6&langRestrict=en';

let fetchData = async () => {
    try {
        const response = await fetch(
            'https://www.googleapis.com/books/v1/volumes?q="subject:Architecture"&key=AIzaSyCF-gYg4sX3BxJtFk2lOmd7Dx2Mgnb22sg&printType=books&startIndex=0&maxResults=6&langRestrict=en'
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    } catch (error) {
        console.error("Fetch error:", error);
    }
};
const onloadFunction = (data) => {
    const books = data.items;
    if(books.length === 0){
        console.log('No books found');
        return;
        //!11111 надо сделать другой модуль
        //! для запроса этот оставить 
        //! для создания элементов другой
    }

}
document.addEventListener("DOMContentLoaded", function() {
    onloadFunction(response);
  });
  