import { Space, Image, Card, Button } from "antd"
import styles from "../styles/productCard.module.scss"
import { useDispatch } from "react-redux";
import { incrementProduct,decrementProduct } from "../redux/slices/cartSlice";

const { Meta } = Card;

const ProductCard = ({ product, qty}) => {
    const dispatch = useDispatch();
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={product.pictures[0].url} />}
        >
            <Meta title={product.name} />
            <div className={styles.flex}>
                <div>
                    <Button onClick={() => dispatch(decrementProduct(product))}>-</Button>
                    <span>{qty}</span>
                    <Button onClick={() => dispatch(incrementProduct(product))}>+</Button>
                </div>
                <div>
                    <p>${product.price[0]}</p>
                </div>
            </div>
        </Card>
    )
}

export default ProductCard;