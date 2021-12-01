import './LinkItem.css';

const linkItem = ({ name, url, isActive }) => {
    const classes = isActive ? 'active' : '';

    return (
        <a className={`LinkItem ${classes}`} href={url}>{name}</a>
    );
}

export default linkItem;
