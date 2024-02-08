import { Author } from "./author";
import { DetailIdentity } from "./detail-identity";
import { Genre } from "./genre";
import { Source } from "./source";
import { Warning } from "./warning";

export interface DetailStory {
    id: number;
    title: string;
    author: Author;
    source: Source;
    genres: Genre[];
    identities: DetailIdentity[];
    link?: string;    
    description: string;
    warning: Warning[];
}