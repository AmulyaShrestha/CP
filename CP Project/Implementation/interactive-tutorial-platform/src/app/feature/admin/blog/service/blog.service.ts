import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    constructor(private firestore: AngularFirestore) {
    }

    addBlog(blogData) {
        return this.firestore.collection('blog').add(blogData)
    }

    updateBlog(blogId, blogData) {
        return this.firestore.doc(`blog/${blogId}`).update(blogData)
    }

    deleteBlog(blogId) {
        return this.firestore.doc(`blog/${blogId}`).delete()
    }

    getAllBlog() {
        return this.firestore.collection('blog').snapshotChanges()
    }
}
