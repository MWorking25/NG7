import { Directive, ElementRef, Input, Renderer2, OnInit , OnChanges, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  selector: '[appThemes], [primarybg], [accentbg], [primaryclr]'
})
export class ThemesDirective implements OnInit, OnChanges {

  @Input() primaryclr: string;
  @Input() primarybg: string;
  @Input() accentbg: string;

  constructor(private elem: ElementRef, private renderer: Renderer2) { }


  ngOnInit() {
  
    let primarybgcolor = `${ this.primarybg }`;
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', primarybgcolor);

    let accentbgcolor = `${ this.accentbg }`;
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', accentbgcolor);

    let primaryclr = `${ this.primaryclr }`;
    this.renderer.setStyle(this.elem.nativeElement, 'color', primaryclr);


  }

  ngOnChanges() {

    let primarybgcolor = `${ this.primarybg }`;
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', primarybgcolor);

    let accentbgcolor = `${ this.accentbg }`;
    this.renderer.setStyle(this.elem.nativeElement, 'background-color', accentbgcolor);

    let primaryclr = `${ this.primaryclr }`;
    this.renderer.setStyle(this.elem.nativeElement, 'color', primaryclr);

  }

}
