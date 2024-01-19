import React from "react";

//create your first component
const Home = (props) => {
	const digitsArray = props.count.toString().split('');

	return (
		<div className="container text-center mt-5 bg-black">
			<div className="row itemsContainer">
				<div className="col reloj"><i className="fa-regular fa-hourglass-half"></i></div>
				<div className="col numbers">
					<div className="row">
						{digitsArray.map((digit, index) => (
							<div key={index} className="col">
								<div className="digitContainer">{digit}</div>
							</div>
						))}

					</div>

				</div>
			</div>

		</div>
	);
};

export default Home;
