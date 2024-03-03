import 'bootstrap/dist/css/bootstrap.min.css';
import { Testimonials, CaseStudies, Contact, Footer, Hero, Process, Services, CTA} from './container';
import { Menu } from './components';




const App = () => (
  <div className="container">
    <Menu />
    <Hero />
    <Services />
    <CTA />
    <CaseStudies />
    <Process />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default App;
