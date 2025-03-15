const fetchCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

function displayCategories(categories) {
    const containerCatergories = document.getElementById("btn-container");

    for (let cat of categories) {
        console.log(cat)
        const btnCategory = document.createElement("div");
        btnCategory.innerHTML = `
        <button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
        `
        containerCatergories.append(btnCategory)
    }
}
fetchCategories()