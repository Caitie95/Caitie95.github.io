import { Injectable } from '@angular/core';
import { ListStory } from './story-structure/list-story';
import { STORIES } from './data/story-data';
import { AUTHOR } from './data/author-data';
import { Genre } from './story-structure/genre';
import { GENRE } from './data/genre-data';
import { DataIdentity } from './data-structure/data-identity';
import { Identity } from './story-structure/identity';
import { ROMANTIC } from './data/romantic-data';
import { SEXUALITY } from './data/sexuality-data';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor() { }

  getListStories(): ListStory[] {
    var stories: ListStory[] = [];
   for (let story of STORIES) {
    stories.push(
      {id: story.id, title: story.title, 
        author: {id: story.author, 
        name: this.getAuthorName(story.author)}, 
        genres: this.getGenres(story.genres),
        link: story.link,
        identities: this.getIdentities(story.identities)
        }       
      )
   }
   return stories;
  }

  getAuthorName(id: number): string {
    return AUTHOR.find(a => a.id == id)?.name ?? "Unknown";
  }

  getGenres(ids: number[]): Genre[] {
    let genres: Genre[] = [];
    for (let id of ids) {
      genres.push({id: id, name: this.getGenre(id)})
    }
    return genres;
  }

  getGenre(id: number): string {
    return GENRE.find(g => g.id == id)?.genre ?? "Unknown";
  }

  getIdentities(identities: DataIdentity[]): Identity[] {
    let identitys: Identity[] = [];
    for (let identity of identities) {
      identitys.push({
        romantic: {id: identity.romantic, romantic: this.getRomantic(identity.romantic)}, 
        sexuality: {id: identity.sexuality, sexuality: this.getSexuality(identity.sexuality)}})
    }
    return identitys;
  }

  getRomantic(id: number): string {
    return ROMANTIC.find(r => r.id == id)?.romantic ?? "Unknown";
  }

  getSexuality(id: number): string {
    return SEXUALITY.find(s => s.id == id)?.sexuality ?? "Unknown";
  }
}