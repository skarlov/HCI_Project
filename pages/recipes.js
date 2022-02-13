import Header from '../modules/header.js';
import FooterBlack from '../modules/footer_black.js';
import Popular from '../modules/popular_recipes.js';
import RecipeCategories from '../modules/recipe_categories.js';
import RecipeSearch from '../modules/recipe_search.js';

const Recipes = () => {
    return (
        <>
            <Header />
            <RecipeSearch />
            <Popular />
            <RecipeCategories />
            <FooterBlack />
        </>
    );
};

export default Recipes;