import './Button.css';

const button = (props) => (
    <button className={`Button btn-${props.type}`}>{props.children}</button>
);

export default button;
