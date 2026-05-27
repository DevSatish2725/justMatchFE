import type { SelectFormFieldProps } from "./types";

const SelectFormField = ({
  id,
  animDelay,
  label,
  value,
  onChange,
  className,
  optionData,
  theme,
}: SelectFormFieldProps) => {
  const labelClass = theme === "petal" ? "label-petal" : "label-slate";
  return (
    <div className={`animate-fade-up ${animDelay}`}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className="relative">
        <select
          id="gender"
          value={value}
          onChange={onChange}
          className={className}
        >
          <option value="" disabled>
            Select
          </option>
          {optionData.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-sky">
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SelectFormField;
