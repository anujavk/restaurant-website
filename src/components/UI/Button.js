import classes from './Button.module.css';

const Button = (props) => {
    return (
        <span className={classes.btn} onClick={props.onClick}>
            {props.children}
        </span>
    );
};

export default Button;
