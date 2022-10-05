import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/core/services/stocks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public stocksService: StocksService) { }

  public stock: any;

  ngOnInit(): void {
    this.getOneStock();
  }

  public getOneStock() {
    return this.stocksService.getOne().subscribe((value: any) => {
       this.stock = value;
       debugger
    });
  }

}
