import React from 'react'
import { Outlet } from 'react-router-dom'
import '../../Style/htmllists.css';
export const Htmllist = () => {
  return (
    <div className='list'>
      <h1>HTML Lists</h1>
            <p>HTML lists allow web developers to group a set of related items in lists.</p>

        <p>An unordered HTML list:</p>
            <ul> 
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
            </ul>

        <p><p>An ordered HTML list:</p></p>
            <ol>
                <li>Item</li>
                <li>Item</li>
                <li>Item</li>
            </ol>

            <h2>Unordered HTML List</h2>

            <p>An unordered list starts with the <span>&lt;ul&gt;</span> tag. Each list item starts with the <span>&lt;li&gt;</span> tag.</p>

            <p>The list items will be marked with bullets (small black circles) by default:</p>

            <img src={require('../../image/ul.png')} alt="Ul" />

            <h2>Ordered HTML List</h2>
            <p>An ordered list starts with the <span>&lt;ol&gt;</span> tag. Each list item starts with the <span>&lt;li&gt;</span> tag.</p>

            <p>The list items will be marked with numbers by default:</p>

            <img src={require('../../image/ol.png')} alt="Ol" />

            <h2>HTML Description Lists</h2>

            <p>HTML also supports description lists.</p>

            <p>A description list is a list of terms, with a description of each term.</p>

            <p>The <span>&lt;dl&gt;</span> tag defines the description list, the <span>&lt;dt&gt;</span> 
            tag defines the term (name), and the <span>&lt;dd&gt;</span> tag describes each term:</p>

            <img src={require('../../image/dl.png')} alt="Dl" />

        <Outlet/> 
    </div>
  )
}
