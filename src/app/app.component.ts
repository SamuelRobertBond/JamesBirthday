import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  jamesBirthday = 'jamesbirthdaysite';

  ngOnInit() {
    this.setBirthday();
    setInterval(() => {
      this.setBirthday()
    }, 1000)
  }

  setBirthday() {
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.jamesBirthday = tomorrow.toLocaleDateString("en", {
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "numeric"
    })
  }

}
