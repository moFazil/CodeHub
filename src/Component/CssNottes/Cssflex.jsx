import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../Style/CssnotesStyle/flex.css';

export const Cssflex = () => {
  return (
    <div className='flex'>
      <h1>CSS Flexbox</h1>
      <div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
  <div>4</div>
  <div>5</div>
  <div>6</div>  
  <div>7</div>
  <div>8</div>
  </div>

  <p>Try to resize the browser window.</p>
  <p>A container with "flex-wrap: nowrap;" will never wrap its items.</p>
  <div className='note'><p><strong>Note:</strong> Flexbox is not supported in Internet Explorer 10 or earlier versions.</p></div>
    <h2>CSS Flex Container</h2>
    <div className="cont">
   <h4> The flex container properties are: </h4>
<ul>
    <li>flex-direction</li>
    <li>flex-wrap</li>
    <li>flex-flow</li>
    <li>justify-content</li>
    <li>align-items</li>
    <li>align-content</li>
    </ul>
    </div>

    <h2>CSS Flex Items</h2>
    <h2>Child Elements (Items)</h2>
    <p>The direct child elements of a flex container automatically becomes flexible (flex) items.</p>

    <div className="cont">
    <h4>The flex item properties are:</h4>
    <ul>
        <li>order</li>
        <li>flex-grow</li>
        <li>flex-shrink</li>
        <li>flex-basis</li>
        <li>flex</li>
        <li>align-self</li>
        </ul>
        </div>

    <h2>Responsive Flexbox</h2>
    <img src={require('../../image/flexresponse.png')} alt="" />
    <p>You learned from the CSS Media Queries chapter that you can use media queries to create different layouts for different screen sizes<br/>
       and devices.</p>


        <Outlet/>
    </div>
    
  )
}
