import { Component, OnInit, ViewChild } from '@angular/core';
import { BoloService } from '../bolo.service';
import { IBolo } from '../IBolo';
import { IDoce } from '../IDoce';
import { DoceService } from '../doce.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-doce',
  templateUrl: './cadastrar-doce.component.html',
  styleUrls: ['./cadastrar-doce.component.css']
})
export class CadastrarDoceComponent implements OnInit {
  
  doce: IDoce = {
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
    private service: DoceService,
    private route: ActivatedRoute) { }
 
    ngOnInit(): void {           
     
    }

    save():void {
      this.service.save(this.doce).subscribe((resposta) => {
        console.log(this.doce);
        this.router.navigate(['doces'])
      })
    }    

    cancel(): void {
      this.router.navigate(['']) 
    }


}
