import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RedirectEvent } from './RedirectEvent';
import { Event } from './pages/Event';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/event" element={<RedirectEvent />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}
