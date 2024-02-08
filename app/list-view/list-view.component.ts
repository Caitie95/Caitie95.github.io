import { Component } from '@angular/core';
import { ListStory } from '../interfaces/story-structure/list-story';
import { StoriesService } from '../stories.service';
import { ActivatedRoute } from '@angular/router';
import { DataGenre } from '../interfaces/data-structure/data-genre';
import { DataRomantic } from '../interfaces/data-structure/data-romantic';
import { DataSexuality } from '../interfaces/data-structure/data-sexuality';
import { DataExplicit } from '../interfaces/data-structure/data-explicit';
import { DropdownSelects } from '../interfaces/story-structure/dropdown-selects';
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {

  stories: ListStory[] = [];
  author?: number;
  source?: number;
  genres: DataGenre[] = [];
  romantics: DataRomantic[] = [];
  sexualitys: DataSexuality[] = [];
  explicits: DataExplicit[] = [];

  constructor(private storyService: StoriesService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    let a = parseInt(this.route.snapshot.paramMap.get('author')!);
    this.author = Number.isNaN(a) ? undefined : a;
    let s = parseInt(this.route.snapshot.paramMap.get('source')!);
    this.source = Number.isNaN(s) ? undefined : s;

    this.getListStories(this.author, this.source);
    this.getGenreList();
    this.getRomanticList();
    this.getSexualityList();
    this.getExplicitList();
  }

  getListStories(author?: number, source?: number): void {
    this.stories = this.storyService.getListStories(author, source);
  }

  searchStories(searchElements: DropdownSelects): void {
    this.stories = 
    this.storyService.getListStories(undefined, 
      undefined, 
      searchElements.selectedGenre, 
      searchElements.selectedRomantic, 
      searchElements.selectedSexuality, 
      searchElements.selectedExplicit);
  }

  getGenreList(): void {
    this.genres = this.storyService.getGenreList();
  }

  getRomanticList(): void {
    this.romantics = this.storyService.getRomanticList();
  }

  getSexualityList(): void {
    this.sexualitys = this.storyService.getSexualityList();
  }

  getExplicitList(): void {
    this.explicits = this.storyService.getExplicitList();
  }
}
