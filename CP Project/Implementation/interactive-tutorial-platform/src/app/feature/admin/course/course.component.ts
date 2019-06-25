import {Component, OnInit, TemplateRef} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CourseService} from './service/course.service';
import {Course} from '../../Model/Course';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
    task: string;
    addOrEditCourseForm: FormGroup;

    course: Course = new Course();
    courseList: Array<Course> = new Array<Course>();

    private modalRef: NgbModalRef;

    constructor(private modalService: NgbModal,
                private formBuilder: FormBuilder,
                private courseService: CourseService) {
    }

    ngOnInit() {
        this.getCourseList();
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

    openAddCourse(template: TemplateRef<any>) {
        this.task = 'Add';
        this.course = new Course();
        this.buildForm();
        this.modalRef = this.modalService.open(template, {size: 'lg'});
    }

    openEditCourse(course: Course, template: TemplateRef<any>) {
        this.task = 'Update';
        this.course = course;
        this.buildForm();

        this.modalRef = this.modalService.open(template, {size: 'lg'});
    }

    buildForm() {
        this.addOrEditCourseForm = this.formBuilder.group({
            mainTitle: [this.course.mainTitle === undefined ? undefined : this.course.mainTitle, Validators.required],
            infoContent: [this.course.infoContent === undefined ? undefined : this.course.infoContent, Validators.required],
            courseContent: this.formBuilder.array([])
        });
        if (this.task === 'Update') {
            this.setCourseContent(this.course);
        } else {
            this.addField();
        }
    }

    setCourseContent(course) {
        const control = this.addOrEditCourseForm.controls.courseContent as FormArray;
        course.courseContent.forEach(content => {
            control.push(this.formBuilder.group({
                    subTitle: content.subTitle,
                    subContent: content.subContent
                })
            );
        });
    }

    addField() {
        const control = this.addOrEditCourseForm.controls.courseContent as FormArray;
        control.push(
            this.formBuilder.group({
                subTitle: [undefined, Validators.required],
                subContent: [undefined, Validators.required]
            })
        );
    }

    deleteField(index) {
        const control = this.addOrEditCourseForm.controls.courseContent as FormArray;
        control.removeAt(index);
    }

    onSubmitCourse() {
        if (this.task === 'Add') {
            this.courseService.addCourse(this.addOrEditCourseForm.value)
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

        } else {
            this.courseService.updateCourse(this.course.courseId, this.addOrEditCourseForm.value)
                .then(
                    () => {
                        alert('SUCCESSFULLY UPDATED !!!');
                    }
                )
                .catch(
                    error => alert(`ERROR${error}`)
                )
        }
        this.modalRef.dismiss('Close modal');
    }

    onDeleteCourse(courseId) {
        if (confirm('Are you sure you want to delete this course?')) {
            this.courseService.deleteCourse(courseId)
                .then(
                    () => {
                        alert('SUCCESS!');
                    }
                )
                .catch(
                    error => alert(`ERROR${error}`)
                )
        }
    }
}
