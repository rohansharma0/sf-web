import { useWishlist } from "../hooks/useWishlist";
import ProductList from "./ProductList";
const Wishlist = () => {
    const { wishlist } = useWishlist();

    // if (wishlist.length === 0) {
    //     return (
    //         <div>
    //             <p>Your wishlist is empty.</p>
    //         </div>
    //     );
    // }

    return <ProductList headerTitle="Wishlist" products={wishlist} />;
};

export default Wishlist;
