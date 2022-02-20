import classes from "./List.module.css";

const List = (props: any) => {
    return <div className={classes.List}>{props.children}</div>;
};

export default List;
