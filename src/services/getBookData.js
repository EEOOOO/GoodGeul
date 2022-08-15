let myHeaders = new Headers();
myHeaders.append("X-Naver-Client-Id", "eKIWGxoqJ9SKUS_Ixlzo");
myHeaders.append("X-Naver-Client-Secret", "uPRAUzrY1o");

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

let bookTitle = '울트라러닝'

fetch(`https://openapi.naver.com/v1/search/book.json?query=${bookTitle}&display=10&start=1`, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));