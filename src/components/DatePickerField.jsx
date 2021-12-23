import React from "react";
import { useField } from "formik";
import DatePicker from "react-datepicker";

import "../css/DatePickerField.css";

const DatePickerField = ({ ...props }) => {
    const [ field, , { setValue } ] = useField(props);

    return (
        <DatePicker
            {...field}
            {...props}
            selected={(field.value && new Date(field.value)) || null}
            onChange={value => {
                setValue(value);
            }}
        />
    );
};

export default DatePickerField;
