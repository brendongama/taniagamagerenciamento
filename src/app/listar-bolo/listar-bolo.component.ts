import { Component, OnInit, ViewChild } from '@angular/core';
import { IBolo } from '../IBolo';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BoloService } from '../bolo.service';

@Component({
  selector: 'app-listar-bolo',
  templateUrl: './listar-bolo.component.html',
  styleUrls: ['./listar-bolo.component.css']
})
export class ListarBoloComponent implements OnInit {

  ELEMENT_DATA: IBolo[] = [];
  displayedColumns: string[] = ['id', 'nome', 'preco', 'categoria', 'action'];
  dataSource = new MatTableDataSource<IBolo>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private service: BoloService){}

  ngOnInit(): void {
    this.listarTodos();
  }

    listarTodos() {
      this.service.obterTodos().subscribe(resposta => {
        this.ELEMENT_DATA = resposta  
        this.dataSource = new MatTableDataSource<IBolo>(resposta);
      this.dataSource.paginator = this.paginator;  
      })
    }   
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }    


}
