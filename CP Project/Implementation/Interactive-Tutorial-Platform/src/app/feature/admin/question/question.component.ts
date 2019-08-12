import {Component, OnInit} from '@angular/core';
import {CourseService} from '../course/service/course.service';
import {Course} from '../../Model/Course';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Question} from '../../Model/Question';
import {CourseQuestion} from '../../Model/courseQuestion';
import {QuestionService} from './service/question.service';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
    updateButton: boolean;
    saveButton: boolean;
    courseId: string;

    courseQuestion: CourseQuestion = new CourseQuestion();
    questionList: Array<Question> = new Array<Question>();
    courseList: Array<Course> = new Array<Course>();

    questionAnswerForm: FormGroup;

    constructor(private courseService: CourseService,
                private formBuilder: FormBuilder,
                private questionService: QuestionService) {

        this.questionAnswerForm = this.formBuilder.group({
            courseId: [undefined, Validators.required],
            questionForm: this.formBuilder.array([])
        });
    }

    ngOnInit() {
        this.getCourseList();
        this.updateButton = false;
        this.saveButton = false;
    }

    getCourseList() {
        this.courseService.getAllCourse().subscribe(response => {
            this.courseList = response.map(singleCourse => {
                return {
                    courseId: singleCourse.payload.doc.id,
                    ...singleCourse.payload.doc.data()
                } as Course;
            })
        });
    }

    addQuestionField() {
        const control = this.questionAnswerForm.controls.questionForm as FormArray;
        control.push(
            this.formBuilder.group({
                answers: this.formBuilder.array([
                    this.formBuilder.group({
                        description: [undefined, Validators.required],
                        points: [undefined, Validators.required]
                    })
                ]),
                description: [undefined, Validators.required],
            })
        );
    }

    deleteQuestionField(index) {
        const control = this.questionAnswerForm.controls.questionForm as FormArray;
        control.removeAt(index);
    }

    addAnswerField(control) {
        control.push(
            this.formBuilder.group({
                description: [undefined, Validators.required],
                points: [undefined, Validators.required]
            })
        );
    }

    deleteAnswerField(control, index) {
        control.removeAt(index);
    }

    setQuestions() {
        this.clearFormArray();
        const control = this.questionAnswerForm.controls.questionForm as FormArray;
        const actualControl = (this.questionAnswerForm.controls.questionForm as FormArray).controls;
        this.questionList.forEach(qsn => {
            control.push(this.formBuilder.group({
                    description: qsn.description,
                    answers: this.setAnswers(qsn)
                })
            );
        });
    }

    setAnswers(qsn) {
        const arr = new FormArray([]);
        qsn.answers.forEach(ans => {
            arr.push(this.formBuilder.group({
                description: ans.description,
                points: ans.points
            }));
        });
        return arr;
    }

    onChangeOption() {
        this.questionList = new Array<Question>();
        this.saveButton = true;
        this.updateButton = false;
        this.clearFormArray();
        this.courseId = this.questionAnswerForm.get('courseId').value;
        this.questionService.getCourseQuestionById(this.courseId).subscribe(response => {
            const courseQuestionArrayFb = response.map(currentCourseQuestion => {
                this.courseQuestion = currentCourseQuestion.payload.doc.data() as CourseQuestion;
                this.courseQuestion.id = currentCourseQuestion.payload.doc.id as string;
                console.log(this.courseQuestion);
                // this.questionAnswerForm.value.questionForm = this.questionList;
                this.questionList = this.courseQuestion.questionForm as Array<Question>;
                    this.setQuestions();
                    this.updateButton = true;
                    this.saveButton = false;
            });
        });
    }

    clearFormArray() {
        const control = this.questionAnswerForm.controls.questionForm as FormArray;
        control.controls = [];
    }

    onSaveQuestion() {
        this.questionService.addCourseQuestion(this.questionAnswerForm.value)
            .then(
                (data) => {
                    if (data) {
                        alert('SUCCESSFULLY ADDED !!!');
                    }
                }
            )
            .catch(
                error => alert(`ERROR${error}`)
            )
    }

    onUpdateQuestion() {
        this.questionService.updateCourseQuestion(this.courseQuestion.id, this.questionAnswerForm.value)
            .then(
                () => {
                    alert('SUCCESSFULLY UPDATED !!!');
                }
            )
            .catch(
                error => alert(`ERROR${error}`)
            )
    }

    onDeleteQuestion() {
        this.questionService.deleteCourseQuestion(this.courseQuestion.id)
            .then(
                () => {
                    alert('SUCCESSFULLY DELETED !!!');
                    this.onChangeOption();
                }
            )
            .catch(
                error => {alert(`ERROR${error}`); this.onChangeOption(); }
            )

    }
}
