import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./DetallesCarro";

const styles = {
    carro: {
        background: 'green',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
        fontWeight: '300',
        fontSize: '0.7rem'
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20
    }
}

class Carro extends Component {
    render() {
        const { carro, carroVisible, mostrarCarro } = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return (
            <div >
                <span style={styles.bubble}>
                    {cantidad !== 0
                        ? <BubbleAlert value={cantidad}></BubbleAlert>
                        : null}
                </span>

                <button onClick={mostrarCarro} style={styles.carro}>
                    Carrito
                </button>
                {carroVisible ? <DetallesCarro carro={carro}></DetallesCarro> : null}

            </div>
        )
    }
}

export default Carro