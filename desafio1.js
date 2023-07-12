class ProductManager {
  constructor() {
    this.products = [];
    this.productoIdCounter = 0;
    this.product = {
      id: this.productoIdCounter,
      title: "",
      description: "",
      price: 0,
      thumbnail: "",
      code: 0,
      stock: 0,
    };
  }

  addProduct(product) {
    const productoExiste = this.products.find(
      (producto) => producto.code === product.code
    );
    if (productoExiste) {
      console.log(`El producto ${productoExiste.title}  ya existe`);
      return;
    }
    if (
      !product.title ||
      !product.description ||
      !product.price ||
      !product.thumbnail ||
      !product.code ||
      !product.stock
    ) {
      console.log(
        `Debes completar todos los campos para agregar un producto ${title}`
      );
    } else {
      this.productoIdCounter++;
    }
    product.id = this.productoIdCounter;
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {    
    const producto = this.products.find((producto) => producto.id === id);

    if (!producto) {
      throw new Error("El producto no se encuentra");
    }

    return producto;
  }
}

//Proceso de Testing

/*const producto = {
  title: "Producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
};
const producto2 = {
  title: "Producto prueba 2",
  description: "Este es un producto prueba 2",
  price: 2002,
  thumbnail: "Sin imagen 2",
  code: "asdasd121115yhtyty!@#!@#",
  stock: 252,
};

const productManager = new ProductManager();
productManager.addProduct(producto);
productManager.addProduct(producto);
productManager.addProduct(producto2);
try {
         console.log(productManager.getProductById(3));
       } catch (error) {
         console.log(error.message);
      }
console.log(productManager.getProducts()); */