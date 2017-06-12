import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css']
})
export class ForSaleComponent {
  @Input() childPostList: Post[];

  constructor() { }

}
