import Header from '../../../modules/header.js';
import FooterBlack from '../../../modules/footer_black.js';
import PopularSweet from '../../../modules/popular_sweet_recipes.js';
import SweetRecipeCategories from '../../../modules/sweet_recipe_categories.js';
import CakesGrid from '../../../modules/cakes.js';

const SweetRecipes = () => {
    return (
        <>
            <Header />
            <CakesGrid />
            <PopularSweet />
            <SweetRecipeCategories />
            <FooterBlack />
        </>
    );
};

export default SweetRecipes;