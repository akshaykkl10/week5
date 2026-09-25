export class CartModule {
    cart: Cart
    observers: Array<(state:Cart) => void>
    constructor() {
        this.cart = {
            items: [],
            coupon: null
        };

        this.observers = [];
    }

    subscribe(observer: (state:Cart) => void): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: (state:Cart) => void): void {
        this.observers = this.observers.filter(
            item => item !== observer
        );
    }

    notify(): void {
        this.observers.forEach(observer => {
            observer(this.cart);
        });
    }

    addItem(item:CartItem): void {
        const existingItem = this.cart.items.find(
            cartItem => cartItem.id === item.id
        );

        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            this.cart.items.push(item);
        }

        this.notify();
    }

    removeItem(id: number): void {
        this.cart.items = this.cart.items.filter(
            item => item.id !== id
        );

        this.notify();
    }

    updateQuantity(id: number, quantity: number): void {
        const item = this.cart.items.find(
            cartItem => cartItem.id === id
        );

        if (!item) return;

        item.quantity = quantity;

        this.notify();
    }

    applyCoupon(coupon: Coupon): void {
        this.cart.coupon = coupon;

        this.notify();
    }

    removeCoupon(): void {
        this.cart.coupon = null;

        this.notify();
    }

    getSubtotal(): number {
        return this.cart.items.reduce(
            (total, item) => {
                return total + item.price * item.quantity;
            },
            0
        );
    }

    getDiscount():number {
        if (!this.cart.coupon) {
            return 0;
        }

        return this.getSubtotal() *
            (this.cart.coupon.discount / 100);
    }

    getTotal():number {
        return this.getSubtotal() - this.getDiscount();
    }

    getCart():Cart {
        return this.cart;
    }
}



interface CartItem {
    id:number,
    name: string,
    price: number
    quantity: number
}
type Coupon = {
    discount: number
} | null
interface Cart {
    items: Array<CartItem>
    coupon : Coupon
}

