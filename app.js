const navbar = document.querySelector('.navbar');
const main = document.querySelector(".main");
const lightmode = document.querySelector(".light");
const darkmode = document.querySelector(".dark");
const card = document.querySelector(".card")

function mode() {
    navbar.classList.toggle("navbarFluid");
    main.classList.toggle("mainFluid");
    lightmode.classList.toggle("light-mode");
    darkmode.classList.toggle("dark-mode");
    card.classList.toggle("card-fluid")
}



function dataFetch() {
    fetch("https://restcountries.com/v2/all")
        .then((data) => data.json())
        .then((res) => dataCountry(res.data))
        .catch((err) => console.log(err))
}

dataFetch()


async function dataCountry() {
    const request = await fetch('https://restcountries.com/v2/all');
    const result = await request.json();
    dataRender(result)

}

dataCountry()

function dataRender(data = []) {

    data.forEach((e) => {
        const card = createElement('div', 'card',
            `
        <img src="${e.flags.svg}" alt="rasm" />
        <span>
            <h2>${e.name}</h2>
            <p>Population :${e.population}</p>
            <p>Region :${e.region}</p>
            <p>Capital :${e.capital}</p>
        </span>
        `
        );
        $('.main').appendChild(card);
    })
}






