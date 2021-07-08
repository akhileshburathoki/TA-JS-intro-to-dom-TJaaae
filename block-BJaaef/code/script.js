let allPeople = got.houses.reduce(
    (acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
}, []);
let ul = document.querySelector('.list')
let all = allPeople.map(
    person => {
        return `<li>
            <div>
                <img 
                src = "${person.image}" 
                alt = "${person.name}"
                />
                <h2>${person.name}</h2>
            </div>
                <p>${person.description}</p>
            <div class = "btn">
                <a href = "${person.wikiLink}">Learn More!</a>
            </div>
        </li>`;
    }
);
ul.innerHTML = all.join(``)