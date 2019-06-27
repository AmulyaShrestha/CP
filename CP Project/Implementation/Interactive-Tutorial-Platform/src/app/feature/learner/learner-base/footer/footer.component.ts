import {Component, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FeedbackRequestService} from './service/feedback-request.service';
import {User} from '../../../Model/User';
import {CurrentUserService} from '../../../../shared/global-services/currentUser-service/current-user.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    feedbackForm: FormGroup;
    requestForm: FormGroup;
    addedDate = new Date().toLocaleString();
    currentUser: User = new User();

    submitted = false;

    private modalRef: NgbModalRef;

    constructor(private formBuilder: FormBuilder,
                private modalService: NgbModal,
                private service: FeedbackRequestService,
                private currentUserService: CurrentUserService) {
    }

    ngOnInit() {
    }

    getCurrentUser() {
        this.currentUser = this.currentUserService.getCurrentUser();
    }

    openFeedback(template: TemplateRef<any>) {
        this.getCurrentUser();
        this.feedbackForm = this.formBuilder.group({
            user: [this.currentUser],
            title: [undefined, Validators.required],
            description: [undefined, Validators.required],
            addedDate: [this.addedDate]
        });
        this.modalRef = this.modalService.open(template);
    }

    openRequest(template: TemplateRef<any>) {
        this.getCurrentUser();
        this.requestForm = this.formBuilder.group({
            user: [this.currentUser],
            title: [undefined, Validators.required],
            description: [undefined, Validators.required],
            addedDate: [this.addedDate]
        });
        this.modalRef = this.modalService.open(template);
    }

    sendFeedback() {
        this.submitted = true;
        if (this.feedbackForm.invalid) {
            return;
        }
        this.service.sendFeedback(this.feedbackForm.value)
            .then(
                (data) => {
                    if (data) {
                        alert('SUCCESSFULLY SENT !!!');
                    }
                }
            )
            .catch(
                error => alert(`ERROR${error}`)
            );
    }

    sendRequest() {
        this.submitted = true;
        if (this.requestForm.invalid) {
            return;
        }
        this.service.sendRequest(this.requestForm.value)
            .then(
                (data) => {
                    if (data) {
                        alert('SUCCESSFULLY SENT !!!');
                    }
                }
            )
            .catch(
                error => alert(`ERROR${error}`)
            );
    }
}
