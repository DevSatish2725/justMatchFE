import React from "react";
import type { TextAreaProps } from "./types";

const TextAreaFormField = ({
  id,
  label,
  theme,
  animDelay,
  value,
  inputClass,
  subColor,
  onChange,
}: TextAreaProps) => {
  const labelClass = theme === "petal" ? "label-petal" : "label-slate";
  return (
    <div className={`animate-fade-up ${animDelay} mt-3`}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <textarea
        id="about"
        rows={3}
        placeholder="Write a short bio that tells people who you are..."
        value={value}
        onChange={onChange}
        className={`${inputClass} resize-none`}
        maxLength={300}
      />
      <p className={`text-xs mt-1 text-right ${subColor}`}>
        {value.length}/300
      </p>
    </div>
  );
};

export default TextAreaFormField;
