import { useEffect, useState } from "react";
import { BtnMinus } from "../BtnMinus/BtnMinus"
import { BtnPlus } from "../BtnPlus/BtnPlus"

interface CounterI {
    title?: string,
    value: number,
    onChange: (value: number) => void,

}


export const Counter: React.FC<CounterI> = (props) => {
    const { title, value, onChange } = props;
    const [count, setCount] = useState<number>(value);


    useEffect(() => {
        onChange(count);
    }, [count])

    const onClickPlus = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const onClickMinus = () => {
        setCount((prevCount) => prevCount - 1);
    }

    const onChangeInput = (value: string) => {
        const number = Number(value)
        if (isNaN(number)) {
            return;
        }
        setCount(number);
    }


    return (
        <div className="font-proxima text-base">
            {title && <label className="block text-black-700 font-bold mb-3 " htmlFor="counter">{title}</label>}
            <div className="flex items-center gap-4">
                <BtnMinus onClick={() => onClickMinus()} />
                <input
                    type="string"
                    value={count}
                    onChange={(e) => onChangeInput(e.target.value)}
                    className="block w-full px-9 py-5 leading-tight text-center text-base rounded-lg border border-gray-300 appearance-none focus:outline-none focus:border-gray-500"
                    style={{
                        border: "1px solid #CED4DA",
                    }}
                />
                <BtnPlus onClick={() => onClickPlus()} />
            </div>
        </div>
    )
}