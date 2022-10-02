export type Skill = {
  name: string;
  description: string;
};

export type SkillCategory = {
  id: string;
  name: string;
  icon_name: string;
  skills: Skill[];
};
