import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import { Link } from 'react-router-dom';

type LessonCardProps = {
  title: string;
  slug: string;
  availableAt: string;
  lessonType: 'live' | 'class';
}

export function LessonCard(props: LessonCardProps) {
  const isLessonAvailable = isPast(new Date(props.availableAt));
  const availableDateFormatted = format(new Date(props.availableAt), 'EEEE\' • \'dd\' de \'MMMM\' • \'H\'h\'mm', {
    locale: enUS
  });

  return (
    <Link to={`/event/lesson/${props.slug}`} className="flex flex-col gap-2 group">
      <time className="first-letter:capitalize">
        {availableDateFormatted}
      </time>

      <div className="flex flex-col gap-4 p-4 rounded border transition-colors border-gray-500 group-hover:border-green-500">
        <header className="flex justify-between items-center">
          {
            isLessonAvailable
              ? <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
                <CheckCircle size={20} className="text-blue-500" />
                Content released
              </span>
              : <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                <Lock size={20} />
                Coming soon
              </span>
          }

          <span className="py-[0.125rem] px-2 text-green-300 text-xs font-bold rounded border border-green-300">
            {props.lessonType === 'live' ? 'LIVE' : 'PRACTICAL LESSON'}
          </span>
        </header>

        <strong className="text-gray-200 font-bold">
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
