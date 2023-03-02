const loadAllData = () =>{
    const URL =`https://openapi.programming-hero.com/api/ai/tools`
    const spinnerContainer = document.getElementById('spinner');
    spinnerContainer.classList.remove('hidden')

    fetch(URL)
    .then(res => res.json())
    .then((data) => {
    spinnerContainer.classList.add('hidden')
         showData(data)

    });


};


const showData = (datas) =>{
  console.log(datas.data);
const conatiner = document.getElementById('card-container');

  (datas.data.tools).slice(0,6).forEach((tool)=>{
    console.log(tool.features);
    const div = document.createElement('div');
    div.innerHTML =`
    <div class="card w-50 h-full bg-base-100 shadow-xl border">
            <figure>
              <img class="border rounded-lg w-80 mt-5"
                src="${tool ? tool.image : "Not Found"}"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title font-bold">Features</h2>
              
              <ul class="text-start  list-decimal ml-4">
                <li>${tool.features ? tool.features[0] : "Features Not Found"}</li>
                <li>${tool.features[1] ? tool.features[1] : "Features Not Found"}</li>
                <li>${tool.features[2] ? tool.features[2] : "Features Not Found"}</li>
              </ul>
              <hr class="" style="height:2px;background-color:rgb(192, 187, 187);">

              

              <div class="flex justify-between items-center ">
              <div class="text-start">
              <p class=" font-bold text-3xl mt-4">${tool.name}</p>
                <p class="text-start mt-4"> <span class=""><i class="fa-solid fa-calendar-day"></i></span> ${tool.published_in ? tool.published_in : "Date Not Found"}</p>
              </div>
                
                <button onclick="ShowDetailsData()" class="btn btn-secondary rounded-full mt-5"><i class="fa-solid fa-arrow-right"></i></button>
 
              </div>
            </div>
          </div>
    
    `;
    conatiner.appendChild(div);
  })
 }

 const  showAllData = () => {
    const URL =`https://openapi.programming-hero.com/api/ai/tools`

    fetch(URL)
    .then(res => res.json())
    .then((data) => {
         showData(data)
          
    });
    
 }

loadAllData()