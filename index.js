import Header from '../modules/header.js';
import Footer from '../modules/footer_black.js';
import About from '../modules/about_statement.js';
import Visit from '../modules/visit_store.js';
import Popular from '../modules/popular_recipes.js';

const Hello = () => {
    return (
        <>
            <Header />
            <About />
            <Popular />
            <Visit />
            <Footer />
        </>
    );
};

export default Hello;
