import { useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../components/Product/Product";

const SinglePage = () => {
    const {prod_id} = useParams();

    const [product, SetProduct] = useState({});

    fetch(`https://flowers.avavion.ru/api/products/${prod_id}`)
    .then((response) => response.json())
    .then((data)=>{
        SetProduct(data.data);
    })   

    return(
        <>
            <div className="products">
                <Product key={product.id} product={product}/>
            </div>
        </>
    )
}
export default SinglePage;