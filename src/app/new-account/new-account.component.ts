import { Component } from '@angular/core';
import { LoggingService } from "app/logging.service";
import { AccountsService } from "app/accounts.service";

@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.css'],
    providers: [LoggingService]
})

export class NewAccountComponent {
    
    constructor(private loggingService: LoggingService,
    private accountsService: AccountsService){
        this.accountsService.statusUpdated.subscribe(
            (status: string) => {
                alert('new status: '+ status);
            }
        );
    }
    onCreateAccount(accountName: string, accountStatus: string) {
        this.accountsService.addAccount(accountName, accountStatus);
        this.loggingService.logStatusChange(accountStatus);
        // console.log('A server status changed, new status: ' + accountStatus);
    }
}

