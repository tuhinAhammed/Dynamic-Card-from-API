
// data featch from api method

const placeholderData =  async (api) => {
   try{
    const dataCatch = await axios(api)
    return dataCatch.data
    console.log(data.data);
   }
   catch(error){
    throw Error ("Error Found")
   }
}


// const apiData = [
//     {
//         heading : "This Is Headin 1",
//         body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veniam praesentium impedit. Unde dolore a odio vel necessitatibus, molestiae voluptas nobis corporis saepe dicta nihil rerum non, perspiciatis tempore illum."
//     },
//     {
//         heading : "This Is Headin 2",
//         body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veniam praesentium impedit. Unde dolore a odio vel necessitatibus, molestiae voluptas nobis corporis saepe dicta nihil rerum non, perspiciatis tempore illum."
//     },
//     {
//         heading : "This Is Headin 3",
//         body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veniam praesentium impedit. Unde dolore a odio vel necessitatibus, molestiae voluptas nobis corporis saepe dicta nihil rerum non, perspiciatis tempore illum."
//     },
//     {
//         heading : "This Is Headin 4",
//         body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veniam praesentium impedit. Unde dolore a odio vel necessitatibus, molestiae voluptas nobis corporis saepe dicta nihil rerum non, perspiciatis tempore illum."
//     },
//     {
//         heading : "This Is Headin 5",
//         body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veniam praesentium impedit. Unde dolore a odio vel necessitatibus, molestiae voluptas nobis corporis saepe dicta nihil rerum non, perspiciatis tempore illum."
//     },
//     {
//         heading : "This Is Headin 6",
//         body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veniam praesentium impedit. Unde dolore a odio vel necessitatibus, molestiae voluptas nobis corporis saepe dicta nihil rerum non, perspiciatis tempore illum."
//     },

// ]
const parentElement = document.querySelector(".inner-card")
const mainFunction = async () => {
    const apiData = await placeholderData("https://jsonplaceholder.typicode.com/posts")
    apiData.map((data) => {
    console.log(data);
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `<h4 class="card-count">${data.id}</h4>
        <h1 class="card-heading"> ${data.title} </h1>
        <p class="card-body">${data.body}</p>`;
        parentElement.appendChild(card)
    })

}

{/* <div class="card">
<h1 class="card-heading">Card Heading</h1>
<p class="card-body">This Is Headin 1",
    body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veniam praesentium impedit. Unde dolore a odio vel necessitatibus, molestiae voluptas nobis corporis saepe dicta nihil rerum non, perspiciatis tempore illum.</p>
</div> */}

mainFunction()