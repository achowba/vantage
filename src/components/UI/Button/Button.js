import classes from './Button.module.css';

const button = (props) => {
    const classNames = [classes.Button, classes[props.type]].join(' ');

    return (
        <button className={classNames}>{props.children}</button>
    );
};

export default button;
