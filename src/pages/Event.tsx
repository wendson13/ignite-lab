import { useState } from 'react';
import { Header } from '../components/Header';
import { Lesson } from '../components/Lesson';
import { Sidebar } from '../components/Sidebar';

export function Event() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header setIsMenuOpen={setIsMenuOpen} isOpen={isMenuOpen} />

      <main className="min-h-screen flex">
        <Lesson />

        <Sidebar isOpen={isMenuOpen} />
      </main>
    </>
  );
}
