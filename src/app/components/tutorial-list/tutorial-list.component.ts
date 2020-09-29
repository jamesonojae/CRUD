import { Component, OnInit } from '@angular/core';
import {TutorialService} from '../../services/tutorial.service';

@Component({
  selector: 'app-tutorial-list',
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent implements OnInit {
// declaring variables
  tutorials: any;
  currentTutorial = null;
  currentIndex = -1;
  title = '';
  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    // call the retrieveTutorials method at the point of initiation
    this.retrieveTutorials();
  }
// retrieveTutorials method
  retrieveTutorials(): void {
    this.tutorialService.getAll().subscribe(
      data => {
        this.tutorials = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  // refreshList method
  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }
  // save active
  setActiveTutorial(tutorial, index): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
  // remove all tutorials
  removeAllTutorials(): void {
    this.tutorialService.deleteAll().subscribe(
      response => {
        console.log(response);
        this.retrieveTutorials();
      },
      error => {
        console.log(error);
      }
    );
  }
  // search title method
  searchTitle(): void {
    this.tutorialService.findByTitle(this.title).subscribe(
      data => {
        this.tutorials = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
