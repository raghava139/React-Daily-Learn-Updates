import { useEffect, useState } from "react";

const UseFetch = (url) => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d))
            .catch((err) => setError(err.message))
    }, [])

    return [data, error];
}
export default UseFetch;