function loadApiData() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => displayData(data));
}

function displayData(data){
  const divTag = document.getElementById('divTag');
  console.log(data);

  for(photo of data){
    const div = document.createElement('div');
    div.className = 'col-md-3';

    div.style.backgroundColor = 'tomato';
    div.style.padding = '10px';
    div.style.margin= '5px';
    div.style.borderRadius = '5px';
    div.style.textAlign = 'center';

    div.innerHTML = `
        <h5 style="text-transform:uppercase;">${photo.id}). ${photo.title}</h5>
        <img src='${photo.thumbnailUrl}' style='margin:auto'/>
    `;
    divTag.appendChild(div);
  }
}


// function displayData(data){
//   const divTag = document.getElementById('divTag');

//   for(let i = 0; i<data.length; i++){
//     const photo = data[i];
//     const div = document.createElement('div');
//     div.innerHTML = `
//         <h6>${photo.id}). ${photo.title}</h6>
//         <p>${photo.body}</p>
//     `;
//     divTag.appendChild(div);
//   }
// }

// function displayData(data) {
//   const divTag = document.getElementById('divTag');
//   console.log(data);
//   data.map((post) => {
//     let heading6 = document.createElement('h6');
//     let p = document.createElement('p');

//     heading6.style.textTransform = 'uppercase';  
//     p.style.border = "1px solid #ccc";
//     p.style.padding = "8px";

//     heading6.innerText = post.id +"). "+post.title ;
//     p.innerText = post.body;

//     divTag.appendChild(heading6);
//     divTag.appendChild(p);
    
//   });

  // for(let i = 0 ; i<data.length; i++){
  //   console.log(data[i]);
  // }

  // for(let post of data){
  //   console.log(post);
  // }

  // data.forEach((post) => {
  //   console.log(post);
  // });

  
// }
