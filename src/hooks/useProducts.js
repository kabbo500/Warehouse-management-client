import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-stream-54562.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return [products, setProducts];
}
export default useProducts;