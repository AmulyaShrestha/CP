import {Component, OnInit} from '@angular/core';
import {Course} from '../../Model/Course';
import {User} from '../../Model/User';
import {CurrentUserService} from '../../../shared/global-services/currentUser-service/current-user.service';
import {LearnerCourseService} from '../learner-course/service/learner-course.service';
import {LearnerSelectCourseService} from './service/learner-select-course.service';
import {Comments} from '../../Model/Comments';

@Component({
    selector: 'app-learner-select-course',
    templateUrl: './learner-select-course.component.html',
    styleUrls: ['./learner-select-course.component.scss']
})
export class LearnerSelectCourseComponent implements OnInit {
    currentCourse: Course = new Course();
    currentUser: User = new User();
    currentComment: Comments = new Comments();
    commentList: Array<Comments> = new Array<Comments>();

    constructor(private currentCourseService: LearnerCourseService,
                private currentUserService: CurrentUserService,
                private commentService: LearnerSelectCourseService) {
    }

    ngOnInit() {
        this.currentCourse = this.currentCourseService.getCurrentCourse();
        this.currentUser = this.currentUserService.getCurrentUser();
        this.getAllComments();
    }

    getAllComments() {
        this.commentService.getAllComments(this.currentUser, this.currentCourse.courseId)
            .subscribe(response => {
                this.commentList = response.map(singleComment => {
                    return {
                        commentId: singleComment.payload.doc.id,
                        ...singleComment.payload.doc.data()
                    } as Comments;
                })
            });
    }

    onPostComment(commentContent) {
        const addedDate = new Date().toLocaleString();
        this.currentComment = new Comments();
        this.currentComment.comment = commentContent;
        this.currentComment.user = this.currentUser;
        this.currentComment.courseId = this.currentCourse.courseId;
        this.currentComment.addedDate = addedDate;
        const actualComment = JSON.parse(JSON.stringify(this.currentComment));
        this.commentService.addComment(actualComment);
    }

}
