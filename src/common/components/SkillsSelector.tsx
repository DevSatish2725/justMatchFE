import type { SKILL_SELECTOR_PROPS } from "./types";
import { X } from "lucide-react";
const SkillsSelector = ({
  addSkill,
  removeSkill,
  data,
  buttonClass,
  theme,
  children,
}: SKILL_SELECTOR_PROPS) => {
  const tagStyle = theme === "petal" ? "tag-petal-active" : "tag-slate-active";
  return (
    <div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-11">{children}</div>
        <button
          onClick={addSkill}
          className={`${buttonClass} px-2 flex justify-center items-center cursor-pointer`}
          type="button"
        >
          Add
        </button>
      </div>
      <ul className="mt-2 flex flex-wrap gap-2">
        {data.map((skill) => (
          <li key={skill} className={`${tagStyle} flex gap-2 p-1 px-2`}>
            {skill}{" "}
            <span className="border border-white rounded-2xl">
              <X onClick={() => removeSkill(skill)} size={16} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSelector;
