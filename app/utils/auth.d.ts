export declare const GetResPassParam: () => {
    codexid: string | null;
    codeyid: string | null;
};
export declare const BcryptHashingForgotPassX: (codexID: string) => string;
export declare const BcryptHashingForgotPassY: (codeyID: string) => string;
export declare const BcryptCompareResetPassX: (codexid: string, codex: string) => Promise<boolean>;
export declare const BcryptCompareResetPassY: (codeyid: string, codey: string) => Promise<boolean>;
//# sourceMappingURL=auth.d.ts.map