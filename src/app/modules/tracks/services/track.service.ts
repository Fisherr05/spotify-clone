import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, mergeMap, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrackModel } from '@core/models/tracks.model';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  private skypById(
    listTracks: TrackModel[],
    id: number
  ): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp: TrackModel[] = listTracks.filter((a) => a._id !== id);
      resolve(listTmp);
    });
  }

  getAllTracks$(): Observable<any> {
    return this.http
      .get(`${this.URL}/tracks`)
      .pipe(map(({ data }: any) => data));
  }

  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`).pipe(
      mergeMap(({ data }: any) => this.skypById(data, 2)),
      // tap((data) => console.log('🎶🎶🎶', data)), //para mostrar que esta pasando
      catchError((err) => {
        console.log('Algo salio mal', err);
        return of([]);
      })
      // map(({ data }: any) => data.reverse()),
      // map((dataRevertida) =>
      //   dataRevertida.filter((track: TrackModel) => track._id !== 1)
      // )
    );
  }
}
