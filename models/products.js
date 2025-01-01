class Products {
    constructor(parent,products,cart) {
        this.parent = parent;
        this.products = products;
        this.cart=cart;
        this.parent.addEventListener("click",this);


    }
    showProducts() {
        this.products.forEach(product => this.createCard(product)

        );
    }
    
    createCard(data) {
        const cartEle = document.createElement("div")
    
       const imgEle=this.productImg(data)
       const infoEle=this.productInfo(data)

        cartEle.innerHTML=imgEle;
        cartEle.innerHTML +=infoEle;
     
        this.parent.appendChild(cartEle)

    }

    productImg(data) {
        const {
            image,
            alt
        } = data
        const imgJSX = `
        <img alt="${alt}" src="${image}" />
        `
        return imgJSX
    }
    productInfo(data){
        const {id,name,price}=data;
        const infoJSX=`
        <div id="product-info">
        <h3>
        ${name}
        </h3>
        <div>
        <span>${price}</span>
        <button data-id="${id}">+</button>
        </div>
        
        </div>
        `
        return infoJSX;
    }
    handleEvent(){
       const element=event.target
    
       if(element.tagName==="BUTTON"){
        this.addtoCart(element.dataset.id)

       }
    }
    addtoCart(id){
        const product=this.products.find((i) => i.id === +id);
        console.log(product)
      this.cart.selecteproducts.push(product);
    //   console.log("hi:",this.cart)
    this.cart.showProducts()
    }
}

export default Products;