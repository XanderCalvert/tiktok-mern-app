import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, messages, shares }) {
	const [playing, setPlaying] = useState(false);
	const videoRef = useRef(null);

	const handleVideoPress = () => {
		if (playing) {
			videoRef.current.pause();
			setPlaying(false);
		} else {
			videoRef.current.play();
			setPlaying(true);
		}
		// if video playing stop

		// otherwise start it
	};

	return (
		<div className="video">
			<video
				onClick={handleVideoPress}
				className="video__player"
				loop
				ref={videoRef}
				src={url}
			></video>
			{/* VideoFooter */}
			<VideoFooter channel={channel} description={description} song={song} />
			{/* VideoSidebar */}
			<VideoSidebar likes={likes} shares={shares} messages={messages} />
		</div>
	);
}

export default Video;

// https://v16m.tiktokcdn.com/1b42f3fee8c803dd1e22365748238af3/5f5039fb/video/tos/useast2a/tos-useast2a-pve-0068/99f680774f1043e08d0bfc4b6561c64e/?a=1233&br=3824&bt=1912&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200902183354010190188160311E5700&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzlzPHZuaGg8dzMzOTczM0ApZDtnOjQ7Mzw5N2ZkZTVpM2djbmZkZzYzMDJfLS0wMTZzczUzYzMzYGJiMmExMWM2MzA6Yw%3D%3D&vl=&vr=
