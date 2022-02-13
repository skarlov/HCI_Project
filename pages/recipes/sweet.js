import Header from '../../modules/header.js';
import FooterBlack from '../../modules/footer_black.js';
import RecipeCategories from '../../modules/recipe_categories.js';
import SweetRecipeSearch from '../../modules/sweet_recipe_search.js';
import PopularSweet from '../../modules/popular_sweet_recipes.js';
import SweetRecipeCategories from '../../modules/sweet_recipe_categories.js';

const SweetRecipes = () => {
    return (
        <>
            <Header />
            <SweetRecipeSearch />
            <PopularSweet />
            <SweetRecipeCategories />
            <FooterBlack />
        </>
    );
};

export default SweetRecipes;