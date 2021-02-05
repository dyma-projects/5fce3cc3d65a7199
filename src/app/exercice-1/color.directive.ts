import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  constructor(private el: ElementRef<any>) {}

  @HostListener("window:keydown", ["$event"]) windowClick($event) {
    let elementColor = this.el.nativeElement.style.color;
    if ($event.key === "ArrowDown") {
      this.el.nativeElement.style.color = "red";
    } else if ($event.key === "ArrowLeft") {
      this.el.nativeElement.style.color = "green";
    } else if ($event.key === "ArrowRight") {
      this.el.nativeElement.style.color = "blue";
    } else if ($event.key === "ArrowUp") {
      this.el.nativeElement.style.color = "orange";
    } else {
      this.el.nativeElement.style.color = "black";
    }
  }
}
