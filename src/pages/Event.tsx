import { Header } from '../components/Header';
import { Lesson } from '../components/Lesson';
import { Sidebar } from '../components/Sidebar';

export function Event () {
  return (
    <>
      <Header />

      <main className="min-h-screen flex">
        <Lesson />

        <Sidebar />
      </main>      
    </>
  );
}