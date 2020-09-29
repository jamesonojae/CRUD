import { Component, OnInit } from '@angular/core';
import { TutorialService} from '../../services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
tutorial = {
  title: '',
  description: '',
  published: false,
  createdDateTime: '',
};
submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.getHello();
  }

  getHello() {
    this.tutorialService.getAll('hello').subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  // save tutorial
  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };
    this.tutorialService.create('createTutorial', data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }
  // add new tutorial
  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false,
      createdDateTime: '',
    };
  }
}
