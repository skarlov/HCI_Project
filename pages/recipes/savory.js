import Header from '../../modules/header.js';
import FooterBlack from '../../modules/footer_black.js';
import SavoryRecipeCategories from '../../modules/savory_recipe_categories.js';
import SavoryRecipeSearch from '../../modules/savory_recipe_search.js';
import PopularSavory from '../../modules/popular_savory_recipes.js';

const SavoryRecipes = () => {
    return (
        <>
            <Header />
            <SavoryRecipeSearch />
            <PopularSavory />
            <SavoryRecipeCategories />
            <FooterBlack />
        </>
    );
};

export default SavoryRecipes;