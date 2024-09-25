function loadApiData() {
  fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
    .then((data) => displayData(data));
}

function displayData(data){
 console.log(data);
  const divTag = document.getElementById('divTag');

  // for(let user of data){
  //   const p = document.createElement('p');
  //   p.innerText = user.username+" - "+user.phone+" - "+user.email;
  //   divTag.appendChild(p);
  // }

  // for(let i = 0; i<data.length; i++){
  //   const user = data[i];
  //   const p = document.createElement('p');
  //   p.innerText = user.username+" - "+user.phone+" - "+user.email; 
  //   divTag.appendChild(p);
  // }

  data.forEach(users => {
      const p = document.createElement('p');
      p.innerText = users.username+" - "+users.phone+" - "+users.email;
      divTag.appendChild(p);
  })

  // data.map(users => {
  //   const p = document.createElement('p');
  //   p.innerText = users.username+" - "+users.phone+" - "+users.email;
  //   divTag.appendChild(p);
  // });

}
