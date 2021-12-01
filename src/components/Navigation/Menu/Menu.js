import './Menu.css';
import LinkItem from '../../UI/LinkItem/LinkItem';

const menu = () => {
    return (
        <div className="Links">
            <LinkItem name='Home' url='#' isActive/>
            <LinkItem name='Pricing' url='#'/>
            <LinkItem name='Services' url='#'/>
            <LinkItem name='Blog' url='#'/>
        </div>
    );
}

export default menu;