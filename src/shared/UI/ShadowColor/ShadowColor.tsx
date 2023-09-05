import React, { useEffect, useRef, useState } from "react";
import { ChromePicker } from 'react-color'

interface ShadowColorI {
    title?: string
    value: string,
    onChange: (value: string) => void;

}

export const ShadowColor: React.FC<ShadowColorI> = (props) => {
    const { title, value, onChange } = props;
    const [showPicker, setShowPicker] = useState<boolean>(false);
    const [color, setColor] = useState<string>(value);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const handleColorChange = (newColor: any) => {
        setColor(newColor.hex);
        onChange(newColor.hex);
    };

    const togglePicker = () => {
        setShowPicker((prevShowPicker) => !prevShowPicker);
    };

    const handleClickOutside = (event: MouseEvent | any) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setShowPicker(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <div className="relative" ref={wrapperRef}>
            <label className="block text-black-700 font-bold mb-3 " htmlFor="Shadow color">{title || "Shadow color"}</label>
            <div
                className="w-full flex px-4 py-3 items-center font-proxima rounded-lg cursor-pointer"
                style={{
                    border: "1px solid #CED4DA",
                }}
            >
                <div
                    className="w-16 h-11 rounded"
                    style={{ backgroundColor: color }}
                    onClick={() => togglePicker()}
                ></div>
                <div className="ml-3 text-center h-full text-base font-normal">
                    {color}
                </div>
            </div>
            {showPicker && (
                <div className="absolute left-0 mt-3">
                    <ChromePicker color={color} onChange={handleColorChange} />
                </div>
            )}
        </div>
    )
}