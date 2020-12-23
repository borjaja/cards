import React from "react";
import useInputForm from "../customHook/inputForm";
const Form = () => {
    const [name, bindName, clearName] = useInputForm("");
    const [email, bindEmail, clearEmail] = useInputForm("");
    const submitHandler = (e) => {
        e.preventDefault();
        alert(`The name is ${name} and email is ${email}`);
        clearName();
        clearEmail();
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" {...bindName} />
                </div>
                <div>
                    <label htmlFor="name">Email</label>
                    <input type="text" name="email" id="email" {...bindEmail} />
                </div>
                <button>Button</button>
            </form>
        </>
    );
};

export default Form;
