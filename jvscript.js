let arr = [
    {
        "name": "Cleansing Gel",
        "price": 100,
        "image": "./iMAGE/main.jpg"
    },
    {
        "name": "Toner",
        "price": 150,
        "image": "./iMAGE/Copy of 15.jpg"
    },
    {
        "name": "Moisturizer",
        "price": 200,
        "image": "./iMAGE/main.jpg"
    }
]
let getToner = document.getElementById("toner");
getToner.innerHTML = arr.map((item) => {
    return `<div class="product">
                <img class="image-toner" src="${item.image}" alt="">
                    <h2>${item.name}</h2>
                    <p>Price: $${item.price}</p>
                
            </div>`;
}).join("");
console.log(getText);