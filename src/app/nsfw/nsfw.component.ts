import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CATEGORIES } from '../category/categories';

@Component({
  selector: 'web-nsfw',
  templateUrl: './nsfw.component.html',
  styleUrls: ['./nsfw.component.css']
})
export class NsfwComponent implements OnInit {
categories = CATEGORIES;

  constructor(private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  // Nem vagyunk 18 fölött
  itsAChild() {
    this.snackbar.open('Akkor nincs ott semmi keresnivalód', '', {
      duration: 3000,
      panelClass: ['simple-snack-bar']
    });
    // eltávolítjuk a kategóriát, visszamegyünk a főoldalra
    this.categories.pop();
    this.router.navigate(['/']);
  }

  itsALie() {
    this.snackbar.open('Haha csak szeretnéd', 'DISLIKE', {
      duration: 3000
    });
    // feliratkozunk a snackbar gombjának eseményére
    this.snackbar._openedSnackBarRef.onAction().subscribe(
      () => {
        // a gombra kattintva nyitunk újra ilyen snackbart egy tippel
        this.snackbar.open('Pro tipp: jobb klikk a homályosított háttérre, majd kép megnyitása és láthatod élesben', '', {
          duration: 5000,
          panelClass: ['simple-snack-bar']
        });
      }
    );
  }

}
