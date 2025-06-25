import { useEffect, useState } from 'react';
import { BookOpenCheck } from 'lucide-react';
import { useAtom } from 'jotai';
import type { LearningItem as LearningItemI } from '@models/models';
import {
  isTranslationFlipped,
  showAllTranslation,
} from '@/state/language-settings/language-settings';

interface LearningItemIProps {
  topicItem: LearningItemI;
  isLastItem: boolean;
}

const LearningItem = (props: LearningItemIProps) => {
  const { topicItem, isLastItem } = props;
  const [isTranslationFlippedValue] = useAtom(isTranslationFlipped);
  const [showAllTranslationValue] = useAtom(showAllTranslation);
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    if (showAllTranslationValue === true) {
      setShowTranslation(true);
    } else {
      setShowTranslation(false);
    }
  }, [showAllTranslationValue]);

  return (
    <div className="flex flex-col gap-6 py-2">
      <div>{!isTranslationFlippedValue ? topicItem.phrase : topicItem.translation}</div>
      <button
        className="flex cursor-pointer gap-2 text-left"
        onClick={() => setShowTranslation(!showTranslation)}
      >
        <div className="flex h-5 w-5 flex-shrink-0 justify-center">
          <BookOpenCheck
            className={`${showTranslation ? 'stroke-indigo-500' : 'stroke-gray-500'} mt-[1px] w-4 transition-all duration-200 ease-in-out`}
          />
        </div>
        <p className="text-gray-500">
          {showTranslation
            ? !isTranslationFlippedValue
              ? topicItem.translation
              : topicItem.phrase
            : 'show translation'}
        </p>
      </button>
      {!isLastItem && <div className="h-1 w-10 rounded-lg bg-indigo-200" />}
    </div>
  );
};

export { LearningItem };
