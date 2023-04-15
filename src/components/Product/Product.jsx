import { NavLink } from "react-router-dom";

const Product = ({product}) => {
    return(
        <NavLink to={"single/"+product.id} className="product">
            <img src={product.preview_image} alt={product.name}/>
            <div className="product_name">{product.name}</div>
            <div className="product_text">{product.text}</div>
            <div className="product_price">{product.price}</div>
        </NavLink>
    )
}
export default Product;