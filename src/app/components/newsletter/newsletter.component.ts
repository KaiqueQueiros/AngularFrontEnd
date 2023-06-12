import { Component } from '@angular/core';
import { ClientService } from '../../shared/service/client.service';
import { Client } from '../../shared/model/client.model';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent {
  newClient: Client = {
    name: '',
    email: ''
  };

  constructor(private clientService: ClientService) { }

  createClient() {
    this.clientService.createClient(this.newClient).subscribe(
      (createdClient: Client) => {
        // Sucesso! O cliente foi criado
        console.log(createdClient);
      },
      (error: any) => {
        // Trate erros da requisição
        console.error(error);
      }
    );
  }
}
