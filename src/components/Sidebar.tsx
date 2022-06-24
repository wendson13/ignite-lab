import { gql, useQuery } from '@apollo/client';
import { LessonCard } from './LessonCard';

const GET_LESSONS_QUERY = gql`
  query MyQuery {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      availableAt
      lessonType
    }
  }
`;

type GetLessonsQueryData = {
  lessons: {
    id: string;
    title: string;
    slug: string;
    description: string;
    availableAt: string;
    lessonType: 'live' | 'class';
  }[]
}

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryData>(GET_LESSONS_QUERY);

  return (
    <aside className="w-full max-w-[23.5rem] flex flex-col gap-8 p-6 bg-gray-700">
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
