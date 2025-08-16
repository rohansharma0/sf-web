import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useCart } from "./useCart";

declare global {
    interface Window {
        Razorpay: any;
    }
}

export const usePayment = () => {
    const { cartWithItemTotals, cartTotal } = useCart();

    const { mutateAsync: createOrder } = useMutation({
        mutationFn: () =>
            axios
                .post("/api/orders/create", { cart: cartWithItemTotals })
                .then((res) => res.data),
    });

    const openCheckout = async () => {
        const { order, razorpayOrder } = await createOrder();

        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: razorpayOrder.amount,
            currency: razorpayOrder.currency,
            name: "My Store",
            description: "Order Payment",
            order_id: razorpayOrder.id,
            handler: async (response: any) => {
                await axios.post("/api/orders/verify", {
                    ...response,
                    orderId: order._id,
                });
            },
            prefill: {
                name: "Customer",
                email: "customer@example.com",
            },
            theme: { color: "#3399cc" },
        };

        const razor = new window.Razorpay(options);
        razor.open();
    };

    return { openCheckout, cartTotal };
};
