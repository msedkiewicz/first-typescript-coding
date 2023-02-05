interface Player {
    name: string;
    score: number | null;
    inGame: boolean;
}

const JohnDoe: Player = {
    name: 'JohnDoeey',
    score: 25,
    inGame: true
}

const KatieDownson: Player = {
    name: 'Kate98',
    score: 24,
    inGame: true
}

const ThomasBanes: Player = {
    name: 'Kate98',
    score: null,
    inGame: false
}