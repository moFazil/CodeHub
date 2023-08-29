import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../Style/CssnotesStyle/grid.css';

export const Cssgrid = () => {
  return (
    <div className='grid'>
      <h1>CSS Grid Layout Module</h1>
      <h2>Grid Layout</h2>

      <p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning:</p>

      <div class="grid-container">
        <div class="item1">Header</div>
        <div class="item2">Menu</div>
        <div class="item3">Main</div>  
        <div class="item4">Right</div>
        <div class="item5">Footer</div>
      </div>
      <h2>Grid Columns</h2>
      <p>The vertical lines of grid items are called columns.</p>
      <img src={require('../../image/columngrid.png')} alt="columngrid" />

      <h2>Grid Rows</h2>
      <p>The horizontal lines of grid items are called rows.</p>
      <img src={require('../../image/rowgrid.png')} alt="rowgrid" /><br/>
      <h2>The grid-column Property:</h2>
      <p>The grid-column property defines on which column(s) to place an item.</p>
      <p>You define where the item will start, and where the item will end.</p>
      <img src={require('../../image/gridcolumn.png')} alt="GridColumn" />
      <h4 className='note'>Note: The grid-column property is a shorthand property for the grid-column-start and the grid-column-end properties.</h4><br/>
      <h2>The grid-row Property:</h2>
      <p>The grid-row property defines on which row to place an item.</p>

     <p> You define where the item will start, and where the item will end.</p>
     <img src={require('../../image/gridrow.png')} alt="Gridrow" />
        <Outlet/>
    </div>
  )
}
