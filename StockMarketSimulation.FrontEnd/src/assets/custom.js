function analystPrediction() {

var config = {
	predictionSteps : 1,
	step : 1,
	serie : [
		1,2,1,2
	]  
}
var prediction = brain_predict.predict(config) ;
console.log("Prediction Value\n" + prediction.prediction + "\n");
}

analystPrediction();