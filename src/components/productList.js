import axios from "axios";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";

import { productApi } from "../constants";
import ProductCard from "./productCard";
import styles from "../styles/productList.module.scss";
import { fetchProducts } from "../redux/slices/productsSlice";
const ProductList = () => {

    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter)
    const cart = useSelector((state)=> state.cart)
    const products = useSelector((state) => state.products.value)



    // const [products, setProducts] = useState([]);
    // const fetchData = async () => {
    //     try {
    //         const { data } = await axios.get(productApi);
    //         const tempProducts = data.map(e => {
    //             let id = (uuidv4().split("-").join(""));
    //             return ({ ...e, id })
    //         })
    //         setProducts(tempProducts);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    useEffect(() => {
        // fetchData();
        dispatch(fetchProducts());
    }, [])
    return (
        <div>
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>
                {counter.value}
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
            <div className={styles.grid}>
                {products.map(e => {
                    let qty = 0
                    const product = cart.product.filter(p => p.id == e.id);
                    if(product.length) qty = product[0].qty
                    return <ProductCard product={e} qty={qty}/>
                })}
            </div>
        </div>
    )
}

export default ProductList;