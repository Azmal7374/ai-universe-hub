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
  // console.log(datas.data.tools[0]);
const conatiner = document.getElementById('card-container');

  (datas.data.tools).slice(0,6).forEach((tool)=>{
    // console.log(tool);
    const div = document.createElement('div');
    div.innerHTML =`
    <div class="card w-50 h-full bg-base-100 shadow-xl border border-gray-300">
            <figure class="p-7">
              <img class="border rounded-lg w-100"
                src="${tool ? tool.image : "Not Found"}"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title font-bold">Features</h2>
              
              <ul class="list-decimal p-3">
                <li>${tool.features ? tool.features[0] : "Features Not Found"}</li>
                <li>${tool.features[1] ? tool.features[1] : "Features Not Found"}</li>
                <li>${tool.features[2] ? tool.features[2] : "Features Not Found"}</li>
              </ul>
              <hr class="" style="height:2px;background-color:rgb(192, 187, 187);">

              

              <div class="flex justify-between items-center ">
              <div class="11111111
              ">
              <p class=" font-bold text-3xl mt-4">${tool.name}</p>
                <p class="text-start mt-4"> <span class=""><i class="fa-solid fa-calendar-day"></i></span> ${tool.published_in ? tool.published_in : "Date Not Found"}</p>
              </div>

                
                <label onclick="loadAiDetails('${tool.id}')" for="my-modal-3" class="btn mt-4 btn-secondary modal-xl"><i class="fa-solid fa-arrow-right"></i></label>

 
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


  
const loadAiDetails =async(id) =>{
       const URL =` https://openapi.programming-hero.com/api/ai/tool/${id}`

       try{
        const res = await fetch(URL);
    const data = await res.json();
       displayAiDetails(data.data);
      }
      catch(error){
        console.log(error);
    
      }
    
    
}

const displayAiDetails = (tool) => {
  console.log(tool.accuracy
    );

   
  const apiDetails = document.getElementById("modal-details");
  apiDetails.innerHTML = "";

  const div =document.createElement('div');
  div.innerHTML =`
  <div
            
  class="w-50 grid grid-cols-1 md:grid-cols-2 gap-5 lg:m-10 lg:p-10"
>
  <div
    class="card w-96 bg-rose-100 shadow-xl border rounded-lg border-rose-400 sm:mx-auto"
  >
    <div class="card-body">
      <h2 class="sm:ml-16 lg:ml-0 text-2xl font-bold">${tool.description ? tool.description : "Description not found"}</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-3">
        <div
          class="bg-neutral-50 sm:w-1/2 lg:w-24 h-full  rounded-md sm:ml-16 lg:ml-0 text-center"
        >
<h1 class="text-green-400 font-bold lg:mt-8">${tool.pricing[0]? tool.pricing[0].price : "Free Of Cost" } <br>
${tool.pricing[0]? tool.pricing[0].plan : "Not found" } </h1>
        </div>
        <div
          class="bg-neutral-50 sm:w-1/2 lg:w-24 h-full  text-center rounded-md sm:ml-16 lg:ml-0"
        >
          <h1 class="text-pink-400 font-bold lg:mt-8">${tool.pricing[1]? tool.pricing[1].price :  "Free Of Cost" } <br>
${tool.pricing[1]? tool.pricing[1].plan : "Not found" } </h1>
        </div>
        <div
          class="bg-neutral-50 sm:w-1/2 lg:w-24 h-full p-4 text-center rounded-md sm:ml-16 lg:ml-0"
        >
           <h1 class="text-blue-400 font-bold">${tool.pricing[2]? tool.pricing[2].price : "Free Of Cost" } <br>
${tool.pricing[2]? tool.pricing[2].plan : "Not found" } </h1>

        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:mx-auto">
        <div>
          <h1 class="font-bold mt-3 text-2xl">Features</h1>
          <ul class="list-disc ml-6 mt-3 ">
            <li>${tool.features[1]? tool.features[1].feature_name : "Not Found"}</li>
  <li>${tool.features[2]? tool.features[2].feature_name : "Not Found"}</li>
  <li>${tool.features[3]? tool.features[3].feature_name : "Not Found"}</li>
  
          </ul>
        </div>
        <div>
          <h1 class="font-bold mt-3 text-2xl">Integrations</h1>
          <ul class="list-disc ml-6 mt-3  ">
            <li>${tool.integrations[0] ? tool.integrations[0] : "Not Found"}</li>
            <li>${tool.integrations[1] ? tool.integrations[1] : "Not Found"}</li>
            <li>${tool.integrations[2] ? tool.integrations[2] : "Not Found"}</li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div
    class="card w-96 bg-base-100 shadow-xl border rounded-lg border-gray-200 mx-auto"
  >
    <figure class="p-7"><img class="relative border rounded-lg w-100 h-96" src="${tool.image_link[0] ? tool.image_link[0] : tool.image_link[0] }" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="font-3xl font-bold text-center text-2xl ">
      ${tool.input_output_examples ? tool.input_output_examples[0].input : "Can you give any examples?"}</h2>
      <p class="text-center">
      ${tool.input_output_examples ? tool.input_output_examples[0].output : "No! Not Yet! Take a break"}
      </p>
      <div class="card-actions justify-end absolute top-9 right-9">
        <button class="accuracy-btn  rounded-lg bg-rose-600 p-2 text-white">
        ${tool.accuracy.score != null ? tool.accuracy.score * 100 + '% accuracy' : "null"}
        </button>
      </div>
    </div>
  </div>
</div> 
  
  `
   apiDetails.appendChild(div);
  
};

loadAllData()


//async await
// const loadMealDetails2 = async(idMeal) =>{
//   const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

//   try{
//     const res = await fetch(url);
// const data = await res.json();
// displayMealDetails(data.meals[0]);
//   }
//   catch(error){
//     console.log(error);

//   }

// }


