import React from "react";
import "./App.css";
import "./Video";
import Video from "./Video";

let randomNumber = Math.floor(Math.random() * 1000 + 1);
let randomNumber2 = Math.floor(Math.random() * 1000 + 1);
let randomNumber3 = Math.floor(Math.random() * 1000 + 1);

function App() {
	return (
		<div className="app">
			<div className="app__videos">
				<Video
					url="https://v16m.tiktokcdn.com/1b42f3fee8c803dd1e22365748238af3/5f5039fb/video/tos/useast2a/tos-useast2a-pve-0068/99f680774f1043e08d0bfc4b6561c64e/?a=1233&br=3824&bt=1912&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200902183354010190188160311E5700&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzlzPHZuaGg8dzMzOTczM0ApZDtnOjQ7Mzw5N2ZkZTVpM2djbmZkZzYzMDJfLS0wMTZzczUzYzMzYGJiMmExMWM2MzA6Yw%3D%3D&vl=&vr="
					channel="MattCalvert_"
					description="This is a fire app"
					song="99 problems but REACT aint one"
					likes={randomNumber}
					messages={456}
					shares={789}
				/>
				<Video
					url="https://v16m.tiktokcdn.com/4f95d87cf36de64dc12c5170a194a67c/5f5172ee/video/tos/useast2a/tos-useast2a-ve-0068c004/4bfb6a986394441c9bb1c52b14831855/?a=1233&br=4546&bt=2273&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009031649090101890370225D14EE21&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3lua3NsO2p0djMzNzczM0ApPDQzPGkzaTw6Nzg4Ozw7M2dnaG8zZXBfM25fLS1eMTZzczI2MV8xMjA1MDEvYWEvNWA6Yw%3D%3D&vl=&vr="
					channel="chrissyyb07"
					description="Usher got in the feels in a storm. #fyp #foryou"
					song="Burn - Usher"
					likes={randomNumber2 * 2}
					messages={randomNumber2 * 2}
					shares={randomNumber2 * 2}
				/>
				<Video
					url="https://v16m.tiktokcdn.com/b31453cc3f65514f124b9f07edfd1db8/5f517317/video/tos/useast2a/tos-useast2a-ve-0068c001/c43e36f87ae14798a8bb0501a0c12c20/?a=1233&br=810&bt=405&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009031649510101890710713715291C&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2lkN25xOmdndjMzOTczM0ApZDxlM2VnNjwzN2Y3OTRnOmczb2RpMW5jcm9fLS0wMTZzc14wYjMtMDQuNl42YjYxNjA6Yw%3D%3D&vl=&vr="
					channel="usopen"
					description="been doing for the last 24 hours, send help #tennis #usopen"
					song="pause and unpause - jakefrom__statefarm"
					likes={randomNumber3 * 2}
					messages={randomNumber3 * 2}
					shares={randomNumber3 * 2}
				/>
			</div>
			{/* App container */}
			{/* videos */}
			{/* <Video /> */}
			{/* <Video /> */}
			{/* <Video /> */}
			{/* <Video /> */}
			{/* <Video /> */}
			{/* <Video /> */}
		</div>
	);
}

export default App;
