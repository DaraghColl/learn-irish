import { useParams } from 'react-router';
import { dayOfGreetings } from '@data/modules/day-of-greetings';
import { weekOfGreetingsAndPersonalInformation } from '@/data/modules/week-of-greetings-and-personal-information';
import { monthOfConversationalIrish1 } from '@/data/modules/month-of-conversational-irish-1';
import type {
  MonthLearning as MonthLearningI,
  WeekLearning as WeekLearningI,
  DayLearning as DayLearningI,
} from '@models/models';
import { DayLearning } from '@/features/module-list/components/day-learning/day-learning';
import { WeekLearning } from '@/features/module-list/components/week-learning/week-learning';
import { MonthLearning } from '@/features/module-list/components/month-learning/month-learning';

const modules: (DayLearningI | WeekLearningI | MonthLearningI)[] = [
  dayOfGreetings,
  weekOfGreetingsAndPersonalInformation,
  monthOfConversationalIrish1,
];

const ModuleContainer = () => {
  const { id } = useParams();
  console.log('🚀 ~ ModuleContainer ~ id:', id);

  const module = modules.find((m) => m.id === id);

  if (!module) {
    return <div className="container mx-auto max-w-3xl px-4 py-8">no module found</div>;
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      {module.moduleType === 'month' && (
        <MonthLearning monthLearningData={module as MonthLearningI} />
      )}

      {module.moduleType === 'week' && <WeekLearning week={module as WeekLearningI} />}

      {module.moduleType === 'day' && (
        <DayLearning dayLearning={module as DayLearningI} isStandalone />
      )}
    </div>
  );
};

export { ModuleContainer };
