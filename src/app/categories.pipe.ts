import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Pipe({
  name: 'categories',
  pure: false
})
export class CategoriesPipe implements PipeTransform {

  posts: FirebaseListObservable<any[]>;

  transform(posts, filterCondition) {
    var output: Post[] = [];
    console.log(posts);
    switch(filterCondition){
      case "personals":
      return posts.filter(function(post){
        return post.category === 'personals';
      });
      case "for-sale":
      return posts.filter(function(post){
        return post.category === 'for-sale';
      });
      case "jobs":
      return posts.filter(function(post){
        return post.category === "jobs";
      });
      case "complaints":
      return posts.filter(function(post){
        return post.category === "complaints";
      });
      default:
      // console.log(posts[0].category);

      return output;
    }
  }


}



// switch(filterCondition){
//   case "personals":
//   return posts.filter(function(post){
//     return post.category === 'personals';
//   });
//   case "for-sale":
//   return posts.filter(function(post){
//     return post.category === 'for-sale';
//   });
//   case "jobs":
//   return posts.filter(function(post){
//     return post.category === "jobs";
//   });
//   case "complaints":
//   return posts.filter(function(post){
//     return post.category === "complaints";
//   });
//   default:
//   // console.log(posts[0].category);
//
//   return output;
// }
