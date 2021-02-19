/* reset uncheck functios */
document.body.onload = resetAll;
/* document.getElementById("radio1").onclick = trasmission; */
function resetAll() {
	resetMachines();
	resetEnergySources();
}

function uncheckMachines() {
	document.getElementById("radio7").checked = false;
	document.getElementById("radio8").checked = false;
	document.getElementById("radio9").checked = false;
	document.getElementById("radio10").checked = false;
	document.getElementById("radio11").checked = false;
	document.getElementById("radio12").checked = false;
	document.getElementById("radio13").checked = false;
}
function resetMachines() {
	document.getElementById("radio7").disabled = true;
	document.getElementById("radio8").disabled = true;
	document.getElementById("radio9").disabled = true;
	document.getElementById("radio10").disabled = true;
	document.getElementById("radio11").disabled = true;
	document.getElementById("radio12").disabled = true;
	document.getElementById("radio13").disabled = true;
}
function resetEnergySources() {
	document.getElementById("radio3").checked = false;
	document.getElementById("radio4").checked = false;
	document.getElementById("radio5").checked = false;
	document.getElementById("radio6").checked = false;
}
/* reset uncheck functios end*/
/* new code  */
function transmission() {
	uncheckMachines();
	resetMachines();
	resetEnergySources();
	let checkerManual = document.getElementById("radio1").checked;

	if (checkerManual) {
		document.getElementById("radio7").disabled = false;
		document.getElementById("radio8").disabled = false;
		document.getElementById("radio9").disabled = false;
		document.getElementById("radio11").disabled = false;
		document.getElementById("radio12").disabled = false;
	} else {
		document.getElementById("radio7").disabled = false;
		document.getElementById("radio10").disabled = false;
		document.getElementById("radio13").disabled = false;
	}
}
/* end new code */
function energyElectric() {
	resetMachines();
	let trasmission = document.getElementById("radio1").checked;
	if (trasmission == true) {
		document.getElementById("radio7").disabled = false;
		document.getElementById("radio8").disabled = false;
		document.getElementById("radio9").disabled = true;
	}
}
function energyHybrid() {
	resetMachines();
	let trasmission = document.getElementById("radio1").checked;
	if (trasmission == true) {
		document.getElementById("radio8").disabled = false;
		document.getElementById("radio9").disabled = false;
	} else {
		document.getElementById("radio10").disabled = false;
	}
}
function energyGas() {
	resetMachines();
	let trasmission = document.getElementById("radio1").checked;
	if (trasmission == true) {
		document.getElementById("radio7").disabled = false;
		document.getElementById("radio8").disabled = false;
		document.getElementById("radio9").disabled = false;
		document.getElementById("radio12").disabled = false;
	} else {
		document.getElementById("radio10").disabled = false;
	}
}
function energyDiesel() {
	resetMachines();
	let trasmission = document.getElementById("radio1").checked;
	if (trasmission == true) {
		document.getElementById("radio8").disabled = false;
		document.getElementById("radio9").disabled = false;
		document.getElementById("radio11").disabled = false;
		document.getElementById("radio12").disabled = false;
	} else {
		document.getElementById("radio10").disabled = false;
		document.getElementById("radio13").disabled = false;
	}
}
function checkOut() {
	var dateDays = dateDeff();
	if (dateDays > 0) {
		document.getElementById("res").innerHTML =
			"for " +
			dateDays +
			" day the total : " +
			machineEnergy().toFixed(2) +
			"€";
	} else {
		alert("the departure date can't be let then the termination date");
		document.getElementById("res").innerHTML =
			"the date you provided is invalide";
	}
}
function selectedTransmission() {
	if (document.getElementById("radio1").checked) {
		return "manual";
	} else {
		return "automatic";
	}
}
function selectedMachine() {
	let machines = new Array(
		"motocyle",
		"cityVehicle",
		"compact",
		"sedan",
		"Utility",
		"ConstructionEngine",
		"truck"
	);
	let i = 0;
	for (i = 7; i <= 13; i++) {
		if (document.getElementById("radio" + i).checked) {
			return machines[i - 7];
		}
	}
}

function selectedEnergySources() {
	let energy = new Array("electric", "hybrid", "gas", "diesel");
	let i = 0;
	for (i = 3; i <= 6; i++) {
		if (document.getElementById("radio" + i).checked) {
			return energy[i - 3];
		}
	}
}
function dateDeff() {
	var dapartureDate = document.getElementById("departureDate").value;
	var terminationDate = document.getElementById("terminationDate").value;
	diffrenceD = new Date(terminationDate) - new Date(dapartureDate);
	realdeal = diffrenceD / (1000 * 60 * 60 * 24);
	return realdeal;
}
function machineEnergy() {
	var transmission = selectedTransmission();
	var machine = selectedMachine();
	var energy = selectedEnergySources();
	/* var numberDays = document.getElementById("daysN").value; */
	var numberDays = dateDeff();
	var energyFee = 0;
	var price = 0;
	var result = 0;

	switch (machine) {
		case "motocyle":
			price = 10;
			if (energy == "electric") {
				energyFee = 5;
			} else if (energy == "gas") {
				energyFee = 14;
			}
			break;

		case "cityVehicle":
			price = 12;
			if (energy == "electric") {
				energyFee = 5;
			} else if (energy == "hybrid") {
				energyFee = 9;
			} else if (energy == "gas") {
				energyFee = 14;
			} else if (energy == "diesel") {
				energyFee = 21;
			}
			break;

		case "compact":
			price = 14;
			if (energy == "hybrid") {
				energyFee = 9;
			} else if (energy == "gas") {
				energyFee = 14;
			} else if (energy == "diesel") {
				energyFee = 21;
			}
			break;

		case "sedan":
			price = 20;
			if (energy == "hybrid") {
				energyFee = 9;
			} else if (energy == "gas") {
				energyFee = 14;
			} else if (energy == "diesel") {
				energyFee = 21;
			}
			break;

		case "Utility":
			price = 16;
			if (energy == "diesel") {
				energyFee = 21;
			}
			break;

		case "ConstructionEngine":
			price = 900;
			if (energy == "gas") {
				energyFee = 14;
			} else if (energy == "diesel") {
				energyFee = 21;
			}
			break;

		case "truck":
			price = 12;
			if (energy == "diesel") {
				energyFee = 250;
			}
			break;
	}

	result = price;

	if (transmission == "automatic") {
		result += (price * 19) / 100;
	}
	result += (price * energyFee) / 100;
	result *= numberDays;

	return result;
}
