import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'semantic-ui-css/semantic.min.css';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class LandingComponent {}
