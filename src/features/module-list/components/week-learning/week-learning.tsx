import type { WeekLearning as WeekLearningI } from '@models/models';
import { TranslateSettings } from '../translate-settings/translate-settings';
import { DayLearning } from '../day-learning/day-learning';
import { ModuleHeading } from '../module-heading/module-heading';

interface WeekLearningProps {
  week: WeekLearningI;
  isStandaloneModule?: boolean;
}

const WeekLearning = (props: WeekLearningProps) => {
  const { week, isStandaloneModule = false } = props;
  const { title, description } = week;

  return (
    <>
      {isStandaloneModule ? (
        <ModuleHeading title={title} description={description} />
      ) : (
        <h3 className="mb-5 flex flex-col items-center justify-center gap-4 lg:text-xl">
          <span className="text-lg text-nowrap">Week {week.week}</span>
          <span className="font-semibold">{week.description}</span>
        </h3>
      )}
      <TranslateSettings />

      <div className="flex flex-col gap-4">
        {week.days.map((day) => (
          <DayLearning dayLearning={day} key={day.day} />
        ))}
      </div>
    </>
  );
};

export { WeekLearning };
