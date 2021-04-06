import { cold } from '@nrwl/angular/testing';
import { MarblesService, Playlist } from './marbles.service';

describe('MarblesService', () => {
  const firstVideo  = { title: 'Video 01', duration: 1000 };
  const secondVideo = { title: 'Video 02', duration: 3000 };
  const thirdVideo  = { title: 'Video 03', duration: 5000 };
  const fourthVideo = { title: 'Video 04', duration: 8000 };

  let service: MarblesService;
  beforeEach(() => (service = new MarblesService()));

  it('should properly filter a monitored playlist based on duration', () => {
    const duration = 3000;
    const playlist: Playlist = {
      videos: [firstVideo, secondVideo, thirdVideo, fourthVideo]
    };
    const filteredVideos = [secondVideo, thirdVideo, fourthVideo];
    const response = service.filterByDuration(playlist, duration);
    const result = cold('(a|)', { a: filteredVideos });
    expect(response).toBeObservable(result);
  });

  it('should properly filter a monitored playlist based on duration', () => {
    const duration = 3000;
    const playlist: Playlist = {
      videos: [firstVideo, secondVideo, thirdVideo, fourthVideo]
    };
    const response = service.monitorByDuration(playlist, duration);
    const result = cold('(abc|)', { a: secondVideo, b: thirdVideo, c: fourthVideo });
    expect(response).toBeObservable(result);
  });
});
