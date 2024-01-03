import { DataIdentity } from "./data-identity"

export interface DataStory {
    id: number;
    title: string;
    author: number;
    genres: number[];
    link?: string;
    identities: DataIdentity[];
}