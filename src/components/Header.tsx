import { List, X } from 'phosphor-react';
import { Link } from 'react-router-dom';

type HeaderProps = {
  setIsMenuOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

export function Header({ setIsMenuOpen, isOpen }: HeaderProps) {
  return (
    <header className="max-h-[3.5rem] flex flex-full justify-between items-center px-6 py-5 border-b border-gray-600 bg-gray-700 lg:justify-center">
      <Link to="/">
        <img src="/logo.svg" alt="ignite lab - React JS" className="w-40 md:w-52 lg:w-auto" />
      </Link>

      <button
        className="flex items-center gap-2 lg:hidden text-sm leading-relaxed"
        onClick={() => setIsMenuOpen(!isOpen)}
      >
        Lessons
        {
          isOpen
            ? <X size={32} className="text-blue-500 animate-rotation" />
            : <List size={32} className="text-blue-500" />
        }
      </button>
    </header>
  );
}
