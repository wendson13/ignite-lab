import { useGetLessonsQuery } from '../graphql/generated';
import { LessonCard } from './LessonCard';

type SidebarProps = {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const { data } = useGetLessonsQuery();
  isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

  return (
    <aside className={`fixed top-14 right-0 overflow-hidden max-w-[23.5rem] flex flex-col gap-8 bg-gray-700 transition-all lg:w-full lg:opacity-100 lg:h-auto lg:p-6 lg:static ${!isOpen ? 'w-0 opacity-0' : 'w-full h-[calc(100%-3.5rem)] max-w-none p-6 opacity-100 overflow-scroll'}`}>
      <span className="text-white text-bold text-2xl after:h-0.5 after:my-6 after:bg-gray-500">
        lessons schedule
      </span>

      <span className="w-full h-0.5 bg-gray-500" />

      <ul className="flex flex-col gap-8">
        {
          data?.lessons.map(lesson => {
            return (
              <li key={lesson.id}>
                <LessonCard
                  title={lesson.title}
                  slug={lesson.slug}
                  lessonType={lesson.lessonType}
                  availableAt={lesson.availableAt}
                />
              </li>
            );
          })
        }
      </ul>
    </aside>
  );
}
