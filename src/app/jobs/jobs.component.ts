import { Component, Input} from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  @Input() childPostList: Post[];

  constructor() { }

}
