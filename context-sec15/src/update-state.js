import { createContext, useContext, useState } from "react";

const Context = createContext({ calor: false, toggle: () => { } })

const Provider = ({ children }) => {
    const [valor, setValor] = useState(false)
    const value = {
        valor,
        toggle: () => setValor(!valor)
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

const Component = () => {
    const { valor, toggle } = useContext(Context)

    return (
        <div>
            <label>{valor.toString()}</label>
            <br />
            <button onClick={toggle}>Toggle</button>
        </div>
    )
}

const App = () => {
    return (
        <Provider>
            <Component />
        </Provider>
    )
}

export default App