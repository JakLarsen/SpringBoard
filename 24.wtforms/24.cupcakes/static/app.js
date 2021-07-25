const cupcakeContainer = document.getElementById('cupcake-con')
const form = document.getElementById('cupcake-form')



function createCupcake(cupcake){
    console.log(cupcake)

    let newDiv = document.createElement("div");
    newDiv.classList.add("cupcake")
    newDiv.id = `cupcake${cupcake.id}`

    let newHeader = document.createElement("h1");
    newHeader.innerText = cupcake.flavor
    newDiv.appendChild(newHeader)

    let newImage = document.createElement("img");
    newImage.classList.add('cupcake-img')
    newImage.src = `${cupcake.image}`
    newDiv.appendChild(newImage)

    cupcakeContainer.appendChild(newDiv)
}

async function loadCupcakes() {
    let cupcakes = await axios.get(`/api/cupcakes`);
    let cupcakesArr = cupcakes.data['cupcakes']
    
    for(const cupcake of cupcakesArr){

        createCupcake(cupcake)
    }
}



async function handleForm(evt){
    evt.preventDefault();
    console.log('form submitted')
    
    let flavor = document.getElementById('flavor').value
    let size = document.getElementById('size').value
    let rating = document.getElementById('rating').value
    let image = document.getElementById('image').value
    console.log(flavor, size, rating, image)

    const newCupcakePost = await axios.post('/api/cupcakes', {
        flavor,
        size,
        rating,
        image
    })

    cupcake = newCupcakePost.data.cupcake
    console.log(cupcake)
    createCupcake(cupcake)
}

form.addEventListener('submit', handleForm)
loadCupcakes();
