
// --------------------------- 1

function createTextDiv(text) {
    node = document.getElementById('MyID');
    // node = document.getElementsByClassName("example");
    const element = '<div class="alert alert-info" role="alert"> ' + text + ' </div>';
    node.insertAdjacentHTML('afterend', element); // beforebegin, afterbegin, beforeend, afterend
}

// --------------------------- 2

function textChecker() {

    node = document.getElementById('theDiv');

    const text = document.getElementById("inputedText").value;
    let checker = text.includes("a" || "A");
    let element = '';
    if (checker) { element = '<div class = "res res-error"> Error </div>' }
    else { element = '<div class="res res-ok"> Ok </div>' }

    node.insertAdjacentHTML('beforebegin', element);

}

// --------------------------- 3

object = document.getElementById("myImg");
object.addEventListener("mouseover", () => { object.setAttribute('src', 'https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'); });
object.addEventListener("mouseout", () => { object.setAttribute('src', 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80'); });

// --------------------------- 4

var select = document.getElementById("selectName");
var options = [
    { id: 1, name: "Gino" },
    { id: 2, name: "Pino" },
    { id: 3, name: "Mario" },
    { id: 4, name: "Rosario" }
];

for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt.name;
    el.value = opt.id;
    select.appendChild(el);
}



window.onload = function () {

    // --------------------------- 5

    var name = prompt('Hello, please insert your name, or cancel');
    if (name) {  // alert(name);
        if (confirm("Do you want to display your name on the page 😁 ? otherwise cancel 😊")) {
            document.getElementById("user-log").innerHTML = name;
        } else {
            document.getElementById("user-log").innerHTML = "Anonymous";
        }
    }

    // --------------------------- 6
    window.document.body.insertAdjacentHTML('beforeend', '<button id="postsbutton" class="btn btn-info" onclick="fetchPosts()">Fetch Posts</button>');
}

// --------------------------- 7

async function fetchPosts() {

    const element = document.getElementById("postsbutton");
    element.remove();

    let session = sessionStorage.getItem('products');

    if (session == null) {
        console.log("Session has no data - Start fetching from server");
        const url = 'http://localhost:8080/api/v1/product/list?page=0&size=10&direction=ASC&order=title';
        fetch(url)
            .then((response) => { return response.json(); })
            .then((data) => {

                let thedata = JSON.stringify(data);
                sessionStorage.setItem('products', thedata);

                displayData(data);

            })
            .catch(function (error) { console.log(error); });

    } else {

        console.log("Data was saved in the session");

        let stored = JSON.parse(session);
        displayData(stored);
    }

}


// save data in a session

function displayData(data) {
    let products = data;
    products.map(function (product) {
        let card = `
                <div class='card mycard' style='width: 18rem;'>
                <div class='card-header'>   ${product.title}    </div>
                <ul class='list-group list-group-flush'>
                <li class='list-group-item'>Code: ${product.code}</li>
                <li class='list-group-item'>Price: ${product.price}</li>
                <li class='list-group-item'>Category: ${product.category}</li>
                </ul>
                </div>`;
        const div = document.getElementById('content');
        div.insertAdjacentHTML('afterbegin', card); // window.document.body
    });
}





// ------------------------ 9


let numbers = [];

function addNumber() {
    var x = document.getElementById("myNumber").value;
    console.log("Added number: " + x);
    numbers.push(x);
    document.getElementById("numbersSpan").innerHTML = numbers;
    console.log("Numbers list: " + numbers)
}

function checkTarget() {
    var x = document.getElementById("targetNum").value;

    let gotten = false;

    for (let i = 0; i < numbers.length; i++) {
       
        for (let j = 1; j < numbers.length; j++) {
            let next = +numbers[i] + +numbers[j];
            if ( i === j ) continue;
            if ( +x === +next ) {
                gotten = true;
                document.getElementById("resultSpan").innerHTML = "Match Found 😁 , positions: " + i + " , " + j;
            }
            if (gotten) break;
        }
        if (gotten) break;
    }

    if (!gotten) { document.getElementById("resultSpan").innerHTML = "No matched numbers founded 😕"; }
}

// -------------------------- 10

function checkText() {
    var text = document.getElementById("theText").value;
    const myArray = text.split(" ");
    let filteredArray = myArray.filter(e => e !== '');
    let word = filteredArray[filteredArray.length - 1];
    document.getElementById("resultTextChecker").innerHTML = "L'ultima parola è \"" + word + "\" di lunghezza " + word.length;
}