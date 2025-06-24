import { useState } from 'react';
import { monthOfConversationalIrish1 } from '@data/month-of-conversational-irish-1';
import { DayLearning } from '@components/day-learning/day-learning';

const { title, description, weeks } = monthOfConversationalIrish1;

function App() {
  const [currentWeek, setCurrentWeek] = useState(0);

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <div className="mb-10">
        <h1 className="mb-4 text-center text-4xl font-bold tracking-wide text-gray-950">{title}</h1>
        <h2 className="text-gray-500">{description}</h2>
      </div>

      <>
        <div className="mb-5 flex justify-center gap-4">
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-500"
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
        <h3 className="mb-5 flex justify-center gap-4">
          <span>Week {weeks[currentWeek].week}</span>
          <span className="font-semibold">{weeks[currentWeek].theme}</span>
        </h3>

        <div className="flex flex-col gap-4">
          {weeks[currentWeek].days.map((day) => (
            <DayLearning dayLearning={day} key={day.day} />
          ))}
        </div>
      </>
    </div>
  );
}

export default App;
