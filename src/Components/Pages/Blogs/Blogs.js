import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-16'>
            <div className='bg-white text-left p-4 mb-8'>
                <h1 className='text-2xl'>What are the different ways to manage a state in a React application?</h1>
                <p className='text-xl'>
                    The Four Kinds of React State to Manage
                    When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                    There are four main types of state you need to properly manage in your React apps:
                    <br />

                    Local state
                    <br />
                    Global state <br />
                    Server state <br />
                    URL state <br />
                    Let's cover each of these in detail: <br />

                    Local (UI) state - Local state is data we manage in one or another component.

                    Local state is most often managed in React using the useState hook.

                    For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form,s inputs. <br />

                    Global (UI) state - Global state is data we manage across multiple components.

                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                    A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                    Sometimes state we think should be local might become global. <br />

                    Server state - Data that comes from an external server that must be integrated with our UI state.

                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                    There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                    Fortunately there are tools such as SWR and React Query that make managing server state much easier. <br />

                    URL state - Data that exists on our URLs, including the pathname and query parameters.

                    URL state is often missing as a category of state, but it is an important one.
                    In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

                    There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build
                </p>
            </div>
            <div className='bg-white text-left p-4 mb-8'>
                <h1 className='text-2xl'>How does prototypical inheritance work?</h1>
                <p className='text-xl'>
                    Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                </p>
            </div>
            <div className='bg-white text-left p-4 mb-8'>
                <h1 className='text-2xl'>What is a unit test? Why should we write unit tests?</h1>
                <p className='text-xl'>
                    The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.

                    Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.
                </p>
            </div>
            <div className='bg-white text-left p-4 mb-8'>
                <h1 className='text-2xl'>React vs. Angular vs. Vue?</h1>
                <p className='text-xl'>
                    There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.

                    React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.

                    They can be used almost interchangeably to build front-end applications, but theyre not 100 percent the same, so it makes sense to compare them and understand their differences.

                    Each framework is component-based and allows the rapid creation of UI features.

                    However, they all have a different structure and architecture — so first, well look into their architectural differences to understand the philosophy behind them.
                </p>
            </div>
        </div>
    );
};

export default Blogs;