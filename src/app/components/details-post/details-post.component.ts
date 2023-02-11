import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-details-post',
  templateUrl: './details-post.component.html',
  styleUrls: ['./details-post.component.css']
})
export class DetailsPostComponent implements OnInit {

  public id!:any
  public blog:any

  constructor(private actRouted:ActivatedRoute, private blogService:BlogService) {
    this.id = this.actRouted.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.blogService.getBlogById(this.id).subscribe(
      (data) => {
        this.blog = data
      },
      (error) => {
        console.warn('Blog does not exist !')
      }
    );
  }
}
