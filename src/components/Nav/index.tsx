import { ReactComponent as CloseNav } from '../../images/icon-close.svg';
import ReactDOM from 'react-dom';
import Backdrop from '../Backdrop';

const backdropRoot = document.getElementById("backdrop-root") as HTMLElement;


const Nav = ({handleMenu}: any) => {
    return(
        <nav>
            {ReactDOM.createPortal(<Backdrop />, backdropRoot)}
            <button onClick={handleMenu}>
                <CloseNav />
            </button>
            <ul>
                <li>
                    Collections
                </li>
                <li>
                    Men
                </li>
                <li>
                    Women
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </nav>
    )
}

export default Nav;