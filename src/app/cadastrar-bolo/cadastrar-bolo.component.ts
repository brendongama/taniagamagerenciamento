import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IBolo } from '../IBolo';
import { BoloService } from '../bolo.service';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-bolo',
  templateUrl: './cadastrar-bolo.component.html',
  styleUrls: ['./cadastrar-bolo.component.css']
})
export class CadastrarBoloComponent implements OnInit {

  bolo: IBolo = {
    id: 0,
    nome: '',
    preco: 0,
    categoria: ''
  }

  nome = new FormControl('')
  preco = new FormControl('')
  categoria = new FormControl('')

  constructor(
    private router: Router,
    private service: BoloService,
    private route: ActivatedRoute) { }
 
    ngOnInit(): void {           
     
    }

    save():void {
      this.service.save(this.bolo).subscribe((resposta) => {
        console.log(this.bolo);
        this.router.navigate(['bolos'])
      })
    }    

    cancel(): void {
      this.router.navigate(['']) 
    }

  

}


