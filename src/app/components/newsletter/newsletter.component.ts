import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/service/client.service';
// import { Client } from '../../shared/model/client.model';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  public formClient!: FormGroup;


  constructor(
    private fb: FormBuilder,
    public clientService: ClientService,
    private http: HttpClient,
    // private toastr: ToastrService
  ) { }
  ngOnInit(): void {
    this.formClient = new FormGroup({ 
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
     
  }
  onSubmit() {
    if (this.formClient?.valid) {
      const formData = this.formClient.value;      
      this.http.post('/api/client', formData)
        .subscribe(
          (          response: any) => {
            
            console.log('Assinatura de newsletter enviada com sucesso!', response);
            alert("Cadastrado com sucesso!");
            
              this.formClient.reset();
          },
          (          error: any) => {

            console.error('Erro ao enviar a assinatura de newsletter:', error);
          }
        );
    }
  }
}