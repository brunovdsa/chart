import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from '../pages/about/About';
import { Home } from '../pages/home/Home';
import { NotFound } from '../pages/notFound/NotFound';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/income-statement/:id' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
