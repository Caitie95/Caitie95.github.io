import { Component } from '@angular/core';
import { ListStory } from '../interfaces/story-structure/list-story';
import { StoriesService } from '../stories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {

  stories: ListStory[] = [];
  author?: number;
  source?: number;

  constructor(private storyService: StoriesService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    let a = parseInt(this.route.snapshot.paramMap.get('author')!);
    this.author = Number.isNaN(a) ? undefined : a;
    let s = parseInt(this.route.snapshot.paramMap.get('source')!);
    this.source = Number.isNaN(s) ? undefined : s;
    this.getListStories(this.author, this.source);
  }

  getListStories(author?: number, source?: number): void {
    this.stories = this.storyService.getListStories(author, source);
  }
}
