const BasicInput = ({lable , type , value , onChange , ...rest}) =>{
    return(
        <div {...rest}>
            <lable>{lable}</lable>
            <br />
            <input
            type={type}
            value={value}
            onChange={onChange} 
            />
        </div>
    );
}

export default BasicInput