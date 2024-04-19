import errorImg from "../assets/error.png";

const Error = () => {
    return (
        <div style={errorStyle.container}>
            <img src={errorImg} alt="Error"  style={errorStyle.img}/>
            <h1 style={errorStyle.title}>Something went wrong, please try again ...</h1>
        </div>
    );
};

export default Error;


const errorStyle = {
    container : {
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    },
    img : {
        width: "10%",
        resizeMode: "contain",
    },
    title : {
        color: "red",
    }
}