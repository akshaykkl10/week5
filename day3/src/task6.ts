type Rule<T = unknown> = {
    required?: boolean;
    minLength?: number;
    pattern?: RegExp;
    custom?:(V:T)=> string | null
}



class FormValidator<T extends Record<string, unknown>> {
    constructor(private form: HTMLFormElement, private rules:{[K in keyof T]?: Rule<T[K]>[]} = {}){}
    
    validate(): {
        valid: boolean;
        errors: Partial<Record<keyof T, string>>;
    } {
        const errors: Partial<Record<keyof T, string>> = {};
        for (const key in this.rules){
            const rules = this.rules[key]
            if(!rules) continue
            const element = this.form.elements.namedItem(key)
            if (!(element instanceof HTMLInputElement)) continue
            const value = element.value
            for (const rule of rules){
                if(rule.required && value.trim() === ""){
                    errors[key] = " Field Required";
                    break;
                }
                if( rule.minLength !== undefined && value.length < rule.minLength) {
                    errors[key] = `Minimum length is ${rule.minLength}`;
                    break;
                }
                if(rule.pattern && !rule.pattern.test(value)) {
                    errors[key] = "Invalid format";
                    break;
                }
                if(rule.custom){
                    const error = rule.custom(value as T[typeof key])
                    if (error != null){
                        errors[key] = error;
                        break;
                    }   
                }
            }
        }
        return {
            valid: Object.keys(errors).length === 0,
            errors
        }
    }
    
}

type LoginForm = {
    username: string;
    email: string;
    password: string;
}

const form = document.querySelector(
    "#login-form"
);

if (!(form instanceof HTMLFormElement)) {
    throw new Error("Form not found");
}
const rules: {[K in keyof LoginForm]?: Rule<LoginForm[K]>[]} = {
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

const validator = new FormValidator<LoginForm>(form, rules);