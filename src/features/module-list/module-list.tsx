import { dayOfGreetings } from '@data/modules/day-of-greetings';
import { weekOfGreetingsAndPersonalInformation } from '@/data/modules/week-of-greetings-and-personal-information';
import { monthOfConversationalIrish1 } from '@/data/modules/month-of-conversational-irish-1';
import type {
  MonthLearning as MonthLearningI,
  WeekLearning as WeekLearningI,
  DayLearning as DayLearningI,
} from '@models/models';
import { Link } from 'react-router';

const modules: (DayLearningI | WeekLearningI | MonthLearningI)[] = [
  dayOfGreetings,
  weekOfGreetingsAndPersonalInformation,
  monthOfConversationalIrish1,
];

const LearningModules = () => {
  return (
    <>
      <div className="container mx-auto max-w-md px-4 py-8 text-center">
        <h1 className="mb-4 text-2xl font-bold tracking-wide text-gray-950 lg:text-4xl">
          Module List
        </h1>
        <h2 className="text-gray-500 lg:text-lg">Select a module to get started learning!</h2>
      </div>
      <div className="container mx-auto grid max-w-3xl grid-cols-1 gap-4 px-4 py-8 lg:grid-cols-2">
        {modules.map((module) => (
          <Link
            to={`module/${module.moduleType}/${module.id}`}
            className="relative flex cursor-pointer flex-col justify-between gap-4 rounded-sm border border-gray-100 bg-gray-50 p-6 transition-all duration-200 ease-in-out hover:border-gray-200"
            key={module.id}
          >
            <div className="flex flex-col gap-2">
              <div className="text-left font-bold">{module.title}</div>
              <div className="text-left text-sm text-gray-500">
                {module.description.length > 100
                  ? module.description.substring(0, 100) + '...'
                  : module.description}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div
                className={`w-fit min-w-20 rounded-sm p-1 text-center ${
                  module.moduleType === 'day'
                    ? 'bg-indigo-100'
                    : module.moduleType === 'week'
                      ? 'bg-rose-100'
                      : module.moduleType === 'month'
                        ? 'bg-blue-100'
                        : 'bg-gray-50'
                } `}
              >
                {module.moduleType}
              </div>
              <div className="text-gray-500">Beginner</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export { LearningModules };
