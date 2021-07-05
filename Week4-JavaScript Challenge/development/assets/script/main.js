let jsondata = "";
let dataPath = "./data.json";

async function getData(path) {
	let response = await fetch(path);
	let info = await response.json();
	return info.data;
}

function isFlipped(value) {
	function clickBtn() {
		value.classList.toggle("is-flipped");
	}
	if (value) {
		value.addEventListener("click", clickBtn);
	}
}

async function main() {
	jsondata = await getData(dataPath);

	const assistants = jsondata.filter((el) => el.assistant === true);
	const students = jsondata.filter((el) => el.assistant === false);
	const mainEl = document.querySelector("[data-main]");

	for (let i = 0; i < assistants.length; i++) {
		assistants[i].members = [];

		let group = document.createElement("div");
		let groupName = document.createElement("h2");
		let assistant = document.createElement("h3");
		let members = document.createElement("ul");

		assistant.innerHTML = `${assistants[i].name}`;
		groupName.innerHTML = `${assistants[i].group}`;

		group.classList.add("group");
		groupName.classList.add("group__name");
		assistant.classList.add("group__assistant");
		members.classList.add("group__members");

		group.style.background = `${assistants[i].group.toLowerCase()}`;

		mainEl.appendChild(group);
		group.appendChild(groupName);
		group.appendChild(assistant);
		group.appendChild(members);

		isFlipped(group);

		for (let j = 0; j < students.length; j++) {
			if (assistants[i].group === students[j].group) {
				assistants[i].members.push(students[j]);
			}
		}

		for (let j = 0; j < assistants[i].members.length; j++) {
			let item = document.createElement("li");
			item.innerHTML = `${assistants[i].members[j].name}`;
			item.classList.add("group__item");
			members.appendChild(item);
		}
	}
}

main();
