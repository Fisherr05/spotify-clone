import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from './../../services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  listObservers$: Subscription[] = [];
  state: string = 'paused';

  constructor(public multimediaService: MultimediaService) {}

  ngOnInit(): void {
    const observer1$ = this.multimediaService.playerStatus$.subscribe(
      (status) => (this.state = status)
    );
    this.listObservers$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach((u) => u.unsubscribe());
    console.log('Se destruye todo');
  }

  handlePosition(event: MouseEvent): void {
    const { clientX } = event;
    const elNative: HTMLHtmlElement = this.progressBar.nativeElement;
    const { x, width } = elNative.getBoundingClientRect();
    const clickX = clientX - x;
    console.log(`Valores: `, clickX, width);
    const precentageFromX = (clickX * 100) / width;
    this.multimediaService.seekAudio(precentageFromX);
  }
}
