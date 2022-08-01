import Link from "next/link"
import Image from 'next/image'
import Dog from '../public/perro.jpeg'

export default function Home() {
  return (
    <div>
      <Link href="/newpages"> Ir a las paginas nuevas</Link>
      <p>Martin Pegoraro</p>
      <Image src={Dog} width={400} height={400} />
    </div>
  )
}
