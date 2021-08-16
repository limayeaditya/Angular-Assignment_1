import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public posts: any = [];
  public errorMsg = "";
  public totalPosts: number = 0;
  public page: number = 1;

  constructor(private _PostService: PostService){ }

  ngOnInit(): void{
    this._PostService.getPosts()
        .subscribe(data => {this.posts = data; 
                    this.totalPosts = data.length;},
                   error => this.errorMsg = error,);
  } 

}
