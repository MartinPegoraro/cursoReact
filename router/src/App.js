import { Routes, Route, Navigate, useParams, NavLink, useNavigate, useLocation } from 'react-router-dom'
import './App.css'

const Inicio = () => {
  return (
    <h1>Inicio</h1>
  )
}

const Error = () => {
  return (
    <h1>404 - not found</h1>
  )
}

const Perfil = () => {
  const loggedIn = false
  if (!loggedIn) {
    return <Navigate to='/' />
  }
  return (
    <h1>Perfil</h1>
  )
}


const Proyecto1 = () => {
  let params = useParams()
  return (
    <h2>Proyecto {params.id}</h2>
  )
}


const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <NavLink to={'/portafolio/proyecto1'}>Proyecto 1</NavLink>
        </li>
        <li>
          <NavLink to={'/portafolio/proyecto2'}>Proyecto 2</NavLink>
        </li>
      </ul>
      <div>
        <section>
          <Routes>
            <Route path=':id' element={<Proyecto1 />} />

          </Routes>
        </section>
      </div>
    </div>
  )
}

const App = () => {
  const navigate = useNavigate()
  // console.log({ navigate });
  const location = useLocation()
  console.log({ location });
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/perfil'>Perfil</NavLink>
          </li>
          <li>
            <NavLink to='/portafolio'>Portafolio</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/portafolio/*' element={<Portafolio />} />
          <Route path='/perfil/' element={<Perfil />} />
          <Route path='*' element={<Error />} />
        </Routes>

      </section>
      <section className='avatars'>
        <img src='https://unavatar.io/twitter/midudev' alt='' />
        <img src='https://unavatar.io/twitter/MartinPegoraro7' alt='' />
        <img src='https://unavatar.io/twitter/mariadmolivieri' alt='' />
        <img src='https://unavatar.io/twitter/superzayayin_' alt='' />
        <img src='https://unavatar.io/twitter/vxal_1' alt='' />

      </section>
    </div>

  );
}

export default App;
