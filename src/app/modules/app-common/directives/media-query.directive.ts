import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[ya-media-query]',
})
export class MediaQueryDirective implements OnInit {
  @HostBinding('class._xl') private xl?: boolean;
  @HostBinding('class._lg') private lg?: boolean;
  @HostBinding('class._md') private md?: boolean;
  @HostBinding('class._sm') private sm?: boolean;
  @HostBinding('class._xs') private xs?: boolean;
  @HostListener('window:resize', ['$event.target'])
  onResize({ innerWidth }: Window) {
    this.setSize(innerWidth);
  }
  constructor() { }

  public ngOnInit(): void {
    this.setSize(window.innerWidth);
  }

  private setSize(size: number): void {
    this.xl = size >= 1200;
    this.lg = size < 1200 && size >= 992;
    this.md = size < 992 && size >= 768;
    this.sm = size < 768 && size >= 576;
    this.xs = size < 576;
  }
}
