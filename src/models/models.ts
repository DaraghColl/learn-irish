interface TopicItem {
  phrase: string;
  translation: string;
}

interface DayLearning {
  day: number;
  topic: string;
  topicItems: TopicItem[];
}

interface WeekLearning {
  week: number;
  theme: string;
  days: DayLearning[];
}

interface MonthLearning {
  title: string;
  description: string;
  weeks: WeekLearning[];
}

export type { MonthLearning, WeekLearning, DayLearning, TopicItem };
