function loadApiData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => displayData(data));
}

function displayData(data) {
  const divTag = document.getElementById('divTag');
  console.log(data);
  data.map((post) => {
    console.log(post.title);
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let p = document.createElement('p');
    
  });

  // for(let i = 0 ; i<data.length; i++){
  //   console.log(data[i]);
  // }

  // for(let post of data){
  //   console.log(post);
  // }

  // data.forEach((post) => {
  //   console.log(post);
  // });

  
}
