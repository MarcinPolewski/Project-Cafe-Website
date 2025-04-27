import classes from './Footer.module.css';

function Footer() {

    return (
        <div className={classes.footer}>
            <span>©2025 marcin.jacek.polewski@gmail.com </span>
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
        </div>);
}

export default Footer;