import { User } from './user.model';

export interface Reply {
    content: string;
    replyingTo: string;
    user: User;
}
