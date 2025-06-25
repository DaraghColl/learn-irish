import type { WeekLearning } from '@/models/models';

const weekOfGreetingsAndPersonalInformation: WeekLearning = {
  id: 'week_module_0001',
  moduleType: 'day',
  title: 'Greetings & Personal Information',
  description: 'a weeks learning of geretings and personal information',
  week: 1,
  days: [
    {
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
    },
    {
      id: 'day_module_0002',
      moduleType: 'day',
      title: 'Asking How Someone Is',
      description: 'A day of asking how someone is',
      day: 2,
      learningItems: [
        { phrase: 'Cad é mar atá tú?', translation: 'How are you? (informal, to one person)' },
        {
          phrase: 'Tá mé go maith, go raibh maith agat.',
          translation: 'I am well, thank you.',
        },
        { phrase: 'Tá mé go hiontach.', translation: "I'm great." },
        { phrase: 'Níl mé ró-mhaith.', translation: "I'm not too well." },
      ],
    },
    {
      id: 'day_module_0003',
      moduleType: 'day',
      title: 'Introducing Yourself',
      description: 'A day of introducing yourself',
      day: 3,
      learningItems: [
        { phrase: 'Cad is ainm duit?', translation: 'What is your name?' },
        { phrase: '[do ainm] is ainm dom.', translation: '[your name] is my name.' },
        {
          phrase: 'Cé tusa?',
          translation: 'Who are you? (less common for intro, but good to know)',
        },
      ],
    },
    {
      id: 'day_module_0004',
      moduleType: 'day',
      title: 'Asking Where Someone is From',
      description: 'A day of asking where someone is from',
      day: 4,
      learningItems: [
        { phrase: 'Cá as tú?', translation: 'Where are you from?' },
        { phrase: 'Is as [áit] mé.', translation: 'I am from [place].' },
        { phrase: 'An as Dún na nGall tú?', translation: 'Are you from Donegal?' },
      ],
    },
    {
      id: 'day_module_0005',
      moduleType: 'day',
      title: 'Review & Mini-Conversation Practice',
      description: 'A day of review and mini-conversation practice',
      day: 5,
      learningItems: [
        { phrase: 'An dtuigeann tú?', translation: 'Do you understand?' },
        { phrase: 'Tuigim / Ní thuigim.', translation: "I understand / I don't understand." },
        { phrase: 'Labhair níos moille, le do thoil.', translation: 'Speak slower, please.' },
      ],
    },
    {
      id: 'day_module_0006',
      moduleType: 'day',
      title: 'Weekend: Listen & Observe',
      description: 'A weekend day for listening and observing',
      day: 6,
      learningItems: [
        { phrase: 'Éist le podchraoladh Gaeilge.', translation: 'Listen to an Irish podcast.' },
        { phrase: 'Féach ar fhíseán Gaeilge.', translation: 'Watch an Irish video.' },
      ],
    },
    {
      id: 'day_module_0007',
      moduleType: 'day',
      title: 'Weekend: Review & Consolidate',
      description: 'A weekend day for review and consolidation',
      day: 7,
      learningItems: [
        { phrase: 'Déan athbhreithniú ar an tseachtain.', translation: 'Review the week.' },
        { phrase: 'Scríobh síos abairtí nua.', translation: 'Write down new sentences.' },
      ],
    },
  ],
};

export { weekOfGreetingsAndPersonalInformation };
