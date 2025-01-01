class Cart {
  constructor(parent, price) {

    this.parent = parent;
    this.price = price;
    this.selecteproducts = [];
    this.toShow = [];
    this.parent.addEventListener("click",this)
  }

  

  showProducts() {
    this.toShow = [...new Set(this.selecteproducts)]
    console.log("n:", this.toShow)
    this.parent.innerHTML = "";
    this.toShow.forEach(product => {
      const qty = this.selecteproducts.filter(p => p.id === product.id).length;
      this.createCard(product, qty)

    });
   this.totalPrice()
  }
  createCard(data, qty) {
    const cartEle = document.createElement("div");
    const img = this.productImg(data);
    const productInfo = this.productInfo(data);
    const productcontrol = this.productcontrol(data, qty);
    cartEle.innerHTML = img;
    cartEle.innerHTML += productInfo;
    cartEle.innerHTML += productcontrol;
    this.parent.appendChild(cartEle);

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
  <img src="${image}" alt="${alt}">
  `
    return imgJSX
  }

  productInfo(data) {
    const {
      name,
      price
    } = data;
    const productInfoJSX = `
  <div id="cart-info">
  <span>${name}</span>
  <span>${price}$</span>
  <div>
  </div>
  `
    return productInfoJSX

  }
  productcontrol(data, qty) {
    const {
      id
    } = data;
    const controlJSX = `
  <div id="cart-control">
 
  <div>
  <button data-id=${id}>+</button>
  <span>${qty}</span>
  <button data-id=${id}>-</button>
  </div>
  <button data-id=${id}>remove</button>
  </div>
  `
    return controlJSX;
  }

handleEvent(event){
  // console.log(click);
  const tagName=event.target.tagName;
  const id=event.target.dataset.id;
  const type=event.target.innerText;
  if (tagName !== "BUTTON") return
  switch(type){
    case "+":
      this.increase(id)
      break
    case "-":
      this.decrease(id);
      break
    case "remove":
      this.remove(id);
      break;
  }

}







  increase(id) {
    const product = this.selecteproducts.find(p => p.id === +id);
    this.selecteproducts.push(product);
    this.showProducts();


  }
  decrease(id) {
     const index=this.selecteproducts.findIndex(p=>p.id===+id);
     this.selecteproducts.splice(index,1);
     this.showProducts() ;

  }
  remove(id) {
    const newProduct=this.selecteproducts.filter(p=>p.id!==+id);
    this.selecteproducts=newProduct;
    this.showProducts();

  }
 

  totalPrice(){
    const total=this.selecteproducts.reduce((acc,cur)=> (acc+=cur.price),0);
    this.price.innerText=total;
    console.log(total)
  }

}
export default Cart;