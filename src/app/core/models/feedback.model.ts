export interface Feedback {
    id?: number;
    title: string;
    category: Category;
    upvotes: number;
    status: Status;
    description: string;
    comments: Comment[];
}

export type Category = 'feature' | 'ui' | 'ux' | 'enhancement' | 'bug';

export type Status = 'suggestion' | 'planned' | 'in-progress';
