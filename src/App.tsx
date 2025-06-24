import { monthOfConversationalIrish1 } from '@data/month-of-conversational-irish-1';
import { MonthLearning } from '@components/month-learning/month-learning';

function App() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <MonthLearning monthLearningData={monthOfConversationalIrish1} />
    </div>
  );
}

export default App;
