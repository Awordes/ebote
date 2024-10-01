// This file is auto-generated by @hey-api/openapi-ts

export type AccountModel = {
    login: (string) | null;
    passwordHash: (string) | null;
};

export type PostAccountSignUpData = {
    body?: AccountModel;
};

export type PostAccountSignUpResponse = (unknown);

export type PostAccountSignUpError = unknown;

export type PostAccountLoginData = {
    body?: AccountModel;
};

export type PostAccountLoginResponse = (unknown);

export type PostAccountLoginError = unknown;

export type GetAccountLogoutResponse = (unknown);

export type GetAccountLogoutError = unknown;

export type GetAccountCheckAuthResponse = (unknown);

export type GetAccountCheckAuthError = unknown;