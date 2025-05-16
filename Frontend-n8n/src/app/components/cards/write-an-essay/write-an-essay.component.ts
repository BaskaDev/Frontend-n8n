import { Component } from '@angular/core';

@Component({
  selector: 'app-write-an-essay',
  templateUrl: './write-an-essay.component.html',
  styleUrl: './write-an-essay.component.css'
})
export class WriteAnEssayComponent {
  formData = {
    topic: '',
    paragraphs: '',
    essayType: ''
  };

  result: string = '';

  paragraphOptions = [2, 4, 6];
  essayTypes = ['Narrative', 'Descriptive', 'Argumentative'];

  onSubmit() {
    const { topic, paragraphs, essayType } = this.formData;

    // Simulación de resultado
    this.result = `Essay on "${topic}" with ${paragraphs} ${essayType} paragraphs. [Generated Content Here]`;

    // Aquí iría la llamada al servicio HTTP (no incluida como pediste)
    // this.http.post(...).subscribe(...)
  }

  copyText() {
    navigator.clipboard.writeText(this.result);
  }
}
