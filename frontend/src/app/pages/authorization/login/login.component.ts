import { Component } from "@angular/core";
import { UserService } from "src/app/common/service/user.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    loading:boolean = false;
    error: string = '';

    constructor(private userService: UserService) {}

    getUsers() {
        this.loading = true;
        this.userService.getUsers().subscribe(users => {
            // console.log(users);
            this.loading = false;
        },
        error => {
            this.error = error;
            this.loading = false;
        })
    }
}