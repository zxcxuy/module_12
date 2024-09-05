let ref = 'https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyDW3dLsWOl7fhnyiGOeLz9QzB2RqE3zhQU&printType=books&startIndex=0&maxResults=6&langRestrict=en'
const fetchData = () => {
    return fetch('https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyCF-gYg4sX3BxJtFk2lOmd7Dx2Mgnb22sg&printType=books&startIndex=0&maxResults=6&langRestrict=en')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Преобразовать ответ в JSON
      })
      .then(data => { 
        console.log(data); //  Вывести данные в консоль
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  };
// const fetchData = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5")
//         .then((response) => response.json())
//         .then((data) => {
//             console.log()
//         })
//         .catch((error) => {
//             console.error("Error:", error);
//         });
// };  

fetchData();