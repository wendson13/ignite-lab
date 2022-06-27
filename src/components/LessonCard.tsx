import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import { Link, useParams } from 'react-router-dom';

type LessonCardProps = {
  title: string;
  slug: string;
  availableAt: string;
  lessonType: 'live' | 'class';
}

export function LessonCard(props: LessonCardProps) {
  const { slug } = useParams<{ slug: string }>();

  const isCurrentLesson = slug === props.slug;
  const isLessonAvailable = isPast(new Date(props.availableAt));
  const availableDateFormatted = format(new Date(props.availableAt), 'EEEE\' • \'dd\' de \'MMMM\' • \'H\'h\'mm', {
    locale: enUS
  });

  return (
    <Link to={`/event/lesson/${props.slug}`} className="flex flex-col gap-2 group">
      <time className="first-letter:capitalize">
        {availableDateFormatted}
      </time>

      <div
        className={`
          flex flex-col gap-4 p-4 rounded border transition-colors border-gray-500 group-hover:border-green-500 relative before:w-3.5 before:h-3.5 before:absolute before:top-2/4 before:-left-2 before:-translate-y-2/4 before:origin-center before:rotate-45 before:opacity-0 before:transition

          ${isCurrentLesson && 'bg-green-500 border-green-500 before:bg-green-500 before:opacity-100'}
        `}
      >
        <header
          className={`
            flex justify-between items-center text-blue-500
            ${isCurrentLesson && 'text-white'}
          `}
        >
          {
            isLessonAvailable
              ? <span className="flex items-center gap-2 text-sm font-bold">
                <CheckCircle size={20} />
                Content released
              </span>
              : <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                <Lock size={20} weight="bold" />
                Coming soon
              </span>
          }

          <span
            className={`
              py-[0.125rem] px-2 text-xs font-bold rounded border border-green-300
              ${isCurrentLesson ? 'text-white border-white' : 'text-green-300'}
            `}
          >
            {props.lessonType === 'live' ? 'LIVE' : 'PRACTICAL LESSON'}
          </span>
        </header>

        <strong
          className={`
            text-gray-200 font-bold
            ${isCurrentLesson && 'text-white'}
          `}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
