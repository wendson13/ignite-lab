import { CircleNotch, DiscordLogo, FileArrowDown, Image, Lightning } from 'phosphor-react';
import { useParams } from 'react-router-dom';
import { useGetLessonBySlugQuery } from '../graphql/generated';
import { Button } from './Button';
import { Footer } from './Footer';
import { LinkCard } from './LinkCard';

export function Lesson() {
  const { slug } = useParams<{ slug: string }>();
  const { data } = useGetLessonBySlugQuery({
    variables: { slug }
  });

  if (!data || !data.lesson) {
    return (
      <div className="min-h-screen flex-1 flex justify-center items-center text-blue-500">
        <CircleNotch weight="bold" size={100} className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex-1">
      <div className="flex justify-center bg-black">
        <iframe
          className="w-full max-w-[68.75rem] max-h-[70vh] aspect-video"
          id="ytplayer"
          itemType="text/html"
          src={`https://www.youtube.com/embed/${data.lesson.videoId}`}
          frameBorder="0" />
      </div>

      <div className="flex flex-col gap-6 p-8">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-4 max-w-[70%]">
            <h1 className="font-bold text-2xl">{data.lesson.title}</h1>
            <p className="text-gray-200 leading-relaxed">{data.lesson.description}</p>
          </div>

          <div className="flex flex-col gap-4">
            <Button
              As="a"
              href="https://discord-service.rocketseat.dev/signin/ignite-lab"
              type='primary'
              Icon={DiscordLogo}
            >
              community on discord
            </Button>

            <Button
              As="a"
              href={data?.lesson?.challenge?.url}
              type='secondary'
              Icon={Lightning}
            >
              Access the challenge
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <img
            className="rounded-full w-16 h-16 border border-blue-500"
            src={data.lesson.teacher?.avatarURL}
            alt={data.lesson.teacher?.name}
          />
          <div className="flex flex-col max-w-xs">
            <strong className="font-bold text-2xl">{data.lesson.teacher?.name}</strong>
            <span className="text-sm text-gray-200 truncate leading-8">{data?.lesson.teacher?.bio}</span>
          </div>
        </div>

        <div className="flex gap-8 my-20">
          <LinkCard
            href="#"
            title="Complementary material"
            description="Access supplemental material to accelerate your development"
            icon={FileArrowDown}
          />

          <LinkCard
            href="#"
            title="Exclusive wallpapers"
            description="Download exclusive Ignite Lab wallpapers and customize your machine"
            icon={Image}
          />
        </div>

        <Footer />
      </div>

    </div>
  );
}
