import type { MonthLearning } from '@/models/models';

const monthOfConversationalIrish1: MonthLearning = {
  id: 'month_module_0001',
  moduleType: 'month',
  title: 'A Month of Conversational Irish',
  description: `This month-long plan focuses on building your conversational skills in Irish. We'll concentrate on practical phrases and sentences for everyday interactions, rather than deep grammar rules. The goal is to get you speaking comfortably.`,
  weeks: [
    {
      id: 'week_module_0001',
      moduleType: 'week',
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
    },
    {
      id: 'week_module_0002',
      title: 'Daily Activities & Past/Future',
      moduleType: 'week',
      description: 'a weeks learning of daily activities & past/future',
      week: 2,
      days: [
        {
          id: 'day_module_0008',
          moduleType: 'day',
          title: "Talking About Yesterday's Activities",
          description: "A day of talking about yesterday's activities",
          day: 8,
          learningItems: [
            { phrase: 'Chuaigh mé ag rith inné.', translation: 'I went running yesterday.' },
            { phrase: 'Chuaigh mé ag snámh inné.', translation: 'I went swimming yesterday.' },
            { phrase: "D'fhéach mé teilifís inné.", translation: 'I watched TV yesterday.' },
          ],
        },
        {
          id: 'day_module_0009',
          moduleType: 'day',
          title: "Talking About Today's Activities",
          description: "A day of talking about today's activities",
          day: 9,
          learningItems: [
            { phrase: 'Tá mé ag rith inniu.', translation: 'I am running today.' },
            { phrase: 'Tá mé ag obair inniu.', translation: 'I am working today.' },
            { phrase: 'Tá mé ag léamh leabhar inniu.', translation: 'I am reading a book today.' },
          ],
        },
        {
          id: 'day_module_0010',
          moduleType: 'day',
          title: "Talking About Tomorrow's Activities",
          description: "A day of talking about tomorrow's activities",
          day: 10,
          learningItems: [
            { phrase: 'Beidh mé ag rith amárach.', translation: 'I will be running tomorrow.' },
            {
              phrase: 'Beidh mé ag bualadh le cairde amárach.',
              translation: 'I will be meeting friends tomorrow.',
            },
            {
              phrase: 'Beidh mé ag dul chuig an siopa amárach.',
              translation: 'I will be going to the shop tomorrow.',
            },
          ],
        },
        {
          id: 'day_module_0011',
          moduleType: 'day',
          title: "Asking About Others' Activities",
          description: "A day of asking about others' activities",
          day: 11,
          learningItems: [
            { phrase: 'Cad a rinne tú inné?', translation: 'What did you do yesterday?' },
            { phrase: 'Cad atá tú ag déanamh inniu?', translation: 'What are you doing today?' },
            { phrase: 'Cad a dhéanfaidh tú amárach?', translation: 'What will you do tomorrow?' },
          ],
        },
        {
          id: 'day_module_0012',
          moduleType: 'day',
          title: 'Talking About Hobbies/Interests',
          description: 'A day of talking about hobbies and interests',
          day: 12,
          learningItems: [
            { phrase: 'Is maith liom ag rith.', translation: 'I like running.' },
            { phrase: 'Is breá liom ceol.', translation: 'I love music.' },
            { phrase: 'An maith leat peil?', translation: 'Do you like football?' },
          ],
        },
        {
          id: 'day_module_0013',
          moduleType: 'day',
          title: 'Weekend: Immersion Practice',
          description: 'A weekend day for immersion practice',
          day: 13,
          learningItems: [
            {
              phrase: 'Bain triail as comhrá le cainteoir Gaeilge.',
              translation: 'Try a conversation with an Irish speaker.',
            },
            {
              phrase: 'Cleachtaigh na habairtí go minic.',
              translation: 'Practice the sentences often.',
            },
          ],
        },
        {
          id: 'day_module_0014',
          moduleType: 'day',
          title: 'Weekend: Review & Create',
          description: 'A weekend day for review and creation',
          day: 14,
          learningItems: [
            {
              phrase: 'Scríobh dialann bheag i nGaeilge.',
              translation: 'Write a small diary in Irish.',
            },
            {
              phrase: 'Déan achoimre ar do lá i nGaeilge.',
              translation: 'Summarize your day in Irish.',
            },
          ],
        },
      ],
    },
    {
      id: 'week_module_0003',
      moduleType: 'week',
      title: 'Weather & Opinions',
      description: 'a weeks learning of weather & opinions',
      week: 3,
      days: [
        {
          id: 'day_module_0015',
          moduleType: 'day',
          title: 'Asking About the Weather',
          description: 'A day of asking about the weather',
          day: 15,
          learningItems: [
            { phrase: 'Cad é mar atá an aimsir?', translation: 'How is the weather?' },
            { phrase: 'An bhfuil sé ag cur báistí?', translation: 'Is it raining?' },
            {
              phrase: 'An bhfuil sé fliuch/grianmhar/fuar/te?',
              translation: 'Is it wet/sunny/cold/warm?',
            },
          ],
        },
        {
          id: 'day_module_0016',
          moduleType: 'day',
          title: 'Describing the Weather',
          description: 'A day of describing the weather',
          day: 16,
          learningItems: [
            { phrase: 'Tá sé gaofar.', translation: "It's windy." },
            { phrase: 'Tá sé geal.', translation: "It's bright." },
            { phrase: 'Tá sé scamallach.', translation: "It's cloudy." },
          ],
        },
        {
          id: 'day_module_0017',
          moduleType: 'day',
          title: 'Expressing Likes and Dislikes',
          description: 'A day of expressing likes and dislikes',
          day: 17,
          learningItems: [
            { phrase: 'Is maith liom...', translation: 'I like...' },
            { phrase: 'Ní maith liom...', translation: "I don't like..." },
            { phrase: 'Is breá liom...', translation: 'I love...' },
            { phrase: 'Is fuath liom...', translation: 'I hate.' },
          ],
        },
        {
          id: 'day_module_0018',
          moduleType: 'day',
          title: 'Giving Simple Opinions',
          description: 'A day of giving simple opinions',
          day: 18,
          learningItems: [
            { phrase: 'Sílim go bhfuil sé go maith.', translation: "I think it's good." },
            { phrase: 'Níl mé cinnte.', translation: "I'm not sure." },
            { phrase: "B'fhéidir.", translation: 'Maybe.' },
          ],
        },
        {
          id: 'day_module_0019',
          moduleType: 'day',
          title: 'Asking for and Offering Help',
          description: 'A day of asking for and offering help',
          day: 19,
          learningItems: [
            { phrase: 'An féidir leat cabhrú liom?', translation: 'Can you help me?' },
            { phrase: 'Cinnte.', translation: 'Certainly.' },
            { phrase: 'Tá fáilte romhat.', translation: "You're welcome." },
          ],
        },
        {
          id: 'day_module_0020',
          moduleType: 'day',
          title: 'Weekend: Real-life Scenarios',
          description: 'A weekend day for real-life scenarios',
          day: 20,
          learningItems: [
            {
              phrase: 'Cleachtaigh comhrá beag sa bhaile.',
              translation: 'Practice a small conversation at home.',
            },
            {
              phrase: 'Tabhair cur síos ar do thimpeallacht.',
              translation: 'Describe your surroundings.',
            },
          ],
        },
        {
          id: 'day_module_0021',
          moduleType: 'day',
          title: 'Weekend: Review & Expand',
          description: 'A weekend day for review and expansion',
          day: 21,
          learningItems: [
            { phrase: 'Athbhreithnigh na briathra go léir.', translation: 'Review all the verbs.' },
            { phrase: 'Faigh abairtí nua ar líne.', translation: 'Find new sentences online.' },
          ],
        },
      ],
    },
    {
      id: 'week_module_0004',
      moduleType: 'week',
      title: 'Food & General Chat',
      description: 'a weeks learning of food & general chat',
      week: 4,
      days: [
        {
          id: 'day_module_0022',
          moduleType: 'day',
          title: 'Talking About Food (Likes/Dislikes)',
          description: 'A day of talking about food (likes/dislikes)',
          day: 22,
          learningItems: [
            { phrase: 'Is maith liom tae.', translation: 'I like tea.' },
            { phrase: 'Ní maith liom feoil.', translation: "I don't like meat." },
            { phrase: 'Ar mhaith leat caife?', translation: 'Would you like coffee?' },
          ],
        },
        {
          id: 'day_module_0023',
          moduleType: 'day',
          title: 'Asking About Food/Drink',
          description: 'A day of asking about food/drink',
          day: 23,
          learningItems: [
            {
              phrase: 'Cad a bheadh agat?',
              translation: 'What would you have? (What would you like to drink/eat?)',
            },
            { phrase: 'Ba mhaith liom... le do thoil.', translation: 'I would like... please.' },
            { phrase: 'An bhfuil ocras ort?', translation: 'Are you hungry?' },
          ],
        },
        {
          id: 'day_module_0024',
          moduleType: 'day',
          title: 'Shopping & Prices (Basic)',
          description: 'A day of basic shopping and prices',
          day: 24,
          learningItems: [
            { phrase: 'Cá mhéad atá air?', translation: 'How much is it?' },
            { phrase: 'Tá sé daor/saor.', translation: "It's expensive/cheap." },
            { phrase: 'An bhfuil sé ar díol?', translation: 'Is it on sale?' },
          ],
        },
        {
          id: 'day_module_0025',
          moduleType: 'day',
          title: 'Making Plans (Simple)',
          description: 'A day of making simple plans',
          day: 25,
          learningItems: [
            { phrase: 'An bhfuil tú saor amárach?', translation: 'Are you free tomorrow?' },
            { phrase: 'Cá rachaimid?', translation: 'Where will we go?' },
            { phrase: 'Bualaimid le chéile ag [am].', translation: "Let's meet at [time]." },
          ],
        },
        {
          id: 'day_module_0026',
          moduleType: 'day',
          title: 'General Chit-chat & Closing',
          description: 'A day of general chit-chat and closing phrases',
          day: 26,
          learningItems: [
            { phrase: 'Go raibh maith agat.', translation: 'Thank you.' },
            { phrase: 'Tá fáilte romhat.', translation: "You're welcome." },
            { phrase: 'Go n-éirí leat.', translation: 'Good luck.' },
          ],
        },
        {
          id: 'day_module_0027',
          moduleType: 'day',
          title: 'Weekend: Conversation Practice',
          description: 'A weekend day for conversation practice',
          day: 27,
          learningItems: [
            {
              phrase: 'Déan comhrá le duine éigin.',
              translation: 'Have a conversation with someone.',
            },
            { phrase: 'Úsáid na frásaí go minic.', translation: 'Use the phrases often.' },
          ],
        },
        {
          id: 'day_module_0028',
          moduleType: 'day',
          title: 'Weekend: Self-Assessment & Future Steps',
          description: 'A weekend day for self-assessment and future steps',
          day: 28,
          learningItems: [
            {
              phrase: 'Cad atá tú ag iarraidh a fhoghlaim next?',
              translation: 'What do you want to learn next?',
            },
            { phrase: 'Lean ar aghaidh ag labhairt Gaeilge.', translation: 'Keep speaking Irish.' },
          ],
        },
      ],
    },
  ],
};

export { monthOfConversationalIrish1 };
