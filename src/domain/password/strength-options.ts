export enum STRENGTH_OPTION {
    Weak = "weak",
    Strong = "strong"
}

export const StrengthSatisfaction = {
    [STRENGTH_OPTION.Strong]: 5
}

export const StrengthOptionLabel = {
    [STRENGTH_OPTION.Weak]: "Password is weak",
    [STRENGTH_OPTION.Strong]: "Password is strong enough",
}

