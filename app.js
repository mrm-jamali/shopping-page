import Cart from "./models/cart.js";
import Products from "./models/products.js"
import { fetchData } from "./utils/httpReq.js"

const productsNode= document.getElementById("products")
const cartListNode= document.getElementById("cart-list");
const totalPriceNode= document.getElementById("total-price").querySelector("span");
console.log("111111111",totalPriceNode)

 async function render(){
    
    const productsData=await fetchData()
    const cartInstance=new Cart(cartListNode,totalPriceNode)
    const productInstance=new Products(productsNode,productsData,cartInstance);
    // console.log(cartInstance)
    productInstance.showProducts()
  
     //console.log(productInstance)
}

document.addEventListener("DOMContentLoaded",render)
