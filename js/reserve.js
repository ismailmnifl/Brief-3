/* reset uncheck functios */
document.body.onload = resetAll;
/* document.getElementById("radio1").onclick = trasmission; */
function resetAll() {
	resetMachines();
	resetEnergySources();
}

function uncheckMachines() {

	 var choices = document.querySelectorAll('.choices input[type="radio"]');
	var i = 0;
	for(i = 0 ; i < choices.length;i++)
	{
		choices[i].checked = false;
	}
	
}
function resetMachines() {
	
	var choices = document.querySelectorAll('.choices input[type="radio"]');
	var i = 0;
	for(i = 0 ; i < choices.length;i++)
	{
		choices[i].disabled = true;
	}
}
function resetEnergySources() {

	var choices = document.querySelectorAll('.energy input[type="radio"]');
	var i = 0;
	for(i = 0 ; i < choices.length;i++)
	{
		choices[i].checked = false;
	}
}
/* reset uncheck functios end*/
/* new code  */
function transmission() {
	uncheckMachines();
	resetMachines();
	resetEnergySources();
	let checkerManual = document.getElementById("radioManual").checked;

	if (checkerManual) {
		document.getElementById("radioMotosycle").disabled = false;
		document.getElementById("radiocityVehicle").disabled = false;
		document.getElementById("radioCompact").disabled = false;
		document.getElementById("radioUtility").disabled = false;
		document.getElementById("radioConstruction").disabled = false;
	} else {
		document.getElementById("radioMotosycle").disabled = false;
		document.getElementById("radioSedan").disabled = false;
		document.getElementById("radioTruck").disabled = false;
	}
}
/* end new code */
function energyElectric() {
	resetMachines();
	let trasmission = document.getElementById("radioManual").checked;
	if (trasmission == true) {
		document.getElementById("radioMotosycle").disabled = false;
		document.getElementById("radiocityVehicle").disabled = false;
	}else{
		document.getElementById("radioMotosycle").disabled = false;
	}
}
function energyHybrid() {
	resetMachines();
	let trasmission = document.getElementById("radioManual").checked;
	if (trasmission == true) {
		document.getElementById("radiocityVehicle").disabled = false;
		document.getElementById("radioCompact").disabled = false;
	} else {
		document.getElementById("radioSedan").disabled = false;
	}
}
function energyGas() {
	resetMachines();
	let trasmission = document.getElementById("radioManual").checked;
	if (trasmission == true) {
		document.getElementById("radioMotosycle").disabled = false;
		document.getElementById("radiocityVehicle").disabled = false;
		document.getElementById("radioCompact").disabled = false;
		document.getElementById("radioConstruction").disabled = false;
	} else {
		document.getElementById("radioSedan").disabled = false;
	}
}
function energyDiesel() {
	resetMachines();
	let trasmission = document.getElementById("radioManual").checked;
	if (trasmission == true) {
		document.getElementById("radiocityVehicle").disabled = false;
		document.getElementById("radioCompact").disabled = false;
		document.getElementById("radioUtility").disabled = false;
		document.getElementById("radioConstruction").disabled = false;
	} else {
		document.getElementById("radioSedan").disabled = false;
		document.getElementById("radioTruck").disabled = false;
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
	if (document.getElementById("radioManual").checked) {
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
	var machineCchoices = document.querySelectorAll('.choices input[type="radio"]');
	for (i =0 ; i < machineCchoices.length; i++) {
		if(machineCchoices[i].checked)
		{
			return machines[i];
		}
	}

}

function selectedEnergySources() {
	let energy = new Array("electric", "hybrid", "gas", "diesel");
	let i = 0;
	var energyChoice = document.querySelectorAll('.energy input[type="radio"]');
	for (i =0 ; i < energyChoice.length; i++) {
		if(energyChoice[i].checked)
		{
			return energy[i];
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
