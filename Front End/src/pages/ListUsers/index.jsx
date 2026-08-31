import api from "../../services/api"
import { React, useEffect, useState } from "react"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import TopBackground from "../../components/TopBackground"
import Title from "../../components/Title"
import { CardUsers, Container, ContainerUsers, TrashIcon, AvatarUser } from "./styles"
import Trash from "../../assets/trash.svg"

function ListUsers() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get("/usuario")
            setUsers(data)
        }
        getUsers()
    }, [])

    const navigate = useNavigate()

    async function deleteUsers(id) {
        await api.delete(`/usuario/${id}`)

        const updatedUsers = users.filter(user => user.id !== id)

        setUsers(updatedUsers)
    }

    return (
        <div>
            <Container>
                <TopBackground></TopBackground>

                <Title style={{ margin: "10px" }}>Lista de Usuários</Title>

                <ContainerUsers>
                    {users.map(user => (
                        <CardUsers key={user.id}>
                            <AvatarUser src={`https://ui-avatars.com/api/?name=${user.name}`} alt="avatar"></AvatarUser>
                            <div>
                                <h3>{user.name}</h3>
                                <p>Idade: {user.age}</p>
                                <p>{user.email}</p>
                            </div>
                            <TrashIcon src={Trash} alt="icone-lixo" onClick={() => deleteUsers(user.id)}></TrashIcon>
                        </CardUsers>
                    ))}
                </ContainerUsers>

                <Button
                type="button" onClick={() => navigate("/")} theme={"primary"} style={{ width: "200px", height: "100px", fontSize: "50px", fontWeight: "bold" }}>Voltar</Button>
            </Container>
        </div>
    )
}

export default ListUsers
//Rota ->     /lista-de-usuarios