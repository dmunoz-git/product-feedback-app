export interface Feeback {
    id?: number;
    title: string;
    category: string;
    upvotes: number;
    status: string;
    description: string;
    comments: Comment[];
}
