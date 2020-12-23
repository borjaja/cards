import {useState} from "react";
const useInputForm = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const clearText = () => setValue(initialValue);
    const bindForm = {
        value,
        onChange: (e) => setValue(e.target.value),
    };

    return [value, bindForm, clearText];
};

export default useInputForm;
