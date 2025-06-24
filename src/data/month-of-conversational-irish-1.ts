import type { MonthLearning } from '@/models/models';

const monthOfConversationalIrish1: MonthLearning = {
  title: 'A Month of Conversational Irish',
  description: `This month-long plan focuses on building your conversational skills in Irish. We'll concentrate on practical phrases and sentences for everyday interactions, rather than deep grammar rules. The goal is to get you speaking comfortably.`,
  weeks: [
    {
      week: 1,
      theme: 'Greetings & Personal Information',
      days: [
        {
          day: 1,
          topic: 'Basic Greetings & Goodbyes',
          topicItems: [
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
          day: 2,
          topic: 'Asking How Someone Is',
          topicItems: [
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
          day: 3,
          topic: 'Introducing Yourself',
          topicItems: [
            { phrase: 'Cad is ainm duit?', translation: 'What is your name?' },
            { phrase: '[do ainm] is ainm dom.', translation: '[your name] is my name.' },
            {
              phrase: 'Cé tusa?',
              translation: 'Who are you? (less common for intro, but good to know)',
            },
          ],
        },
        {
          day: 4,
          topic: 'Asking Where Someone is From',
          topicItems: [
            { phrase: 'Cá as tú?', translation: 'Where are you from?' },
            { phrase: 'Is as [áit] mé.', translation: 'I am from [place].' },
            { phrase: 'An as Dún na nGall tú?', translation: 'Are you from Donegal?' },
          ],
        },
        {
          day: 5,
          topic: 'Review & Mini-Conversation Practice',
          topicItems: [
            { phrase: 'An dtuigeann tú?', translation: 'Do you understand?' },
            { phrase: 'Tuigim / Ní thuigim.', translation: "I understand / I don't understand." },
            { phrase: 'Labhair níos moille, le do thoil.', translation: 'Speak slower, please.' },
          ],
        },
        {
          day: 6,
          topic: 'Weekend: Listen & Observe',
          topicItems: [
            { phrase: 'Éist le podchraoladh Gaeilge.', translation: 'Listen to an Irish podcast.' },
            { phrase: 'Féach ar fhíseán Gaeilge.', translation: 'Watch an Irish video.' },
          ],
        },
        {
          day: 7,
          topic: 'Weekend: Review & Consolidate',
          topicItems: [
            { phrase: 'Déan athbhreithniú ar an tseachtain.', translation: 'Review the week.' },
            { phrase: 'Scríobh síos abairtí nua.', translation: 'Write down new sentences.' },
          ],
        },
      ],
    },
    {
      week: 2,
      theme: 'Daily Activities & Past/Future',
      days: [
        {
          day: 8,
          topic: "Talking About Yesterday's Activities",
          topicItems: [
            { phrase: 'Chuaigh mé ag rith inné.', translation: 'I went running yesterday.' },
            { phrase: 'Chuaigh mé ag snámh inné.', translation: 'I went swimming yesterday.' },
            { phrase: "D'fhéach mé teilifís inné.", translation: 'I watched TV yesterday.' },
          ],
        },
        {
          day: 9,
          topic: "Talking About Today's Activities",
          topicItems: [
            { phrase: 'Tá mé ag rith inniu.', translation: 'I am running today.' },
            { phrase: 'Tá mé ag obair inniu.', translation: 'I am working today.' },
            { phrase: 'Tá mé ag léamh leabhar inniu.', translation: 'I am reading a book today.' },
          ],
        },
        {
          day: 10,
          topic: "Talking About Tomorrow's Activities",
          topicItems: [
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
          day: 11,
          topic: "Asking About Others' Activities",
          topicItems: [
            { phrase: 'Cad a rinne tú inné?', translation: 'What did you do yesterday?' },
            { phrase: 'Cad atá tú ag déanamh inniu?', translation: 'What are you doing today?' },
            { phrase: 'Cad a dhéanfaidh tú amárach?', translation: 'What will you do tomorrow?' },
          ],
        },
        {
          day: 12,
          topic: 'Talking About Hobbies/Interests',
          topicItems: [
            { phrase: 'Is maith liom ag rith.', translation: 'I like running.' },
            { phrase: 'Is breá liom ceol.', translation: 'I love music.' },
            { phrase: 'An maith leat peil?', translation: 'Do you like football?' },
          ],
        },
        {
          day: 13,
          topic: 'Weekend: Immersion Practice',
          topicItems: [
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
          day: 14,
          topic: 'Weekend: Review & Create',
          topicItems: [
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
      week: 3,
      theme: 'Weather & Opinions',
      days: [
        {
          day: 15,
          topic: 'Asking About the Weather',
          topicItems: [
            { phrase: 'Cad é mar atá an aimsir?', translation: 'How is the weather?' },
            { phrase: 'An bhfuil sé ag cur báistí?', translation: 'Is it raining?' },
            {
              phrase: 'An bhfuil sé fliuch/grianmhar/fuar/te?',
              translation: 'Is it wet/sunny/cold/warm?',
            },
          ],
        },
        {
          day: 16,
          topic: 'Describing the Weather',
          topicItems: [
            { phrase: 'Tá sé gaofar.', translation: "It's windy." },
            { phrase: 'Tá sé geal.', translation: "It's bright." },
            { phrase: 'Tá sé scamallach.', translation: "It's cloudy." },
          ],
        },
        {
          day: 17,
          topic: 'Expressing Likes and Dislikes',
          topicItems: [
            { phrase: 'Is maith liom...', translation: 'I like...' },
            { phrase: 'Ní maith liom...', translation: "I don't like..." },
            { phrase: 'Is breá liom...', translation: 'I love...' },
            { phrase: 'Is fuath liom...', translation: 'I hate...' },
          ],
        },
        {
          day: 18,
          topic: 'Giving Simple Opinions',
          topicItems: [
            { phrase: 'Sílim go bhfuil sé go maith.', translation: "I think it's good." },
            { phrase: 'Níl mé cinnte.', translation: "I'm not sure." },
            { phrase: "B'fhéidir.", translation: 'Maybe.' },
          ],
        },
        {
          day: 19,
          topic: 'Asking for and Offering Help',
          topicItems: [
            { phrase: 'An féidir leat cabhrú liom?', translation: 'Can you help me?' },
            { phrase: 'Cinnte.', translation: 'Certainly.' },
            { phrase: 'Tá fáilte romhat.', translation: "You're welcome." },
          ],
        },
        {
          day: 20,
          topic: 'Weekend: Real-life Scenarios',
          topicItems: [
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
          day: 21,
          topic: 'Weekend: Review & Expand',
          topicItems: [
            { phrase: 'Athbhreithnigh na briathra go léir.', translation: 'Review all the verbs.' },
            { phrase: 'Faigh abairtí nua ar líne.', translation: 'Find new sentences online.' },
          ],
        },
      ],
    },
    {
      week: 4,
      theme: 'Food & General Chat',
      days: [
        {
          day: 22,
          topic: 'Talking About Food (Likes/Dislikes)',
          topicItems: [
            { phrase: 'Is maith liom tae.', translation: 'I like tea.' },
            { phrase: 'Ní maith liom feoil.', translation: "I don't like meat." },
            { phrase: 'Ar mhaith leat caife?', translation: 'Would you like coffee?' },
          ],
        },
        {
          day: 23,
          topic: 'Asking About Food/Drink',
          topicItems: [
            {
              phrase: 'Cad a bheadh agat?',
              translation: 'What would you have? (What would you like to drink/eat?)',
            },
            { phrase: 'Ba mhaith liom... le do thoil.', translation: 'I would like... please.' },
            { phrase: 'An bhfuil ocras ort?', translation: 'Are you hungry?' },
          ],
        },
        {
          day: 24,
          topic: 'Shopping & Prices (Basic)',
          topicItems: [
            { phrase: 'Cá mhéad atá air?', translation: 'How much is it?' },
            { phrase: 'Tá sé daor/saor.', translation: "It's expensive/cheap." },
            { phrase: 'An bhfuil sé ar díol?', translation: 'Is it on sale?' },
          ],
        },
        {
          day: 25,
          topic: 'Making Plans (Simple)',
          topicItems: [
            { phrase: 'An bhfuil tú saor amárach?', translation: 'Are you free tomorrow?' },
            { phrase: 'Cá rachaimid?', translation: 'Where will we go?' },
            { phrase: 'Bualaimid le chéile ag [am].', translation: "Let's meet at [time]." },
          ],
        },
        {
          day: 26,
          topic: 'General Chit-chat & Closing',
          topicItems: [
            { phrase: 'Go raibh maith agat.', translation: 'Thank you.' },
            { phrase: 'Tá fáilte romhat.', translation: "You're welcome." },
            { phrase: 'Go n-éirí leat.', translation: 'Good luck.' },
          ],
        },
        {
          day: 27,
          topic: 'Weekend: Conversation Practice',
          topicItems: [
            {
              phrase: 'Déan comhrá le duine éigin.',
              translation: 'Have a conversation with someone.',
            },
            { phrase: 'Úsáid na frásaí go minic.', translation: 'Use the phrases often.' },
          ],
        },
        {
          day: 28,
          topic: 'Weekend: Self-Assessment & Future Steps',
          topicItems: [
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
