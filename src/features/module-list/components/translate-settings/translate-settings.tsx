import { useAtom } from 'jotai';
import { ArrowRightLeft, Eye, EyeOff } from 'lucide-react';
import {
  isTranslationFlipped,
  showAllTranslation,
} from '@state/language-settings/language-settings';

const TranslateSettings = () => {
  const [translationFlipped, setTranslationFlipped] = useAtom(isTranslationFlipped);
  const [showAllTranslationValue, setShowAllTranslationValue] = useAtom(showAllTranslation);

  return (
    <div className="mb-2 flex rounded-sm border-1 border-gray-200">
      <button
        className="flex w-1/2 cursor-pointer justify-center rounded-l-sm border-r-2 border-gray-200 p-2 hover:bg-gray-50"
        onClick={() => setTranslationFlipped(!translationFlipped)}
      >
        <div className="flex w-full items-center gap-2">
          <span className="w-2/5">{translationFlipped ? 'English' : 'Irish'}</span>
          <div className="flex w-1/5 justify-center">
            <ArrowRightLeft className="w-4 stroke-gray-500" />
          </div>
          <span className="w-2/5">{translationFlipped ? 'Irish' : 'English'}</span>
        </div>
      </button>
      <button
        className="flex w-1/2 cursor-pointer justify-center gap-2 rounded-r-sm p-2 hover:bg-gray-50"
        onClick={() => setShowAllTranslationValue(!showAllTranslationValue)}
      >
        {showAllTranslationValue ? (
          <Eye className="mt-[1px] w-4 stroke-indigo-500" />
        ) : (
          <EyeOff className="mt-[1px] w-4 stroke-gray-500" />
        )}
        <p>translation</p>
      </button>
    </div>
  );
};

export { TranslateSettings };
