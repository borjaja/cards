import styled, {css} from "styled-components";

const Button = styled.button`
    border: none;
    ${(props) =>
        props.color &&
        css`
            background-color: ${(props) => (props.length > 2 ? props.theme[props.color] : props.length < 2 ? "red" : "pink")};
            color: ${(props) => (props.length <= 1 ? "white" : "black")};
        `}
    padding: 15px 22px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: ${(props) => (props.length <= 1 ? "bold" : "normal")};
    margin: 4px 2px;
    cursor: pointer;
    min-width: 80px;
`;
export default Button;
