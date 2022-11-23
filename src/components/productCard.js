import { Space, Image, Card, Button } from "antd"
import styles from "../styles/productCard.module.scss"
const { Meta } = Card;

const ProductCard = ({ product}) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={product.pictures[0].url} />}
        >
            <Meta title={product.name} />
            <div className={styles.flex}>
                <div>
                    <Button>-</Button>
                    <span>0</span>
                    <Button >+</Button>
                </div>
                <div>
                    <p>${product.price[0]}</p>
                </div>
            </div>
        </Card>
    )
}

export default ProductCard;