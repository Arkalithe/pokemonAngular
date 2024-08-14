import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: "[pokemonBorderCard]",
    standalone: true,
})
export class BorderCardDirective {
  private initalColor: string = "#f5f5f5";
  private defaultColor: string = "#009688";
  private defaultHeight: number = 200;
  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initalColor);
  }

  @Input("pokemonBorderCard") borderColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initalColor);
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
