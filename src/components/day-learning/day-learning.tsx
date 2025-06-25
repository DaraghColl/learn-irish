import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import type { DayLearning as DayLearningI } from '@models/models';
import { LearningItem } from '@/components/learning-item/learning-item';
import { ModuleHeading } from '@components/module-heading/module-heading';
import { TranslateSettings } from '@components/translate-settings/translate-settings';

interface DayLearningProps {
  dayLearning: DayLearningI;
  isStandalone?: boolean;
}

const DayLearning = (props: DayLearningProps) => {
  const { dayLearning, isStandalone } = props;
  const { day, title, description, learningItems } = dayLearning;
  const [isDayOpen, setIsDayOpen] = useState(
    isStandalone ? true : (day - 1) % 7 === 0 ? true : false
  );

  return (
    <>
      {isStandalone && (
        <div>
          <ModuleHeading title={title} description={description} />
          <TranslateSettings />
        </div>
      )}

      <div className="rounded-md border-1 border-gray-100">
        <button
          className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-t-md bg-gray-100 p-4"
          onClick={() => setIsDayOpen(!isDayOpen)}
        >
          <div className="flex items-center gap-4">
            {!isStandalone && <h3 className="text-nowrap">Day {day}</h3>}
            <h4 className="text-left font-semibold">{title}</h4>
          </div>
          {!isStandalone && (
            <ChevronRight
              className={`${isDayOpen ? 'rotate-90' : ''} transition-all duration-300 ease-in-out`}
            />
          )}
        </button>

        {isDayOpen && (
          <div className="rounded-b-md bg-white p-4">
            {learningItems.map((item, index) => (
              <LearningItem
                topicItem={item}
                key={item.phrase}
                isLastItem={index === learningItems.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export { DayLearning };
