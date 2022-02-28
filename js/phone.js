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
    <button onclick="loadphoneBySlug('${phones.slug}')">Details</button>

  </div>
</div>
        `
        parents.appendChild(createDiv)
    })
}


const loadphoneBySlug = slug =>{
    console.log(slug);
    fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
    .then(response => response.json())
    .then (data => displayPhoneDetail(data.data))
}

const displayPhoneDetail = phones =>{
    const phoneDetails = document.getElementById("phone-details");
    const makingDiv = document.createElement("div");
    makingDiv.classList.add("cssDesign");
    makingDiv.innerHTML =`
    <div class="card" style="width: 18rem;">
  <img src="${phones.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${phones.phone_name}</h5>
    <p class="card-text">${phones.brand}</p>
  </div>
</div>
    `
    phoneDetails.appendChild(makingDiv);
}