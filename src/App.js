import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";

import "./App.css";

function App() {
	const webcamRef = useRef(null);
	const canvasRef = useRef(null);

	// Loading facemesh
	const runFacemesh = async () => {
		const net = await facemesh.load({
			inputResolution: { width: 640, height: 480 },
			scale: 0.8,
		});
	};

	return (
		<div className="App">
			<header className="App-header">
				<Webcam
					ref={webcamRef}
					style={{
						position: "absolute",
						marginLeft: "auto",
						marginRight: "auto",
						left: 0,
						right: 0,
						textAlign: "centr",
						zIndex: 9,
						width: 640,
						height: 480,
					}}
				/>
				<canvas
					ref={canvasRef}
					style={{
						position: "absolute",
						marginLeft: "auto",
						marginRight: "auto",
						left: 0,
						right: 0,
						textAlign: "centr",
						zIndex: 9,
						width: 640,
						height: 480,
					}}
				/>
			</header>
		</div>
	);
}

export default App;
