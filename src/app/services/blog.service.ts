import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  
  baseUrl = "http://localhost:3000/blogs"
  
  constructor(private http:HttpClient) { }

  // get All data
  getAllBlogs() {
    return this.http.get(this.baseUrl)
  }

  // Create blog
  createBlog(data:any) {
    return this.http.post(this.baseUrl, data)
  }

  // get blog by ID
  getBlogById(id:any) {
    return this.http.get(this.baseUrl+`/${id}`)
  }

  // update blog
  updateBlog(id:any, data:any) {
    return this.http.get(`this.baseUrl/${id}`, data)
  }

  // delete blog
  deleteBlog(id:any) {
    return this.http.delete(`this.baseUrl/${id}`)
  }
}
