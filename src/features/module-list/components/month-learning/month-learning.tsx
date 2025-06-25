import { useEffect, useState } from 'react';
import type { MonthLearning as MonthLearningI } from '@models/models';
import { WeekLearning } from '../week-learning/week-learning';
import { ModuleHeading } from '../module-heading/module-heading';

interface MonthLearning {
  monthLearningData: MonthLearningI;
}

const MonthLearning = (props: MonthLearning) => {
  const { monthLearningData } = props;
  const { title, description, weeks } = monthLearningData;
  const [currentWeek, setCurrentWeek] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentWeek]);

  return (
    <>
      <ModuleHeading title={title} description={description} />
      <>
        <WeekLearning week={weeks[currentWeek]} />
        <div className="mt-5 flex justify-center gap-4">
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-500"
            onClick={() => currentWeek !== 0 && setCurrentWeek((week) => week - 1)}
            disabled={currentWeek === 0}
          >
            Previous Week
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-500"
            onClick={() => currentWeek !== weeks.length - 1 && setCurrentWeek((week) => week + 1)}
            disabled={currentWeek === weeks.length - 1}
          >
            Next Week
          </button>
        </div>
      </>
    </>
  );
};

export { MonthLearning };
