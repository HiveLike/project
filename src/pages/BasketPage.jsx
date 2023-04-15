import Product from "../components/Product/Product";

const BasketPage = () => {
    const initialItems = [
        {
            "id": 1,
            "name": "Кустовые розы",
            "text": " Этот прекрасный букет вызовет радостные эмоции. Цветы говорят о заботе, чистоте, внимании и признательности. Букет понравится не только юной девушке, но и женщинам всех возрастов. ",
            "preview_image": "http://flowers.avavion.ru/storage/images/01.jpg",
            "price": 8525,
            "discount": 8,
            "quantity": 18,
            "tag": "Букеты",
            "created_at": "2023-04-14T22:00:24.000000Z",
            "updated_at": "2023-04-14T22:00:24.000000Z"
            },
            {
            "id": 2,
            "name": "Ажурные красные розы 🌹",
            "text": " Этот прекрасный букет вызовет радостные эмоции. Цветы говорят о заботе, чистоте, внимании и признательности. Букет понравится не только юной девушке, но и женщинам всех возрастов. ",
            "preview_image": "http://flowers.avavion.ru/storage/images/02.jpg",
            "price": 11982,
            "discount": 15,
            "quantity": 10,
            "tag": "Цветы",
            "created_at": "2023-04-14T22:00:24.000000Z",
            "updated_at": "2023-04-14T22:00:24.000000Z"
            },
            {
            "id": 3,
            "name": "Ирисы с красными розами🌹",
            "text": " Этот прекрасный букет вызовет радостные эмоции. Цветы говорят о заботе, чистоте, внимании и признательности. Букет понравится не только юной девушке, но и женщинам всех возрастов. ",
            "preview_image": "http://flowers.avavion.ru/storage/images/03.jpg",
            "price": 16934,
            "discount": 10,
            "quantity": 8,
            "tag": "Подарочная упаковка",
            "created_at": "2023-04-14T22:00:24.000000Z",
            "updated_at": "2023-04-14T22:00:24.000000Z"
            }
    ]    

    return (
        <div className="basket">
            <div className="basket_header">Корзина</div>
            {
                    initialItems.map((product) => {
                        return (
                            <>
                            <Product key={product.id} product={product}/>
                            </>
                        );
                    })
                }
        </div>
    )
}
export default BasketPage;