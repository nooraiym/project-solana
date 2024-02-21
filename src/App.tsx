import './App.css';
import { Adversiting } from './layout/adv/Adversiting';
import { Community } from './layout/community/Community';
import { Companies } from './layout/companies/Companies';
import { Hero } from './layout/hero/Hero';
import { Navigation } from './layout/nav/Navigation';


function App() {
    return (
        <div className="App">
            <Adversiting />
            <Navigation />
            <Hero />
            <Companies />
            <Community />
        </div>
    );
}

export default App;

// Для каждого компонента должна быть своя папка и в ней только один компонент?