import React from 'react';
import reactDom from 'react-dom';

function MyButton() {
    return (
        <button>I'm a button</button>
    )
}

export default function MyApp() {
    return (
        <dev>
            <h1>Welcome to my app</h1>
            <MyButton/>
        </dev>
    );
}

const App = () => (
    <div>
        lesson1
    </div>
);
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);