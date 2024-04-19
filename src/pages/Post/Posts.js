import {useDispatch, useSelector} from "react-redux";

import {useEffect, useState} from "react";
import {fetchAllPosts, getAllPosts} from "../../store/slice/postsSlice";
import Error from "../../components/Error";
import Card from "../../components/Card";
import Loading from "../../components/Loading";


const Posts  = () => {
    const dispatch = useDispatch();
    const posts = useSelector(getAllPosts);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        dispatch(fetchAllPosts(limit));
    }, [limit]);
    const handleSelectChange= (e) => {
        setLimit(e.target.value);
    }
    console.log("p", posts.data)
    return (
        <>
            <h3>Select Products limit</h3>
            <select onChange={e => handleSelectChange(e)}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
                <option value={50}>50</option>
            </select>
            {posts.loading ?
                <Loading />
                : posts.error ?
                    <Error />
                    :
                    posts.data.map((p, index) => (
                        <div style={postStyle.cardContainer} key={index}>
                            <Card  id ={index}  data={p}/>
                        </div>


                ))
            }

        </>

    )
}


export default Posts;

const postStyle = {
    cardContainer : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1px",
        border: "1px solid #ccc",
        margin: "10px"
    }
}