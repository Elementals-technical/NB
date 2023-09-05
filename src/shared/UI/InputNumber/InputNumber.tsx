import React from "react";


interface InputNumberI {
    title?: string,
    value: number | string,
    onChange: (value: string) => void
}


export const InputNumber: React.FC<InputNumberI> = (props) => {
    const { title, value, onChange } = props;

    const handleChange = (value: string) => {
        if (/^-?\d*\.?\d*$/.test(value)) {
            onChange(value);
        }
    }

    return (
        <div className="font-proxima text-base">
            {title && <label className="block text-black-700 font-bold mb-3 " htmlFor="Input number">{title}</label>}
            <input
                type="text"
                className="block w-full px-9 py-5 leading-tight text-center text-base rounded-lg border focus:outline-none"
                style={{
                    border: "1px solid #CED4DA",
                }}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
    )
}