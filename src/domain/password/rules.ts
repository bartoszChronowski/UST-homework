export enum RULE {
    OneLetter = 'OneLetter',
    UpperAndLower = 'UpperAndLower',
    OneNumber = 'OneNumber',
    SpecialSymbol = 'SpecialSymbol',
    LongerThan4 = 'LongerThan4',
    LongerThan8 = 'LongerThan8',
    LongerThan12 = 'LongerThan12'
}

export enum RULE_INDICATOR_CLASS {
    Pass = 'password-hint__rule--pass',
    Fail  ='password-hint__rule--fail'
}

export enum PROGRESS_INDICATOR_CLASS {
    Pass = 'input-progress--pass',
    Fail  ='input-progress--fail'
}

export const RuleLabel = {
    [RULE.OneLetter]: "At least one letter",
    [RULE.UpperAndLower]: "One big and one small character",
    [RULE.OneNumber]: "At least one number",
    [RULE.SpecialSymbol]: "At least one special symbol",
    [RULE.LongerThan4]: "Longer than 4 characters",
    [RULE.LongerThan8]: "Longer than 8 characters",
    [RULE.LongerThan12]: "Longer than 12 characters",
}
