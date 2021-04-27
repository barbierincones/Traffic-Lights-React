import React, { useState } from "react";

export function Home() {
	const [selected, setSelected] = useState("");

	const changeLight = color => {
		setSelected(color);
	};

	return (
		<div className="d-flex justify-content-center">
			<div className="d-flex flex-column justify-content-around main align-items-center">
				<div className="top-base"></div>
				<div className="traffic-lights d-flex flex-column justify-content-around align-items-center">
					<div
						className={`red${
							selected === "red" ? " selected" : ""
						}`}
						onClick={e => changeLight(e.target.className)}></div>
					<div
						className={`yellow${
							selected === "yellow" ? " selected" : ""
						}`}
						onClick={e => changeLight(e.target.className)}></div>
					<div
						className={`green${
							selected === "green" ? " selected" : ""
						}`}
						onClick={e => changeLight(e.target.className)}></div>
				</div>
				<div className="bottom-base"></div>
				<div className="pillar"></div>
				<div className="base"></div>
			</div>
		</div>
	);
}
