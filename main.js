import './style.css'

// import {test,  } from './cart.js';
// **************************************************** In Stock Cart Show.*******************************
 
 export function cartShowProduct(data) {
    console.log(data);
 }















 const productShowDiv  = document.querySelector('#productShow');

  async function getProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const res = await response.json();
    return res;
  }
 
 
  function renderProduct(data) {
    
    console.log(data.products);
    if(!data.products) {
        throw new Error("sasd");
    }
    data.products.map((cart) => {
        const div = document.createElement('div');
        div.innerHTML = `
        
      <div class="relative h-10 w-10">

      <div class="card  shadow-2xl ">
        <figure><img src="${cart.thumbnail}";
            alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${cart.title}</h2>
          <h1 class="font-semibold">$${cart.price}</h1>
          <hr>
          <!-- <p>Save - $${cart.discountPercentage}</p> -->
          <div class="card-actions justify-end">
            <button id = "addToCard${cart.id}" class="btn btn-primary">Add to Card</button>
          </div>
        </div>
      </div>


      <div class="absolute top-0 right-0 ">
        <h1 class="font-bold bg-blue-700 text-white p-3 text-center rounded-r-xl">

          ${cart.discountPercentage}% OFF
        </h1>
      </div>

    </div>
        `;

// @ts-ignore

    
            productShowDiv.appendChild(div);
       

        // *******************Add to Card Button*********************
    const addToCardButton  = productShowDiv.querySelector(`#addToCard${cart.id}`);
    addToCardButton.addEventListener('click', () => {
        cartShowProduct(cart);
    });
    });


 
  }


// **************SHow PRodcucts***********************
  renderProduct(await getProducts());



