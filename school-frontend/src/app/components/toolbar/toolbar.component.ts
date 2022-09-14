import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatDialogModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
