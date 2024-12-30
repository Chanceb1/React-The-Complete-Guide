import { Link, useNavigate } from 'react-router-dom'; // used to create links to other pages without reloading the page


export default function Home() {
    const navigate = useNavigate(); // used to navigate to other pages without reloading the page

    function navigateHandler() {
        navigate('/products');
    }

    return (
        <>
            <h1>Home page</h1>
            <p>
                Go to <Link to="/products">list of products</Link>
            </p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    );
}