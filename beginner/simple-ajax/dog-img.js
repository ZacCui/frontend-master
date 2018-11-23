const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const dogge = document.querySelector('.dog-img')

function addDogImage(){
    const promise = fetch(DOG_URL)
    promise.then(function(response){
        return response.json()
    }).then(function(dog){
        const img = document.createElement("img");
        img.src = dog.message
        img.alt = 'dog'
        dogge.appendChild(img)
    })
}

document.querySelector('.add-img').addEventListener('click', addDogImage)