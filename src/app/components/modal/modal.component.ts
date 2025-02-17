import { CommonModule, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ContentChild,
} from '@angular/core';


@Component({
  selector: 'app-modal',
  imports: [NgIf, NgTemplateOutlet, CommonModule],
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() showModal: boolean = false;
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md'; 

  @Output() close = new EventEmitter<void>();

  @ContentChild('modalBody') modalBody!: TemplateRef<any>;
  @ContentChild('modalFooter') modalFooter!: TemplateRef<any>;

  closeModal() {
    this.close.emit();
  }
}