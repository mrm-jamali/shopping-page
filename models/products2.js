class Product {
    constructor(parent, products,cart) {
        this.parent = parent;
        this.products = products;
        this.cart=cart;
        this.parent.addEventListener("click", this);  

    }

    showProduct() {
        this.products.forEach(Product =>
            this.createCard(Product)

        );

    }

    createCard(data) {
        const cartEle = document.createElement("div")
        const imgEle = this.productImg(data)
        const infoEle = this.productInfo(data)

        cartEle.innerHTML = imgEle
        cartEle.innerHTML += infoEle

        this.parent.appendChild(cartEle)

    }
    productImg(data) {
        const {
            image,
            alt
        } = data;
        const imgJSX = `
        <img alt="${alt}" src="${image}"/> 
        `
        return imgJSX
    }
    productInfo(data) {
        const {
            id,
            name,
            price
        } = data;
        const infoJSX = `<div id="product-info">
        <h3>${name}</h3>
        <div>
        <span>${price}</span>
        <button data-id="${id}">+</button>
        </div>
        </div>
        
        `
        return infoJSX

    }

    handleEvent() {
        const element = event.target;
        if (element.tagName === "BUTTON") {
            this.addToCart(element.dataset.id)
        }

    }

    addToCart(id){
        // console.log(id)
        const product=this.products.find((i) => i.id===+id)
        // console.log(product)
        this.cart.selectProduct.push(product)
       this.cart.showProduct()
       

    }
}
export default Product