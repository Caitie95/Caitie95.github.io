import { Component, Input } from '@angular/core';
import { ListStory } from '../../interfaces/story-structure/list-story';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() story?: ListStory
}
