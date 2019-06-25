import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NouisliderModule} from 'ng2-nouislider';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import {NgxSpinnerModule} from 'ngx-spinner';

@NgModule({
    declarations: [],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        NgxSpinnerModule
    ]
})
export class SharedModuleModule {
}
