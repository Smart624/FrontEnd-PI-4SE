import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Scheduling from '../pages/Scheduling';
import Faq from '../pages/Faq';
import GuidesAndTutorials from "../pages/Guides";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsService";
import Blog from "../pages/Blog";

const RoutesComponent: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/agendamento" element={<Scheduling />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/guias" element={<GuidesAndTutorials />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos-de-servico" element={<TermsOfService />} />
            <Route path="/blog" element={<Blog />} />
            {/* Outras rotas podem ser adicionadas aqui */}
        </Routes>
    </Router>
);

export default RoutesComponent;
