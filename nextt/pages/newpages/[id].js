import useIsMounted from '../../hooks/useIsMounted'
import { useRouter } from 'next/router'
const PagesDinamic = () => {
    const isMounted = useIsMounted()
    const router = useRouter()

    if (!isMounted) {
        return null
    }
    console.log({ router }, router.query.id);

    return (
        <div>
            <p>Paginas dinamicas</p>
        </div>
    )
}

export default PagesDinamic