import { useEffect, useState } from "react";


const useProductUpdate = productId => {

    const [service, setService] = useState({});

    useEffect(() => {
        const url = `https://sleepy-stream-54562.herokuapp.com/service/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [productId]);
    return [service]
}
export default useProductUpdate