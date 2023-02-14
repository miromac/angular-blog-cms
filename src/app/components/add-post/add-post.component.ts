import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  constructor (private blogService:BlogService) {}

  addBlog = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  })

  onSubmit() {
    console.log(this.addBlog.value)
    this.blogService.createBlog(this.addBlog.value).subscribe((data)=>{
      alert('Blog Posted Successfully !')
      this.addBlog.reset()
    },(error)=>{
      console.log('Error Occurred !')
    })
  }

}
