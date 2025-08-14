export const WISHLIST_KEY = "guest_wishlist";

export function getLocalWishlist(): string[] {
    try {
        return JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]");
    } catch {
        return [];
    }
}
export function setLocalWishlist(wishlist: string[]) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
}
export function toggleLocalWishlist(productId: string) {
    const wishlist = getLocalWishlist();
    const index = wishlist.indexOf(productId);

    if (index >= 0) {
        wishlist.splice(index, 1);
    } else {
        wishlist.push(productId);
    }

    setLocalWishlist(wishlist);
    return wishlist;
}
