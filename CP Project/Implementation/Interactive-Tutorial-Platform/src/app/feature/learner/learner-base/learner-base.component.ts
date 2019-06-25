import {Component, OnDestroy, OnInit} from '@angular/core';
import * as Rellax from 'rellax';

@Component({
    selector: 'app-learner-base',
    templateUrl: './learner-base.component.html',
    styleUrls: ['./learner-base.component.scss']
})
export class LearnerBaseComponent implements OnInit, OnDestroy {
    // data: Date = new Date();
    // focus;

    constructor() {
    }

    ngOnInit() {

        const rellaxHeader = new Rellax('.rellax-header');

        const body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }

    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
