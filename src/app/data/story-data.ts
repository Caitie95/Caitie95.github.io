import { DataStory } from "../interfaces/data-structure/data-story";

export const STORIES: DataStory[] = [
    { id: 1, title: "Some Personal Arguments in Support of the BetterYou (Based on Early Interactions)", genres: [3, 4], warnings: [3,1,7,4], 
        identities: [{ romantic: 3, sexuality: 1, gender: 1, prominance: 1, explicit: 1}], author: 1, 
        link: "http://strangehorizons.com/fiction/some-personal-arguments-in-support-of-the-betteryou-based-on-early-interactions/",
        description: "Dark story that showcases how society can marginalise minorities. Despite fantastical elements, the story feels very grounded in its details." +
        " The main character welcomes a BetterYou to replace her in aspects of her life that she fails to live up to society's standards."},
    { id: 2, title: "The Portal", author: 1, genres: [1], warnings: [1, 3, 4], link: "https://www.lightspeedmagazine.com/fiction/the-portal/",
        identities: [{romantic: 3, sexuality: 1, gender: 1, prominance: 1, explicit: 1}],
        description: "A story of conversion therapy where the narrator's voice tries to deal with their feelings through the medium of a story, involving a portal to another world."},
    { id: 3, title: "Entangled", author: 2, genres: [3], link: "https://clarkesworldmagazine.com/barnett_08_19/", 
        identities: [{romantic: 4, sexuality: 1, gender: 2, prominance: 2, explicit: 1}], warnings: [],
        description: "Lonely alien searched for connection. The asexuality representation is a little mixed. " + 
        "While it does feature a merger of the asociating asexuality with aliens and robots, there is a normal asexual human character as well." + 
        " Asexuality feels more of a convenient side aspect, where the main themes are around community and belonging."},
    { id: 4, title: "Sex With Ghosts", author: 3, genres: [3], link: "http://strangehorizons.com/fiction/sex-with-ghosts/",
        warnings: [1], identities: [{romantic: 4, sexuality: 1, gender: 1, prominance: 1, explicit: 1}],
        description: "An asexual receptionist at a custom robot brothel is met with a creation she was not expecting, and has to decide how to deal with it."},
    { id: 5, title: "How to Become a Robot in 12 Easy Steps", author: 4, genres: [3], warnings: [4, 9],
        identities: [{romantic: 4, sexuality: 1, gender: 1, explicit: 1, prominance: 1}],
        link: "https://www.lightspeedmagazine.com/fiction/how-to-become-a-robot-in-12-easy-steps/",
        description: "Our depressed, probably autistic, and asexual protagonist falls in love with a robot, and wants to be one herself. A different play on the " + 
        "asexual/neurodivergent as a robot trope as she is very much not a robot. Emphasises the importance of connection."},
    { id: 6, title: "Giant Country", author: 5, genres: [1], warnings: [6], link: "https://www.havenspec.com/giant-country",
        identities: [{romantic: 1, sexuality: 3, prominance: 1, explicit: 1, gender: 1}],
        description: "Our disabled protagonist, on a quest for her best friend with her grandmother, has been caught by a giant, and must undertake an escape before carrying on."},
    { id: 7, title: "The Girl and Her Unicorn", author: 6, genres: [1], warnings: [5], 
        link: "https://aroworlds.com/fiction/nine-laws/the-girl-and-her-unicorn/", source: 1,
        identities: [{romantic: 1, sexuality: 4, gender: 3, prominance: 1, explicit: 2}, {romantic: 1, sexuality: 4, gender: 2, prominance: 2, explicit: 2},
        {romantic: 1, sexuality: 4, gender: 1, prominance: 2, explicit: 2}],
        description: "Ponder is sent as a sacrifice and presumed virgin to attract a unicorn to ask for a boon. But Ponder knows ze doesn't meet hir village's exacting " + 
        "requirements, and so ze must fail."},
    { id: 8, title: "The Lies Lovers Tell", author: 6, genres: [1], warnings: [5],
        link: "https://aroworlds.com/2023/02/25/fiction-the-lies-lovers-tell/", source: 1,
        identities: [{romantic: 1, sexuality: 4, gender: 6, prominance: 1, explicit: 2}, {romantic: 1, sexuality: 1, gender: 1, prominance: 2, explicit: 2}],
        description: "A new take on Rapunzel. Thorn is a proliffic gardener, trapped living in a tower by a witch. If only people would stop trying to rescue hir!"},
    { id: 9, title: "Bisclavret", author: 7, genres: [1], warnings: [1],
        identities: [{romantic: 5, sexuality: 2, prominance: 1, explicit: 2, gender: 2}], 
        description: "A queer retelling of an old French story, in which the Lord Bisclavret is cursed to transform into a wolf every month. To turn back into a man, he must come upon his clothes." +
        " His wife eventually convinces him to reveal his secret, after which she becomes afraid and hides his cloths. Trapped as a wolf, Lord Bisclavret is picked up by the king, who has been " +
        "shamed by his father for not wanting sex enough."},
    { id: 10, title: "D.I.Y.", author: 8, genres: [1], link: "https://www.tor.com/2022/08/24/d-i-y-john-wiswell/", warnings: [8],
        identities: [{romantic: 4, sexuality: 1, gender: 2, explicit: 2, prominance: 1}, {romantic: 4, sexuality: 1, gender: 3, explicit: 2, prominance: 1}],
        description: "In a water-scarce and socially stratified near-future, two working-class, disbled teens attempt to solve a problem no one has achieved, create water."},
    { id: 11, title: "Lemon & Salt", author: 9, genres: [3], source: 2, warnings: [5],
        identities: [{romantic: 1, sexuality: 3, gender: 1, prominance: 1, explicit: 2}, {romantic: 1, sexuality: 3, gender: 3, prominance: 1, explicit: 2}],
        description: "Two singers renegotiate their queerplatonic relationship in a concert."},
    { id: 12, title: "Hunter", author: 6, genres: [1], warnings: [], link: "https://aroworlds.com/2021/12/17/hallo-aro-hunter-k-a-cook/",
        identities: [{romantic: 1, sexuality: 5, gender: 1, prominance: 1, explicit: 2}], source: 1,
        description: "Prue travels the country searching for a witch, finding it better than the alternatives."}
]