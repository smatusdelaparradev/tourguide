export interface OnboardingQuestion {
    question: string;
    options: Option[];
    multiple: boolean;
}

interface Option {
    icon: any;
    text: string;
}