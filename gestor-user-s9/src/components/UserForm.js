import Button from './Button'
import Input from './Input'
import useFormulario from "../hooks/useformulario";

const UserForm = ({ submit }) => {

    const [formulario, handleChage, reset] = useFormulario({ name: '', lastname: '', email: '' })
    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formulario)
        reset()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input label='Nombre' name='name' value={formulario.name} onChange={handleChage} placeholder='Nombre' />
            <Input label='Apellido' name='lastname' value={formulario.lastname} onChange={handleChage} placeholder='Apellido' />
            <Input label='Correo' name='email' value={formulario.email} onChange={handleChage} placeholder='Correo' />
            <Button>Enviar</Button>
        </form>
    )
}

export default UserForm