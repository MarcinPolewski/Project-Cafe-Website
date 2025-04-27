
import classes from './Panel.module.css';

function Panel({ children, ...props }) {
    return (
        <div className={classes.panel} {...props}>
            {children}
        </div>
    )
}

export default Panel;