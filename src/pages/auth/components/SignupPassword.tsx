import React from "react";
import type { SIGNUP_PASSWORD } from "../type";

const SignupPassword = ({ value, theme, children }: SIGNUP_PASSWORD) => {
  return (
    <div>
      {children}
      <div>
        {value.length > 0 && (
          <div className="flex gap-1 mt-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  value.length >= i * 3
                    ? theme === "petal"
                      ? "bg-petal-primary"
                      : "bg-slate-primary"
                    : theme === "petal"
                      ? "bg-petal-pale"
                      : "bg-slate-pale"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupPassword;
