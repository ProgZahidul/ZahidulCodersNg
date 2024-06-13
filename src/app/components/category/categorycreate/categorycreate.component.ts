import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorycreate',
  templateUrl: './categorycreate.component.html',
  styleUrls: ['./categorycreate.component.css']
})
export class CategoryCreateComponent implements OnInit {

  public category: Category = new Category();

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void { }

  createCategory(): void {
    this.categoryService.createCategory(this.category).subscribe(() => {
      this.router.navigate(['/categories']);
    });
  }
}
