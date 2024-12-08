import logo from "../assets/investment-calculator-logo.png"

export default function Header() {
    return (
    <header id='header'>
        <img src={logo} alt="money bag"></img>
        <h1>Investment calculator</h1>
    </header>
    );
}