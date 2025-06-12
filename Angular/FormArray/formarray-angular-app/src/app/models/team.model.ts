export interface Member {
    name: string;
    email: string;
    skills: string[];
}

export interface Team {
    id?: number;
    teamName: string;
    members: Member[];
}