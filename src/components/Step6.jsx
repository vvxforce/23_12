import React from "react";
import { useFormikContext } from "formik";

import { fields } from "../utils/fields";

import "../css/Step6.css";

const Step6 = () => {
    const { values } = useFormikContext();
  
    return (
        <table className="order">
            {fields.map((item, idx) =>
            <tr className={`row-${idx % 2}`}>
                <td>{item.title}</td>
                <td>{values[item.name] instanceof Date ? values[item.name].toLocaleDateString() : values[item.name]}</td>
            </tr>
            )}
        </table>
    );
};

export default Step6;
