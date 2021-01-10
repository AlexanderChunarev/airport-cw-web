import {useState} from "react";

export function useTextField(init, name) {
    const [value, setValue] = useState(init);
    return {
        value: value,
        name: name,
        onChange: (e) => setValue(e.target.value)
    };
}

export function useDateField(init, name) {
    const [value, setValue] = useState(init);
    return {
        value: value,
        name: name,
        onChange: (e) => setValue(e)
    };
}

export function useAutoCompleteField(init) {
    const [value, setValue] = useState(init);

    return {
        value: value,
        onChange: (e, value) => {
            setValue(value)
        }
    };
}