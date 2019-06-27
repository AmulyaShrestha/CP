import {Component, OnInit} from '@angular/core';
import {Course} from '../../Model/Course';
import {User} from '../../Model/User';
import {CurrentUserService} from '../../../shared/global-services/currentUser-service/current-user.service';
import {LearnerCourseService} from '../learner-course/service/learner-course.service';
import {LearnerSelectCourseService} from './service/learner-select-course.service';
import {Comments} from '../../Model/Comments';
import {CourseStatus} from '../../Model/courseStatus';

@Component({
    selector: 'app-learner-select-course',
    templateUrl: './learner-select-course.component.html',
    styleUrls: ['./learner-select-course.component.scss']
})
export class LearnerSelectCourseComponent implements OnInit {
    currentCourse: Course = new Course();
    currentUser: User = new User();
    currentComment: Comments = new Comments();
    markedStatus: CourseStatus = new CourseStatus();
    commentList: Array<Comments> = new Array<Comments>();
    editOption = false;
    canMark = true;
    currentCommentIdForEdit = '';

    submitted = false;

    constructor(private currentCourseService: LearnerCourseService,
                private currentUserService: CurrentUserService,
                private commentService: LearnerSelectCourseService) {
    }

    ngOnInit() {
        this.currentCourse = this.currentCourseService.getCurrentCourse();
        this.currentUser = this.currentUserService.getCurrentUser();
        this.getMarkedStatus();
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

    getMarkedStatus() {
        this.commentService.getMarkedStatus(this.currentUser.userId, this.currentCourse.courseId)
            .subscribe(response => {
                const status = response.map(markedStatus => {
                    return {
                        statusId: markedStatus.payload.doc.id,
                        ...markedStatus.payload.doc.data()
                    } as CourseStatus;
                })
                status.forEach(markedStatus => {
                    this.markedStatus = markedStatus;
                    this.canMark = false;
                    console.log('id', this.markedStatus);
                })
            });
    }

    enableEdit(currentCommentId) {
        this.currentCommentIdForEdit = currentCommentId;
        this.editOption = true;
    }

    onUpdateComment(commentId, commentContent) {
        this.submitted = true;
        if (commentContent === '') {
            return;
        }
        const addedDate = new Date().toLocaleString();
        this.currentComment = new Comments();
        this.currentComment.comment = commentContent;
        this.currentComment.user = this.currentUser;
        this.currentComment.courseId = this.currentCourse.courseId;
        this.currentComment.addedDate = addedDate;
        const actualComment = JSON.parse(JSON.stringify(this.currentComment));
        this.commentService.updateComment(commentId, actualComment);
        this.editOption = false;
        this.currentCommentIdForEdit = '';
    }

    onDeleteComment(commentId) {
        this.commentService.deleteComment(commentId);
        this.editOption = false;
        this.currentCommentIdForEdit = '';
    }

    onPostComment(commentContent) {
        this.submitted = true;
        if (commentContent === '') {
            return;
        }
        const addedDate = new Date().toLocaleString();
        this.currentComment = new Comments();
        this.currentComment.comment = commentContent;
        this.currentComment.user = this.currentUser;
        this.currentComment.courseId = this.currentCourse.courseId;
        this.currentComment.addedDate = addedDate;
        const actualComment = JSON.parse(JSON.stringify(this.currentComment));
        this.commentService.addComment(actualComment);
    }

    markCourseAsRead() {
        this.markedStatus.userId = this.currentUser.userId;
        this.markedStatus.courseId = this.currentCourse.courseId;
        const markedStatus = JSON.parse(JSON.stringify(this.markedStatus));
        this.commentService.addMarkedStatus(markedStatus)
        this.canMark = false;
    }

    markCourseAsUnread(statusId) {
        this.commentService.deleteMarkedStatus(statusId);
        this.canMark = true;
    }

}
