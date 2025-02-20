document.addEventListener("DOMContentLoaded", function () {

    async function loadData() {
        try {
            const response = await fetch('http://localhost:3000/data');
            const data = await response.json();

            if (data.length === 0) {
                return;
            }

            let filteredArr = data.filter(d => d.Title && d.Title.includes("Necklace"))
            console.log(filteredArr);

            let section = document.getElementsByClassName('items')[0];
            console.log(section);

            filteredArr.forEach((element, index) => {
                let div = document.createElement('div');
                div.classList.add("item");
                div.innerHTML = `
                <img src="${element["Image Src"] ? element["Image Src"] : './images/Necklace.png'}" alt="${element.Title}">
                <p class="description">${element.Title}</p>
                <p class="price">$${element["Variant Price"]}</p>
                ${index === 0 ? '<p class="best-seller">Best seller</p>' : ''}`
                section.appendChild(div);
            });
        } catch (error) {
            console.error("Грешка при зареждане на данните:", error);
        }
    }

    loadData();

});