import { Component, OnInit } from '@angular/core';
import {TutorialService} from '../../services/tutorial.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
// declaring variable
  currentTutorial = null;
  message = '';
  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }
// get tutorial method
  getTutorial(id): void {
    this.tutorialService.get(id).subscribe(
      data => {
        this.currentTutorial = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  // update published
  updatePublished(status): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };
    this.tutorialService.update(this.currentTutorial.id, data).subscribe(
      response => {
        this.currentTutorial.published = status;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
  // update tutorial
  updateTutorial(): void {
    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial).subscribe(
      response => {
        console.log(response);
        this.message = 'This tutorial was updated successfully';
      },
      error => {
        console.log(error);
      }
    );
  }
  // delete tutorial
  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/tutorials']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
