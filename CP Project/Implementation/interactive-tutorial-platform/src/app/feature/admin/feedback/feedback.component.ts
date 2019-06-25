import {Component, OnInit} from '@angular/core';
import {Feedback} from '../../Model/Feedback';
import {FeedbackService} from './service/feedback.service';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

    feedbackList: Array<Feedback> = new Array<Feedback>();

    constructor(private feedbackService: FeedbackService) {
    }

    ngOnInit() {
        this.getAllFeedback();
    }

    getAllFeedback() {
        this.feedbackService.getAllFeedback().subscribe(response => {
            this.feedbackList = response.map(singleFeedback => {
                return {
                    feedbackId: singleFeedback.payload.doc.id,
                    ...singleFeedback.payload.doc.data()
                } as Feedback;
            })
        });
    }

    onDeleteFeedback(feedbackId) {
        if (confirm('Are you sure you want to delete this feedback?')) {
            this.feedbackService.deleteFeedback(feedbackId)
                .then(
                    () => {
                        alert('SUCCESS !!!');
                    }
                )
                .catch(
                    error => alert(`ERROR${error}`)
                )
        }
    }

}
