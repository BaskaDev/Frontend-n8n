import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards = [
    { icon: '📄', title: 'Write an Essay', description: 'Generate an Essay based on a type, subject and number of paragraphs.' },
    { icon: '🐣', title: 'Content Simplifier', description: 'Summarize text content for all age types of audience.' },
    { icon: '🎯', title: 'Product Description', description: 'Generate compelling & high converting descriptions for products.' },
    { icon: '📧', title: 'Email Enhancer', description: 'Generate an incredibly clickable email from text content.' },
    { icon: '💼', title: 'LinkedIn Message', description: 'Generate a LinkedIn high-converting message based on a type or subject.' },
    { icon: '📸', title: 'Instagram Caption', description: 'Generate a compelling caption for Instagram.' },
    { icon: '❓', title: 'FAQs Content', description: 'Generate FAQs for a product, web app, or landing pages.' },
    { icon: '🏷️', title: 'Product Name Generator', description: 'Generate product names from example words or topics.' },
    { icon: '🔍', title: 'SEO Keywords', description: 'Generate high-converting SEO keywords based on a subject.' },
    { icon: '📝', title: 'Review Responder', description: 'Generate a friendly response for a customer review.' },
    { icon: '💡', title: 'Business Idea Generator', description: 'Generate business ideas based on topics or budgets.' },
    { icon: '📰', title: 'Article Generator', description: 'Generate clickable and SEO friendly article content.' },
  ];
}
