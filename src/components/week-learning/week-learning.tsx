import type { WeekLearning as WeekLearningI } from '@models/models';
import { TranslateSettings } from '@components/translate-settings/translate-settings';
import { DayLearning } from '@components/day-learning/day-learning';

interface WeekLearningProps {
  weeks: WeekLearningI[];
  currentWeek: number;
}

const WeekLearning = (props: WeekLearningProps) => {
  const { weeks, currentWeek } = props;

  return (
    <>
      <h3 className="mb-5 flex items-center justify-center gap-4 lg:text-xl">
        <span className="text-nowrap">Week {weeks[currentWeek].week}</span>
        <span className="font-semibold">{weeks[currentWeek].theme}</span>
      </h3>
      <TranslateSettings />

      <div className="flex flex-col gap-4">
        {weeks[currentWeek].days.map((day) => (
          <DayLearning dayLearning={day} key={day.day} />
        ))}
      </div>
    </>
  );
};

export { WeekLearning };
