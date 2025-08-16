import { useNavigate } from "react-router";
import GoBackNav from "../componets/GoBackNav/GoBackNav";
import { CartContainer } from "../componets/style/Cart.style";
import { useCart } from "../hooks/useCart";
const Cart = () => {
    const navigate = useNavigate();

    const {
        cartWithItemTotals,
        isLoading,
        removeFromCart,
        totalItems,
        cartTotal,
    } = useCart();

    if (isLoading) {
        return <>Loading...</>;
    }

    if (cartWithItemTotals?.length === 0) {
        return <>Cart is empty.</>;
    }

    return (
        <CartContainer>
            <div>
                <h2
                    style={{
                        fontSize: "2rem",
                        fontWeight: "600",
                    }}>
                    Cart
                </h2>
            </div>
            <div
                style={{
                    display: "flex",
                    gap: "2rem",
                    flexDirection: "column",
                }}>
                <div
                    style={{
                        flex: "0.75",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                    }}>
                    <GoBackNav
                        text="Continue shopping"
                        onBack={() => navigate(-1)}
                    />
                    <div>
                        {cartWithItemTotals?.map((cartItem) => {
                            return (
                                <div key={cartItem.product._id}>
                                    ID :{cartItem.product._id}
                                    Name :{cartItem.product.title}
                                    Quantity : {cartItem.quantity}
                                    Price : {cartItem.product.price}
                                    total : {cartItem.itemTotal}
                                    <button
                                        onClick={() =>
                                            removeFromCart(cartItem.product._id)
                                        }>
                                        Remove Item
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div
                    style={{
                        flex: " 0.25",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}>
                    {/* <div
                        style={{
                            padding: "1rem 0",
                        }}>
                        Discount code
                    </div> */}
                    {/* <div>
                        <p>Shipped today? Order within : </p>
                        <p>Easy and fast checkout options</p>
                        <p>Great for convincing your visitors</p>
                    </div> */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}>
                                <p>Total products {totalItems}</p>
                                <p>{cartTotal}</p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}>
                                <p
                                    style={{
                                        fontWeight: "600",
                                    }}>
                                    Total including VAT
                                </p>
                                <p
                                    style={{
                                        fontWeight: "600",
                                    }}>
                                    {cartTotal}
                                </p>
                            </div>
                        </div>
                        <div>
                            <button
                                style={{
                                    width: "100%",
                                    border: "none",
                                    background: "#000000",
                                    color: "#fff",
                                    padding: "1rem",
                                    textTransform: "uppercase",
                                }}>
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </CartContainer>
    );
};

export default Cart;
