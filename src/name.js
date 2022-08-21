import React from "react";
export default function Occupation(props) {
  const { onChange, label, value } = props;
  return (
    <div>
      <div className="label-input">
        <label htmlFor="firstName">{label}:</label>

        <input
          type="text"
          name="firstName"
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      </div>
    </div>
  );
}
