
let itemCount = 6;
let allTools = [];

// loadAllData function  here
const loadAllData = () =>{
    const URL =`https://openapi.programming-hero.com/api/ai/tools`
    const spinnerContainer = document.getElementById('spinner');
    // add spinner before data loads
    spinnerContainer.classList.remove('hidden')

    fetch(URL)
    .then(res => res.json())
    .then((data) => {
    // remove spinner after data loads
    spinnerContainer.classList.add('hidden')
      allTools = data.data.tools;
         showData(data.data.tools,itemCount)

    });


};


//showData work oon show limited card and details
const showData = (tools, itemCount) =>{
  // console.log(datas.data.tools);
const conatiner = document.getElementById('card-container');
conatiner.innerHTML = "";
  tools.slice(0,itemCount).forEach((tool)=>{
    // console.log(tool);
    const{image,features,published_in,id} =tool
    const div = document.createElement('div');
    div.innerHTML =`
    <div class="card w-50 h-full bg-base-100 shadow-xl border border-gray-300">
            <figure class="p-7">
              <img class="border rounded-lg w-100"
                src="${tool ?  image : "Not Found"}"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title font-bold">Features</h2>
              
              <ul class="list-decimal p-3">
                <li>${ features ?  features[0] : "Features Not Found"}</li>
                <li>${ features[1] ?  features[1] : "Features Not Found"}</li>
                <li>${ features[2] ?  features[2] : "Features Not Found"}</li>
              </ul>
              <hr class="" style="height:2px;background-color:rgb(192, 187, 187);">

              

              <div class="flex justify-between items-center ">
              <div class="11111111
              ">
              <p class=" font-bold text-3xl mt-4">${ name}</p>
                <p class="text-start mt-4"> <span class=""><i class="fa-solid fa-calendar-day"></i></span> ${ published_in ?  published_in : "Date Not Found"}</p>
              </div>

                
                <label onclick="loadAiDetails('${ id}')" for="my-modal-3" class="btn mt-4 btn-secondary modal-xl"><i class="fa-solid fa-arrow-right"></i></label>

 
              </div>
            </div>
          </div>
    
    `;
    conatiner.appendChild(div);
  })
 }


 //showAllData function work click show more button then show all card
 const  showAllData = () => {
    itemCount =allTools.length;
    showData(allTools, itemCount)
  
    
 }


// loadAi details function here  
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

//displayApiDetails function show modal , some card and Api description on card
const displayAiDetails = (tool) => {
  console.log(tool
    );

    const{description,pricing,features,integrations,input_output_examples,image_link,accuracy} = tool

   
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
      <h2 class="sm:ml-16 lg:ml-0 md:text-2xl font-bold sm:p-7 break-word">${ description !== null ?  description : "Description not found"}</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-3">
        <div
          class="bg-neutral-50 w-40 md:w-1/2 lg:w-24 h-full  rounded-md sm:ml-16 lg:ml-0 text-center"
        >
<h1 class="text-green-400 font-bold lg:mt-8">${ pricing !== null ?  pricing[0].price : "Free Of Cost" } <br>
${ pricing !== null ?  pricing[0].plan : "Not found" } </h1>
        </div>
        <div
          class="bg-neutral-50 w-40 md:w-1/2 lg:w-24 h-full  text-center rounded-md sm:ml-16 lg:ml-0"
        >
          <h1 class="text-pink-400 font-bold lg:mt-8 break-word">${ pricing !== null?  pricing[1].price :  "Free Of Cost" } <br>
${ pricing !== null?  pricing[1].plan : "Not found" } </h1>
        </div>
        <div
          class="bg-neutral-50  w-40 md:w-1/2 lg:w-24 p-4 text-center rounded-md sm:ml-16 lg:ml-0"
        >
           <h1 class="text-blue-400 font-bold break-word">${ pricing !== null ?  pricing[2].price : "Free Of Cost" } <br>
${ pricing !== null ?  pricing[2].plan : "Not found" } </h1>

        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:mx-auto">
        <div>
          <h1 class="font-bold mt-3 text-2xl">Features</h1>
          <ul class="list-disc ml-6 mt-3 ">
            <li>${ features !== null ?  features[1].feature_name : "Not Found"}</li>
  <li>${ features !== null?  features[2].feature_name : "Not Found"}</li>
  <li>${ features !== null?  features[3].feature_name : "Not Found"}</li>
  
          </ul>
        </div>
        <div>
          <h1 class="font-bold mt-3 text-2xl">Integrations</h1>
          <p class="${ integrations === null ?  'block' : "hidden"}">No data Found</p>
          <ul class=" ${ integrations === null ?  'hidden' : ''} list-disc ml-6 mt-3">
            <li class="${integrations !== null &&  integrations[0] !== undefined ?  integrations[0] : "hidden"}"">${integrations !== null &&  integrations[0] !== undefined ?  integrations[0] : "Not Found"}</li>

            <li class="${integrations !== null &&  integrations[1] !== undefined ?  integrations[1] : "hidden"}">${integrations !== null &&  integrations[1] !== undefined ?  integrations[1] : "Not Found"}</li>

            <li class="${integrations !== null &&  integrations[1] !== undefined ?  integrations[2] : "hidden"}"">${integrations !== null &&  integrations[2] !== undefined ?  integrations[2] : "Not Found"}</li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div
    class="card w-96 bg-base-100 shadow-xl border rounded-lg border-gray-200 md:mx-auto"
  >
    <figure class="md:p-7 py-7"><img class="relative border rounded-lg sm:w-44 md:w-100 h-40 md:h-80 sm:mr-32" src="${ image_link[0] ?  image_link[0] :  image_link[1] }" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class=" font-bold text-center md:text-2xl ">
      ${ input_output_examples !== null ?  input_output_examples[0].input : "Can you give any examples?"}</h2>
      <p class="text-center">
      ${ input_output_examples !== null ?  input_output_examples[0].output : "No! Not Yet! Take a break"}
      </p>
      <div class="card-actions justify-end absolute top-9 right-16 md:right-9">
        <button class=" ${ accuracy.score === null ? 'hidden' : '' } accuracy-btn  rounded-lg bg-rose-600 p-2 text-white">
        ${ accuracy.score !== null ?  accuracy.score * 100 + '% accuracy' : "null"}
        </button>
      </div>
    </div>
  </div>
</div> 
  
  `
   apiDetails.appendChild(div);
  
};


//shortDate function show all card maintain by order
const shortDate = () => {
  // allTools =data.tools;
  // console.log(allTools);
  // itemCount = allTools.length;
  allTools.sort((a, b) => {
   return new Date(a.published_in) - new Date(b.published_in)
    // console.log(new Date(a.published_in));
  })
  // console.log(allTools);-
  showData(allTools, itemCount)

}

//call load more function
loadAllData()



