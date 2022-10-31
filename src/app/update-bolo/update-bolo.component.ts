import { Component, OnInit } from '@angular/core';
import { IBolo } from '../IBolo';
import { Router, ActivatedRoute } from '@angular/router';
import { BoloService } from '../bolo.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-bolo',
  templateUrl: './update-bolo.component.html',
  styleUrls: ['./update-bolo.component.css']
})
export class UpdateBoloComponent implements OnInit {
 

  id_bolo = ''

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
      this.id_bolo = this.route.snapshot.paramMap.get('id')!
      console.log(this.id_bolo);
      this.findById();
    }

    update():void {
      this.service.update(this.bolo).subscribe((resposta) => {
        this.router.navigate(['bolos'])
      })
    }

    findById(): void {
      this.service.findById(this.id_bolo).subscribe(resposta => {
        this.bolo = resposta;
        console.log(this.bolo);
      })
    }

    cancel(): void {
      this.router.navigate(['']) 
    }
}
