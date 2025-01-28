import * as React from "react";

export const Select = ({
    options,
    value,
    onChange,
}: {
    options: string[];
    value: string;
    onChange: (value: string) => void;
}) => {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};
