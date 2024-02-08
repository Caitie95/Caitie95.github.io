import { Injectable } from '@angular/core';
import { ListStory } from './interfaces/story-structure/list-story';
import { STORIES } from './data/story-data';
import { AUTHOR } from './data/author-data';
import { Genre } from './interfaces/story-structure/genre';
import { GENRE } from './data/genre-data';
import { DataIdentity } from './interfaces/data-structure/data-identity';
import { ListIdentity } from './interfaces/story-structure/list-identity';
import { ROMANTIC } from './data/romantic-data';
import { SEXUALITY } from './data/sexuality-data';
import { DataStory } from './interfaces/data-structure/data-story';
import { DetailStory } from './interfaces/story-structure/detail-story';
import { DetailIdentity } from './interfaces/story-structure/detail-identity';
import { EXPLICIT } from './data/explicit-data';
import { PROMINANCE } from './data/prominance-data';
import { Warning } from './interfaces/story-structure/warning';
import { WARNING } from './data/warnings-data';
import { SOURCE } from './data/source-data';
import { DataGenre } from './interfaces/data-structure/data-genre';
import { DataRomantic } from './interfaces/data-structure/data-romantic';
import { DataSexuality } from './interfaces/data-structure/data-sexuality';
import { DataExplicit } from './interfaces/data-structure/data-explicit';
import { GENDER } from './data/gender-data';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor() { }

  getGenreList(): DataGenre[] {
    return GENRE;
  }

  getRomanticList(): DataRomantic[] {
    return ROMANTIC;
  }

  getSexualityList(): DataSexuality[] {
    return SEXUALITY;
  }

  getExplicitList(): DataExplicit[] {
    return EXPLICIT;
  }

  getListStories(author?: number, source?: number, genre?: number, 
    romantic?: number, sexuality?: number, explicit?: number): ListStory[] {
    var stories: ListStory[] = [];
    let storyIds: number[] = [];
    if (author != null) {
      storyIds = this.getAuthorIds(author!);
    } else if (source != null) {
      storyIds = this.getSourceIds(source);
    } else if (genre != null || romantic != null || sexuality != null || explicit != null) {
      storyIds = this.getFilteredIds(genre, romantic, sexuality, explicit);
    } else {
      storyIds = this.getRandomIds();
    }
    for (let id of storyIds) {
      stories.push(this.getListStory(id))
   }
   return stories;
  }

  private getRandomIds(): number[] {
    const count = STORIES.length > 9 ? 9 : STORIES.length;
    let randoms: number[] = [];
    let randomIds: number[] = [];
    while (randoms.length < count) {
      let pick = Math.floor(Math.random() * STORIES.length) 
      if (randoms.indexOf(pick) == -1) {
        randoms.push(pick);
        randomIds.push(STORIES[pick].id);
      }
    }
    return randomIds;
  }

  private getAuthorIds(id: number): number[] {
    return STORIES.filter(s => s.author == id).map(s => s.id);
  }

  private getSourceIds(id: number): number[] {
    return STORIES.filter(s => s.source == id).map(s => s.id);
  }

  private getFilteredIds(
    genre?: number, 
    romantic?: number, 
    sexuality?: number, 
    explicit?: number): number[] {
    return STORIES
    .filter(s => genre == null || s.genres.some(g => genre == g))
    .filter(s => romantic == null || s.identities.some(i => i.romantic == romantic))
    .filter(s => sexuality == null || s.identities.some(i => i.sexuality == sexuality))
    .filter(s => explicit == null || s.identities.some(i => i.explicit == explicit))
    .map(s => s.id);
  }

  private getListStory(id: number): ListStory {
    let story: DataStory = STORIES.filter(s => s.id == id)[0];
    let listStory: ListStory = 
      {id: story.id, 
      title: story.title, 
      author: {id: story.author, 
        name: this.getAuthorName(story.author)}, 
      genres: this.getGenres(story.genres),
      link: story.link,
      identities: this.getListIdentities(story.identities)
      }       
    return listStory;
  }

  getDetailStory(id: number) {
    let story: DataStory = STORIES.filter(s => s.id == id)[0];
    let detailStory: DetailStory = { 
      id: story.id,
      title: story.title,
      author: { id: story.author, name: this.getAuthorName(story.author)},
      source: { id: story.source, source: this.getSource(story.source)},
      genres: this.getGenres(story.genres),
      link: story.link,
      identities: this.getDetailIdentities(story.identities),
      warning: this.getWarnings(story.warnings),
      description: story.description
    }
    return detailStory;
  }

  private getAuthorName(id: number): string {
    return AUTHOR.find(a => a.id == id)?.name ?? "Unknown";
  }

  private getSource(id?: number): string | undefined {
    return SOURCE.find(s => s.id == id)?.source ?? undefined;
  }

  private getGenres(ids: number[]): Genre[] {
    let genres: Genre[] = [];
    for (let id of ids) {
      genres.push({id: id, name: this.getGenre(id)})
    }
    return genres;
  }

  private getGenre(id: number): string {
    return GENRE.find(g => g.id == id)?.genre ?? "Unknown";
  }

  private getWarnings(ids: number[]): Warning[] {
    let warnings: Warning[] = [];
    for (let id of ids) {
      warnings.push({ id: id, warning: this.getWarning(id)})
    }
    return warnings;
  }

  private getWarning(id: number): string {
    return WARNING.find(w => w.id == id)?.warning ?? "Unknown";
  }

  private getListIdentities(identities: DataIdentity[]): ListIdentity[] {
    let identitys: ListIdentity[] = [];
    for (let identity of identities) {
      identitys.push({
        romantic: {id: identity.romantic, romantic: this.getRomantic(identity.romantic)}, 
        sexuality: {id: identity.sexuality, sexuality: this.getSexuality(identity.sexuality)}})
    }
    return identitys;
  }

  private getDetailIdentities(identities: DataIdentity[]): DetailIdentity[] {
    let identitys: DetailIdentity[] = [];
    for (let identity of identities) {
      identitys.push({
        romantic: { id: identity.romantic, romantic: this.getRomantic(identity.romantic)},
        sexuality: { id: identity.sexuality, sexuality: this.getSexuality(identity.sexuality)},
        gender: { id: identity.gender, gender: this.getGender(identity.gender) },
        explicit: { id: identity.explicit, explicit: this.getExplicit(identity.explicit)},
        prominance: { id: identity.prominance, prominance: this.getProminance(identity.prominance)}
      })
    }
    return identitys;
  }

  private getRomantic(id: number): string {
    return ROMANTIC.find(r => r.id == id)?.romantic ?? "Unknown";
  }

  private getSexuality(id: number): string {
    return SEXUALITY.find(s => s.id == id)?.sexuality ?? "Unknown";
  }

  private getGender(id: number): string {
    return GENDER.find(g => g.id == id)?.gender ?? "Unknown";
  }

  private getExplicit(id: number): string {
    return EXPLICIT.find(e => e.id == id)?.type ?? "Unknown";
  }

  private getProminance(id: number): string {
    return PROMINANCE.find(p => p.id == id)?.prominance ?? "Unknown";
  }
}