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



var x = ' <li class="list-group-item d-flex justify-content-between align-items-center"><h5> '
var y = ' </h5>'
var z = ' <span class="badge badge-primary badge-pill">'
var a = ' </span>'
var b = ' </li> '
var h = document.getElementById("div1");
displayPhones();



function myFunctionFall() {

    var r1 = document.getElementsByTagName("li");
    for (var i = r1.length - 1; i >= 0; --i) {
        r1[i].remove();
      }


    phones.sort(function (a, b) {
        return a.price - b.price
    });


    for (var i = 0; i < phones.length; i++) {

        h.insertAdjacentHTML("afterend", x + phones[i].title + y + z + phones[i].price + " $" + a + b);
    }
    
    console.dir(phones);
}

function myFunctionGrow() {
    var r1 = document.getElementsByTagName("li");
    for (var i = r1.length - 1; i >= 0; --i) {
        r1[i].remove();
      }

    phones.sort(function (a, b) {
        return b.price - a.price
    });


    for (var i = 0; i < phones.length; i++) {
        var h = document.getElementById("div1");
        h.insertAdjacentHTML("afterend", x + phones[i].title + y + z + phones[i].price + " $" + a + b);
    }
    
    console.dir(phones);
}

function displayPhones() {
    for (var i = 0; i < phones.length; i++) {
        var h = document.getElementById("div1");
        h.insertAdjacentHTML("afterend", x + phones[i].title + y + z + phones[i].price + " $ " + a + b);
    }
}

function myFunction() {
    
    var r1 = document.getElementsByTagName("li");
    for (var i = r1.length - 1; i >= 0; --i) {
        r1[i].remove();
      }
    

}