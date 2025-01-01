import Cart from "./models/cart2.js"
import Product from "./models/products2.js"
import { fetchData } from "./utils/httpReq2.js"

const  productsNode=document.getElementById("products")
const cartListNode=document.getElementById("cart-list")
// console.log(cartListNode)
const totalPriceNode=document.getElementById("total-price").querySelector("span")


async function render() {

    const productsData=await fetchData()
    const cartSample=new Cart(cartListNode,totalPriceNode)
    const productSample=new Product(productsNode,productsData,cartSample)
    
    productSample.showProduct()
    // console.log(productSample)
    
}


document.addEventListener("DOMContentLoaded", render)