import classes from './Footer.module.css';
import { useTranslation } from 'react-i18next';

function Footer() {

    const { t } = useTranslation();

    return (
        <div className={classes.footer}>
            <span>©2025 marcin.jacek.polewski@gmail.com </span>
            <a>{t('footer.privacyPolicy')}</a>
            <a>{t('footer.termsOfService')}</a>
        </div>);
}

export default Footer;