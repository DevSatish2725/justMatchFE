import React, { useState } from "react";
import AuthLayout from "../../components/AuthLayout";
import FormField from "../../components/FormField";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <AuthLayout theme="slate">
      <div className="mb-8 animate-fade-up">
        <h1
          className="text-4xl text-slate-navy mb-2"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          Welcome back
        </h1>
        <p className="font-sans text-sm text-slate-mid">
          Sign in to continue finding connections.
        </p>
      </div>
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        <FormField
          label="Email address"
          id="email"
          theme="slate"
          animDelay="animate-delay-100"
        >
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className="input-slate"
          />
        </FormField>

        <FormField
          label="Password"
          id="password"
          theme="slate"
          animDelay="animate-delay-200"
        >
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              placeholder="••••••••"
              className="input-slate pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-sky hover:text-slate-primary transition-colors"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </FormField>

        {/* Forgot password */}
        <div className="animate-fade-up animate-delay-250 text-right">
          <button
            type="button"
            className="text-xs text-slate-mid hover:text-slate-primary font-sans transition-colors"
          >
            Forgot password?
          </button>
        </div>

        {/* Login CTA */}
        <div className="animate-fade-up animate-delay-300 pt-1">
          <button type="submit" className="btn-slate-primary w-full">
            Login
          </button>
        </div>

        {/* Divider */}
        <div className="animate-fade-up animate-delay-350 flex items-center gap-3">
          <div className="flex-1 h-px bg-slate-pale" />
          <span className="text-xs text-slate-sky font-sans">or</span>
          <div className="flex-1 h-px bg-slate-pale" />
        </div>

        {/* New user */}
        <div className="animate-fade-up animate-delay-400">
          <button
            type="button"
            // onClick={onNavigateToSignup}
            className="btn-slate-outline w-full"
          >
            New user? Create account
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
