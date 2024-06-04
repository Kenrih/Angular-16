export interface CreditCard {
    id: number;
    name: string;
    description: string;
    bankName: string;
    maxCredit: number;
    interestRate: number;
    active: boolean;
    recommendedScore: string;
    annualFee: number;
    termsAndConditions: string;
    createdData: string;
    updatedDate: string;
}
