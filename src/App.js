import React from 'react';
import FamilyTree from './components/FamilyTree';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Фамильное дерево</h1>
            </header>
            <main>
                <FamilyTree />
            </main>
        </div>
    );
}

export default App;
