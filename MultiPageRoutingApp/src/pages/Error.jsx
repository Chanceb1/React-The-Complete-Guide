import MainNav from "../components/mainNav";

export default function Error() {
    return (
        <>
            <MainNav />
            <main>
                <h1>404: Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </main>
        </>
    );
}