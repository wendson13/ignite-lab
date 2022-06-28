import { CircleNotch } from 'phosphor-react';
import { Navigate } from 'react-router-dom';
import { useGetSlugFirstLessonQuery } from './graphql/generated';

export const RedirectEvent = () => {
  const { data } = useGetSlugFirstLessonQuery();

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
