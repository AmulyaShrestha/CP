import {Component, OnInit} from '@angular/core';
import {Course} from '../../Model/Course';
import {User} from '../../Model/User';
import {CurrentUserService} from '../../../shared/global-services/currentUser-service/current-user.service';
import {LearnerCourseService} from '../learner-course/service/learner-course.service';
import {LearnerSelectCourseService} from './service/learner-select-course.service';
import {Comments} from '../../Model/Comments';
import {CourseStatus} from '../../Model/courseStatus';
import {QuestionService} from '../../admin/question/service/question.service';
import {CourseQuestion} from '../../Model/courseQuestion';
import {Question} from '../../Model/Question';
import {Points} from '../../Model/Points';
import {Answer} from '../../Model/Answer';

@Component({
    selector: 'app-learner-select-course',
    templateUrl: './learner-select-course.component.html',
    styleUrls: ['./learner-select-course.component.scss']
})
export class LearnerSelectCourseComponent implements OnInit {
    currentCourse: Course = new Course();
    currentUser: User = new User();
    currentComment: Comments = new Comments();
    points: Points = new Points();
    markedStatus: CourseStatus = new CourseStatus();
    commentList: Array<Comments> = new Array<Comments>();
    courseQuestion: CourseQuestion = new CourseQuestion();
    questionList: Array<Question> = new Array<Question>();
    editOption = false;
    canMark = true;
    currentCommentIdForEdit = '';

    totalMarks = 0;
    obtainedMarks = 0;

    securityIndex = 0;
    securityNext = false;
    securityPrevious = false;

    checkedAnswerMap: Map<string, string> = new Map<string, string>();
    pointsMap: Map<string, number> = new Map<string, number>();
    formValid = false;

    submitted = false;

    constructor(private currentCourseService: LearnerCourseService,
                private currentUserService: CurrentUserService,
                private commentService: LearnerSelectCourseService,
                private questionService: QuestionService) {
    }

    ngOnInit() {
        this.currentCourse = this.currentCourseService.getCurrentCourse();
        this.currentUser = this.currentUserService.getCurrentUser();
        this.getMarkedStatus();
        this.getAllComments();
        this.getCourseQuestionList();
        this.getPoints();
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
                });
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
        this.commentService.addMarkedStatus(markedStatus);
        this.canMark = false;
    }

    markCourseAsUnread(statusId) {
        this.commentService.deleteMarkedStatus(statusId);
        this.canMark = true;
    }

    getCourseQuestionList() {
        this.questionService.getCourseQuestionById(this.currentCourse.courseId).subscribe(response => {
            const courseQuestionArrayFb = response.map(currentCourseQuestion => {
                this.courseQuestion = currentCourseQuestion.payload.doc.data() as CourseQuestion;
                this.courseQuestion.id = currentCourseQuestion.payload.doc.id as string;
                this.questionList = this.courseQuestion.questionForm as Array<Question>;
                if (this.questionList.length !== 1) {
                    this.securityNext = true;
                }

                this.questionList.forEach((qsn: Question) => {
                    qsn.answers.forEach( (ans: Answer) => {
                        this.pointsMap.set(ans.description, ans.points);
                        this.totalMarks = this.totalMarks + ans.points;
                    })
                })
            });
        });
    }

    getPoints() {
        this.commentService.getPoints(this.currentUser.userId, this.currentCourse.courseId)
            .subscribe( response => {
                const pointsList = response.map( currentPoints => {
                    this.points = currentPoints.payload.doc.data() as Points;
                    this.points.pointsId = currentPoints.payload.doc.id as string;
                })
            })
    }

    onNextSecurityQuestion() {
        this.securityPrevious = true;
        this.securityIndex++;
        if (this.securityIndex === this.questionList.length - 1) {
            this.securityNext = false;
        }
    }

    onPreviousSecurityQuestion() {
        this.securityNext = true;
        this.securityIndex--;
        if (this.securityIndex === 0) {
            this.securityPrevious = false;
        }
    }

    onSelectionChange(questionDesc, ansDesc) {
        this.checkedAnswerMap.set(questionDesc, ansDesc);
        if (this.checkedAnswerMap.size === this.questionList.length) {
            this.formValid = true;
        }
    }

    onProceedQuestion() {
        this.points = new Points();
        this.checkedAnswerMap.forEach((value, key) => {
            this.obtainedMarks = this.obtainedMarks + this.pointsMap.get(value);
        });

        this.points.courseId = this.currentCourse.courseId;
        this.points.userId = this.currentUser.userId;
        this.points.obtainedPoints = this.obtainedMarks;
        const actualPoints = JSON.parse(JSON.stringify(this.points));
        this.commentService.proceedAnswers(actualPoints)
    }

}
