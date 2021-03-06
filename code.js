/*** Don't touch this code! ***/
const generate_price = () => (Math.floor(Math.random() * 900) + 10) + " $";

let phones = [{
        title: "iPhone 8",
        price: generate_price()
    },
    {
        title: "iPhone 7",
        price: generate_price()
    },
    {
        title: "Apple iPhone 6",
        price: generate_price()
    },
    {
        title: "Samsung Galaxy S9",
        price: generate_price()
    },
    {
        title: "Nokia 3310",
        price: generate_price()
    },
    {
        title: "HTC Two M3",
        price: generate_price()
    },
    {
        title: "Lenovo H6000",
        price: generate_price()
    },
    {
        title: "Microsoft Lumia 950",
        price: generate_price()
    },
    {
        title: "Sony Ericsson K750 Gold",
        price: generate_price()
    }
];

console.dir(phones);
/***Write code after this line***/
for (var i = 0; i < phones.length; i++) {
    phones[i].price = +phones[i].price.slice(0, -2);
}



const h = document.getElementById("div1");

var button = document.getElementsByTagName("button");
console.log(button);
displayPhones();



function myFunctionFall() {

    removePhones()

    button[1].style.background = "green";
    button[1].style.color = "white";
    button[0].style.background = "#f9f9f9";
    button[0].style.color = "black";


    phones.sort(function (a, b) {
        return a.price - b.price
    });


    for (var i = 0; i < phones.length; i++) {

        h.insertAdjacentHTML("afterend", ` <li class="list-group-item d-flex justify-content-between align-items-center"><h5> ${phones[i].title}  </h5> <span class="badge badge-primary badge-pill"> ${phones[i].price} $ </span> </li> `)
    }

    console.dir(phones);
}

function myFunctionGrow() {
    
    removePhones()

    button[0].style.background = "green";
    button[0].style.color = "white";
    button[1].style.background = "#f9f9f9";
    button[1].style.color = "black";
    console.log(button);

    phones.sort(function (a, b) {
        return b.price - a.price
    });


    for (var i = 0; i < phones.length; i++) {
        var h = document.getElementById("div1");
        h.insertAdjacentHTML("afterend", ` <li class="list-group-item d-flex justify-content-between align-items-center"><h5> ${phones[i].title}  </h5> <span class="badge badge-primary badge-pill"> ${phones[i].price} $ </span> </li> ` );
    }

    console.dir(phones);
}

function displayPhones() {
    for (var i = 0; i < phones.length; i++) {
        var h1 = ` <li class="list-group-item d-flex justify-content-between align-items-center"><h5> ${phones[i].title} </h5> <span class="badge badge-primary badge-pill"> ${phones[i].price} $ </span> </li> `;
        h.insertAdjacentHTML("afterend", `${h1}`);
    }
}

function removePhones() {
    
    var r1 = document.getElementsByTagName("li");
    for (var i = r1.length - 1; i >= 0; --i) {
        r1[i].remove();
    }


}