import { useWishlist } from "../hooks/useWishlist";
import ProductList from "./ProductList";
const Wishlist = () => {
    const { wishlist } = useWishlist();

    return <ProductList headerTitle="Wishlist" products={wishlist} />;
};

export default Wishlist;
