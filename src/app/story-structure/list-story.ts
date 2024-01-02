import { Author } from "./author";
import { Genre } from "./genre";
import { Identity } from "./identity";

export interface ListStory {
    id: number;
    title: string;
    author: Author
    genres: Genre[];
    identities: Identity[];
    link?: string;
}