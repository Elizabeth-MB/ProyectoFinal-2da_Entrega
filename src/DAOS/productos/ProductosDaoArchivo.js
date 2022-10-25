import ContenedorArchivo from "../../contenedores/ContenedorArchivo"

class ProductosDaoArchivo extends ContenedorArchivo {

    constructor() {
        super('../../data/products.json')
    }

    async desconectar() {

    }
}

export default ProductosDaoArchivo