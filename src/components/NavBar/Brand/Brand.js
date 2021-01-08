import './Brand.css';

const brand = ({logo}) => (
    <a className="Brand" href="/#">
        <img src={logo} alt="Vantage Logo"/>
        <p>VANTAGE</p>
    </a>
);


export default brand;
