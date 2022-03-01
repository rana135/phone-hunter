
// get button & searchInput:-
const getButton = buttonField =>{
    const inputId = document.getElementById("input-id");
    const inputText = inputId.value;
    inputId.value ='';
    //error Handler:-
    if(inputText == ''){
        alert("please write something");
    } 
    // loading mobile data :-
    else{
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
    if (phone.length == 0) {
      alert("No phone found");
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

 // view phone Full Details:-
const loadphoneBySlug = slug =>{
    console.log(slug);
    fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
    .then(response => response.json())
    .then (data => displayPhoneDetail(data.data))
}
                                
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

    <p class="card-text">
    <strong> Release Date:- </strong>
    ${phones.releaseDate}
    </p>

    <p> <strong> ${ phones.releaseDate ? phones.releaseDate : 'No Release Date Found'} </strong> </p>
    
    <p class="t-align"> <strong>  mainFeatures  </strong </p>

     <p class="card-text">
    <strong> chipSet:- </strong>
    ${phones.mainFeatures.chipSet}
    </p>

    <p class="card-text">
    <strong> Display Size:- </strong>
    ${phones.mainFeatures.displaySize}
    </p>

    <p class="card-text">
    <strong> memory:- </strong>
    ${phones.mainFeatures.memory} 
    </p>
    
    <p class="t-align"> <strong>  others  </strong </p>

    <p class="card-text">
    <strong> Bluetooth:- </strong>
    ${phones.others.Bluetooth} 
    </p>

    <p class="card-text">
    <strong> GPS:- </strong>
    ${phones.others.GPS} 
    </p>

    <p class="card-text">
    <strong> NFC:- </strong>
    ${phones.others.NFC} 
    </p>

    <p class="card-text">
    <strong> Radio:- </strong>
    ${phones.others.Radio} 
    </p>

    <p class="card-text">
    <strong> USB:- </strong>
    ${phones.others.USB} 
    </p>

    <p class="card-text">
    <strong> WLAN:- </strong>
    ${phones.others.WLAN} 
    </p>

    <p class="t-align"> <strong>  Sensor  </strong </p>

    <p class="card-text">
    <strong> Sensors(0):- </strong>
    ${phones.mainFeatures.sensors[0]} 
    </p>

    <p class="card-text">
    <strong> Sensors(1):- </strong>
    ${phones.mainFeatures.sensors[1]} 
    </p>

    <p class="card-text">
    <strong> Sensors(2):- </strong>
    ${phones.mainFeatures.sensors[2]} 
    </p>

    <p class="card-text">
    <strong> Sensors(3):- </strong>
    ${phones.mainFeatures.sensors[3]} 
    </p>

    <p class="card-text">
    <strong> Sensors(4):- </strong>
    ${phones.mainFeatures.sensors[4]} 
    </p>
    
    <p class="card-text">
    <strong> Sensors(5):- </strong>
    ${phones.mainFeatures.sensors[5]} 
    </p>

  </div>
</div>
</div>
    `
    phoneDetails.appendChild(makingDiv);
}







