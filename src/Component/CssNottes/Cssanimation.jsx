import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../Style/CssnotesStyle/anime.css';

export const Cssanimation = () => {
  return (
    <div className='animation'>
      <h1>CSS Animations</h1>
      <p>CSS allows animation of HTML elements without using JavaScript or Flash!</p>

      <p>In this chapter you will learn about the following properties:</p>
    <ul>
    <span> <li> @keyframes</li>
     <li> animation-name</li>
     <li> animation-duration</li>
     <li> animation-delay</li>
     <li> animation-iteration-count</li>
     <li> animation-direction</li>
     <li> animation-timing-function</li>
     <li> animation-fill-mode</li>
      <li> animation</li></span>
      </ul>
      <h2>What are CSS Animations?</h2>
     <p> An animation lets an element gradually change from one style to another.</p>

     <p> You can change as many CSS properties you want, as many times as you want.</p>

     <p> To use CSS animation, you must first specify some keyframes for the animation.</p>

     <p> Keyframes hold what styles the element will have at certain times.</p> <br />

     <h2>The <span> @keyframes Rule</span></h2>
    <p> When you specify CSS styles inside the @keyframes rule, the animation will gradually change from the current style to the new style at certain times.</p>

   <p> To get an animation to work, you must bind the animation to an element.</p>
   <p className="note"><strong>Note: </strong>The <span>animation-duration property</span> defines how long an animation should take to complete. If the animation-duration property is not specified, no animation will occur, because the default value is 0s (0 seconds). </p>

    <p>In the example above we have specified when the style will change by using the keywords "from" and "to" (which represents 0% (start) and 100% (complete)).</p>

   <p> It is also possible to use percent. By using percent, you can add as many style changes as you like.</p>
   <p>The animation-delay property specifies a delay for the start of an animation.</p>

   <h2>Specify the Speed Curve of the Animation</h2>
   <p>The <span> animation-timing-function</span> property specifies the speed curve of the animation.</p>
   <p>The <span> animation-timing-function</span> property can have the following values:</p>
   <ul>
    <li><span>ease</span> - Specifies an animation with a slow start, then fast, then end slowly (this is default)</li>
    <li><span>linear</span> - Specifies an animation with the same speed from start to end</li>
    <li><span>ease-in</span> - Specifies an animation with a slow start</li>
    <li><span>ease-out</span> - Specifies an animation with a slow end</li>
    <li><span>ease-in-out</span> - Specifies an animation with a slow start and end</li>
    <li><span>cubic-bezier(n,n,n,n)</span> - Lets you define your own values in a cubic-bezier function</li>
   </ul>
        <Outlet/>
    </div>
  )
}
