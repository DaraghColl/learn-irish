import type { DayLearning } from '@/models/models';

const dayOfGreetings: DayLearning = {
  id: 'day_module_0001',
  moduleType: 'day',
  title: 'Basic Greetings & Goodbyes',
  description: 'A day of basic greetings & goodbyes',
  day: 1,
  learningItems: [
    { phrase: 'Dia duit.', translation: 'Hello. (to one person)' },
    { phrase: 'Dia daoibh.', translation: 'Hello. (to more than one person)' },
    { phrase: 'Slán leat.', translation: 'Goodbye. (to one person, you are leaving)' },
    {
      phrase: 'Slán libh.',
      translation: 'Goodbye. (to more than one person, you are leaving)',
    },
    { phrase: 'Oíche mhaith.', translation: 'Good night.' },
    { phrase: 'Dia duit ar maidin.', translation: 'Good morning.' },
  ],
};

export { dayOfGreetings };
