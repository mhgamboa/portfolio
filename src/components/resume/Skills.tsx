import { memo, useMemo } from "react";

import { Skill as SkillType, SkillGroup as SkillGroupType } from "./_resumedata";

export const SkillGroup = memo(({ skillGroup }: { skillGroup: SkillGroupType }) => {
  const { name, skills } = skillGroup;
  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = "SkillGroup";

export const Skill = memo(({ skill }: { skill: SkillType }) => {
  const { name, level, max = 10 } = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col">
      <span className="ml-2 text-sm font-medium">{name}</span>
      <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
        <div className="h-full rounded-full bg-orange-400" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
});

Skill.displayName = "Skill";
