import classes from "./Card.module.css";

const Card = (props: any) => {
    return (
        <div className={classes.Card} onClick={props.action}>
            {props.title !== "" ? <h3>{props.title}</h3> : ""}
            {props.children}
        </div>
    );
};

export default Card;
