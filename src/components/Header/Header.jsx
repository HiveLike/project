import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <header className="header">
            
            <NavLink className="logo_link" to="/">
                <div className="logo">
                    Flowers Store
                </div>
            </NavLink>
            <NavLink className="logo_link" to="/basket">
                <div className="logo">
                    Корзина
                </div>
            </NavLink>
        </header>
    )
}
export default Header;