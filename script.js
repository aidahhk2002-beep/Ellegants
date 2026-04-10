let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to cart");

}

function loadCart(){

let list = document.getElementById("cartItems");

let total = 0;

cart.forEach(item => {

let row = document.createElement("tr");

row.innerHTML =
"<td>"+item.name+"</td><td class='price'>BD "+item.price+"</td>";

list.appendChild(row);

total += item.price;

});

document.getElementById("total").innerText = total;

}

function clearCart(){

localStorage.removeItem("cart");

location.reload();

}