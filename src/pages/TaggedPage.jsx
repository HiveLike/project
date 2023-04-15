import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Product from "../components/Product/Product";
import { Tags } from "../types/tags";

const fetched = ()=> {
    
}

const TaggedPage = () => {

    const {tag_id} = useParams();

    const[products, setProducts] = useState([]);
    const[filteredProducts,setFilteredProducts] = useState([]);

    fetch(`https://flowers.avavion.ru/api/products?tag=${tag_id}`)
    .then((response) => response.json())
    .then((data)=>{
        setProducts(data.data);
    })  

    useEffect(() => {
        setFilteredProducts(products)
    },[products])

    return (
        <>
            <div className="first_line">
                <div className="search-box">
                    <input  onChange={(e) => onChangeQuery(e)} type="text" placeholder="search..."/>
                </div>
                <div className="filter-box">
                    <select name="sort" onChange={(e) => onChangeCategoryHandle(e)}>
                        <option value="none">Выберите сортировку</option>
                        <option value="ascending">По возрастанию</option>
                        <option value="descending">По убыванию</option>
                    </select>
                </div>
                <div className="tag-box">
                {
                    Tags.map((tag) => {
                        return (
                            <NavLink key={tag.id} to={"../tagged/"+tag.id} className="tag">{tag.tag}</NavLink>
                        );
                    })
                }
                </div>
            </div>            
            <div className="products">
                {
                    filteredProducts.map((product) => {
                        return (
                            <>
                            <Product key={product.id} product={product}/>
                            </>
                        );
                    })
                }
            </div>
        </>
    )

}
export default TaggedPage;