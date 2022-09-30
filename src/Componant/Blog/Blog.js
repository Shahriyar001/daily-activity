import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='questions-con'>
                <div className='question-sector'>
                    <h3>What Is React & How Does It Actually Work?</h3>
                </div>
                <div className='ans-sector'>
                    <p>
                        ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.

                        It’s important to note that ReactJS is not a JavaScript framework. That’s because it’s only responsible for rendering the components of an application’s view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.

                        This article will explore React’s features, explain how it works, and go over its benefits for front-end developers. We’ll also cover the differences between ReactJS and React Native regarding their roles in the web and mobile app development industry.</p>
                </div>
            </div>
            <div className='questions-con'>
                <div className='question-sector'>
                    <h3>What are the differences between props and state ?</h3>
                </div>
                <div className='ans-sector'>
                    <p>In React, the developers build basic components and then use those basic components to build larger components, leading to a complete web page. While building these components, two important data manipulation methods are the state and props.

                        Both the props and the state decide what data the component will display. They are simple Javascript objects that will re-render the component every time they change.

                        Initially, both the props and the state can have default values or receive values from a parent component. The state is a set of variables that determine the current condition of the component. The state of a component is internal, i.e., defined inside the component and changeable only within the component. Any change in state renders the component again. Props is short for properties. It is the set of attributes that are passed from a parent component to a child component. These can be data variables or functions.</p>
                </div>
            </div>
            <div className='questions-con'>
                <div className='question-sector'>
                    <h3>What does useEffect do? Does useEffect run after every render? </h3>
                </div>
                <div className='ans-sector'>
                    <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.

                        Why is useEffect called inside a component? Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

                        Yes! By default, it runs both after the first render and after every update. (We will later talk about how to customize this.) Instead of thinking in terms of “mounting” and “updating”, you might find it easier to think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs the effects.

                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;