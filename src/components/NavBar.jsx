import styled from 'styled-components';
import {router} from "../App";


const NavBar = () => {
    return (
        <nav style={navBarStyle.container}>
            <Button  onClick={() => router.navigate("/")}>Home</Button>
            <Button  onClick={() => router.navigate("/posts")}>Posts</Button>
            <Button  onClick={() => router.navigate("/recipes")}>Recipes</Button>
            <Button  onClick={() => router.navigate("/cart")}>Cart</Button>
        </nav>
    );
};
export default NavBar;

const navBarStyle = {
    container : {
        backgroundColor : "#333",
        display : "flex",
        alignItems : "center",
        padding:"1rem"
    }
}
export const Button = styled.button`
    border:none;
    background-color: transparent;
    color: white;
    border-radius: 5px;
    font-size: 1rem;
    padding:.5rem 1rem;
    
    &:hover {
        background-color: white;
        color: #333;
    }
`;