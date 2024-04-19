import { useDispatch, useSelector } from "react-redux";
import { getCart, loadCart, deleteFromCart } from "../../store/slice/cartSlice";
import { useEffect } from "react";
import styled from "styled-components";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(getCart);

    useEffect(() => {
        dispatch(loadCart());
    }, [dispatch]);

    const handleDelete = (postId) => {
        dispatch(deleteFromCart(postId));
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Shopping Cart</h1>
            {cart.length === 0 ?
                <h3>Your cart is empty</h3>
                :
                <StyledTable>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </StyledTable>
            }

        </div>
    );
};

export default Cart;

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    title: {
        textAlign: "center",
    }
};
const StyledTable = styled.table`
    width: 80%;
    margin-top: 20px;
    border-collapse: collapse;

    th, td {
        padding: 10px;
        border: 1px solid #ddd;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #f2f2f2;
    }

    button {
        padding: 5px 10px;
        border: none;
        background-color: #f44336;
        color: white;
        cursor: pointer;
    }

    button:hover {
        background-color: #d32f2f;
    }
`;