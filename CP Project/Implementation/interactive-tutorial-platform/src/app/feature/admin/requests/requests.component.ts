import {Component, OnInit} from '@angular/core';
import {Requests} from '../../Model/Requests';
import {RequestsService} from './service/requests.service';

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {

    requestList: Array<Requests> = new Array<Requests>();

    constructor(private requestService: RequestsService) {
    }

    ngOnInit() {
    }

    getAllRequests() {
        this.requestService.getAllRequest().subscribe(response => {
            this.requestList = response.map(singleRequest => {
                return {
                    requestId: singleRequest.payload.doc.id,
                    ...singleRequest.payload.doc.data()
                } as Requests;
            })
        });
    }

    onDeleteRequest(requestId) {
        if (confirm('Are you sure you want to delete this request?')) {
            this.requestService.deleteRequest(requestId)
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
