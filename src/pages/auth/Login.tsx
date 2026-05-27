import { useState } from "react";
import AuthLayout from "../../common/components/AuthLayout";
import FormField from "../../common/components/FormField";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../api";
import { toast } from "sonner";
import type { API_ERROR } from "../../common/type";
import type { LOGIN_PAYLOAD } from "./type";
import { isValidEmail, isValidPassword } from "../../utils/valildator";
import { useNavigate } from "react-router-dom";
import type { FormElement } from "../../common/components/types";
const Login = () => {
  const [form, setForm] = useState({
    emailId: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (data: LOGIN_PAYLOAD) => {
    const res = await axiosInstance.post("auth/login", data, {
      withCredentials: true,
    });
    return res;
  };
  const mutation = useMutation({
    mutationFn: handleLogin,
    onSuccess: (data) => {
      toast.success(data?.data.message);
    },
    onError: (error: API_ERROR) => {
      toast.error(error?.response?.data.message);
    },
  });

  const set = (field: string) => (e: React.ChangeEvent<FormElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value.trim() }));

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const validEmail = isValidEmail(form.emailId);
    const validPassword = isValidPassword(form.password);

    if (!validEmail) {
      setEmailError("Email is not valid");
    } else if (validEmail) {
      setEmailError("");
    }

    if (!validPassword) {
      setPasswordError(
        "Password must contain minmum 8 characters with atleast 1 uppercase, 1 lowercase, 1 number and 1 special character",
      );
    } else if (validPassword) {
      setPasswordError("");
    }

    if (validEmail && validPassword) {
      mutation.mutate({
        emailId: form.emailId,
        password: form.password,
      });
    }
  };

  const onNavigateToSignup = () => {
    navigate("/signup");
  };

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
      <form className="space-y-5" onSubmit={handleSubmit}>
        <FormField
          label="Email address"
          id="email"
          type="email"
          theme="slate"
          animDelay="animate-delay-100"
          autoComplete="email"
          placeholder="you@example.com"
          className="input-slate"
          value={form.emailId}
          error={emailError}
          onChange={set("email")}
        />

        <FormField
          label="Password"
          id="password"
          type="password"
          theme="slate"
          animDelay="animate-delay-200"
          autoComplete=""
          placeholder="••••••••"
          className="input-slate pr-12"
          value={form.password}
          error={passwordError}
          onChange={set("password")}
        />

        {/* Forgot password */}
        <div className="animate-fade-up animate-delay-250 text-right">
          <button
            type="button"
            className="text-xs text-slate-mid hover:text-slate-primary font-sans transition-colors cursor-pointer"
          >
            Forgot password?
          </button>
        </div>

        {/* Login CTA */}
        <div className="animate-fade-up animate-delay-300 pt-1">
          <button
            type="submit"
            className="btn-slate-primary w-full cursor-pointer"
          >
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
            onClick={onNavigateToSignup}
            className="btn-slate-outline w-full cursor-pointer"
          >
            New user? Create account
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Login;
