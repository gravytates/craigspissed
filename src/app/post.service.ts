import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  masterPersonalsList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.masterPersonalsList = database.list('posts');
  }

  getPosts() {
    return this.masterPersonalsList;
  }

  getPostById(postId: string){
    return this.database.object('posts/' + postId);
  }

}
