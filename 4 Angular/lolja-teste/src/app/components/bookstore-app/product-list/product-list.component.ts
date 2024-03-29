import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  livros:any;
  bookService: BooksService
  constructor(bookService:BooksService) {
    this.bookService = BookService;
   }

  ngOnInit(): void {
    this.livros = this.bookService.getBook().subscribe((data => {
      this.livros = data;
    }))
  }

}
