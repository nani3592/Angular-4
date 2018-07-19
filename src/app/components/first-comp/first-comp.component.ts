import { booksDetails } from './../../../assets/boos';
import { Component, OnInit } from '@angular/core';
import { ServiceFileService } from '../../services/service-file.service';
function booksData(book) {
  return {
    book_Details: book,

    priceOfBooks: function () {
      return book.reduce((total, book) => total + book.price, 0);
    },
    priceBasedOnBookName: function (name) {
      return book.find(b => b.book_name === name);
    }
  }
}

function addNumbers(numbers) {
  return numbers.reduce((sum, num) => {
    return sum + num;
  }, 0)
}

function addNumbersMultiple(...numbers) {
  return numbers.reduce((sum, num) => {
    return sum + num;
  }, 0)
}




@Component({
  selector: 'first',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {
  books = booksDetails;
  booktitle;
  getBookGata;
  priceOfBook;
  boodData;
  totalPrice;
  constructor(public service: ServiceFileService) { }

  ngOnInit() {
    console.log(addNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))
    console.log(addNumbersMultiple(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13))

    this.getBookGata = booksData(this.books);
    this.totalPrice = this.getBookGata.priceOfBooks();
  }

  getPrice(title) {
    // this.getBookGata = booksData(this.books);
    this.boodData = this.getBookGata.priceBasedOnBookName(title);
 
        // console.error(new Error('llll'))
    // console.clear()
  }

}
