import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="flex flex-full justify-center items-center py-5 border-b border-gray-600 bg-gray-700">
      <Link to="/">
        <img src="/logo.svg" alt="ignite lab - React JS" />
      </Link>
    </header>
  );
}
