import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";

const InputFieldDark = ({
    labelName,
    type,
    uni,
    placeholder,
    rowWise,
    inputClass,
    labelClass,
    className,
    min,
    fieldRequired,
    as,
    override,
    children,
    disabled
}) => {

    const [passVisibility, setPassVisibility] = useState(false);
    const hidePass = () => {
        setPassVisibility(false);
    }

    const showPass = () => {
        setPassVisibility(true);
    }

    return (
        <div className={className}>
            <label className=" text-black  flex items-center" htmlFor={uni}>
                {labelName} {fieldRequired && <span className="text-red-500 ">*</span>}
            </label>
            <div className={`flex items-center space-x-2  rounded-sm  ${disabled ? 'bg-red-100' : 'bg-white'}`}>
                <Field
                    disabled={disabled}
                    className={`p-2 w-full border-2 border-slate-300 bg-slate-100 text-black rounded-sm ${inputClass} ${disabled ? 'bg-red-100' : 'bg-white'}`}
                    placeholder={placeholder}
                    type={type !== 'password' || type === undefined ? type : type === 'password' && passVisibility ? 'text' : 'password'}
                    id={uni}
                    name={uni}
                    as={as}
                    min={min}
                >{override ? children : null}</Field>
                {type === 'password' && passVisibility && <VisibilityOff onClick={() => hidePass()} className="p-1 text-black cursor-pointer" />}
                {type === 'password' && !passVisibility && <Visibility onClick={() => showPass()} className="p-1 text-black cursor-pointer" />}
            </div>
            <ErrorMessage name={uni} component={(props) => <div className="text-red-500">{props.children}</div>} />

        </div>
    );
};

export default InputFieldDark;