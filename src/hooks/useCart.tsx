import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { cartService } from "../services/cartServices";
import type { ICart, ICartItem } from "../types/Cart";
import { useAuth } from "../context/AuthContex";

export const useCart = () => {
    const { isAuthenticated } = useAuth();
    const queryClient = useQueryClient();

    const { data: cart, isLoading } = useQuery<ICart | undefined>({
        queryKey: ["cart"],
        queryFn: cartService.getCart,
        enabled: !!isAuthenticated,
    });

    // const { mutate: updateQuantity } = useMutation({
    //     mutationFn: ({
    //         productId,
    //         quantity,
    //     }: {
    //         productId: string;
    //         quantity: number;
    //     }) => cartService.updateQuantity(productId, quantity),
    //     onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
    // });

    const { mutate: addToCart } = useMutation({
        mutationFn: ({
            productId,
            quantity,
        }: {
            productId: string;
            quantity: number;
        }) => cartService.addToCart(productId, quantity),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
    });

    // const updateMutation = useMutation({
    //     mutationFn: ({
    //         productId,
    //         quantity,
    //     }: {
    //         productId: string;
    //         quantity: number;
    //     }) => cartService.updateQuantity(productId, quantity),
    //     onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
    // });

    const { mutate: removeFromCart } = useMutation({
        mutationFn: (productId: string) =>
            cartService.removeFromCart(productId),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
    });

    function isInCart(productId: string) {
        return cart?.items.some(
            (item: ICartItem) => item.product._id?.toString() === productId
        );
    }

    const cartWithItemTotals = cart?.items.map((item) => ({
        ...item,
        itemTotal: (item.product.price || 0) * item.quantity,
    }));

    const cartTotal =
        cartWithItemTotals?.reduce((sum, item) => sum + item.itemTotal, 0) || 0;

    const totalItems =
        cart?.items.reduce((count, item) => count + item.quantity, 0) || 0;

    return {
        cart,
        cartWithItemTotals,
        cartTotal,
        totalItems,
        isLoading,
        addToCart,
        // updateQuantity,
        isInCart,
        removeFromCart,
    };
};
