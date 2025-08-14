import { useNavigate, useParams } from "react-router";
import type { IProduct } from "../types/Product";
import { productService } from "../services/productServices";
import { useQuery } from "@tanstack/react-query";
import { ProductContainer } from "../componets/style/Product.style";
import { useState } from "react";
import { useCart } from "../hooks/useCart";

const Product = () => {
    const { id } = useParams<{ id: string }>();
    const [quantity, setQuantity] = useState(1);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const {
        data: product,
        isLoading,
        isError,
    } = useQuery<IProduct | null>({
        queryKey: ["product", id],
        queryFn: () => productService.getProductById(id!),
        enabled: !!id,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !product) {
        return <div>Product not found.</div>;
    }

    const images = product.images?.length
        ? product.images
        : ["/placeholder.png"];

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleAddToCart = () => {
        if (quantity > product.stock) {
            alert(`Only ${product.stock} left in stock`);
            return;
        }
        addToCart({ productId: product._id, quantity: quantity });
        navigate("/cart");
    };

    const handleBuyNow = async () => {
        handleAddToCart();
        navigate("/checkout");
    };

    return (
        <ProductContainer>
            <div className="product-images-container">
                {/* Main Slider */}
                <div className="product-images-container-slider">
                    <button
                        className="product-images-slider-btn"
                        onClick={handlePrev}>
                        {"<"}
                    </button>
                    <div className="product-images-slider-image-active">
                        <img
                            src={images[activeIndex]}
                            alt={product.title}
                            className="active-image"
                        />
                    </div>
                    <button
                        className="product-images-slider-btn"
                        onClick={handleNext}>
                        {">"}
                    </button>
                </div>
                {/* Thumbnails */}
                <div className="product-images-slider-images">
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`product-images-slider-image ${
                                activeIndex === index ? "active" : ""
                            }`}
                            onClick={() => setActiveIndex(index)}>
                            <img
                                src={img}
                                alt={`${product.title} thumbnail ${index + 1}`}
                                className="product-images-slider-thumb"
                            />
                        </div>
                    ))}
                </div>
                <div className="product-images-description-container">
                    <h1 className="product-images-description-title">
                        Descripition
                    </h1>
                    <p className="product-images-description-text">
                        {product.description}
                    </p>
                </div>
                <div className="frequently-questions-container">
                    <h1 className="frequently-questions-container-title">
                        Frequently asked question
                    </h1>
                    <div className="frequently-questions-body">
                        <div className="frequently-questions">
                            <h4 className="frequently-questions-title">
                                When will my order be delivered?
                            </h4>
                            <div className="frequently-questions-answer">
                                We ship worldwide. Your order will be packaged
                                really carefully and delivered wherever you
                                want. Delivery takes between 2-4 business days.
                                You will receive an email after ordering with
                                more information about the delivery.
                            </div>
                        </div>
                        <div className="frequently-questions">
                            <h4 className="frequently-questions-title">
                                Can I Return my product?
                            </h4>
                            <div className="frequently-questions-answer">
                                Orders can be returned or exchanged within 30
                                days of receiving the parcel, providing they are
                                in original resalable condition.
                            </div>
                        </div>
                        <div className="frequently-questions">
                            <h4 className="frequently-questions-title">
                                What can I do if my item (or part of it) is
                                damaged?
                            </h4>
                            <div className="frequently-questions-answer">
                                We work hard to deliver your items without
                                damage. Orders can be returned or exchanged
                                within 30 days of receiving the parcel,
                                providing they are in original resalable
                                condition.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-info-container">
                <div className="product-info-text-wrapper">
                    <h1 className="product-info-title-text">{product.title}</h1>
                    <p className="product-info-discription-text">
                        {product.description}
                    </p>
                </div>
                <div className="product-info-text-wrapper">
                    <p className="product-info-delivery-text">
                        Delivery in 1-3 days
                    </p>
                    <div className="product-info-price-wrapper">
                        <p className="product-info-price">{product.price}</p>
                        <p className="product-info-compare-price">
                            {product.compareAtPrice}
                        </p>
                    </div>
                </div>
                <div className="product-btn-wrapper">
                    <div className="product-add-to-cart-wrapper">
                        <input
                            className="product-quantity-input"
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={(e) =>
                                setQuantity(Number(e.target.value))
                            }
                        />
                        <button
                            className="product-add-to-cart-btn"
                            onClick={handleAddToCart}>
                            Add to cart
                        </button>
                    </div>
                    <button
                        className="product-buy-now-btn"
                        onClick={handleBuyNow}>
                        Buy it now
                    </button>
                </div>
                <div>
                    <div>
                        <p>Susainable Design</p>
                        <div>
                            <p>
                                All our design procucts are sustainable and good
                                for earth, trees and water.
                            </p>
                        </div>
                    </div>

                    <div>
                        <p>30 days money back</p>
                        <div>
                            <p>
                                Orders can be returned or exchanged within 30
                                days of receiving the parcel, providing they are
                                in original resalable condition. We ship
                                worldwide. Your order will be packaged really
                                carefully and delivered wherever you want.
                                Delivery takes between 2-4 business days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ProductContainer>
    );
};

export default Product;
