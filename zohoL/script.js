var products = [
  {
    id: 0,
    name: "redmi",
    available: 10,
    limit: 10,
    category: "Mobile",
    price: 1000,
  },
  {
    id: 1,
    name: "iphone",
    available: 10,
    limit: 10,
    category: "Mobile",
    price: 2000,
  },
  {
    id: 2,
    name: "lenovo",
    available: 10,
    limit: 10,
    category: "Laptop",
    price: 3000,
  },
  {
    id: 3,
    name: "dell",
    available: 10,
    limit: 10,
    category: "Laptop",
    price: 3000,
  },
  {
    id: 4,
    name: "phoneix",
    available: 10,
    limit: 10,
    category: "TV",
    price: 1000,
  },
  {
    id: 5,
    name: "american tourister",
    limit: 10,
    available: 10,
    category: "Bag",
    price: 1000,
  },
];
class User {
  constructor(username, password, signIn, products) {
    this.cart = [];
    this.username = username;
    this.password = password;
    this.signIn = signIn;
    for (var i = 0; i < products.length; i++) {
      this.cart.push({
        name: products[i].name,
        category: products[i].category,
        price: products[i].price,
        noof: 0,
      });
    }
  }
}

var category = ["Mobile", "Laptop", "TV", "Bag"];

var users = [
  new User("malk", "malk", false, products),
  new User("arun", "arun", false, products),
];

function cartDetailsAdding() {
  for (var i = 0; i < products.length; i++) {
    cart[i] = {
      name: products[i].name,
      category: products[i].category,
      price: products[i].price,
      noof: 0,
    };
  }
}

function toggle() {
  const list = document.querySelector(".list");
  // console.log(list.classList.contains("hidden"));
  if (list.classList.contains("hidden") == true) {
    list.classList.remove("hidden");
  } else {
    list.classList.add("hidden");
  }
}

function displayCart() {
  var txt = "";
  var total = 0;

  document.querySelector(".list").innerHTML = "";

  var i;
  var j;
  for (i = 0; i < category.length; i++) {
    var c = 0;
    var unit = 0;
    txt = `<p>${category[i]}</P>`;

    //console.log(user_id);
    for (j = 0; j < users[user_id]["cart"].length; j++) {
      if (
        users[user_id].cart[j].category === category[i] &&
        users[user_id].cart[j].noof != 0
      ) {
        c++;
        mul = users[user_id].cart[j].noof * users[user_id].cart[j].price;
        unit += mul;
        txt += `<p id="cart-${j}">${users[user_id].cart[j].name} ${users[user_id].cart[j].noof}       (${users[user_id].cart[j].noof} * ${users[user_id].cart[j].price})  =  (${mul}  )  </p>`;
      }
    }
    txt += `<p id="unit-${j}">price=${unit} </p>  `;
    txt += `</br>`;
    total += unit;

    if (c != 0) document.querySelector(".list").innerHTML += txt;
  }

  document.querySelector(
    ".list"
  ).innerHTML += `<p id="total-pr">total-${total}</p>`;
}

function displaycategoryElements() {
  const categorydiv = document.getElementById("category");
  categorydiv.innerHTML = "";
  var txt = "";

  for (var i in category) {
    txt += `
      <input id='Menu-${category[i]}'
        type="button"
        value="${category[i]}"
        onclick="filterItems('${category[i]}')"
      ></input>
    `;
  }

  categorydiv.innerHTML += txt;
}

function filterItems(category1) {
  const ele = document.querySelector(".active");

  if (ele != null) ele.remove();

  for (var i = 0; i < category.length; i++)
    document.getElementById("Menu-" + category[i]).style.color = "black";

  document.getElementById("Menu-" + category1).style.color = "blue";
  const productdiv = document.getElementById("product");
  var txt = "";
  txt += `<div id="${category1}" class="active" "> <ul style="list-style-type: none">`;
  for (var product in products) {
    //console.log(products[product].);
    // console.log(category);

    if (products[product].category == category1) {
      txt += `
      <li style="float: left; padding: 16px;" id=" ${products[product].id} ">${products[product].name}
      <p>price-${products[product].price}</p>
      
      <p id="${product}-avail" >total-availabe-items-${products[product].available}</p>
           
</br>
      <button onclick="reduceValue('input-${product}')">"-"</button>
      <input onclick="checkValue('input-${product}')" id="input-${product}" padding: 2px type="number"  /> 
      <button onclick="incrementValue('input-${product}')">"+"</button>
      </li>`;
    }
  }
  txt += `<ul></div>`;

  productdiv.innerHTML += txt;

  for (var product in products) {
    if (products[product].category == category1)
      document.getElementById("input-" + product).value =
        users[user_id].cart[product].noof;
  }
}

function reduceValue(val) {
  var valu = document.getElementById(val).value;
  console.log(valu);
  if (valu > 0) {
    valu--;

    products[Number(val.split("-")[1])].available++;
    users[user_id].cart[products[Number(val.split("-")[1])].id].noof--;

    document.getElementById(
      products[Number(val.split("-")[1])].id + "-avail"
    ).textContent =
      "total-availabe-items-" + products[Number(val.split("-")[1])].available;
  }

  document.getElementById(val).value = valu;
  displayCart();
}

function incrementValue(val) {
  var valu = document.getElementById(val).value;

  if (valu == 0) {
    valu++;

    products[Number(val.split("-")[1])].available--;
    users[user_id].cart[Number(val.split("-")[1])].noof++;

    //    console.log(products[Number(val.split("-")[1])].id);
    //  console.log(cart[products[Number(val.split("-")[1])].id]);

    //console.log(cart[1]);
  } else {
    //console.log(products[Number(val.split("-")[1])].limit);
    if (valu >= 0 && products[Number(val.split("-")[1])].available > 0) {
      valu++;

      products[Number(val.split("-")[1])].available--;

      users[user_id].cart[products[Number(val.split("-")[1])].id].noof++;
      //  console.log(cart[products[Number(val.split("-")[1])].id]);
    }
  }

  document.getElementById(
    products[Number(val.split("-")[1])].id + "-avail"
  ).textContent =
    "total-availabe-items-" + products[Number(val.split("-")[1])].available;
  document.getElementById(val).value = valu;
  displayCart();

  // console.log(cart[products[Number(val.split("-")[1])].id]);
}

function checkValue(val) {
  var valu = document.getElementById(val).value;

  console.log(valu);
  if (valu >= 0) {
    /*if (products[Number(val.split("-")[1])].available >= valu) {
      users[user_id].cart[products[Number(val.split("-")[1])].id].noof = valu;

      products[Number(val.split("-")[1])].available =
        products[Number(val.split("-")[1])].available - valu;

      document.getElementById(
        products[Number(val.split("-")[1])].id + "-avail"
      ).textContent =
        "total-availabe-items-" + products[Number(val.split("-")[1])].available;
    } else*/

    if (products[Number(val.split("-")[1])].limit >= valu) {
      users[user_id].cart[products[Number(val.split("-")[1])].id].noof = valu;
      products[Number(val.split("-")[1])].available =
        products[Number(val.split("-")[1])].limit - valu;

      document.getElementById(
        products[Number(val.split("-")[1])].id + "-avail"
      ).textContent =
        "total-availabe-items-" + products[Number(val.split("-")[1])].available;
    } else {
      users[user_id].cart[products[Number(val.split("-")[1])].id].noof = 0;

      products[Number(val.split("-")[1])].available =
        products[Number(val.split("-")[1])].limit;

      document.getElementById(val).value = 0;
      document.getElementById(
        products[Number(val.split("-")[1])].id + "-avail"
      ).textContent =
        "total-availabe-items-" + products[Number(val.split("-")[1])].available;
    }
  } else {
    products[Number(val.split("-")[1])].available =
      products[Number(val.split("-")[1])].limit;

    users[user_id].cart[products[Number(val.split("-")[1])].id].noof = 0;

    document.getElementById(val).value = 0;

    document.getElementById(
      products[Number(val.split("-")[1])].id + "-avail"
    ).textContent =
      "total-availabe-items-" + products[Number(val.split("-")[1])].available;
  }
  displayCart();
}

function fn() {
  for (i = 0; i < cart.length; i++) console.log(cart[i]);
}
displaycategoryElements();
cartDetailsAdding();
