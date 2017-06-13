import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-personals',
  templateUrl: './personals.component.html',
  styleUrls: ['./personals.component.css'],
  providers: [PostService]
})
export class PersonalsComponent implements OnInit {
  masterPersonalsList: FirebaseListObservable<any[]>;

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit(){
    this.masterPersonalsList = this.postService.getPosts();
  }

  filterBy: string = "personals";


  goToDetailPage(clickedPost) {
    this.router.navigate(['posts', clickedPost.$key]);
  };

}
