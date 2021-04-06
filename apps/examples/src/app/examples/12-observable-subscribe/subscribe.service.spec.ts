import { Playlist, SubscribeService, Video } from './subscribe.service';

describe('SubscribeService', () => {
  const firstVideo = { title: 'Video 01', duration: 1000 };
  const secondVideo = { title: 'Video 02', duration: 3000 };
  const thirdVideo = { title: 'Video 03', duration: 5000 };
  const fourthVideo = { title: 'Video 04', duration: 8000 };

  let service: SubscribeService;
  beforeEach(() => (service = new SubscribeService()));

  it('should properly filter a playlist based on duration', (done) => {
    const duration = 3000;
    const playlist: Playlist = {
      videos: [firstVideo, secondVideo, thirdVideo, fourthVideo],
    };
    const filteredVideos = [secondVideo, thirdVideo, fourthVideo];

    service
      .filterByDuration(playlist, duration)
      .subscribe((videos: Video[]) => {
        expect(videos).toEqual(filteredVideos);
        done();
      });
  });

  it('should properly filter a monitored playlist based on duration', (done) => {
    const duration = 3000;
    const playlist: Playlist = {
      videos: [firstVideo, secondVideo, thirdVideo, fourthVideo],
    };

    service.monitorByDuration(playlist, duration).subscribe({
      next: (video: Video) => {
        expect(video.duration).toBeGreaterThanOrEqual(duration);
      },
      complete: () => done(),
    });
  });
});
