
class Bookingstrip
{
	constructor(element, startdate, span='MONTH', style='PILLS', activeDate=null)
	{
		let t = new Date();

		this.container = element;
		this.selections = [];
		this.spanSelected = null;
		this.selection = null;
		this.activeDate = activeDate === null ? new Date(t.getFullYear(), t.getMonth(), t.getDate()) : activeDate;

		this.span = span;
		this.style = style;

		let strip = document.createElement("div");
		strip.className = "w3-row";

		let colum1 = document.createElement("div");
		colum1.className = "w3-col l4 m4 s12";

		let colum2 = document.createElement("div");
		colum2.className = "w3-col l4 m4 s12";

		let colum3 = document.createElement("div");
		colum3.className = "w3-col l4 m4 s12";

		strip.appendChild(colum1);
		strip.appendChild(colum2);
		strip.appendChild(colum3);


		let dateSTatmp = 0;

		let stamp = typeof (startdate) == "number" ? startdate : new Date(startdate).getTime();

		this.startDate = stamp;


		let start = new Date(stamp);
		let stop = new Date(stamp + ((((60 * 60) * 24) * 30) * 1000));

		let descCon = document.createElement("div");
		descCon.id = "";
		descCon.style.textAlign = "left";
		descCon.className = "w3-col l5 m5 s5 calendar-box";
		descCon.innerHTML = "<label>Date span</label><br/>"+
			"<label class='calendar-label'>"+
			Bookingstrip.intToShortMonth(start.getMonth())+" "+start.getDate()+" - " +
			Bookingstrip.intToShortMonth(stop.getMonth())+" "+stop.getDate()+" / "+start.getFullYear()+"</label><br/>";
		colum1.appendChild(descCon);


		for(let i = 0; i < 7; i++)
		{
			let date = new Date(stamp);

			let box = document.createElement("div");
			box.id = "date-strip-"+dateSTatmp;
			box.className = "w3-col l1 m1 s1 calendar-box";

			box.innerHTML = "<label class='calendar-label'>"+date.getDate()+"</label><br/>" +
				"<label class='calendar-label'>"+Bookingstrip.intToShortWeekDay(date.getDay())+"</label>";
			colum1.appendChild(box);

			dateSTatmp++;
			stamp += (((60 * 60) * 24) * 1000);
		}
		for(let i = 0; i < 12; i++)
		{
			let date = new Date(stamp);

			let box = document.createElement("div");
			box.id = "date-strip-"+dateSTatmp;
			box.className = "w3-col l1 m1 s1 calendar-box";

			box.innerHTML = "<label class='calendar-label'>"+date.getDate()+"</label><br/>" +
				"<label class='calendar-label'>"+Bookingstrip.intToShortWeekDay(date.getDay())+"</label>";
			colum2.appendChild(box);

			dateSTatmp++;
			stamp += (((60 * 60) * 24) * 1000);
		}
		for(let i = 0; i < 12; i++)
		{
			let date = new Date(stamp);

			let box = document.createElement("div");
			box.id = "date-strip-"+dateSTatmp;
			box.className = "w3-col l1 m1 s1 calendar-box";

			box.innerHTML = "<label class='calendar-label'>"+date.getDate()+"</label><br/>" +
				"<label class='calendar-label'>"+Bookingstrip.intToShortWeekDay(date.getDay())+"</label>";
			colum3.appendChild(box);

			dateSTatmp++;
			stamp += (((60 * 60) * 24) * 1000);

			if(i === 11)
			{
				box.style.borderRight = "1px solid lightgray";
			}
		}
		element.appendChild(strip);
	}

	addAvailbilityStrip()
	{
		let element = this.container;

		let strip = document.createElement("div");
		strip.className = "w3-row";

		let colum1 = document.createElement("div");
		colum1.className = "w3-col l4 m4 s12";

		let colum2 = document.createElement("div");
		colum2.className = "w3-col l4 m4 s12";

		let colum3 = document.createElement("div");
		colum3.className = "w3-col l4 m4 s12";

		strip.appendChild(colum1);
		strip.appendChild(colum2);
		strip.appendChild(colum3);


		let dateSTatmp = 0;

		let stamp = Date.now();


		let start = new Date(stamp);
		let stop = new Date(stamp + ((((60 * 60) * 24) * 30) * 1000));

		let descCon = document.createElement("div");
		descCon.style.fontFamily = "Nunito";
		descCon.id = "";
		descCon.style.textAlign = "left";
		descCon.style.borderTop = "none";
		descCon.className = "w3-col l5 m5 s5 calendar-box";
		descCon.innerHTML = "<label>Available rooms</label>";
		colum1.appendChild(descCon);


		for(let i = 0; i < 7; i++)
		{
			//let date = new Date(stamp);

			let box = document.createElement("div");
			box.id = "availability-strip-"+dateSTatmp;
			box.style.borderTop = "none";
			box.className = "w3-col l1 m1 s1 calendar-box";

			box.innerHTML = "<label class='calendar-label'>0</label>";
			colum1.appendChild(box);

			dateSTatmp++;
			//stamp += (((60 * 60) * 24) * 1000);
		}
		for(let i = 0; i < 12; i++)
		{
			//let date = new Date(stamp);

			let box = document.createElement("div");
			box.id = "availability-strip-"+dateSTatmp;
			box.style.borderTop = "none";
			box.className = "w3-col l1 m1 s1 calendar-box";

			box.innerHTML = "<label class='calendar-label'>0</label>";
			colum2.appendChild(box);

			dateSTatmp++;
			//stamp += (((60 * 60) * 24) * 1000);
		}
		for(let i = 0; i < 12; i++)
		{
			let date = new Date(stamp);

			let box = document.createElement("div");
			box.id = "availability-strip-"+dateSTatmp;
			box.style.borderTop = "none";
			box.className = "w3-col l1 m1 s1 calendar-box";

			box.innerHTML = "<label class='calendar-label'>0</label>";
			colum3.appendChild(box);

			dateSTatmp++;
			stamp += (((60 * 60) * 24) * 1000);

			if(i === 11)
			{
				box.style.borderRight = "1px solid lightgray";
			}
		}
		element.appendChild(strip);
	}

	addRoomCategory(name, rooms=[])
	{
		let element = this.container;

		let date = this.startDate;

		let font = "Nunito";

		let nameStrip = document.createElement("div");
		nameStrip.style.marginTop = "0px";
		nameStrip.className = "w3-row";

		let Namecolum = document.createElement("div");
		Namecolum.className = "w3-col l4 m4 s12";

		nameStrip.appendChild(Namecolum);

		let NdescCon = document.createElement("div");
		NdescCon.id = "";
		NdescCon.style.textAlign = "left";
		NdescCon.style.borderTop = "none";
		NdescCon.style.fontFamily = font;
		NdescCon.className = "w3-col l5 m5 s5 pad-1";
		NdescCon.innerHTML = "<label style='font-weight: bold;'><i class='caret down icon'></i> "+name+"</label>";
		Namecolum.appendChild(NdescCon);

		element.appendChild(nameStrip);

		//------------------------------------------------------------------------------------------



		for(let j = 0; j < rooms.length; j++)
		{
			let strip = document.createElement("div");
			strip.id = "category-"+name+"-"+rooms[j]+"-strip";
			strip.style.position = "relative";
			strip.className = "w3-row";

			let colum1 = document.createElement("div");
			colum1.className = "w3-col l4 m4 s12";

			let colum2 = document.createElement("div");
			colum2.className = "w3-col l4 m4 s12";

			let colum3 = document.createElement("div");
			colum3.className = "w3-col l4 m4 s12";

			strip.appendChild(colum1);
			strip.appendChild(colum2);
			strip.appendChild(colum3);


			let dateSTatmp = 0;

			let stamp = Date.now();


			let start = new Date(stamp);
			let stop = new Date(stamp + ((((60 * 60) * 24) * 30) * 1000));

			let descCon = document.createElement("div");
			descCon.id = "";
			descCon.style.textAlign = "left";
			if(j > 0)
			{
				descCon.style.borderTop = "none";
			}
			descCon.className = "w3-col l5 m5 s5 calendar-room-box";
			descCon.innerHTML = "<label> "+rooms[j]+"</label>";
			descCon.style.fontFamily = font;
			colum1.appendChild(descCon);


			let date = stamp;

			for(let i = 0; i < 7; i++)
			{
				if(i === 0)
				{
					stamp = this.startDate;
				}

				let box = document.createElement("div");
				box.id = "availability-strip-"+dateSTatmp;
				box.setAttribute("category", name);
				box.setAttribute("room", rooms[j]);
				box.setAttribute("date", stamp);
				box.setAttribute("find-string", name+"-"+rooms[j]+"-"+stamp);
				box.className = "w3-col l1 m1 s1 calendar-room-box r-"+rooms[j]+"-box"

				if(stamp >= this.activeDate.getTime())
				{
					$(box).addClass("room-box");
				}
				else
				{
					$(box).addClass("inactive-room-box");
				}


				if(j > 0)
				{
					box.style.borderTop = "none";
				}
				colum1.appendChild(box);

				dateSTatmp++;
				stamp += (((60 * 60) * 24) * 1000);
			}
			for(let i = 0; i < 12; i++)
			{
				let box = document.createElement("div");
				box.id = "availability-strip-"+dateSTatmp;
				box.setAttribute("category", name);
				box.setAttribute("room", rooms[j]);
				box.setAttribute("date", stamp);
				box.setAttribute("find-string", name+"-"+rooms[j]+"-"+stamp);
				box.className = "w3-col l1 m1 s1 calendar-room-box r-"+rooms[j]+"-box";

				if(stamp >= this.activeDate.getTime())
				{
					$(box).addClass("room-box");
				}
				else
				{
					$(box).addClass("inactive-room-box");
				}

				if(j > 0)
				{
					box.style.borderTop = "none";
				}
				colum2.appendChild(box);

				dateSTatmp++;
				stamp += (((60 * 60) * 24) * 1000);
			}
			for(let i = 0; i < 12; i++)
			{
				let box = document.createElement("div");
				box.id = "availability-strip-"+dateSTatmp;
				box.setAttribute("category", name);
				box.setAttribute("room", rooms[j]);
				box.setAttribute("date", stamp);
				box.setAttribute("find-string", name+"-"+rooms[j]+"-"+stamp);
				box.className = "w3-col l1 m1 s1 calendar-room-box r-"+rooms[j]+"-box";

				if(stamp >= this.activeDate.getTime())
				{
					$(box).addClass("room-box");
				}
				else
				{
					$(box).addClass("inactive-room-box");
				}

				if(j > 0)
				{
					box.style.borderTop = "none";
				}
				colum3.appendChild(box);

				dateSTatmp++;
				stamp += (((60 * 60) * 24) * 1000);

				if(i === 11)
				{
					box.style.borderRight = "1px solid rgb(220,220,220)";
				}
			}
			element.appendChild(strip);
		}
	}

	initSelection()
	{
		this.selection = Selection.create({

			// Class for the selection-area
			class: 'selection-box',

			// All elements in this container can be selected
			selectables: ['.room-box'],

			// The container is also the boundary in this case
			boundaries: ['#'+this.container.id]
		}).on('start', ({inst, selected, oe}) => {

			// Remove class if the user isn't pressing the control key or ⌘ key
			if (!oe.ctrlKey && !oe.metaKey) {

				// Unselect all elements
				for (const el of selected) {
					el.classList.remove('selected-calendar-box');
					inst.removeFromSelection(el);
				}

				// Clear previous selection
				inst.clearSelection();
			}

		}).on('move', ({changed: {removed, added}}) => {

			// Add a custom class to the elements that where selected.
			for (const el of added) {
				el.classList.add('selected-calendar-box');
			}

			// Remove the class from elements that where removed
			// since the last selection
			for (const el of removed) {
				el.classList.remove('selected-calendar-box');
			}

		}).on('stop', ({inst}) => {

			// Remember selection in case the user wants to add smth in the next one
			inst.keepSelection();

			this.dateSelected();
		});
	}

	dateSelected(func)
	{
		let selected = document.getElementsByClassName("selected-calendar-box");

		if(selected.length > 1)
		{
			let roomType = selected[0].getAttribute("room");
			let category = selected[0].getAttribute("category");

			if((roomType === selected[(selected.length - 1)].getAttribute("room")) &&
				(category === selected[(selected.length - 1)].getAttribute("category") ))
			{
				if(typeof(this.onSelection) == "function")
				{
					this.onSelection({category:selected[0].getAttribute("category"),
						room:selected[0].getAttribute("room"),
						checkin:selected[0].getAttribute("date"),
						checkout:selected[(selected.length - 1)].getAttribute("date")});
				}
			}
			else
			{
				if(typeof(this.onSelection) === "function")
				{
					this.onSelection(false);
				}
			}
		}
	}

	static intToShortWeekDay(num)
	{
		let ret = "unknown";

		switch (num)
		{
			case 0:
				ret = "Sun";
				break;
			case 1:
				ret = "Mon";
				break;
			case 2:
				ret = "Tue";
				break;
			case 3:
				ret = "Wed";
				break;
			case 4:
				ret = "Thu";
				break;
			case 5:
				ret = "Fri";
				break;
			case 6:
				ret = "Sat";
				break;
		}
		return ret;
	}

	static intToShortMonth(num)
	{
		let ret = "unknown";

		switch (num)
		{
			case 0:
				ret = "Jan";
				break;
			case 1:
				ret = "Feb";
				break;
			case 2:
				ret = "Mar";
				break;
			case 3:
				ret = "Apr";
				break;
			case 4:
				ret = "May";
				break;
			case 5:
				ret = "Jun";
				break;
			case 6:
				ret = "Jul";
				break;
			case 7:
				ret = "Aug";
				break;
			case 8:
				ret = "Sep";
				break;
			case 9:
				ret = "Oct";
				break;
			case 10:
				ret = "Nov";
				break;
			case 12:
				ret = "Dec";
				break;

		}
		return ret;
	}

	dispose()
	{
		this.selection = null;
	}

	addActivity(category, room, startDate, stopDate, labelText, stripType='', active= null)
	{
		let start = document.querySelector("[find-string="+category+"-"+room+"-"+startDate.getTime()+"]");
		let stop = document.querySelector("[find-string="+category+"-"+room+"-"+stopDate.getTime()+"]");

		let innerText = document.createElement("label");
		innerText.style.color = "white";
		innerText.style.fontFamily = "Nunito";

		let label = document.createElement("div");
		label.style.position = "absolute";
		label.style.zIndex = 10;
		label.className = "calendar-strip";
		label.title = labelText;
		//label.style.backgroundColor = active === true ? "forestgreen" : (active === false ? "#bb2a20" : "rgb(150,150,150)"); //"#4caf50cc"

		let d = new Date();
		let today = new Date(d.getFullYear(), d.getMonth(), d.getDate());

		if(stripType === "lodging")
		{
			if (active === true)
			{
				if (today.getTime() > stopDate.getTime())
				{
					$(label).addClass("red-back");
				}
				else if (today.getTime() === stopDate.getTime())
				{
					$(label).addClass("yellow-back");
				}
				else
				{
					$(label).addClass("blue-back");
				}
			}
			else if (active === false)
			{
				//
				$(label).addClass("yellow-back")
			}
		}
		else if(stripType === "completed")
		{
			$(label).css("background-color", "rgb(50,50,50)");
		}
		else
		{
			$(label).css("background-color", "rgb(180,180,180)");
		}

		label.style.textAlign = "center";
		label.appendChild(innerText);
		label.style.paddingTop = "3px";

		label.setAttribute("room", room);
		label.setAttribute("start", startDate.getTime());
		label.setAttribute("stop", stopDate.getTime());
		label.setAttribute("category", category);


		let curve = "4px";

		let parent = document.getElementById("category-"+category+"-"+room+"-strip");

		let st = document.querySelectorAll(".r-"+room+"-box[category="+category+"]");
		for(let i = 0; i < st.length; i++)
		{
			if((Number(st[i].getAttribute("date")) > startDate.getTime()) && (Number(st[i].getAttribute("date")) < stopDate.getTime()))
			{
				$(st[i]).removeClass("room-box");
			}
		}

		if((start != null) && (stop != null))
		{
			parent.appendChild(label);

			label.style.height = (start.getBoundingClientRect().height - (this.style === 'PILLS' ? 6 : 0)) + "px";
			label.style.left = ((start.getBoundingClientRect().left - parent.getBoundingClientRect().left)) +
				((start.getBoundingClientRect().width / 2) + 1) + "px" ;
			label.style.top = this.style === 'PILLS' ? "3px" : "0px";
			label.style.width = (((stop.getBoundingClientRect().left - (label.getBoundingClientRect().left))
				+ (stop.getBoundingClientRect().width) - ((stop.getBoundingClientRect().width / 2) + 1))) + "px";

			//curve edges
			label.style.borderRadius = this.style === 'PILLS' ? curve : "none";
		}
		else if((start != null) && (stop == null))
		{
			parent.appendChild(label);

			label.style.height = (start.getBoundingClientRect().height - (this.style === 'PILLS' ? 6 : 0)) + "px";
			label.style.left = ((start.getBoundingClientRect().left - parent.getBoundingClientRect().left)) +
				((start.getBoundingClientRect().width / 2) + 1) + "px" ;
			label.style.top = this.style === 'PILLS' ? "3px" : "0px";
			label.style.width = ((parent.getBoundingClientRect().width + parent.getBoundingClientRect().left) - (label.getBoundingClientRect().left))+ "px";

			//curve edges
			label.style.borderRadius = this.style === 'PILLS' ? curve+" 0 0 "+curve : '';
		}
		else if((start == null) && (stop != null))
		{
			parent.appendChild(label);

			let st = document.querySelector(".r-"+room+"-box[category="+category+"]");

			label.style.height = (stop.getBoundingClientRect().height - (this.style === 'PILLS' ?  6 : 0)) + "px";
			label.style.left = ((st.getBoundingClientRect().left - parent.getBoundingClientRect().left)) + "px" ;
			label.style.top = this.style === 'PILLS' ?  "3px" : '0px';
			label.style.width = (((stop.getBoundingClientRect().left - (label.getBoundingClientRect().left))
				+ (stop.getBoundingClientRect().width) - ((stop.getBoundingClientRect().width / 2) + 1))) + "px";

			//curve edges
			label.style.borderRadius = this.style === 'PILLS' ? "0 "+curve+" "+curve+" 0" : '';
		}
		else
		{
			return 'out of scope';
		}

		if((label.getBoundingClientRect().width > 10) && label.getBoundingClientRect().width < 100)
		{
			innerText.innerText = labelText.toString().charAt(0);
		}
		else if((label.getBoundingClientRect().width > 100) && (label.getBoundingClientRect().width < 200))
		{
			innerText.innerText = labelText.split(" ")[0];
		}
		else if(label.getBoundingClientRect().width > 200)
		{
			innerText.innerText = labelText;
		}
		return  true;
	}

	showStripes()
	{
		let stripes = document.getElementsByClassName("calendar-strip");

		for(let i = 0; i < stripes.length; i++)
		{
			let delay = Math.floor(Math.random() * 500);
			setTimeout(function () {
				$(stripes[i]).transition({animation:'fade right in', duration:"900ms"});
			}, delay);
		}
	}

	resizeStrips()
	{
		let stripes = document.getElementsByClassName("calendar-strip");

		for(let i = 0; i < stripes.length; i++)
		{
			let category = stripes[i].getAttribute("category");
			let room = stripes[i].getAttribute("room");
			let startDate = stripes[i].getAttribute("start");
			let stopDate = stripes[i].getAttribute("stop");


			let start = document.querySelector("[find-string="+category+"-"+room+"-"+startDate+"]");
			let stop = document.querySelector("[find-string="+category+"-"+room+"-"+stopDate+"]");


			let parent = document.getElementById("category-"+category+"-"+room+"-strip");

			if((start != null) && (stop != null))
			{
				stripes[i].style.height = (start.getBoundingClientRect().height - 6) + "px";
				stripes[i].style.left = ((start.getBoundingClientRect().left - parent.getBoundingClientRect().left)) +
					((start.getBoundingClientRect().width / 2) + 1) + "px" ;
				stripes[i].style.top = "3px";
				stripes[i].style.width = (((stop.getBoundingClientRect().left - (stripes[i].getBoundingClientRect().left))
					+ (stop.getBoundingClientRect().width) - ((stop.getBoundingClientRect().width / 2) + 1))) + "px";
			}
			else if((start != null) && (stop == null))
			{
				stripes[i].style.height = (start.getBoundingClientRect().height - 6) + "px";
				stripes[i].style.left = ((start.getBoundingClientRect().left - parent.getBoundingClientRect().left)) +
					((start.getBoundingClientRect().width / 2) + 1) + "px" ;
				stripes[i].style.top = "3px";
				stripes[i].style.width = ((parent.getBoundingClientRect().width + parent.getBoundingClientRect().left) - (stripes[i].getBoundingClientRect().left))+ "px";
			}
			else if((start == null) && (stop != null))
			{
				let st = document.querySelector(".r-"+room+"-box[category="+category+"]");

				stripes[i].style.height = (stop.getBoundingClientRect().height - 6) + "px";
				stripes[i].style.left = ((st.getBoundingClientRect().left - parent.getBoundingClientRect().left)) + "px" ;
				stripes[i].style.top = "3px";
				stripes[i].style.width = (((stop.getBoundingClientRect().left - (stripes[i].getBoundingClientRect().left))
					+ (stop.getBoundingClientRect().width) - ((stop.getBoundingClientRect().width / 2) + 1))) + "px";
			}
			else
			{
				return 'out of scope';
			}
		}
	}
}
