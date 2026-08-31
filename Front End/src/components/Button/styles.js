import styled from "styled-components";

export const Button = styled.button`
    border: ${(props) => props.theme === "primary" ? "none" : "1px solid #fff"};
    border-radius: 30px;
    background: ${(props) => props.theme === "primary" ? "linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)" : "transparent"};
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        transition: 500ms;
        ${(props) => props.theme === "primary" ? "background-color: none" : "background-color: #172556; transition: 500ms"}
    }

    &:active {
        opacity: 0.5;
        ${(props) => props.theme === "primary" ? "background-color: none" : "background-color: #15214e"}
    }
`