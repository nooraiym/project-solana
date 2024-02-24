import './App.css';
import { Adversiting } from './layout/adv/Adversiting';
import { Building } from './layout/building/Building';
import { Community } from './layout/community/Community';
import { Companies } from './layout/companies/Companies';
import { Footer } from './layout/footer/Footer';
import { Gallery } from './layout/gallery/Gallery';
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
            <Building />
            <Gallery />
            <Footer />
        </div>
    );
}

export default App;

// Для каждого компонента должна быть своя папка и в ней только один компонент?

// Можно ли выбирать по атрибуту следующим образом
// ${Container}[centered] {
//     padding: 0 20px;
// }


// Убрать дублирование TextWrapper  в Hero и компонентах
// Выровнять в community
// Цвета плашек в community
// Разобраться с hover в building