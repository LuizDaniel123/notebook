import styled from "styled-components";

const Container = styled.header`
    background-color: black;
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 5rem;
    width: 100%;

    h1#logo {
        margin-left: 40px;
        color: black;

    }

    div {
        align-items: center;
        display: flex;
        height: 100%;
        width: 40%;
        justify-content: space-around;
        font-size: 13px;

        h1 {
        margin-left: 60px;
        font-size: 30px;
        }
    }

`;

export default Container;
