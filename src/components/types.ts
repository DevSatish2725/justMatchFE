import type { ReactNode } from "react";

export type theme = "slate" | "petal";
export interface FormFieldProps {
  label: string;
  id: string;
  theme: theme;
  animDelay: string;
  children: ReactNode;
}

export interface BrandingItem{
  bg: string;
  accent: string;
  tagline: string;
  sub: string;
  dot: string;
  panelBg: string;
  logoColor: string;
};
