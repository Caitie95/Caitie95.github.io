import { Explicit } from "./explicit";
import { Prominance } from "./prominance";
import { Romantic } from "./romantic";
import { Sexuality } from "./sexuality";

export interface DetailIdentity {
    romantic: Romantic;
    sexuality: Sexuality;
    prominance: Prominance;
    explicit: Explicit;
}