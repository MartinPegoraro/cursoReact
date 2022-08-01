import { useRouter } from "next/router"

const Desc = () => {
    const router = useRouter()
    console.log({ router });

    return (
        < div >
            <h3>Descripcion de Pokemones</h3>
        </div >

    )
}

export default Desc