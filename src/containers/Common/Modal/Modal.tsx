import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props: any) => {
    return (
        <>
            <Backdrop action={props.handler} />
            <div className={classes.Modal}>{props.children}</div>
        </>
    );
};

export default Modal;
