import { Component, OnInit } from '@angular/core';
import { IDoce } from '../IDoce';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DoceService } from '../doce.service';

@Component({
  selector: 'app-update-doce',
  templateUrl: './update-doce.component.html',
  styleUrls: ['./update-doce.component.css']
})
export class UpdateDoceComponent implements OnInit {


  id_doce = ''

  doce: IDoce = {
    id: 0,
    nome: '',
    preco: 0,
    categoria: ''
  }

  nome = new FormControl('')
  preco = new FormControl('')
  categoria = new FormControl('')

  disabled: boolean= true;

  constructor(
    private router: Router,
    private service: DoceService,
    private route: ActivatedRoute) { }
 
    ngOnInit(): void {
      this.id_doce = this.route.snapshot.paramMap.get('id')!
      console.log(this.id_doce);
      this.findById();
    }

    update():void {
      this.service.update(this.doce).subscribe((resposta) => {
        this.router.navigate(['doces'])
      })
    }

    findById(): void {
      this.service.findById(this.id_doce).subscribe(resposta => {
        this.doce = resposta;
        console.log(this.doce);
      })
    }

    cancel(): void {
      this.router.navigate(['']) 
    }

}
