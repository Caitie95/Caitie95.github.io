import { DataStory } from "../interfaces/data-structure/data-story";

export const STORIES: DataStory[] = [
    { id: 101, title: "Test Title", author: 101, genres: [1], identities: [{romantic: 1, sexuality: 1, explicit: 1, prominance: 1, gender: 1}], 
        description: "Boom", warnings: [1], link: "https://clarkesworldmagazine.com/", source: 1},
    { id: 102, title: "Test Title 2", author: 2, genres: [2], identities: [{romantic: 2, sexuality: 2, explicit: 2, prominance: 2, gender: 3}],
        description: "Yaaaaay!", warnings: [2]},
    { id: 103, title: "I Am A Very Good Title, Please Love Me", author: 2, genres: [1, 2], 
        identities: [{romantic: 2, sexuality: 1, explicit: 2, prominance: 1, gender: 2}, 
            {romantic: 1, sexuality: 1, explicit: 1, prominance: 2, gender: 5}],
        warnings: [1], description: "A short story about a story that wants love."},
    { id: 1, title: "Some Personal Arguments in Support of the BetterYou (Based on Early Interactions)", genres: [3], warnings: [3,1], 
        identities: [{ romantic: 3, sexuality: 1, gender: 1, prominance: 1, explicit: 1}], author: 1, 
        link: "http://strangehorizons.com/fiction/some-personal-arguments-in-support-of-the-betteryou-based-on-early-interactions/",
        description: "Heartbreaking sci-fi exploration of personal and societal abuse of the marginalised."},
    { id: 2, title: "The Portal", author: 1, genres: [1], warnings: [1, 3], link: "https://www.lightspeedmagazine.com/fiction/the-portal/",
        identities: [{romantic: 3, sexuality: 1, gender: 1, prominance: 1, explicit: 1}],
        description: "A more explicit story of conversion therapy."}
]