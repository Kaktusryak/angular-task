import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() name : any
  @Input() lastName : any
  @Input() dateOfBirth : any
  @Input() education : any
  @Input() role : any
  @Input() position : any
}

