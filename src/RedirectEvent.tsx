import { gql, useQuery } from '@apollo/client';
import { CircleNotch } from 'phosphor-react';
import { Navigate } from 'react-router-dom';

const GET_SLUG_FIRST_LESSON_QUERY = gql`
  query {
    lessons(first: 1) {
      slug
    }
  }
`;

type GetSlugFirstLessonData = {
  lessons: [
    {
      slug: string;
    }
  ]
}

export const RedirectEvent = () => {
  const { data } = useQuery<GetSlugFirstLessonData>(GET_SLUG_FIRST_LESSON_QUERY);

  const slug = data?.lessons[0].slug;

  if (slug) {
    return <Navigate to={`/event/lesson/${slug}`} replace />;
  }
  return (
    <div className="min-h-screen flex justify-center items-center text-blue-500">
      <CircleNotch weight="bold" size={100} className="animate-spin" />
    </div>
  );
};
