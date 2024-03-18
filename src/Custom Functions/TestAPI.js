import { useEffect, useState } from "react";
import UseFetch from "./CustFunc";

const TestingAPI = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [data, error] = UseFetch('https://jsonplaceholder.typicode.com/users');
                console.log('data', data)
                console.log('error', error)
                setData(data);
                setError(error);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h1>Testing API</h1>
        </>
    );
};

export default TestingAPI;
