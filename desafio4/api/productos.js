class  ApiProductos {
    constructor() {
        this.productos = [];
        this.id = 0;
    }

    verTodos() {
        return [... this.productos];
    }

    verPorId(id) {
        const prod = this.productos.find(prod => prod.id === id);
        return prod || {error: 'producto no encontrado'};
    }

    guardarProducto(prod) {
        const newProd = {...prod, id: ++this.id};
        this.productos.push(newProd);
        return newProd;
    }

    actualizarId (prod, id) {
        const newProd = {id: parseInt(id), ... prod};
        const index = this.productos.findIndex((p) => p.id === id);
        if (index !== -1) {
            this.productos[index] = newProd;
            return newProd;
        } else {
            console.log('El producto con ese id no se ha encontrado');
        }
    }

    borrarId (prod, id) {
        const newProd = {id: parseInt(id), ... prod};
        const index = this.productos.findIndex(p => p.id === id);
        if (index !== -1) {
            this.productos.splice(index,1);
        } else {
            console.log('El producto con ese id no se ha encontrado');
        }
    }
}

module.exports = ApiProductos;