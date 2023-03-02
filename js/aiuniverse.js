const loadAllData = () =>{
    const URL =`https://openapi.programming-hero.com/api/ai/tools`

    fetch(URL)
    .then(res => res.json())
    .then((data) => {
         showAllData(data)
    });

};


const showAllData = (datas) =>{
//   console.log(datas.data.tools[0]);
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
                <li>${tool.features[0] ? tool.features[0] : "Features Not Found"}</li>
                <li>${tool.features[1] ? tool.features[1] : "Features Not Found"}</li>
                <li>${tool.features[2] ? tool.features[2] : "Features Not Found"}</li>
              </ul>
              <hr class="" style="height:2px;background-color:rgb(192, 187, 187);">

              <p class="text-start font-bold text-3xl">${tool.name}</p>

              <div class="flex">
                <p class="text-start pt-2"> <span class=""><i class="fa-solid fa-calendar-day"></i></span> ${tool.published_in ? tool.published_in : "Date Not Found"}</p>
                <div class="text-center w-10 h-10 bg-pink-300 rounded-full">
                <i class="fa-solid fa-arrow-right mt-3"></i>
                </div>
              </div>
            </div>
          </div>
    
    `;
    conatiner.appendChild(div);
  })
 }

loadAllData()