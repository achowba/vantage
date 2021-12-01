import './Logo.css';
import logoImg from '../../../assets/img/logo.svg';

const logo = () => (
    <a className="Logo" href="/#">
        <img src={logoImg} alt="Vantage Logo"/>
        <p>VANTAGE</p>
    </a>
);

export default logo;
