import { DataStory } from "../interfaces/data-structure/data-story";

export const STORIES: DataStory[] = [
    { id: 1, title: "Test Title", author: 1, genres: [1], identities: [{romantic: 1, sexuality: 1, explicit: 1, prominance: 1}], 
        description: "Boom", warnings: [1], link: "https://clarkesworldmagazine.com/", source: 1},
    { id: 2, title: "Test Title 2", author: 2, genres: [2], identities: [{romantic: 2, sexuality: 2, explicit: 2, prominance: 2}],
        description: "Yaaaaay!", warnings: [2]},
    { id: 3, title: "I Am A Very Good Title, Please Love Me", author: 2, genres: [1, 2], 
        identities: [{romantic: 2, sexuality: 1, explicit: 2, prominance: 1}, {romantic: 1, sexuality: 1, explicit: 1, prominance: 2}],
        warnings: [1], description: "A short story about a story that wants love."}
]