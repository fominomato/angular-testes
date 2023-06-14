import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { saveAs } from 'file-saver';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>

    <br>

    <button (click)="downloadFile()">Download</button>
  `,
})
export class App {
  name = 'Angular';

  downloadFile() {
    // Simulação de chamada ao backend para obter o conteúdo em base64
    const base64Content =
      'UEsDBBQABgAIAAAAIQDm6tOMgwAAAEoAAAANABwAcHJvZHVjdGlvbi9VVAkAA6XNR1u1zUdW21YD3iJRFQ0qKSehSBGoAglCCuQIBBFVUCQAAUEsBAh4DFAAGAAgAAAAhAObq04yDAAAAKAAAA0AGAAAAAAAAQAAAKSBAAAAAABwcm9kdWN0aW9uL1VUBQADpc1HnV7NQdW21QSwUGAAAAAAEAAQBGAAAA8QAAAAAA';

    const byteCharacters = atob(base64Content);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });

    const nomeArquivo = 'exemplo.xlsx';
    saveAs(blob, nomeArquivo);
  }
}

bootstrapApplication(App);
