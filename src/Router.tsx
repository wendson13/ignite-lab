import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RedirectEvent } from './RedirectEvent';
import { Event } from './pages/Event';
import { Subscriber } from './pages/Subscribe';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Subscriber />} />
        <Route path="/event" element={<RedirectEvent />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}
