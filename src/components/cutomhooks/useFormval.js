function useFormval(formState){
    const keys = Object.keys(formState);
    for(const key of keys){
        if(!formState[key]){
            return {valid:false,response:'Fill all mandatory fields!'};
        }
        else if(key.toLowerCase().trim() === 'email'){
            const criteria = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
            if(!criteria.test(formState[key])){
                return {valid:false,response:'Invalid Email!'};
            }
        }
    }
    return {valid:true};
}
export default useFormval;