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

interface LearningData {
  title: string;
  description: string;
  weeks: WeekLearning[];
}

export type { LearningData, WeekLearning, DayLearning, TopicItem };
