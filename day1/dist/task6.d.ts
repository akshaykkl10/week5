export declare class CartModule {
    cart: Cart;
    observers: Array<(state: Cart) => void>;
    constructor();
    subscribe(observer: (state: Cart) => void): void;
    unsubscribe(observer: (state: Cart) => void): void;
    notify(): void;
    addItem(item: CartItem): void;
    removeItem(id: number): void;
    updateQuantity(id: number, quantity: number): void;
    applyCoupon(coupon: Coupon): void;
    removeCoupon(): void;
    getSubtotal(): number;
    getDiscount(): number;
    getTotal(): number;
    getCart(): Cart;
}
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
type Coupon = {
    discount: number;
} | null;
interface Cart {
    items: Array<CartItem>;
    coupon: Coupon;
}
export {};
//# sourceMappingURL=task6.d.ts.map