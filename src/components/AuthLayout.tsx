import React, { type ReactNode } from "react";
import type { BrandingItem, theme } from "./types";

const DISPLAY_FONT = { fontFamily: "'DM Serif Display', Georgia, serif" };

const BRANDING: Record<theme, BrandingItem> = {
  slate: {
    bg: "bg-slate-primary",
    accent: "text-slate-pale",
    tagline: "Find match",
    sub: "Your next great match is one swipe away.",
    dot: "bg-slate-sky",
    panelBg: "bg-slate-bg",
    logoColor: "text-slate-primary",
  },
  petal: {
    bg: "bg-petal-primary",
    accent: "text-petal-pale",
    tagline: "Find match",
    sub: "Your next great match is one swipe away.",
    dot: "bg-petal-light",
    panelBg: "bg-petal-bg",
    logoColor: "text-petal-primary",
  },
};
const AuthLayout = ({
  theme,
  children,
}: {
  theme: theme;
  children: ReactNode;
}) => {
  const b = BRANDING[theme];
  return (
    <div className={`min-h-screen flex ${b.panelBg}`}>
      {/* Left branding panel — hidden on mobile */}
      <div
        className={`hidden lg:flex flex-col justify-between w-2/5 ${b.bg} p-12 relative overflow-hidden`}
      >
        {/* Decorative circles */}
        <div
          className={`absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-10 ${b.dot}`}
        />
        <div
          className={`absolute bottom-20 -right-16 w-56 h-56 rounded-full opacity-10 ${b.dot}`}
        />
        <div
          className={`absolute top-1/2 left-1/3 w-32 h-32 rounded-full opacity-10 ${b.dot}`}
        />

        {/* App name */}
        <div className="animate-fade-in">
          <span
            className="text-white text-3xl tracking-tight"
            style={DISPLAY_FONT}
          >
            Just Match
          </span>
        </div>

        {/* Center tagline */}
        <div className="animate-fade-up animate-delay-200 z-10">
          <p
            className="text-6xl leading-tight text-white mb-4"
            style={DISPLAY_FONT}
          >
            {b.tagline}
          </p>
          <p className={`text-base ${b.accent} leading-relaxed max-w-xs`}>
            {b.sub}
          </p>
        </div>

        {/* Bottom dots */}
        <div className="animate-fade-in animate-delay-300 flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1 rounded-full ${b.dot} opacity-60`}
              style={{ width: i === 1 ? 24 : 8 }}
            />
          ))}
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <span className={`text-2xl ${b.logoColor}`} style={DISPLAY_FONT}>
              bloom
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
