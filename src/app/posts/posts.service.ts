import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

//eventemitter
import { Subject }from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {

  private posts: Post[] = [];
  //inform via this listener everyone in the app about posts
  private postsUpdated = new Subject <Post[]>();
  // you can not only inject into components, but also into services...so now injection of httpclient (first import it here) into our postsservice
  constructor(private http: HttpClient) {

  }
  getPosts() {
    //connecting to backend to fetch posts from there, asynchonous task
    // angular has a build in http client....so easy to use-> unlock in app.module.ts
    //get method expects a path to our server
    //observables...angular will hands unsubscription
    this.http.get<{message: string, posts: Post[]}>('http://locahost:3000/api/posts')
    .subscribe((postData) => {
      this.posts =postData.posts;
      this.postsUpdated.next([...this.posts]);
    });
  }
  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { id: "id", title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
 }
