import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../Style/CssnotesStyle/rwd.css';

export const Cssrwd = () => {
  return (
    <div className='res'>
     <h1> Responsive Web Design - Introduction</h1>
     <h2>What is Responsive Web Design?</h2>
    <p> Responsive web design makes your web page look good on all devices.</p>

   <p> Responsive web design uses only HTML and CSS.</p>

    <p>Responsive web design is not a program or a JavaScript.</p>

    <h2>Designing For The Best Experience For All Users</h2>
    <p>Web pages can be viewed using many different devices: desktops, tablets, and phones. Your web page should look good, and be easy <br />
       to use, regardless of the device.</p>
       <p>Web pages should not leave out information to fit smaller devices, but rather adapt its content to fit any device:</p>
       <img src={require('../../image/rwd.png')} alt="Responsive" />
       <p>It is called responsive web design when you use CSS and HTML to resize, hide, shrink, enlarge, or move the content <br />
        to make it look good on any screen.</p>

        <h2>What is The Viewport?</h2>
        The viewport is the user's visible area of a web page.

       <p>The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.</p>

        <p>Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and a fixed size.</p>

        <p>Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. 
          To fix this, browsers on those devices scaled down the entire web page to fit the screen.</p>

         <p>This was not perfect!! But a quick fix.</p>

         <h2>Setting The Viewport</h2>
         <p>HTML5 introduced a method to let web designers take control over the viewport, through the <span> &lt;meta&gt;</span> tag.</p>

          <p>You should include the following <span> &lt;meta&gt;</span> viewport element in all your web pages:</p>

          <p className='note'> <span>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</span></p>
          <p>This gives the browser instructions on how to control the page's dimensions and scaling.</p>

          <p>The width=device-width part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).</p>

            <p>The initial-scale=1.0 part sets the initial zoom level when the page is first loaded by the browser.</p>

            <button className="enterQuiz" onClick={()=>{
              window.location.href='http://localhost:3000/css/quiz'
            }}>Take Quiz</button>
        <Outlet/>
    </div>
  )
}
