import { Component, OnInit, ViewChild } from '@angular/core';
import { IDoce } from '../IDoce';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DoceService } from '../doce.service';

@Component({
  selector: 'app-listar-doce',
  templateUrl: './listar-doce.component.html',
  styleUrls: ['./listar-doce.component.css']
})
export class ListarDoceComponent implements OnInit {
  ELEMENT_DATA: IDoce[] = [];
  displayedColumns: string[] = ['id', 'nome', 'preco', 'categoria', 'action'];
  dataSource = new MatTableDataSource<IDoce>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private service: DoceService){}

  ngOnInit(): void {
    this.listarTodos();
  }

    listarTodos() {
      this.service.obterTodos().subscribe(resposta => {
        this.ELEMENT_DATA = resposta  
        this.dataSource = new MatTableDataSource<IDoce>(resposta);
      this.dataSource.paginator = this.paginator;  
      })
    }   
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
