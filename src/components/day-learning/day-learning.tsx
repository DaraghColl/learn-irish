import { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import type { DayLearning as DayLearningI } from '@models/models';
import { TopicItem } from '@/components/topic-item/topic-item';

interface DayLearningProps {
  dayLearning: DayLearningI;
}

const DayLearning = (props: DayLearningProps) => {
  const { dayLearning } = props;
  const { day, topic, topicItems } = dayLearning;
  const [isDayOpen, setIsDayOpen] = useState((day - 1) % 7 === 0 ? true : false);

  return (
    <div className={`rounded-md border-1 border-gray-100 bg-gray-50`}>
      <button
        className="flex w-full cursor-pointer justify-between gap-4 rounded-t-md p-4"
        onClick={() => setIsDayOpen(!isDayOpen)}
      >
        <div className="flex gap-4">
          <h3 className="text-nowrap">Day {day}</h3>
          <h4 className="text-left font-semibold">{topic}</h4>
        </div>
        {!isDayOpen ? <ChevronRight /> : <ChevronDown />}
      </button>

      {isDayOpen && (
        <div className="rounded-b-md bg-white p-4">
          {topicItems.map((item, index) => (
            <TopicItem
              topicItem={item}
              key={item.phrase}
              isLastItem={index === topicItems.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { DayLearning };
