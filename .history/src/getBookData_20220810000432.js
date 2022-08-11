var myHeaders = new Headers();
myHeaders.append("X-Naver-Client-Id", "eKIWGxoqJ9SKUS_Ixlzo");
myHeaders.append("X-Naver-Client-Secret", "uPRAUzrY1o");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://openapi.naver.com/v1/search/book_adv.xml?d_titl='love'&display=10&start=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));