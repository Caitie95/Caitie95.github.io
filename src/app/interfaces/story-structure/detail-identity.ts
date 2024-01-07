import { Explicit } from "./explicit";
import { Gender } from "./gender";
import { Prominance } from "./prominance";
import { Romantic } from "./romantic";
import { Sexuality } from "./sexuality";

export interface DetailIdentity {
    romantic: Romantic;
    sexuality: Sexuality;
    gender: Gender;
    prominance: Prominance;
    explicit: Explicit;
}