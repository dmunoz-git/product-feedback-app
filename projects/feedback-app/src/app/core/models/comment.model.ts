import { Reply } from './reply.model';
import { User } from './user.model';

export interface Comment {
    id?: number;
    content: string;
    user: User;
    replies?: Reply[];
}
