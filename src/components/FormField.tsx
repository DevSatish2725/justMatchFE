import type { FormFieldProps } from "./types";

export default function FormField({
  label,
  id,
  theme = "slate",
  animDelay = "",
  children,
}: FormFieldProps) {
  const labelClass = theme === "petal" ? "label-petal" : "label-slate";

  return (
    <div className={`animate-fade-up ${animDelay}`}>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}
