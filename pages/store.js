import Header from '../modules/header.js';
import FooterBlack from '../modules/footer_black.js';
import Popular from '../modules/popular_recipes.js';
import RecipeCategories from '../modules/recipe_categories.js';
import StoreMain from '../modules/store.js';

const Store = () => {
    return (
        <>
            <Header />
            <StoreMain />
            <FooterBlack />
        </>
    );
};

export default Store;