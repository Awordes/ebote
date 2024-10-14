// This file is auto-generated by @hey-api/openapi-ts

export type AccountModel = {
    login: (string) | null;
    passwordHash: (string) | null;
};

export type Axis = {
    x?: number;
    y?: number;
};

export type GameLobby = {
    gameTickInMilliseconds?: number;
    readonly isGameStarted?: boolean;
    id?: string;
    creatorId?: string;
    readonly gameTimeInSeconds?: number;
    startTime?: (string) | null;
    wizards?: {
        [key: string]: Wizard;
    } | null;
    wizardsToAdd?: Array<WizardToAdd> | null;
};

export type Lobby = {
    readonly id?: string;
    readonly createdAt?: string;
    creator: Profile;
};

export type MagicType = 0 | 1 | 2 | 3;

export type Point = {
    x?: number;
    y?: number;
};

export type Profile = {
    readonly id?: string;
    activeLobby?: Lobby;
    lobbies?: Array<Lobby> | null;
};

export type SideType = 0 | 1;

export type Wizard = {
    position?: Point;
    height?: number;
    width?: number;
    leftTop?: Point;
    leftBottom?: Point;
    rightTop?: Point;
    rightBottom?: Point;
    id?: string;
    profileId?: string;
    name?: (string) | null;
    sideType?: SideType;
    readonly currentHitPoints?: number;
    magicType?: MagicType;
    timeToReviveInSeconds?: number;
    spawnPosition?: Point;
    eyeDirection?: Axis;
};

export type WizardModel = {
    name: (string) | null;
    sideType?: SideType;
    magicType?: MagicType;
};

export type WizardToAdd = {
    profileId?: string;
    magicType?: MagicType;
    sideType?: SideType;
    name?: (string) | null;
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

export type PostAccountLogoutResponse = (unknown);

export type PostAccountLogoutError = unknown;

export type GetAccountCheckAuthResponse = (unknown);

export type GetAccountCheckAuthError = unknown;

export type PostLobbyResponse = (Lobby);

export type PostLobbyError = unknown;

export type GetLobbyListData = {
    query?: {
        page?: number;
        pageSize?: number;
    };
};

export type GetLobbyListResponse = (Array<Lobby>);

export type GetLobbyListError = unknown;

export type GetProfileResponse = (Profile);

export type GetProfileError = unknown;

export type PostProfileAddWizardData = {
    body?: WizardModel;
};

export type PostProfileAddWizardResponse = (unknown);

export type PostProfileAddWizardError = unknown;

export type GetProfileGetActiveLobbyStateResponse = (GameLobby);

export type GetProfileGetActiveLobbyStateError = unknown;