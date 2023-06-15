import { memo } from "react";

import ResumeSection from "./ResumeSection";
import TimelineItem from "./TimeLineItem";
import { skills, education, experience } from "./_resumedata";
import { SkillGroup } from "./Skills";

const Resume = memo(() => {
  return (
    <section className="bg-neutral-100 px-4 py-16 md:py-24 lg:px-8" id="resume">
      {/* sectionId={SectionId.Resume} */}
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-col divide-y-2 divide-neutral-300">
          <ResumeSection title="Work">
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection title="Education">
            {education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </ResumeSection>
          <ResumeSection title="Skills">
            <p className="pb-8">
              Here you can show a snapshot of your skills to show off to employers
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {skills.map((skillgroup, index) => (
                <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
              ))}
            </div>
          </ResumeSection>
        </div>
      </div>
    </section>
  );
});

Resume.displayName = "Resume";
export default Resume;
