export interface Screen {
    raise(): void;
    lower(): void;
    isLowered(): boolean;
}
