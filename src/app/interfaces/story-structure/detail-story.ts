import { Author } from "./author";
import { DetailIdentity } from "./detail-identity";
import { Genre } from "./genre";
import { Warning } from "./warning";

export interface DetailStory {
    id: number;
    title: string;
    author: Author
    genres: Genre[];
    identities: DetailIdentity[];
    link?: string;    
    description: string;
    warning: Warning[];
}