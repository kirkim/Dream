import { BaseComponent } from '../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
  			<div class="video__payer"><iframe class="video__iframe"></iframe></div>
  			<h3 class="video__title"></h3>
		</section>`);

    const iframe = this.element.querySelector(
      '.video__iframe'
    )! as HTMLIFrameElement;
    iframe.src = this.convertToEmbeddedURL(url);

    const titleElement = this.element.querySelector(
      '.video__title'
    )! as HTMLHeadElement;
    titleElement.textContent = title;
  }

  // input
  // https://www.youtube.com/watch?v=KVsRHth92Jw
  // https://youtu.be/KVsRHth92Jw
  // output
  // https://www.youtube.com/embed/KVsRHth92Jw
  // 정규표현식 Regex
  private convertToEmbeddedURL(url: string): string {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);

    const videoId = match ? match[1] || match[2] : undefined;
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}
// <iframe
//   width="940"
//   height="529"
//   src="https://www.youtube.com/embed/KVsRHth92Jw"
//   title="YouTube video player"
//   frameborder="0"
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//   allowfullscreen
// ></iframe>;
