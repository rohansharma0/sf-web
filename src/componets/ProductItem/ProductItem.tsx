import type { IProduct } from "../../types/Product";
import {
    ProductItemBodyWrapper,
    ProductItemContainer,
    ProductItemImageWrapper,
} from "./ProductItem.style";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router";
import { useWishlist } from "../../hooks/useWishlist";
import { useAuth } from "../../context/AuthContex";
import { useCart } from "../../hooks/useCart";

interface ProductItemProps {
    product: IProduct;
    view?: "grid" | "list";
}

const ProductItem = ({ product, view = "grid" }: ProductItemProps) => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const { isInWishlist, toggleWishlist } = useWishlist();
    const { addToCart, isInCart } = useCart();

    const goToProductPage = () => {
        navigate(`/product/${product._id}`);
    };

    const redirectToLogin = (action: string) => {
        navigate(
            `/auth/login?from=${encodeURIComponent(
                location.pathname
            )}&action=${action}&productId=${product._id}`
        );
    };

    const handelToggleWishlist = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!isAuthenticated) return redirectToLogin("wishlist");
        toggleWishlist(product._id);
    };

    const handelAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!isAuthenticated) return redirectToLogin("cart");

        if (isInCart(product._id)) return navigate("/cart");

        addToCart({ productId: product._id, quantity: 1 });
    };

    return (
        <ProductItemContainer view={view} onClick={goToProductPage}>
            <ProductItemImageWrapper view={view}>
                {product.images.length > 0 ? (
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        loading="lazy"
                        width="100%"
                    />
                ) : (
                    <div className="product-image-default"></div>
                )}
                {product.isStockTrackable && product.stock === 0 && (
                    <div className="product-out-of-stock">OUT OF STOCK</div>
                )}
                {(!product.isStockTrackable ||
                    (product.isStockTrackable && product.stock > 0)) &&
                    product.isOnSale && (
                        <div className="product-on-sale">SALE</div>
                    )}
            </ProductItemImageWrapper>

            <ProductItemBodyWrapper view={view}>
                <div className="product-item-details">
                    <h4 className="product-item-title">{product.title}</h4>
                    <p className="product-item-description">
                        {product.description}
                    </p>
                    <div className="product-item-price">
                        <p
                            className="product-item-price-new"
                            style={{
                                color:
                                    (!product.isStockTrackable ||
                                        (product.isStockTrackable &&
                                            product.stock > 0)) &&
                                    product.isOnSale
                                        ? "#f44336"
                                        : "#000",
                            }}>
                            ₹{product.price}
                        </p>
                        {product.compareAtPrice && (
                            <p className="product-item-compare-price">
                                ₹{product.compareAtPrice}
                            </p>
                        )}
                    </div>
                </div>
                <div className="product-item-icons">
                    {(!product.isStockTrackable ||
                        (product.isStockTrackable && product.stock > 0)) && (
                        <button
                            className="product-item-icon-btn"
                            onClick={handelAddToCart}
                            aria-label="Add to Cart">
                            {isInCart(product._id) ? (
                                <ShoppingCartIcon fontSize="small" />
                            ) : (
                                <ShoppingCartOutlinedIcon fontSize="small" />
                            )}
                        </button>
                    )}

                    <button
                        className="product-item-icon-btn"
                        onClick={handelToggleWishlist}
                        aria-label="Add to Wishlist">
                        {isInWishlist(product._id) ? (
                            <FavoriteOutlinedIcon fontSize="small" />
                        ) : (
                            <FavoriteBorderOutlinedIcon fontSize="small" />
                        )}
                    </button>
                </div>
            </ProductItemBodyWrapper>
        </ProductItemContainer>
    );
};

export default ProductItem;
