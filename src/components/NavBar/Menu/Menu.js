import LinkItem from '../../LinkItem/LinkItem';

const menu = () => {
    return (
        <div className="Menu">
            <div className="Links">
                <LinkItem name='Home' url='#' isActive={true}/>
                <LinkItem name='Pricing' url='#'/>
                <LinkItem name='Services' url='#'/>
                <LinkItem name='Blog' url='#'/>
            </div>
        </div>
    );
}

export default menu;