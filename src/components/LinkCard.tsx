import { CaretRight, Icon } from 'phosphor-react';

type LinkCardProps = {
  icon: Icon;
  href: string;
  title: string;
  description: string;
}

export function LinkCard({ title, description, icon: Icon, href = '#' }: LinkCardProps) {
  return (
    <a
      className="flex-1 flex bg-gray-700 transition-colors rounded overflow-hidden hover:bg-gray-600"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="h-full flex items-center p-6 bg-green-700">
        <Icon size={40} />
      </div>

      <div className="flex-1 flex items-center justify-between p-6">
        <div className="max-w-[70%] flex flex-col gap-2">
          <strong className="text-2xl">{title}</strong>
          <p className="text-gray-200 leading-relaxed text-sm">{description}</p>
        </div>

        <CaretRight size={24} className="text-blue-500" />
      </div>
    </a>
  );
}
