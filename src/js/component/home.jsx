import React from "react";

//create your first component
const Home = (props) => {
	const digitsArray = props.count.toString().split('');

	return (
		<div className="container text-center">
			<div className="row">
				<div className="col">RELOJ:</div>
				<div className="col">
					{digitsArray.map((digit, index) => (
						<div key={index} className="row">
							{digit}
						</div>
					))}
				</div>
			</div>

		</div>
	);
};

export default Home;
