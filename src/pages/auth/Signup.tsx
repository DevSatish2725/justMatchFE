import { useState } from "react";
import AuthLayout from "../../common/components/AuthLayout";
import { useNavigate } from "react-router-dom";
import FormField from "../../common/components/FormField";
import SelectFormField from "../../common/components/SelectFormField";
import SkillsSelector from "../../common/components/SkillsSelector";
import type { SIGNUP_FORM_FIELD } from "./type";
import TextAreaFormField from "../../common/components/TextAreaFormField";
import SignupPassword from "./components/SignupPassword";
import type { FormElement } from "../../common/components/types";
import { signupValidation } from "./signupValidation";

const GENDER_OPTIONS = ["Male", "Female", "Others"];

const Signup = () => {
  const [form, setForm] = useState<SIGNUP_FORM_FIELD>({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    skill: "",
    about: "",
    photoUrl: "",
    emailId: "",
    password: "",
  });

  const [formError, setFormError] = useState<SIGNUP_FORM_FIELD>({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    skill: "",
    about: "",
    photoUrl: "",
    emailId: "",
    password: "",
  });

  const [skills, setSkills] = useState<string[]>([]);

  const navigate = useNavigate();

  const theme = form.gender === "Female" ? "petal" : "slate";

  const set = (field: string) => (event: React.ChangeEvent<FormElement>) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value.trim() }));

  const addSkill = () => {
    if (!form.skill) {
      setFormError((prev) => ({
        ...prev,
        skill: "Enter valid skill",
      }));
      return;
    } else {
      setForm((prev) => ({
        ...prev,
        skill: "",
      }));
      setFormError((prev) => ({
        ...prev,
        skill: "",
      }));
    }
    setSkills((prev) => {
      if (prev.includes(form.skill)) {
        setFormError((prev) => ({
          ...prev,
          skill: "Duplicate skills are not allowed",
        }));
        return prev;
      }
      if (prev.length === 10) {
        setFormError((prev) => ({
          ...prev,
          skill: "Maximum 10 skill are allowed",
        }));
        return prev;
      }
      return [form.skill, ...prev];
    });
  };

  const removeSkill = (skill: string) => {
    const filteredSkills = skills.filter(
      (skillValue) => skillValue.toLowerCase() !== skill.toLowerCase(),
    );
    setSkills(filteredSkills);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { isError, errorObj } = signupValidation(form);

    if (isError) {
      setFormError((prev) => ({ ...prev, ...errorObj }));
      return;
    } else {
      setFormError((prev) => ({ ...prev, ...errorObj }));
      console.log("call  api");
    }
  };

  const inputClass = theme === "petal" ? "input-petal" : "input-slate";
  const selectClass = `${inputClass} appearance-none cursor-pointer`;
  const primaryBtn =
    theme === "petal" ? "btn-petal-primary" : "btn-slate-primary";
  const outlineBtn =
    theme === "petal" ? "btn-petal-outline" : "btn-slate-outline";
  const headingColor =
    theme === "petal" ? "text-petal-deep" : "text-slate-navy";
  const subColor = theme === "petal" ? "text-petal-mid" : "text-slate-mid";
  const sectionLabelColor =
    theme === "petal" ? "text-petal-primary" : "text-slate-primary";
  const dividerColor = theme === "petal" ? "bg-petal-pale" : "bg-slate-pale";

  const onNavigateToLogin = () => {
    navigate("/");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      addSkill();
    }
  };

  return (
    <AuthLayout theme="slate">
      <div className="max-h-screen p-6 lg:p-12 overflow-y-auto">
        <div className="mb-7 animate-fade-up">
          <h1
            className={`text-4xl ${headingColor} mb-2`}
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            Create profile
          </h1>
          <p className={`font-sans text-sm ${subColor}`}>
            Tell us about yourself to find great matches.
          </p>
        </div>
        <form className="space-y-7" onSubmit={handleSubmit}>
          {/* ── Section 1: Basic info ── */}
          <section>
            <p
              className={`text-xs font-medium font-sans tracking-widest uppercase ${sectionLabelColor} mb-4 animate-fade-up`}
            >
              Basic info
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  label="First name"
                  id="firstName"
                  type="text"
                  theme={theme}
                  animDelay="animate-delay-100"
                  autoComplete="given-name"
                  placeholder="Arjun"
                  value={form.firstName}
                  isRequired={true}
                  error={formError.firstName}
                  onChange={set("firstName")}
                  className={inputClass}
                />

                <FormField
                  label="Last name"
                  id="lastName"
                  theme={theme}
                  animDelay="animate-delay-150"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Sharma"
                  value={form.lastName}
                  error={formError.lastName}
                  onChange={set("lastName")}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <FormField
                  label="Age"
                  id="age"
                  theme={theme}
                  animDelay="animate-delay-200"
                  type="number"
                  placeholder="24"
                  value={form.age}
                  error={formError.age}
                  onChange={set("age")}
                  className={inputClass}
                />
                <SelectFormField
                  label="Gender"
                  id="gender"
                  theme={theme}
                  animDelay="animate-delay-250"
                  value={form.gender}
                  onChange={set("gender")}
                  className={selectClass}
                  optionData={GENDER_OPTIONS}
                />
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className={`h-px ${dividerColor}`} />

          {/* ── Section 2: Profile ── */}
          <section>
            <p
              className={`text-xs font-medium font-sans tracking-widest uppercase ${sectionLabelColor} mb-4 animate-fade-up animate-delay-300`}
            >
              Your profile
            </p>
            <div className="space-y-4">
              <div className="mt-1">
                <SkillsSelector
                  addSkill={addSkill}
                  data={skills}
                  removeSkill={removeSkill}
                  buttonClass={primaryBtn}
                  theme={theme}
                >
                  <FormField
                    label="Interests & skills"
                    id="skills"
                    type="text"
                    theme={theme}
                    animDelay="animate-delay-300"
                    placeholder="eg. communication, coding"
                    value={form.skill}
                    error={formError.skill}
                    className={`${inputClass} flex flex-1`}
                    onChange={set("skill")}
                    handleKeyDown={handleKeyDown}
                  />
                </SkillsSelector>

                <TextAreaFormField
                  label="About you"
                  id="about"
                  theme={theme}
                  animDelay="animate-delay-350"
                  rows={3}
                  placeholder="Write a short bio that tells people who you are..."
                  value={form.about}
                  onChange={set("about")}
                  className={`${inputClass} resize-none`}
                  maxLength={300}
                  subColor={subColor}
                  inputClass={`${inputClass} resize-none`}
                />
                <div>
                  <FormField
                    label="Photo URL"
                    id="photoUrl"
                    theme={theme}
                    animDelay="animate-delay-400"
                    type="url"
                    placeholder="https://example.com/your-photo.jpg"
                    value={form.photoUrl}
                    error={formError.photoUrl}
                    onChange={set("photoUrl")}
                    className={`${inputClass} flex-1`}
                  />
                  <div className="flex gap-3 items-start">
                    {form.photoUrl && !formError.photoUrl && (
                      <div className="w-11 h-11 rounded-xl border border-slate-pale overflow-hidden shrink-0">
                        <img
                          src={form.photoUrl}
                          alt="Preview"
                          className="w-full h-full object-cover"
                          // onError={(e) => {
                          //   e.target.style.display = "none";
                          // }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className={`h-px ${dividerColor}`} />

          {/* ── Section 3: Account ── */}
          <section>
            <p
              className={`text-xs font-medium font-sans tracking-widest uppercase ${sectionLabelColor} mb-4 animate-fade-up animate-delay-450`}
            >
              Account details
            </p>
            <div className="space-y-4">
              <FormField
                label="Email address"
                id="signup-email"
                type="text"
                theme={theme}
                animDelay="animate-delay-450"
                autoComplete="email"
                placeholder="you@example.com"
                value={form.emailId}
                error={formError.emailId}
                isRequired={true}
                onChange={set("emailId")}
                className={inputClass}
              />
              <SignupPassword value={form.password} theme={theme}>
                <FormField
                  label="Password"
                  id="signup-password"
                  theme={theme}
                  animDelay="animate-delay-500"
                  value={form.password}
                  error={formError.password}
                  onChange={set("password")}
                  className={`${inputClass} pr-12`}
                  type="password"
                  isRequired={true}
                  placeholder="Minimum 8 characters are required"
                />
              </SignupPassword>
            </div>
          </section>

          {/* Submit */}
          <div className="pt-2 space-y-3 animate-fade-up animate-delay-550">
            <button
              type="submit"
              className={`${primaryBtn} w-full cursor-pointer`}
            >
              Create account
            </button>
            <button
              type="button"
              onClick={onNavigateToLogin}
              className={`${outlineBtn} w-full cursor-pointer`}
            >
              Already have an account? Login
            </button>
          </div>

          {/* Terms */}
          <p className={`text-xs text-center font-sans ${subColor} pb-4`}>
            By signing up you agree to our{" "}
            <button
              type="button"
              className={`underline ${sectionLabelColor} cursor-pointer`}
            >
              Terms
            </button>{" "}
            and{" "}
            <button
              type="button"
              className={`underline ${sectionLabelColor} cursor-pointer`}
            >
              Privacy Policy
            </button>
            .
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Signup;
