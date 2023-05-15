function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Btn = ({name, classes , handleClick}) => {
    return (
        <button type={'button'} className={classNames(classes)} onClick={handleClick}>
            {name}
        </button>
    );
};

export default Btn;