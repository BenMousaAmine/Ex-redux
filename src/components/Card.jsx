import { FaCircleArrowDown } from "react-icons/fa6";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "./NavBar";



const Card = ({ data ,id}) => {
    const [toggle, setToggle] = useState(false)
    return (
        <div style={style.container}>
            <div style={style.header}>
                <h3>{data.title}</h3>
                <FaCircleArrowDown onClick={() => setToggle(!toggle)} size={25}/>
            </div>
            <div>
                {toggle &&
                    <>
                    <p>{data.body}</p>
                        <Link to={"/posts/" + (++id)}> <Button style={style.btn}> Details</Button></Link>
                    </>
                }

            </div>



        </div>
    )
}
export default Card

const style={
    container : {
        width: "30%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "lightgray",
        margin: "1rem",
        padding: "1rem",
        borderRadius: "10px",

    },
    header: {
        width: "100%",
        minHeight: "3rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    btn :{
        padding: ".5rem",
        color:"green",
        fontWeight: "bold",
    }
}
