export class CartModule {
    cart;
    observers;
    constructor() {
        this.cart = {
            items: [],
            coupon: null
        };
        this.observers = [];
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        this.observers = this.observers.filter(item => item !== observer);
    }
    notify() {
        this.observers.forEach(observer => {
            observer(this.cart);
        });
    }
    addItem(item) {
        const existingItem = this.cart.items.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        }
        else {
            this.cart.items.push(item);
        }
        this.notify();
    }
    removeItem(id) {
        this.cart.items = this.cart.items.filter(item => item.id !== id);
        this.notify();
    }
    updateQuantity(id, quantity) {
        const item = this.cart.items.find(cartItem => cartItem.id === id);
        if (!item)
            return;
        item.quantity = quantity;
        this.notify();
    }
    applyCoupon(coupon) {
        this.cart.coupon = coupon;
        this.notify();
    }
    removeCoupon() {
        this.cart.coupon = null;
        this.notify();
    }
    getSubtotal() {
        return this.cart.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }
    getDiscount() {
        if (!this.cart.coupon) {
            return 0;
        }
        return this.getSubtotal() *
            (this.cart.coupon.discount / 100);
    }
    getTotal() {
        return this.getSubtotal() - this.getDiscount();
    }
    getCart() {
        return this.cart;
    }
}
//# sourceMappingURL=task6.js.map