import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    feedbackResponse = 'feedback';
    requestedCourseResponse = 'course request';

    constructor() {
    }

    ngOnInit() {
    }

}
