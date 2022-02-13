import Header from '../../modules/header.js';
import FooterBlack from '../../modules/footer_black.js';
import ProductsComponent from '../../modules/products.js';

const StoreProducts = () => {
    return (
        <>
            <Header />
            <ProductsComponent />
            <FooterBlack />
        </>
    );
};

export default StoreProducts;