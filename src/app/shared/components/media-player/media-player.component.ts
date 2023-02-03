import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from './../../services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnDestroy {
  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    album: 'NPI',
    name: 'BEBE',
    url: 'http://loclahost/track.mp3',
    _id: 1,
  };

  listObservers$: Subscription[] = [];

  constructor(private multimediaService: MultimediaService) {}

  ngOnInit(): void {
    const oberver1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo cancion.....', response);
      }
    );

    this.listObservers$ = [oberver1$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach((u) => u.unsubscribe());
    console.log('Se destruye todo');
  }
}
