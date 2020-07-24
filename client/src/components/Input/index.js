import React from "react";
import NumberFormat from "react-number-format";
import styles from "components/Input/style.module.css";
import Form from "react-bootstrap/Form";
import { useField } from "formik";

const { has_error, input, labeltext, select_input_container, textarea_container } = styles;

export const TextInput = ({ label, type = "text", ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={meta.touched && meta.error ? `${has_error} ${input}` : `${input}`}>
      <div>
        <label className={`text-dark ${labeltext}`}>{label}</label>
        <input type={type} {...field} {...props} />
        {meta.touched && meta.error ? <div className={`${has_error}`}>{meta.error}</div> : null}
      </div>
    </div>
  );
};

export const NumberInput = ({ label = "", hash, placeholder, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={meta.touched && meta.error ? `${has_error} ${input}` : `${input}`}>
      <div>
        <label className={`text-dark ${labeltext}`}>{label}</label>
          <NumberFormat
            {...field}
            {...props}
            mask=""
            allowNegative={false}
            allowLeadingZeros={false}
            isNumericString={false}
            format={hash}
            placeholder={placeholder}
            // decimalSeparator={"."}
          />
        {meta.touched && meta.error ? <div className={`${has_error}`}>{meta.error}</div> : null}
      </div>
    </div>
  );
};

export const TextAreaInput = ({ label, type = "text", ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={meta.touched && meta.error ? `${has_error} ${textarea_container}` : `${textarea_container}`}>
      <div>
        <label className={`text-dark ${labeltext}`}>{label}</label>
        <textarea type={type} {...field} {...props} />
        {meta.touched && meta.error ? <div className={`${has_error}`}>{meta.error}</div> : null}
      </div>
    </div>
  );
};

export const SelectInput = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className={select_input_container}>
      <div className={meta.touched && meta.error ? `${has_error} ${input}` : `${input}`}>
        <Form.Group controlId={`CustomSelect-${props.name}`}>
          <Form.Label className={`text-dark ${labeltext}`}>{label}</Form.Label>
          <Form.Control as="select" custom {...field} {...props}>
            {options.map(({ value, title }, key) => (
              <option key={key} value={value}>
                {title}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </div>
      {meta.touched && meta.error ? <p className={`${has_error}`}>{meta.error}</p> : null}
    </div>
  );
};
