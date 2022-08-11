import useToggle from '../../hooks/useToggle';
import Nav from  '../Nav';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Menu } from '../../images/icon-menu.svg';

const Header = () => {

    const [ navStatus, setNavStatus ] = useToggle();

    return(
        <header>
            <button className="btn-menu" onClick={setNavStatus} aria-label="menu button">
                <Menu />
            </button>
            {navStatus && <Nav handleMenu={setNavStatus} />}
        </header>
    )
}

export default Header;