const getButton = buttonField =>{
    const inputId = document.getElementById("input-id");
    const inputText = inputId.value;
    inputId.value ='';
    if(inputText == ''){
        alert("please write something");
    } 
    else{
        fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
        .then(response => response.json())
        .then (data => displayGadget(data.data))
    }
}

const displayGadget = data =>{
    // console.log(data);
    const parents = document.getElementById("displaySearch");
    parents.textContent= '';
    data.forEach(phones =>{
        console.log(phones);
        const createDiv = document.createElement("div");
        createDiv.classList.add ("col")
        createDiv.innerHTML=`
        <div class="card" style="width: 18rem;">
  <img src="${phones.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${phones.phone_name}</h5>
    <p class="card-text">${phones.brand}</p>
  </div>
</div>
        `
        parents.appendChild(createDiv)
    })
}


