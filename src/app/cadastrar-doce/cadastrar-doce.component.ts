import { Component, OnInit, ViewChild } from '@angular/core';
import { BoloService } from '../bolo.service';
import { IBolo } from '../IBolo';
import { IDoce } from '../IDoce';
import { DoceService } from '../doce.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-cadastrar-doce',
  templateUrl: './cadastrar-doce.component.html',
  styleUrls: ['./cadastrar-doce.component.css']
})
export class CadastrarDoceComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }


}
