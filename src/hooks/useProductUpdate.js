import { useEffect, useState } from "react";


const useProductUpdate = productId => {

    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/service/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [productId]);
    return [service]
}
export default useProductUpdate