import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
  @Input() customImg: string | null =
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2f0f5a19-0ae1-47c5-9790-111058343d77/dfbvd0h-0560f01a-3bbd-4ac1-87af-43e4b8b4c170.png/v1/fill/w_1280,h_1280,strp/arthas_lich_king_render_by_randor2000_dfbvd0h-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzJmMGY1YTE5LTBhZTEtNDdjNS05NzkwLTExMTA1ODM0M2Q3N1wvZGZidmQwaC0wNTYwZjAxYS0zYmJkLTRhYzEtODdhZi00M2U0YjhiNGMxNzAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.eF7S6eybLXChck9BfuMdW-hyB3sGYqCL2FD4hcELcAs';
  @HostListener('error') handleError(): void {
    const elNativo = this.elHost.nativeElement;
    console.log('Esta imagen da error ->', this.elHost);
    elNativo.src = this.customImg;
  }
  constructor(private elHost: ElementRef) {}
}
