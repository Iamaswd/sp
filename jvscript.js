let arr = [
    {
        "name": "Toner Klairs",
        "price": 100,
        "image": "https://klairsvietnam.vn/wp-content/uploads/2020/07/nuoc-hoa-hong-khong-mui-klairs.jpg"
    },
    {
        "name": "Toner Kombucha",
        "price": 150,
        "image": "./iMAGE/Copy of 15.jpg"
    },
    {
        "name": "Toner Mamonde",
        "price": 200,
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Mamonde_Rose_Water_Toner.jpg"
    }
    
];

let getToner = document.getElementById("toner");

getToner.innerHTML = arr.map((item) => {
    return `<div>
                <img class="image-toner" src="${item.image}" alt="${item.name}" style="width:300px; height:auto; border-radius:8px; margin-bottom:10px;">
                <h2 style="font-size:23px; color:#333; margin-bottom:5px;">${item.name}</h2>
                <p style="color:#333; font-size:16px;">Price: $${item.price}</p>
            </div>`;
}).join("");
