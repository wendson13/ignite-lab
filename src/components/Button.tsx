import { Icon } from 'phosphor-react';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  As?: 'button' | 'a';
  href?: string;
  type: 'primary' | 'secondary';
  Icon?: Icon;
}

export function Button({ children, type, As = 'button', Icon, href }: ButtonProps) {
  return (
    type === 'primary'
      ? <As href={href}
        className="flex items-center gap-3 rounded py-4 px-3.5 font-bold text-sm uppercase transition-colors bg-green-500 hover:bg-green-700"
      >
        {Icon && <Icon size={24} />}
        {children}
      </As>
      : <As href={href}
        className="flex items-center gap-3 py-4 px-3.5 uppercase text-sm font-bold rounded border border-blue-500 transition-colors hover:text-gray-900 hover:bg-blue-500"
      >
        {Icon && <Icon size={24} />}
        {children}
      </As>
  );
}
