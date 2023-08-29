import { Outlet } from "react-router-dom";
import React from "react";
import '../../Style/CssnotesStyle/cssintro.css';

export var Cssintro =()=>{
    return(
        <div className="cssintro">
            <h1>CSS Introduction</h1>
            <h2>What is CSS?</h2>
        <ul>
            <li>CSS stands for Cascading Style Sheets</li>
            <li>CSS describes how HTML elements are to be displayed on screen, paper, or in other media</li>
            <li>CSS saves a lot of work. It can control the layout of multiple web pages all at once</li>
            <li>External stylesheets are stored in CSS files</li>
        </ul>
        <h2>Why Use CSS?</h2>
        <p>CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.</p>
        <img src={require('../../image/introcss.png')} alt="" />

        <h2>CSS Solved a Big Problem</h2>
       <p>HTML was NEVER intended to contain tags for formatting a web page!</p>

       <p>HTML was created to describe the content of a web page, like:</p>

       <span><h3>&lt;h1&gt;This is a heading &lt;/h1&gt;</h3></span>

        <span><h5>&lt;p&gt; This is a paragraph.&lt;/p&gt;</h5></span>

       <p> When tags like <span>&lt;font&gt;</span>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers.<br/>
         Development of large websites, where fonts and color information were added to every single page, became a long and expensive<br/>
          process.</p>

        To solve this problem, the World Wide Web Consortium (W3C) created CSS.

        CSS removed the style formatting from the HTML page!
       <Outlet/>
        </div>
    )
}