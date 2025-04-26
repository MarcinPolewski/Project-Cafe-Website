
import classes from './Panel.module.css';

function Panel({ children }) {
    return (
        <div className={classes.panel}>
            {children}
        </div>
    )
}

export default Panel;