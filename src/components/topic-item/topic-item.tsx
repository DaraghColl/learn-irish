import { useState } from 'react';
import { BookOpenCheck } from 'lucide-react';
import type { TopicItem as TopicItemI } from '@models/models';

interface TopcItemProps {
  topicItem: TopicItemI;
  isLastItem: boolean;
}

const TopicItem = (props: TopcItemProps) => {
  const { topicItem, isLastItem } = props;
  const [showTranslation, setShowTranslation] = useState(false);
  console.log('🚀 ~ TopicItem ~ showTranslation:', showTranslation);

  return (
    <div className="flex flex-col gap-4 py-2">
      <div>{topicItem.phrase}</div>
      <div className="flex items-center gap-4">
        <button className="cursor-pointer" onClick={() => setShowTranslation(!showTranslation)}>
          <BookOpenCheck />
        </button>
        <span className={`${showTranslation ? 'opacity-100' : 'opacity-0'}`}>
          {topicItem.translation}
        </span>
      </div>
      {!isLastItem && <div className="h-1 w-10 rounded-lg bg-indigo-200" />}
    </div>
  );
};

export { TopicItem };
