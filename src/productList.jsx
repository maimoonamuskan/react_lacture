import Product from "./Product";

function ProductList() {

    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 800
        },
        {
            id: 2,
            name: "Mobile",
            price: 500
        },
        {
            id: 3,
            name: "Headphones",
            price: 100
        }
    ];

    return (
        <div>
            <h1>Product List</h1>

            {products.map((product) => (
                <Product
                    key={product.id}
                    name={product.name}
                    price={product.price}
                />
            ))}
        </div>
    );
}

export default ProductList;