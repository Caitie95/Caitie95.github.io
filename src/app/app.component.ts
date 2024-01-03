import { Component } from '@angular/core';
import { StoriesService } from './stories.service';
import { ListStory } from './story-structure/list-story';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'story-database';
  stories: ListStory[] = [];

  constructor(private storyService: StoriesService) {}

  ngOnInit(): void {
    this.getListStories();
  }

  getListStories(): void {
    this.stories = this.storyService.getListStories();
  }
}
