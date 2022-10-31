import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IBolo } from '../IBolo';
import { BoloService } from '../bolo.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cadastrar-bolo',
  templateUrl: './cadastrar-bolo.component.html',
  styleUrls: ['./cadastrar-bolo.component.css']
})
export class CadastrarBoloComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  

}


