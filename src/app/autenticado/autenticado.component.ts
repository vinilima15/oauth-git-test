import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operator/map';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-autenticado',
    templateUrl: './autenticado.component.html',
    styleUrls: ['./autenticado.component.scss']
})
export class AutenticadoComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
        this.route.queryParams
            .subscribe(result => {
                if (result && result.code) {
                    this.authenticationService.generateAuthToken(result.code)
                        .subscribe(token => {
                            console.log(token);
                        });
                }
            });
    }
}
