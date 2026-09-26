class FormValidator {
    form;
    rules;
    constructor(form, rules = {}) {
        this.form = form;
        this.rules = rules;
    }
    validate() {
        const errors = {};
        for (const key in this.rules) {
            const rules = this.rules[key];
            if (!rules)
                continue;
            const element = this.form.elements.namedItem(key);
            if (!(element instanceof HTMLInputElement))
                continue;
            const value = element.value;
            for (const rule of rules) {
                if (rule.required && value.trim() === "") {
                    errors[key] = " Field Required";
                    break;
                }
                if (rule.minLength !== undefined && value.length < rule.minLength) {
                    errors[key] = `Minimum length is ${rule.minLength}`;
                    break;
                }
                if (rule.pattern && !rule.pattern.test(value)) {
                    errors[key] = "Invalid format";
                    break;
                }
                if (rule.custom) {
                    const error = rule.custom(value);
                    if (error != null) {
                        errors[key] = error;
                        break;
                    }
                }
            }
        }
        return {
            valid: Object.keys(errors).length === 0,
            errors
        };
    }
}
const form = document.querySelector("#login-form");
if (!(form instanceof HTMLFormElement)) {
    throw new Error("Form not found");
}
const rules = {
    username: [
        {
            required: true,
            minLength: 3
        }
    ],
    email: [
        {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        }
    ],
    password: [
        {
            required: true,
            minLength: 8
        }
    ]
};
const validator = new FormValidator(form, rules);
export {};
//# sourceMappingURL=task6.js.map