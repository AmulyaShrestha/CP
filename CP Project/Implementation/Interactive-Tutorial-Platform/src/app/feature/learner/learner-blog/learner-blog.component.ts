import {Component, OnInit} from '@angular/core';
import {Blog} from '../../Model/Blog';
import {LearnerBlogService} from './service/learner-blog.service';

@Component({
    selector: 'app-learner-blog',
    templateUrl: './learner-blog.component.html',
    styleUrls: ['./learner-blog.component.scss']
})
export class LearnerBlogComponent implements OnInit {
    blogList: Array<Blog> = new Array<Blog>();

    constructor(private learnerBlogService: LearnerBlogService) {
    }

    ngOnInit() {
        this.getBlogList();
    }

    getBlogList() {
        this.learnerBlogService.getAllBlog().subscribe(response => {
            this.blogList = response.map(singleBlog => {
                return {
                    blogId: singleBlog.payload.doc.id,
                    ...singleBlog.payload.doc.data()
                } as Blog;
            })
        });
    }

}
