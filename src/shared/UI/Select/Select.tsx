import React, { useState } from 'react';

interface OptionI {
  label: string | number;
  value: any;
  [key: string]: any;
}

interface SelectI {
  title?: string;
  options: Array<OptionI>;
  value: string;
  onChange: (value: string) => void;
}
export const Select: React.FC<SelectI> = (props) => {
  const { title, options, value, onChange } = props;
  const [showList, setShowList] = useState<boolean>(false);

  const togglePicker = () => {
    setShowList((prevShowList) => !prevShowList);
  };

  const handleChange = (value: string) => {
    onChange(value);
    togglePicker();
  };

  const selectedOption = options.find((option) => option['value'] === value);
  return (
    <div className="text-base font-proxima">
      {title && (
        <label
          className="block text-black-700 font-bold mb-3 "
          htmlFor="custom-select"
        >
          {title}
        </label>
      )}
      <div className="relative">
        <div
          className={`block w-full px-5 py-5 leading-tight ${
            showList ? 'rounded-t-lg' : 'rounded-lg'
          } border appearance-none focus:outline-none`}
          style={{
            border: '1px solid #CED4DA',
          }}
          onClick={() => togglePicker()}
        >
          {selectedOption ? selectedOption['label'] : value}
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
          <svg
            className="fill-current h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.85518 7.49605C4.91093 7.44012 4.97716 7.39574 5.05009 7.36545C5.12302 7.33517 5.20122 7.31958 5.28018 7.31958C5.35915 7.31958 5.43734 7.33517 5.51028 7.36545C5.58321 7.39574 5.64944 7.44012 5.70518 7.49605L12.4802 14.2721L19.2552 7.49605C19.3679 7.38334 19.5208 7.32001 19.6802 7.32001C19.8396 7.32001 19.9925 7.38334 20.1052 7.49605C20.2179 7.60877 20.2812 7.76165 20.2812 7.92105C20.2812 8.08046 20.2179 8.23334 20.1052 8.34605L12.9052 15.5461C12.8494 15.602 12.7832 15.6464 12.7103 15.6767C12.6373 15.7069 12.5592 15.7225 12.4802 15.7225C12.4012 15.7225 12.323 15.7069 12.2501 15.6767C12.1772 15.6464 12.1109 15.602 12.0552 15.5461L4.85518 8.34605C4.79925 8.29031 4.75487 8.22408 4.72458 8.15114C4.6943 8.07821 4.67871 8.00002 4.67871 7.92105C4.67871 7.84209 4.6943 7.76389 4.72458 7.69096C4.75487 7.61803 4.79925 7.5518 4.85518 7.49605Z"
              fill="#7D7D8A"
            />
          </svg>
        </div>
        {showList && (
          <div
            className="absolute left-0 w-full px-5 py-3 rounded-b-lg"
            style={{
              zIndex: '100',
              borderRight: '1px solid #CED4DA',
              borderLeft: '1px solid #CED4DA',
              borderBottom: '1px solid #CED4DA',
              background: '#fff',
            }}
          >
            {options.map((op, index) => {
              const stypeHidden = {
                opacity: '0.6',
                pointerEvents: 'none',
              };

              let style = {
                padding: '6px 0 ',
              };
              if (Object.keys(op).includes('isShow') && !op['isShow']) {
                style = {
                  ...style,
                  ...stypeHidden,
                };
              }
              return (
                <div
                  key={index}
                  onClick={() => handleChange(op['value'])}
                  className="cursor-pointer hover:font-semibold"
                  style={{
                    ...style,
                  }}
                >
                  {op.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
