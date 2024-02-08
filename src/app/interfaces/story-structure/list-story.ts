import { Author } from "./author";
import { Genre } from "./genre";
import { ListIdentity } from "./list-identity";

export interface ListStory {
    id: number;
    title: string;
    author: Author
    genres: Genre[];
    identities: ListIdentity[];
    link?: string;
}