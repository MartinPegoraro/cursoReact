import { useState } from "react";

import Card from "./components/Card";
import Container from "./components/Container"
import UserForm from "./components/UserForm";


const App = () => {
  const [usuarios, setUsuarios] = useState([])

  const submit = (usuario) => {
    setUsuarios([
      ...usuarios,
      usuario
    ])
  }
  // console.log(formulario, usuarios);

  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit}></UserForm>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(user =>
              <li key={user.email}>{`${user.name}  ${user.lastname} correo:${user.email}`}</li>)}
          </ul>
        </Card>
      </Container >
    </div >
  )
}

export default App