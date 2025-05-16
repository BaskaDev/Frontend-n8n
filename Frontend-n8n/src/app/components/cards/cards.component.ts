import { Router } from '@angular/router';
import { Value } from './../../../../node_modules/regjsparser/parser.d';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor(private readonly router: Router) { }

  cards = [
    { value: "WriteAnEssay", icon: '📄', title: 'Write an Essay', description: 'Generate an Essay based on a type, subject and number of paragraphs.' },
    { value: "WriteAnEssay", icon: '🐣', title: 'Content Simplifier', description: 'Summarize text content for all age types of audience.' },
    { value: "WriteAnEssay", icon: '🎯', title: 'Product Description', description: 'Generate compelling & high converting descriptions for products.' },
    { value: "WriteAnEssay", icon: '📧', title: 'Email Enhancer', description: 'Generate an incredibly clickable email from text content.' },
    { value: "WriteAnEssay", icon: '💼', title: 'LinkedIn Message', description: 'Generate a LinkedIn high-converting message based on a type or subject.' },
    { value: "WriteAnEssay", icon: '📸', title: 'Instagram Caption', description: 'Generate a compelling caption for Instagram.' },
    { value: "WriteAnEssay", icon: '❓', title: 'FAQs Content', description: 'Generate FAQs for a product, web app, or landing pages.' },
    { value: "WriteAnEssay", icon: '🏷️', title: 'Product Name Generator', description: 'Generate product names from example words or topics.' },
    { value: "WriteAnEssay", icon: '🔍', title: 'SEO Keywords', description: 'Generate high-converting SEO keywords based on a subject.' },
    { value: "WriteAnEssay", icon: '📝', title: 'Review Responder', description: 'Generate a friendly response for a customer review.' },
    { value: "WriteAnEssay", icon: '💡', title: 'Business Idea Generator', description: 'Generate business ideas based on topics or budgets.' },
    { value: "WriteAnEssay", icon: '📰', title: 'Article Generator', description: 'Generate clickable and SEO friendly article content.' },
  ];

  redirecCard(value: string) {
    debugger;
    this.router.navigate([`/${value}`]);
  }

}
