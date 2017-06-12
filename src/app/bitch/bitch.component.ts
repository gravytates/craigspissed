import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-bitch',
  templateUrl: './bitch.component.html',
  styleUrls: ['./bitch.component.css']
})
export class BitchComponent {
  @Input() childPostList: Post[];

  constructor() { }

}
