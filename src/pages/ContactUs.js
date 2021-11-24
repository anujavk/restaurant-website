import classes from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <div className={classes.container}>
            <div className={classes.leftSide}>
                <div className={classes.add}>Address</div>
                <div className={classes.add1}>Lorem ipsum dolor sit amet.</div>
                <div className={classes.add2}>Lorem ipsum dolor sit amet, consectetur.</div>
            </div>
            <div className={classes.rightSide}>
                <div className={classes.callUs}>Call us</div>
                <div className={classes.num1}>+01 111111 1111</div>
                <div className={classes.num2}>+01 222222 2222</div>
            </div>
        </div>
    );
};

export default ContactUs;
