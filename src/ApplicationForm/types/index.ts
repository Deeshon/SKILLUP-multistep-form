export type TypePersonalInformation = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type TypeEligibilityCheck = {
  workLegalitityStatus: boolean;
  restrictions: string;
  backgroundCheck: boolean;
};

export type TypeApplicationForm = {
  personalInformation: TypePersonalInformation;
  eligibilityCheck: TypeEligibilityCheck;
};

export interface TypeItem {
    title: string;
    description: string;
}

export interface StepProps {
    items: TypeItem[]
    current: number
}
