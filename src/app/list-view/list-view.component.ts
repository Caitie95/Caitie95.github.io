import { Component } from '@angular/core';
import { ListStory } from '../interfaces/story-structure/list-story';
import { StoriesService } from '../stories.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {

  stories: ListStory[] = [];

  constructor(private storyService: StoriesService) {}

  ngOnInit(): void {
    this.getListStories();
  }

  getListStories(): void {
    this.stories = this.storyService.getListStories();
  }
}
