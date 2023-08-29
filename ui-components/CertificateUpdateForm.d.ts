/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Certificate } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CertificateUpdateFormInputValues = {
    title?: string;
    issuedDate?: string;
    orgName?: string;
    orgLogo?: string;
    url?: string;
    pinned?: boolean;
};
export declare type CertificateUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    issuedDate?: ValidationFunction<string>;
    orgName?: ValidationFunction<string>;
    orgLogo?: ValidationFunction<string>;
    url?: ValidationFunction<string>;
    pinned?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CertificateUpdateFormOverridesProps = {
    CertificateUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    issuedDate?: PrimitiveOverrideProps<TextFieldProps>;
    orgName?: PrimitiveOverrideProps<TextFieldProps>;
    orgLogo?: PrimitiveOverrideProps<TextFieldProps>;
    url?: PrimitiveOverrideProps<TextFieldProps>;
    pinned?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type CertificateUpdateFormProps = React.PropsWithChildren<{
    overrides?: CertificateUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    certificate?: Certificate;
    onSubmit?: (fields: CertificateUpdateFormInputValues) => CertificateUpdateFormInputValues;
    onSuccess?: (fields: CertificateUpdateFormInputValues) => void;
    onError?: (fields: CertificateUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CertificateUpdateFormInputValues) => CertificateUpdateFormInputValues;
    onValidate?: CertificateUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CertificateUpdateForm(props: CertificateUpdateFormProps): React.ReactElement;
