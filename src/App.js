import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

function App() {
    return (
        <div className="container">
            <Hero />
            <Navbar />
            <About />
            <Projects />
        </div>
    );
}

export default App;
