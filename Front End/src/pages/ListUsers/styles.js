import styled from "styled-components";

export const Container = styled.div`
    background-color: #181f36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 40px 0;

    @media (max-width: 880px){
    grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 500px;
    border-radius: 25px;

    h3 {
        color: #fff;
        font-size: 30px;
        font-weight: 500;
        margin-bottom: 7px;
        text-transform: capitalize;
    }
    p{
        font-weight: lighter;
        color: #fff;
        font-size: 25px;
    }
`

export const TrashIcon = styled.img`

    cursor: pointer;
        &:hover{
            opacity: 0.8;
    }
        &:active{
            opacity: 0.5;
    }

`

export const AvatarUser = styled.img`
    height: 100px;
    border-radius: 50px;
`