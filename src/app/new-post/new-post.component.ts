import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [PostService]
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  submitForm(title: string, category: string, body: string, author: string, contact: string) {
    var newPost: Post =  new Post(title, category, body, author, contact);
    this.postService.addPost(newPost);
  }

}
