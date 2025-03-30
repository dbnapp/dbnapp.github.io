import React, { useEffect, useRef } from "react";
import { useYoutubeApi } from "./hooks";

interface VideoProps {
  videoId: string;
  onReady: (player: YT.Player) => void;
}

interface PlaylistProps {
  playlistId: string;
  onReady: (player: YT.Player) => void;
  loop?: boolean;
  shuffle?: boolean;
}

const isPlaylistProps = (
  props: VideoProps | PlaylistProps
): props is PlaylistProps => {
  return (props as PlaylistProps).playlistId !== undefined;
};

export const YoutubePlayer = (props: VideoProps | PlaylistProps) => {
  const { onReady } = props;
  const YT = useYoutubeApi();
  const player = useRef<YT.Player>(null);
  const id = isPlaylistProps(props) ? props.playlistId : props.videoId;

  useEffect(() => {
    if (!YT) return;
    if (player.current) return;
    console.log(`new player ${id}`);
    player.current = new YT.Player(`yt-${id}`, {
      events: {
        onReady: (event) => {
          onReady(event.target);
          if (isPlaylistProps(props) && props.shuffle) {
            event.target.setShuffle(true);
          }
        },
      },
    });
  }, [YT]);

  if (isPlaylistProps(props)) {
    const { loop, shuffle } = props;
    return (
      <iframe
        id={`yt-${id}`}
        src={`https://www.youtube.com/embed/videoseries?list=${id}&enablejsapi=1&autoplay=1&mute=1${
          loop ? "&loop=1" : ""
        }${shuffle ? "&shuffle=1" : ""}`}
        title="YouTube video player"
        allow="autoplay"
      ></iframe>
    );
  }

  return (
    <iframe
      id={`yt-${id}`}
      src={`https://www.youtube.com/embed/${id}?enablejsapi=1&autoplay=1&mute=1`}
      allow="autoplay"
      className="hidden"
    ></iframe>
  );
};
