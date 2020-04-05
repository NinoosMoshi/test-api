import { Component, OnInit } from '@angular/core';
import { Corona } from 'src/app/common/corona';
import { CoronaService } from 'src/app/services/corona.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.css']
})
export class CoronaComponent implements OnInit {

  coronas: Corona[];

  constructor(private service: CoronaService) { }

  ngOnInit() {
    this.listReports();
  }


  listReports() {
    this.service.getTotal().subscribe(data => {
      this.coronas = data
    })
  }




}
