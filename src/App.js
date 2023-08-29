import { Route, Routes } from 'react-router-dom';

import './App.css';
import Topbar from './Component/CodeHub';
import Content from './Component/Content';
import { Htmlunits } from './Component/HtmlUnits';
import { Cssunits } from './Component/CssUnits';
import { Cssintro } from './Component/CssNottes/Cssintro';
import { Cssflex } from './Component/CssNottes/Cssflex';
import { Cssgrid } from './Component/CssNottes/Cssgrid';
import { Cssanimation } from './Component/CssNottes/Cssanimation';
import { Cssrwd } from './Component/CssNottes/Cssrwd';
import { Htmlintro } from './Component/HtmlNotes/Htmlintro';
import { Htmlforms } from './Component/HtmlNotes/Htmlforms';
import { Htmltables } from './Component/HtmlNotes/Htmltables';
import { Htmlgraphics } from './Component/HtmlNotes/Htmlgraphics';
import { Htmllist } from './Component/HtmlNotes/Htmllist';
import { Htmlquiz } from './Component/HtmlNotes/Htmlquiz';
import { Cssquiz } from './Component/CssNottes/Cssquiz.';
import { Signin } from './Component/Signin';
import { Login } from './Component/Login';


function App() {
  return (

    <div> 
      <Topbar />

      <Routes>
        <Route path='/' element={<Content />} />

        <Route path='html' element={<Htmlunits />}>
          <Route path='/html/int' element={<Htmlintro />} />
          <Route path='/html/form' element={<Htmlforms />} />
          <Route path='/html/table' element={<Htmltables />} />
          <Route path='/html/graph' element={<Htmlgraphics />} />
          <Route path='/html/list' element={<Htmllist />} />
          <Route path='/html/htquiz' element={<Htmlquiz />} />
        </Route>

        <Route path='css' element={<Cssunits />}>
          <Route path='/css/intro' element={<Cssintro />} />
          <Route path='/css/flex' element={<Cssflex />} />
          <Route path='/css/grid' element={<Cssgrid />} />
          <Route path='/css/anime' element={<Cssanimation />} />
          <Route path='/css/rwd' element={<Cssrwd />} />
          <Route path='/css/quiz' element={<Cssquiz />} />
        </Route>
        <Route path='sign' element={<Signin />} />
        <Route path='log' element={<Login />} />
      </Routes>
    </div>

  );
}

export default App;
