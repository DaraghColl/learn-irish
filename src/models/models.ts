type Module = 'day' | 'week' | 'month';

interface LearningItem {
  phrase: string;
  translation: string;
}

interface DayLearning {
  id: string;
  moduleType: Module;
  title: string;
  description: string;
  day: number;
  learningItems: LearningItem[];
}

interface WeekLearning {
  id: string;
  moduleType: Module;
  title: string;
  description: string;
  week: number;
  days: DayLearning[];
}

interface MonthLearning {
  id: string;
  moduleType: Module;
  title: string;
  description: string;
  weeks: WeekLearning[];
}

export type { MonthLearning, WeekLearning, DayLearning, LearningItem };
