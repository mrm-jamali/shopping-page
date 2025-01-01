class Cart {
    constructor(parent, price) {
        this.parent = parent;
        this.price = price;
        this.selectProduct = [];
        this.toShow = [];
        this.parent.addEventListener("click", this)

    }

    showProduct() {
        this.toShow = [...new Set(this.selectProduct)]
        this.parent.innerHTML = ""
        this.toShow.forEach(product => {
                const qty = this.selectProduct.filter((p) => p.id === product.id).length;
                console.log(qty)
                this.createCard(product, qty)

            }

        )
        this.calculateTotalPrice();
    }
    createCard(data, qty) {
        const CartEle = document.createElement("div")
        console.log(CartEle)
        const imgEle = this.productImg(data)
        const productInfo = this.productInfo(data)
        console.log(productInfo)
        const controlEle = this.productcontrol(data, qty)
        CartEle.innerHTML = imgEle;
        CartEle.innerHTML += productInfo;
        CartEle.innerHTML += controlEle;

        this.parent.appendChild(CartEle)
    }
    productImg(data) {
        const {
            image,
            alt
        } = data;
        const imgJSX = `
<img alt=${alt} src=${image} />
    `
        return imgJSX;

    }
    productInfo(data) {
        const {
            name,
            price
        } = data;
        const infoJSX = `
    <div id="cart-info">
    <h4>${name}</h4>
    <p>${price}</p>
    </div>
    `
        return infoJSX


    }
    productcontrol(data, qty) {
        const {
            id
        } = data;
        const controlJSX = `
<div id="cart-control">
<div>
<button data-id=${id}>
-
</button>
<span>${qty}</span>
<button data-id=${id}>+</button>
</div>
<button data-id=${id}>remove</button>
</div>
`;
        return controlJSX
    }

    handleEvent(event) {
        console.log("click")
        const tagName = event.target.tagName;
        const id = event.target.dataset.id;
        const type = event.target.innerText;
        if (tagName !== "BUTTON") return
        console.log("itas button")
        // if(tagName)
        switch (type) {
            case "+":
                this.increase(id)
                break;

            case "-":
                this.decrease(id)
                break;

            case "remove":
                this.remove(id)
                break;

        }

    }
    increase(id) {
        const Product= this.selectProduct.find((p) => p.id === +id);
        this.selectProduct.push(Product)
        this.showProduct()

    }
    decrease(id) {
        const index = this.selectProduct.findIndex(p => p.id === +id);
        this.selectProduct.splice(index, 1);
        this.showProduct();

    }
    remove(id) {
        const newProduct = this.selectProduct.filter(p => p.id !== +id);
        this.selectProduct = newProduct;
        this.showProduct();  

    }
    calculateTotalPrice() {
        const total = this.selectProduct.reduce((acc, cur) => (acc += cur.price), 0);
        this.price.innerText = total;
    }

}

export default Cart