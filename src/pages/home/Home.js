const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to Redux Demo</h1>
        </div>
    );
};

export default Home;


const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    },
    title: {
        color: "red",
    },
}