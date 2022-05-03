import { Component } from "react";
import Producto from "./Producto";

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

/* It's a class that renders a div with a bunch of Producto components inside of it. */
class Productos extends Component {
    render() {
        const { productos, agregarAlCarro } = this.props

        return (
            <div style={styles.productos}>
                {productos.map(producto =>
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}
                    />)}
            </div>
        )
    }
}

export default Productos