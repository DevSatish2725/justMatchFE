import type React from "react";

export type theme = "slate" | "petal";
export interface FormFieldProps {
  label: string;
  id: string;
  type: string;
  theme: theme;
  animDelay: string;
  autoComplete: string;
  placeholder: string;
  className: string;
  value: string;
  error: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface BrandingItem {
  bg: string;
  accent: string;
  tagline: string;
  sub: string;
  dot: string;
  panelBg: string;
  logoColor: string;
}
