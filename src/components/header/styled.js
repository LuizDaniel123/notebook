import styled, { StyledComponent } from "styled-components";

const Container = styled.header`
    align-items: center;
    background-color: silver;
    display: flex;
    justify-content: space-between;
    height: 5rem;
    width: 100%;

    div#divMenu {
        align-items: center;
        display: flex;
        height: 100%;
        width: 40%;
        justify-content: space-around;
        font-size: 13px;
    }

    h1#h1Logo {
        margin-left: 60px;
        font-size: 30px;
    }
`;

export default Container;
