const fetchCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

function displayCategories(categories) {
    const containerCategories = document.getElementById("btn-container");

    for (let cat of categories) {
        const btnCategory = document.createElement("div");
        btnCategory.innerHTML = `
        <button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
        `
        containerCategories.append(btnCategory)
    }
}
fetchCategories()

// load videos

const fetchVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
}
function displayVideos(videos) {
    const containerVideos = document.getElementById("videos-container");
    for (let vid of videos) {
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
        <div class="card bg-base-100  shadow-sm">
        <figure>
        <img
        src="${vid.thumbnail}"
        alt="" />
        </figure>
        <div class="card-body">
        <h2 class="card-title">${vid.title}</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
        </div>
        `
        containerVideos.append(videoCard)
    }
}
fetchVideos()