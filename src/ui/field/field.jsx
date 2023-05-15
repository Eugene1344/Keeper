const Field = (props , value , handler) => {
    return (
        <div>
            <label className='leading-7 text-sm text-gray-600'>Account Name</label>
            <input {...props} value={value} onChange={handler} />
        </div>
    );
};

export default Field;