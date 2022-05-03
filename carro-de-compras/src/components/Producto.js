import { Component } from "react";
import Button from "./Button";

const styles = {
    producto: {
        border: 'solid 1px #eee',
        color: 'red',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width: '30%',
        margin: '5px',
        padding: '10px 15px',
        borderRadius: '5px'
    },
    img: {
        width: '100%'
    }
}

class Producto extends Component {
    render() {
        console.log(this.props);
        const { producto, agregarAlCarro } = this.props
        return (
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <h5>{producto.price}</h5>
                <Button onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto