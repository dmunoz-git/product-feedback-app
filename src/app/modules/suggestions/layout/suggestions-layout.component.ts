import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/http/user.service';

@Component({
    selector: 'app-suggestions-layout',
    templateUrl: './suggestions-layout.component.html',
    styleUrls: ['./suggestions-layout.component.scss'],
})
export class SuggestionsLayoutComponent implements OnInit {
    constructor(private userServ: UserService) {}

    ngOnInit(): void {
        this.userServ.getAuthendicatedUser().subscribe((user) => console.log(user));
    }
}
