// get error id
const error = document.getElementById('error')

// get button & searchInput:-
const getButton = buttonField =>{
    const inputId = document.getElementById("input-id");
    const inputText = inputId.value;
    inputId.value ='';
    //error Handler:-
    if(inputText == ''){
        error.innerText='Please give me search value'
    } 
    // loading mobile data :-
    else{
      error.innerText =''
        fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
        .then(response => response.json())
        .then (data => displayGadget(data.data))
    }
}
//
// Mobile will show when searched:-
const displayGadget = phone =>{
    //Slice to get 20 mobiles:-
    const data = phone.slice(0, 20);
    console.log(data);
    const parents = document.getElementById("displaySearch");
    parents.textContent= '';
    // Error Handler:-
    if (phone.length == 0) {
      error.innerText='Result did not found'
  }
   else{
    data.forEach(phones =>{
        console.log(phones);
        const createDiv = document.createElement("div");
        createDiv.classList.add ("col")
        createDiv.innerHTML=`
        <div class="card" style="width: 18rem;">
  <img class="w-75 mx-auto" src="${phones.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">
    <strong> Phone Name:- </strong>
    ${phones.phone_name}
    </h5>

    <p class="card-text">
    <strong> Phone Brand:- </strong>
    ${phones.brand}
    </p>

    <button class="btn btn-primary" onclick="loadphoneBySlug('${phones.slug}')">Details
    </button>

  </div>
</div>
        `
        parents.appendChild(createDiv) 
    })   
   }
}

 // show phone details:-
const loadphoneBySlug = slug =>{
    console.log(slug);
    fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
    .then(response => response.json())
    .then (data => displayPhoneDetail(data.data))
}
   
////view phone Full Details:-
const displayPhoneDetail = phones =>{
    const phoneDetails = document.getElementById("phone-details");
    phoneDetails.textContent= '';
    const failedError = document.getElementById("error-message");
        const makingDiv = document.createElement("div");
    makingDiv.classList.add("cssDesign");
    makingDiv.innerHTML =`
    <div class="card">
  <div class="row  g-3">
  <div class="col-md-5">
    <img src="${phones.image}" class=" pic   rounded-start" alt="...">
  </div>
  <div class="card-body w-25">
    <h1 class="card-title">
    <strong> Phone Name:- </strong>
    ${phones.name}
    </h1>

    <p> <strong> Released: </strong> ${ phones.releaseDate ? phones.releaseDate : 'No Release Date Found'} </p>
    
    <p class="t-align"> <strong>  mainFeatures  </strong </p>

    <li class="list-group-item">
    <strong> chipSet:- </strong>
    ${phones.mainFeatures.chipSet}
    </li>

    <li class="list-group-item">
    <strong> Display Size:- </strong>
    ${phones.mainFeatures.displaySize}
    </li>

    <li class="list-group-item">
    <strong> memory:- </strong>
    ${phones.mainFeatures.memory} 
    </li>
    
    <p class="t-align mt-3"> <strong>  others  </strong </p>

    <li class="list-group-item">
    <strong> Bluetooth:- </strong>
    ${phones.others.Bluetooth} 
    </li>

    <li class="list-group-item">
    <strong> GPS:- </strong>
    ${phones.others.GPS} 
    </li>

    <li class="list-group-item">
    <strong> NFC:- </strong>
    ${phones.others.NFC} 
    </li>

    <li class="list-group-item">
    <strong> Radio:- </strong>
    ${phones.others.Radio} 
    </li>

    <li class="list-group-item">
    <strong> USB:- </strong>
    ${phones.others.USB} 
    </li>

    <li class="list-group-item">
    <strong> WLAN:- </strong>
    ${phones.others.WLAN} 
    </li>

    <p class="t-align mt-3"> <strong>  Sensor  </strong </p>

    <li class="list-group-item">
    <strong> Sensors(0):- </strong>
    ${phones.mainFeatures.sensors[0]} 
    </li>

    <li class="list-group-item">
    <strong> Sensors(1):- </strong>
    ${phones.mainFeatures.sensors[1]} 
    </li>

    <li class="list-group-item">
    <strong> Sensors(2):- </strong>
    ${phones.mainFeatures.sensors[2]} 
    </li>

    <li class="list-group-item">
    <strong> Sensors(3):- </strong>
    ${phones.mainFeatures.sensors[3]} 
    </li>

    <li class="list-group-item">
    <strong> Sensors(4):- </strong>
    ${phones.mainFeatures.sensors[4]} 
    </li>

    <li class="list-group-item">
    <strong> Sensors(5):- </strong>
    ${phones.mainFeatures.sensors[5]} 
    </li>

  </div>
</div>
</div>
    `
    phoneDetails.appendChild(makingDiv);
}







