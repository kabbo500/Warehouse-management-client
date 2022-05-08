import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://gentle-gorge-41754.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return [products, setProducts];
}
export default useProducts;