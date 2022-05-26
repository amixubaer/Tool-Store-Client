import React from 'react';

const Blog = () => {
    return (
        <div className='text-center'>
            <h3>How will you improve the performance of a React Application?</h3>
            <p>Keeping component state local where necessary.<br/>
            Memoizing React components to prevent unnecessary re-renders.<br/>
            Code-splitting in React using dynamic import()<br/>
            Windowing or list virtualization in React.<br/>
            Lazy loading images in React.</p>
            
            <h3>What are the different ways to manage a state in a React application?</h3>            
            <p>There are four states . 1. Local state is data we manage in one or another component. 2.Global state is data we manage across multiple components. 3. Server state is data that comes from an external server that must be integrated with our UI state. 4. URL state is data  that exists on our URLs, including the pathname and query parameters.</p>

            <h3>How does prototypical inheritance work?</h3>
            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
       
            <h3>Why you do not set the state directly in React?</h3>
            <p>One should never update the state directly because of the following reasons:
            If you update it directly, calling the setState() afterward may just replace the update you made.
            When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
            You will lose control of the state across all components.</p>

            <h3>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
            <p>we will map with the names and call it.</p>

            <h3>What is a unit test? Why should write unit tests?</h3>
            <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
        </div>
    );
};

export default Blog;