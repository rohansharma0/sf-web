import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "../services/userService";
import { useAuth } from "../context/AuthContex";
import type { IProduct } from "../types/Product";

export function useWishlist() {
    const { isAuthenticated } = useAuth();
    const queryClient = useQueryClient();

    const { data: wishlist = [] } = useQuery<IProduct[]>({
        queryKey: ["wishlist"],
        queryFn: userService.getWishlist,
        enabled: !!isAuthenticated,
        select: (data) => data || [],
    });

    const { mutate: toggleWishlistAPI } = useMutation({
        mutationFn: userService.toggleWishlist,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["wishlist"] });
        },
    });

    function toggleWishlist(productId: string) {
        if (!isAuthenticated) return;
        toggleWishlistAPI(productId);
    }

    function isInWishlist(productId: string) {
        return wishlist.some(
            (item: IProduct) => item._id?.toString() === productId
        );
    }
    return { wishlist, toggleWishlist, isInWishlist };
}
