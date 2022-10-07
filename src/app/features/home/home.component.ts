import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    this.stocksForm;
  }


  public getOneStock(stock: any) {
     this.stocksService.getOne(stock).subscribe((value: any) => {
       this.stock = value;
    });
  }

  public stocksForm = new FormGroup({
    stockName: new FormControl('')
  });

  public getStock() {
    this.getOneStock(this.stocksForm.controls.stockName.value)
    console.log(this.stock);
  }

}
