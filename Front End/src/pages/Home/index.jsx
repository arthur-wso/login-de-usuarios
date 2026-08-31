import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"


import {
  Container,
  Form,
  ContainerInputs,
  Input,
  InputLabel
} from "./styles.js"

import Title from "../../components/Title"
import TopBackground from "../../components/TopBackground"
import Button from "../../components/Button"

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    const data = await api.post("/usuario", {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })

  }

  return (
    <Container>
      <TopBackground />
      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome <span>*</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName}></Input>
          </div>

          <div>
            <InputLabel>
              Idade <span>*</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={inputAge}></Input>
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <InputLabel>
            E-mail <span>*</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={inputEmail}></Input>
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
      </Form>

      <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>Ver Lista de Usuários</Button>

    </Container>
  )
} // O JSX sempre precisa de uma box pai (que envolve tudo)

export default Home
/*
  exportar "Padrão" -> Uma coisa só por página = export default "(nome do que deseja exportar)"
  apenas Exportar -> Várias coisas por página = export (atrás do que deseja exportar)
*/