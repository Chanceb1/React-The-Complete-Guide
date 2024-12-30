import { ProductDetails } from './ProductDetails';
import { Link } from 'react-router-dom';

const PRODUCTS = [
    {
        id: 'product1',
        title: 'Product 1',
        description: 'This is product 1'
    },
    {
        id: 'product2',
        title: 'Product 2',
        description: 'This is product 2'
    },
    {
        id: 'product3',
        title: 'Product 3',
        description: 'This is product 3'
    }
];

export default function Products() {
    return (
        <>
            <h1>The Products Page</h1>
            <ul>
                {PRODUCTS.map((prod) => (
                    <li key={prod.id}>
                        <Link to={`/products/${prod.id}`}>{prod.title}</Link>
                    </li>
                ))}
            </ul>
        </>
);
}