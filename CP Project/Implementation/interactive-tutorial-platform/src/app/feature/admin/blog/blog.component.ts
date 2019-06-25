import {Component, OnInit, TemplateRef} from '@angular/core';
import {Blog} from '../../Model/Blog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {BlogService} from './service/blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
    task: string;
    addOrEditBlogForm: FormGroup;

    blog: Blog = new Blog();
    blogList: Array<Blog> = new Array<Blog>();

    private modalRef: NgbModalRef;

    constructor(private modalService: NgbModal,
                private formBuilder: FormBuilder,
                private blogService: BlogService) {
    }

    ngOnInit() {
        this.geteBlogList();
    }

    geteBlogList() {
        this.blogService.getAllBlog().subscribe(response => {
            this.blogList = response.map(singleBlog => {
                return {
                    blogId: singleBlog.payload.doc.id,
                    ...singleBlog.payload.doc.data()
                } as Blog;
            })
        });
    }

    openAddBlog(template: TemplateRef<any>) {
        this.task = 'Add';
        this.blog = new Blog();
        this.buildForm();
        this.modalRef = this.modalService.open(template);
    }

    openEditBlog(blog: Blog, template: TemplateRef<any>) {
        this.task = 'Update';
        this.blog = blog;
        this.buildForm();

        this.modalRef = this.modalService.open(template);
    }

    buildForm() {
        this.addOrEditBlogForm = this.formBuilder.group({
            title: [this.blog.title === undefined ? undefined : this.blog.title, Validators.required],
            description: [this.blog.description === undefined ? undefined : this.blog.description, Validators.required],
        });
    }

    onSubmitBlog() {
        if (this.task === 'Add') {
            this.blogService.addBlog(this.addOrEditBlogForm.value)
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
            this.blogService.updateBlog(this.blog.blogId, this.addOrEditBlogForm.value)
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

    onDeleteBlog(blogId) {
        if (confirm('Are you sure you want to delete this blog?')) {
            this.blogService.deleteBlog(blogId)
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
