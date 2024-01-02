import { Component } from '@angular/core';
import { ListStory } from '../story-structure/list-story';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
story: ListStory = {
  id: 1,
  title:"Test Title",
  link: "https://clarkesworldmagazine.com/",
  author: {id: 1, name: "Test Name"},
  genres: [{id: 1, name: "Fantasy"}, {id: 2, name:"Romance"}],
  identities: [{romantic: {id:1, romantic: "panromantic"}, sexuality:{id:1,sexuality:"asexual"}},{romantic:{id:2, romantic:"demiromantic"}, sexuality: {id:2,sexuality:"homosexual"}}]
}
}
