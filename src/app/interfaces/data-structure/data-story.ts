import { DataIdentity } from "./data-identity"

export interface DataStory {
    id: number;
    title: string;
    author: number;
    source?: number;
    genres: number[];
    link?: string;
    identities: DataIdentity[];
    description: string;
    warnings: number[]
}