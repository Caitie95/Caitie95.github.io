import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DetailStory } from '../interfaces/story-structure/detail-story';
import { StoriesService } from '../stories.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent {

  story: DetailStory = {
    id: 0,
    title: '',
    author: {
      id: 0,
      name: ''
    },
    genres: [],
    identities: [],
    description: '',
    warning: [],
    source: {id: 0, source: ''}
  };
  author: number = 0;
  source: number = 0;

  constructor(private storyService: StoriesService, 
    private route: ActivatedRoute, 
    private location: Location) {}

  ngOnInit(): void {
    this.getDetailStory();
    this.author = this.story.author.id;
    this.source = this.story.source?.id ?? 0;
  }

  getDetailStory(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.story = this.storyService.getDetailStory(id);
  }
}
