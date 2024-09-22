import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrl: './thankyou.component.scss'
})
export class ThankyouComponent {

  constructor(
    public dialogRef: MatDialogRef<ThankyouComponent>,
  ) {
  }

  onClose(): void {
    this.dialogRef.close();
    window.location.reload();
  }
}
