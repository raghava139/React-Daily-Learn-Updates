import axios from "axios";
import { useEffect, useState } from "react";

function LazyForAPI() {

    const [data, setData] = useState();

    async function TestingAPI() {
        const ResponseAPi = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log('response', ResponseAPi?.data)
        setData(ResponseAPi?.data);
    }

    useEffect(() => {
        TestingAPI()
    }, [])

    useEffect(() => {

    }, [data])
    return (
        <>
            {
                data?.map((test) => {
                    return<div key={test.id}> <p>{test?.name}</p></div>
                })
            }
        </>
    )

}
export default LazyForAPI;