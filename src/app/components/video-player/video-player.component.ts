import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy, Input } from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-video-player',
  standalone: true,
  templateUrl: './video-player.component.html',
})
export class VideoPlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('videoPlayer', { static: false }) videoElement!: ElementRef;
  @Input() src!: string; // Entrada para o caminho do vídeo
  player!: ReturnType<typeof videojs>;

  ngAfterViewInit() {
    // Inicializa o player quando o componente for renderizado
    this.player = videojs(this.videoElement.nativeElement, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      fluid: true,
    });

    // Atualiza o src do vídeo
    if (this.src) {
      const videoSource = this.videoElement.nativeElement.querySelector('source');
      videoSource.src = this.src;
      this.player.load();  // Recarrega o player com o novo vídeo
    }
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose(); // Libera memória ao destruir o componente
    }
  }
}
