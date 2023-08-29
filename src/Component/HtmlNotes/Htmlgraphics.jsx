import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../Style/htmlgraphics.css';

export const Htmlgraphics = () => {
  return (
    <div className='graphics'>
       <h1>HTML Canvas Graphics</h1>

            <p>The HTML <span>&lt;canvas&gt;</span> element is used to draw graphics on a web page.</p>

            <p>The graphic to the left is created with <span>&lt;canvas&gt;</span>. It shows four elements: 
            a red rectangle, a gradient rectangle, a multicolor rectangle, and a multicolor text.</p>

            <h2>What is HTML Canvas?</h2>

            <p>The HTML <span>&lt;canvas&gt;</span> element is used to draw graphics, on the fly, via JavaScript.</p>

            <p>The <span>&lt;canvas&gt;</span> element is only a container for graphics. You must use JavaScript to actually draw the graphics.</p>

            <p>Canvas has several methods for drawing paths, boxes, circles, text, and adding images.</p>


            <h2>Canva Examples</h2>

            <p>A canvas is a rectangular area on an HTML page. By default, a canvas has no border and no content.</p>
            <p>The markup looks like this:</p>

            <p><span>&lt;canvas id="myCanvas" width="200" height="100"&gt;</span><span>&lt;/canvas&gt;</span></p>

            <p className='note'><b>Note:</b> Always specify an <span>id</span> attribute (to be referred to in a script), 
            and a <span>width</span> and <span>height</span> attribute to define the size of the canvas. To add a border, use the <span>style</span> attribute.</p>

            <img src={require('../../image/canva.png')} alt="Canva Code" />

            <h2>Add a JavaScript</h2>

            <p>After creating the rectangular canvas area, you must add a JavaScript to do the drawing.</p>

            <p>Here are some examples:</p>

            <p>Draw a Line</p>

            <img src={require('../../image/canvasLine.jpg')} alt="Line" /><br/><br/>

            <img src={require('../../image/dline.png')} alt="Line" />


            <p>Draw a Circle</p>
             <img src={require('../../image/canvasCircle.jpg')} alt="circle" style={{width:"300px"}}/><br/><br/>

            <img src={require('../../image/dcircle.png')} alt="Circle" />


            <p>Draw a Text</p>

            <img src={require('../../image/textcanva.jpg')} alt="Text" style={{width:"300px"}} /><br/><br/>

            <img src={require('../../image/dtext.png')} alt="Text" />


            <p>Draw Linear Gradient</p>

            <img src={require('../../image/gradient.png')} alt="Linear Gradient" /><br/><br/>

            <img src={require('../../image/dgradient.png')} alt="Linear Gradient" />

            <button className="enterQuiz" onClick={()=>{
              window.location.href='http://localhost:3000/html/htquiz'
            }}>Take Quiz</button>


        <Outlet/>
    </div>
  )
}
