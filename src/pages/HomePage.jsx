import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Product from "../components/Product/Product";
import { Tags } from "../types/tags";


const HomePage = () => {

    const[products, setProducts] = useState([]);
    const[query, setQuery] = useState("");
    const[sort, setSort] = useState("");
    const[filteredProducts,setFilteredProducts] = useState([]);

    fetch("https://flowers.avavion.ru/api/products")
    .then((response) => response.json())
    .then((data)=>{
        setProducts(data.data);
        setFilteredProducts(data.data);
    })  

    useEffect(() => {
        setFilteredProducts(products.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())))
    },[query])

    const onChangeQuery = (event) => {
        setQuery(event.target.value);
    }


    return (
        <>
            <div className="first_line">
                <div className="search-box">
                    <input value={query} onChange={(e) => onChangeQuery(e)} type="text" placeholder="search..."/>
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
                            <NavLink key={tag.id} to={"tagged/"+tag.id} className="tag">{tag.tag}</NavLink>
                        );
                    })
                }
                </div>
                <div className="aplic-box">
                    <div className="aplic-header">Заявка</div>
                    <form method="POST" name="aplic">
                        <input name="name" type="text" placeholder="name"></input>
                        <input name="name" type="text" placeholder="adress"></input>
                        <input name="name" type="text" placeholder="message"></input>
                        <input name="name" type="text" placeholder="prod_id"></input>
                        <input name="name" type="email" placeholder="email"></input>
                        <button type="submit" name="aplic">Enter</button>
                    </form>
                    
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
export default HomePage;