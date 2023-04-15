import React from 'react';
import ReactDOM from 'react-dom/client';
import { FaUserTie } from 'react-icons/fa';
import logo from './logoFood.png';

//  ----------------------------- PRACTICE ----------------------------------- 
const heading1 = (
    <h1>Namaste React from JSX element called like JS variable</h1>
)

const heading2 = () => (
    <h1>Namaste React from JSX element called like function</h1>
)

const paragraph1 = (
    <p>Author Ghanashri</p>
)

const paragraph2 = (
    <p>Trying out new things</p>
)

const container = React.createElement('div', {}, [paragraph1, paragraph2])

const HeaderComponent = () => {
    return (
        <div>
            {heading1}
            {heading2()}
            <h3>HTML like code in javascript</h3>
            {container}
        </div>
    )
};

const HeaderComponent2 = () => {
    return (
        <div>
            <h1>Calling multiple components, inside root render, like an array</h1>
        </div>
    )
};

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render([<HeaderComponent/>, HeaderComponent2()]);

//  ----------------------------- ASSIGNMENT -----------------------------------

const nestedReactElement = React.createElement('div', {
    className: 'title'
}, [
    React.createElement('h1', {}, 'Heading1'),
    React.createElement('h2', {}, 'Heading2'),
    React.createElement('h3', {}, 'Heading3')
]);

const nestedJSXElement = (
    <div className='title'>
        <h1>Heading1</h1>
        <h2>Heading2</h2>
        <h3>Heading3</h3>
    </div>
)

const AnotherComponent = () => {
    return (
        <h4 id="heading4">Heading4</h4>
    )
}

const FunctionalComponent = () => {
    return (
        <div className='title'>
            <h1 id="heading1">Heading1</h1>
            <h2 id="heading2">Heading2</h2>
            <h3 id="heading3">Heading3</h3>
            <AnotherComponent />
        </div>
    )
}

//  ----------------------------- HEADER COMPONENT -----------------------------------

const Header = () => (
    <header className="header">
        <div className="container">
            <div className='logo-container'>
                <img src={logo} alt="Logo" className="logo"/>
                <h1 className="app-name">Fast Feasts</h1>
            </div>
            <input
                type="text"
                id="search"
                name="search"
                placeholder="Search"
                className="search-bar"
            />
        </div>
        <div className="icon-group">
            <FaUserTie size={48} color="#fafcff" />
        </div>
    </header>
) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);