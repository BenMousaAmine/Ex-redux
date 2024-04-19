import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findPostById} from "../../store/slice/postsSlice";
import styled from "styled-components";
import {addPostToCart} from "../../store/slice/cartSlice";



const PostDetail = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const postId = parseInt(id);
    const posts = useSelector(state => findPostById(state, postId))
    return(
        <div style={styles.container}>
            <div  style={styles.card}>
                <h1>{posts.title}</h1>
                <p>{posts.body}</p>
                <div style={styles.tags}>
                    <h3>tags :</h3>
                    {posts.tags.map((tag, index) => (
                        <p key={index}>{tag}</p>
                    ))}
                </div>

                 <Button style={styles.btn}  onClick={() => dispatch(addPostToCart(posts))}>
                     add to cart</Button>
            </div>
        </div>
    )
}


export default PostDetail

const styles = {
    container :{
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
    },
    card:{
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "column",
        marginTop : "20px",
        border: "1px solid lightgray",
        padding: "1rem",
        width: "50%",
        borderRadius: "10px"
    },
    tags:{
        display : "flex",
        alignItems : "center",
        justifyContent : "space-between",
        width: "40%",

    },
}
const Button = styled.button`
    background-color: transparent;
    border-radius: 5px;
    font-size: 1rem;
    padding: .5rem 1rem;
    color: green;
    font-weight: bold;
    border: 1px solid green;

    &:hover {
        background-color: rgba(109, 173, 61, 0.5);
        color: #333;
    }
`;