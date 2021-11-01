import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 4px;

    input {
        border: 1px solid #B3E5FC;
        border-radius: 80px;
        width: 100%;
        height: 44px;
        padding: 8px;
        font-weight: 500;
    }

    button {
        background-color: #0288D1;
        margin: 0 16px;
        padding: 8px 16px;
        border-radius: 70px;
        font-weight: bold;
        font-size: 16px;

        &:hover {
            background-color: #03A9F4;
            box-shadow: 3px 2px 10px rgba(0,0,0,0.2);
        }

        span {
            font-weight: bold;
            color: #ffff
        }
    }

`;