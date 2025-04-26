import { NavLink } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Logo from "../Logo/Logo";

import classes from "./NavigationBar.module.css";

function NavigationBar() {
    const { t, i18n } = useTranslation();

    console.log(i18n.language)

    return (
        <nav className={classes.navigationBar}>
            <ul>
                <Logo />
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? classes.activeNavLink : classes.navLink}
                    end
                >
                    {t("nav.home")}
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? classes.activeNavLink : classes.navLink}
                    end
                >
                    {t("nav.about")}
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? classes.activeNavLink : classes.navLink}
                    end
                >
                    {t("nav.contact")}
                </NavLink>
                <LanguageSwitcher />

            </ul>
        </nav>
    );
}

export default NavigationBar;