
Bookingstrip = function(o)
{
	let time = new Date();
	let start = time.getDay();
	let stop = 100;
	
	let hTable = document.createElement("table");
	hTable.className = "stripHt";
	o.container.appendChild(hTable);
	
	let hRow = document.createElement("tr");

	let td = document.createElement("td");
	td.style.width = "10px";
	td.style.height = "10px";
	td.style.textAlign = "center";
	td.innerHTML = "Room&nbsp;Type";
	hRow.appendChild(td);


	for(let i = start; i < stop; i++)
	{
		let td = document.createElement("td");
		td.style.width = "10px";
		td.style.height = "10px";
		td.style.textAlign = "center";
		td.innerHTML = i;
		
		hRow.appendChild(td);
	}
	
	hTable.appendChild(hRow);
	
	this.Addroom = function(o)
	{
		
	}
};




Bookingstrip2 = function(o)
{
	let time = new Date();
	let start = time.getDay();
	let stop = 100;

	let hTable = document.createElement("table");
	hTable.className = "stripHt";
	o.container.appendChild(hTable);

	let hRow = document.createElement("tr");

	let td = document.createElement("td");
	td.style.width = "10px";
	td.style.height = "10px";
	td.style.textAlign = "center";
	td.innerHTML = "Room&nbsp;Type";
	hRow.appendChild(td);


	for(let i = start; i < stop; i++)
	{
		let td = document.createElement("td");
		td.style.width = "10px";
		td.style.height = "10px";
		td.style.textAlign = "center";
		td.innerHTML = i;

		hRow.appendChild(td);
	}

	hTable.appendChild(hRow);

	this.Addroom = function(o)
	{

	}
};