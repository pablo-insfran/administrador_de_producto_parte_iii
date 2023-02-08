const ProductsControllers = require("../controllers/products.controllers")

module.exports = app => {
    // Nuevo Producto
    app.post("/api/products/new", ProductsControllers.createProducts);

    //Mostrar Todos los Productos
    app.get("/api/products/all", ProductsControllers.allProducts);

    //Mostrar solo un Producto
    app.get("/api/products/view/:id", ProductsControllers.oneProducts);
    
    //Modificar un producto
    app.put("/api/products/edit/:id", ProductsControllers.updateProducts);
    
    //Eliminar un Producto
    app.delete("/api/products/delete/:id", ProductsControllers.deleteProducts);
}