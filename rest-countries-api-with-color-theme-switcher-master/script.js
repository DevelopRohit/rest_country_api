let btn = document.querySelector(".mode");
let header = document.querySelector("header");
let container = document.querySelector(".container");
let serchbtn = document.querySelector(".Searchbtn");
let inputdata = document.querySelector("#country")
let lable = document.querySelector("label");
btn.textContent = "Dark Mode";
let allcountry = [];
let countydata = document.querySelector(".countydata");

serchbtn.addEventListener("click", () => {
    let search = inputdata.value.toLowerCase();

    let filtered = allcountry.filter(e =>
        e.name.toLowerCase().includes(search)
    );
    countydata.innerHTML = "";

    showallcountry(filtered)
});
async function getdata() {
    let url = await fetch("data.json")
    let res = await url.json()
    allcountry = res
    console.log(res);

    showallcountry(allcountry)
};

function showallcountry(cou) {
    countydata.innerHTML = "";

    cou.forEach(all => {
        let allblock = document.createElement("div");
        allblock.classList.add("countryinfo");

        allblock.innerHTML = `
            <img src="${all.flags.png}" alt="${all.name} "class="flag" 
            data-country="${all.name}">
            <h3>${all.name}</h3>
            <div class="info">
                <p>Population : ${all.population}</p>
                <p>Region : ${all.region}</p>
                <p>Capital : ${all.capital}</p>
            </div>
        `;
        countydata.appendChild(allblock);
    }); 

    let flags = document.querySelectorAll(".flag");
    flags.forEach(flag => {
        flag.addEventListener("click", () => {
            let country = flag.dataset.country
            window.location.href=`details.html?${country}`
        });
    });
};


btn.addEventListener("click", () => {
    let select = document.querySelector("#region");
    let allbolock = document.querySelectorAll(".countryinfo")
    if (btn.textContent === "Dark Mode") {
        container.style.backgroundColor = "black"
        container.style.color = "white"
        btn.textContent = "Ligth Mode"
        lable.style.backgroundColor = "black"
        inputdata.style.backgroundColor = "black"
        inputdata.style.color = "white"
        select.style.backgroundColor = "black"
        select.style.color = "white"
        inputdata.style.borderColor = "white"
        allbolock.forEach(all => {
            all.style.backgroundColor = "black"
            all.style.color = "white";
        });
    } else {
        container.style.backgroundColor = "white"
        container.style.color = "black"
        btn.textContent = "Ligth Mode"
        btn.textContent = "Dark Mode"
        inputdata.style.color = "black"
        lable.style.backgroundColor = "white"
        inputdata.style.backgroundColor = "white"
        inputdata.style.borderColor = "black"
        select.style.backgroundColor = "white"
        select.style.color = "black"

        allbolock.forEach(all => {
            all.style.backgroundColor = "white"
            all.style.color = "black";

        });
    }
});


getdata()