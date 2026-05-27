import type { ReactNode } from "react";
import type React from "react";

export type theme = "slate" | "petal";

export type FormElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;
export interface FormFieldProps {
  label: string;
  id: string;
  type: string;
  theme: theme;
  animDelay: string;
  autoComplete?: string;
  placeholder: string;
  className: string;
  labelClass?: string;
  value: string;
  error?: string;
  optionData?: string[];
  isRequired?: boolean;
  onChange: (event: React.ChangeEvent<FormElement>) => void;
  handleKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface SelectFormFieldProps {
  label: string;
  id: string;
  theme: theme;
  animDelay: string;
  className: string;
  labelClass?: string;
  value: string;
  optionData: string[];
  onChange: (event: React.ChangeEvent<FormElement>) => void;
}

export interface TextAreaProps {
  label: string;
  id: string;
  theme: theme;
  animDelay: string;
  placeholder: string;
  className: string;
  inputClass: string;
  value: string;
  subColor: string;
  maxLength: number;
  rows: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
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

export interface SKILL_SELECTOR_PROPS {
  addSkill: () => void;
  removeSkill: (skill: string) => void;
  data: string[];
  buttonClass: string;
  theme: string;
  children: ReactNode;
}
