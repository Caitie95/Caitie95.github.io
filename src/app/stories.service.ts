import { Injectable } from '@angular/core';
import { ListStory } from './story-structure/list-story';
import { STORIES } from './data/story-data';
import { AUTHOR } from './data/author-data';
import { Genre } from './story-structure/genre';
import { GENRE } from './data/genre-data';
import { DataIdentity } from './data-structure/data-identity';
import { ListIdentity } from './story-structure/list-identity';
import { ROMANTIC } from './data/romantic-data';
import { SEXUALITY } from './data/sexuality-data';
import { DataStory } from './data-structure/data-story';
import { DetailStory } from './story-structure/detail-story';
import { DetailIdentity } from './story-structure/detail-identity';
import { EXPLICIT } from './data/explicit-data';
import { PROMINANCE } from './data/prominance-data';
import { Warning } from './story-structure/warning';
import { WARNING } from './data/warnings-data';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor() { }

  getListStories(): ListStory[] {
    var stories: ListStory[] = [];
    const count = STORIES.length > 10 ? 10 : STORIES.length;
    let randoms: number[] = [];
    while (randoms.length < count) {
      let id = Math.floor(Math.random() * STORIES.length) + 1
      if (randoms.indexOf(id) == -1) {
        randoms.push(id);
      }
    }
    for (let random of randoms) {
      let story: DataStory = STORIES.filter(s => s.id == random)[0];
      stories.push(
        {id: story.id, 
        title: story.title, 
        author: {id: story.author, 
          name: this.getAuthorName(story.author)}, 
        genres: this.getGenres(story.genres),
        link: story.link,
        identities: this.getListIdentities(story.identities)
        }       
      )
   }
   return stories;
  }

  getDetailStory(id: number) {
    let story: DataStory = STORIES.filter(s => s.id == id)[0];
    let detailStory: DetailStory = { 
      id: story.id,
      title: story.title,
      author: { id: story.author, name: this.getAuthorName(story.author)},
      genres: this.getGenres(story.genres),
      link: story.link,
      identities: this.getDetailIdentities(story.identities),
      warning: this.getWarnings(story.warnings),
      description: story.description
    }
    return detailStory;
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

  getWarnings(ids: number[]): Warning[] {
    let warnings: Warning[] = [];
    for (let id of ids) {
      warnings.push({ id: id, warning: this.getWarning(id)})
    }
    return warnings;
  }

  getWarning(id: number): string {
    return WARNING.find(w => w.id)?.warning ?? "Unknown";
  }

  getListIdentities(identities: DataIdentity[]): ListIdentity[] {
    let identitys: ListIdentity[] = [];
    for (let identity of identities) {
      identitys.push({
        romantic: {id: identity.romantic, romantic: this.getRomantic(identity.romantic)}, 
        sexuality: {id: identity.sexuality, sexuality: this.getSexuality(identity.sexuality)}})
    }
    return identitys;
  }

  getDetailIdentities(identities: DataIdentity[]): DetailIdentity[] {
    let identitys: DetailIdentity[] = [];
    for (let identity of identities) {
      identitys.push({
        romantic: { id: identity.romantic, romantic: this.getRomantic(identity.romantic)},
        sexuality: { id: identity.sexuality, sexuality: this.getSexuality(identity.sexuality)},
        explicit: { id: identity.explicit, explicit: this.getExplicit(identity.explicit)},
        prominance: { id: identity.prominance, prominance: this.getProminance(identity.prominance)}
      })
    }
    return identitys;
  }

  getRomantic(id: number): string {
    return ROMANTIC.find(r => r.id == id)?.romantic ?? "Unknown";
  }

  getSexuality(id: number): string {
    return SEXUALITY.find(s => s.id == id)?.sexuality ?? "Unknown";
  }

  getExplicit(id: number): string {
    return EXPLICIT.find(e => e.id == id)?.type ?? "Unknown";
  }

  getProminance(id: number): string {
    return PROMINANCE.find(p => p.id == id)?.prominance ?? "Unknown";
  }
}