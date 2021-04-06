import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface Playlist {
  videos: Video[];
}

export interface Video {
  title: string;
  duration: number;
}

@Injectable()
export class MarblesService {
  filterByDuration(playlist: Playlist, duration) {
    return of(playlist.videos).pipe(
      map((videos: Video[]) =>
        videos.filter((video) => video.duration >= duration)
      )
    );
  }

  monitorByDuration(playlist: Playlist, duration) {
    return from(playlist.videos).pipe(
      filter((video: Video) => video.duration >= duration)
    );
  }
}
