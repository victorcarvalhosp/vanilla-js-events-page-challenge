// Add your javascript here. Plagiarism will NOT be tolerated!
const EventTypesEnum = {
    MEET_UP: 1,
    LEAP: 2,
    RECRUITING_MISSION: 3,
    VAN_HACKATON: 4,
    PREMIUM_WEBINAR: 5,
    OPEN_WEBINAR: 6,
    properties: {
        1: {name: "Meet up", value: 1, colorRgb: "120, 144, 156"},
        2: {name: "Leap", value: 2, colorRgb: "21, 101, 192"},
        3: {name: "Recruiting Mission", value: 3, colorRgb: "56, 142, 60"},
        4: {name: "Van Hackaton", value: 4, colorRgb: "94, 53, 177"},
        5: {name: "Premium Webinar", value: 5, colorRgb: "255, 111, 0"},
        6: {name: "Open Webinar", value: 6, colorRgb: "100, 181, 246"}

    }
}
const events = [
    {
        id: 1, type: EventTypesEnum.MEET_UP, title: 'Interview-practice class OPEN HOUSE July', date: new Date("08-01-2020"),
        image: "https://picsum.photos/id/167/264/128", location: "Online", deadline: new Date("07-20-2020"),
        applied: false,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 2, type: EventTypesEnum.PREMIUM_WEBINAR, title: 'Premium Webinar', date: new Date("08-07-2020"),
        image: "https://picsum.photos/id/180/264/128", location: "Online", deadline: new Date("08-01-2020"),
        applied: false,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 3, type: EventTypesEnum.LEAP,
        title: 'Van Hack Leap Event', date: new Date("09-23-2020"),
        image: "https://picsum.photos/id/168/264/128", location: "Toronto, CA", deadline: new Date("09-23-2020"),
        applied: false,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 4, type: EventTypesEnum.OPEN_WEBINAR, title: 'Open Webinar', date: new Date("07-25-2020"),
        image: "https://picsum.photos/id/120/264/128", location: "Online", deadline: new Date("07-25-2020"),
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 5,
        type: EventTypesEnum.PREMIUM_WEBINAR,
        title: 'Webinar with Bill Gates', date: new Date("11-01-2020"),
        image: "https://img.ibxk.com.br/2019/08/21/21091807554434.jpg?w=1120&h=420&mode=crop&scale=both", location: "Online", deadline: new Date("10-01-2020"),
        applied: false,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 6, type: EventTypesEnum.VAN_HACKATON, title: 'Online VanHackaton', date: new Date("10-01-2020"),
        image: "https://picsum.photos/id/151/264/128", location: "Online", deadline: new Date("10-01-2020"),
        applied: false,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 7, type: EventTypesEnum.RECRUITING_MISSION, title: 'Recruiting mission Santa Catarina, BR', date: new Date("12-01-2020"),
        image: "https://picsum.photos/id/129/264/128", location: "Santa Catarina, Brazil", deadline: new Date("11-15-2020"),
        applied: false,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 8, type: EventTypesEnum.LEAP,
        title: 'Van Hack Leap Event', date: new Date("10-02-2020"),
        image: "https://picsum.photos/id/5/264/128", location: "Sao Paulo, Brazil", deadline: new Date("10-01-2020"),
        applied: false,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 9, type: EventTypesEnum.LEAP,
        title: 'Van Hack Leap Event', date: new Date("01-23-2021"),
        image: "https://picsum.photos/id/2/264/128", location: "Medellin, Colombia", deadline: new Date("12-01-2020"),
        applied: false,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 10, type: EventTypesEnum.RECRUITING_MISSION, title: 'Recruiting mission Sao Paulo, BR', date: new Date("11-01-2020"),
        image: "https://picsum.photos/id/121/264/128", location: "Sao Paulo, Brazil", deadline: new Date("10-15-2020"),
        applied: false,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 11, type: EventTypesEnum.RECRUITING_MISSION, title: 'Recruiting mission Buenos Aires', date: new Date("01-26-2021"),
        image: "https://picsum.photos/id/4/264/128", location: "Buenos Aires, Argentina", deadline: new Date("12-15-2020"),
        applied: false,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 12, type: EventTypesEnum.LEAP,
        title: 'VanHack Leap Event', date: new Date("01-21-2021"),
        image: "https://picsum.photos/id/109/264/128", location: "Online", deadline: new Date("12-01-2020"),
        applied: false,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 13, type: EventTypesEnum.VAN_HACKATON, title: 'Online VanHackaton', date: new Date("02-01-2021"),
        image: "https://picsum.photos/id/130/264/128", location: "Online", deadline: new Date("01-20-2021"),
        applied: false,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 14, type: EventTypesEnum.VAN_HACKATON, title: 'Online VanHackaton', date: new Date("03-01-2021"),
        image: "https://picsum.photos/id/162/264/128", location: "Online", deadline: new Date("02-20-2021"),
        applied: false,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 15,
        type: EventTypesEnum.PREMIUM_WEBINAR,
        title: 'Secret Webinar', date: new Date("01-20-2021"),
        image: "https://picsum.photos/id/190/264/128", location: "Online", deadline: new Date("01-20-2021"),
        applied: false,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
        id: 16, type: EventTypesEnum.RECRUITING_MISSION, title: 'Recruiting mission Tokyo', date: new Date("03-01-2021"),
        image: "https://picsum.photos/id/121/264/128", location: "Tokyo, Japan", deadline: new Date("02-15-2021"),
        applied: false,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },]

let filteredEvents = [...events].sort((a, b) => a.date - b.date);
let selectedEvent = null;
let selectedFilter = null;

const openDetailsDialogComponent = (id) => {
    document.getElementById('detailsDialog').showModal();
    selectedEvent = events.find(ev => ev.id === id);
    render(`
    <img class="header-img" src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%" />
    <div class="card-container">
    <h4>${selectedEvent.title}</h4>
    <span class="event-type" style="background-color: rgba(${EventTypesEnum.properties[selectedEvent.type].colorRgb}, 0.1); color: rgba(${EventTypesEnum.properties[selectedEvent.type].colorRgb}, 1)">${EventTypesEnum.properties[selectedEvent.type].name}</span>
    <span class="date">${selectedEvent.date?.toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    })}</span> 
        <span class="location"><img src="https://svgshare.com/i/MrF.svg" width="16px" height="16px" />${selectedEvent.location}</span>
        <span class="date-deadline">Deadline: ${selectedEvent.deadline?.toLocaleDateString('en-US')}</span>
        <p>${selectedEvent.description}</p>
        <a class="twitter-share-button" target="_blank"
               href="https://twitter.com/intent/tweet?text=Join ${selectedEvent?.title} See more details at: https://vanhack.com/platform/#/events"
               data-size="large">
                Share this event on Twitter!</a>
    </div>`, document.querySelector("#dialog-content"));
}

const renderEventCardsComponent = () => {
    let eventsCards = "";
    filteredEvents.map(ev => {
        eventsCards += `
        <div class="card card-small" style="${ev.type === EventTypesEnum.PREMIUM_WEBINAR ? 'background-color: #FFDF00' : ''}">
          <img class="header-img" src="${ev.image}" alt="Avatar" style="width:100%">
          <div class="card-container">
            <h4 class="title">${ev.title}<span class="applied">${ev.applied ? 'Applied!' : ''}</span></h4>
            <span class="event-type" style="background-color: rgba(${EventTypesEnum.properties[ev.type].colorRgb}, 0.1); color: rgba(${EventTypesEnum.properties[ev.type].colorRgb}, 1)">${EventTypesEnum.properties[ev.type].name}</span>
        
            <span class="date">${ev.date?.toLocaleDateString('en-US', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
        })}</span> 
            <span class="location"><img src="https://svgshare.com/i/MrF.svg" width="16px" height="16px" />${ev.location}</span>
            <span class="date-deadline">Deadline: ${ev.deadline?.toLocaleDateString('en-US')}</span> 
            
            <button class="action-button blue-button" onclick="openDetailsDialogComponent(${ev.id})">See details</button>
          </div>
        </div>`
    })
    render(eventsCards, document.querySelector("#events-area"));
}

const renderFilters = () => {
    const leapEventsNumber = events.filter(ev => ev.type === EventTypesEnum.LEAP).length;
    const missionEventsNumber = events.filter(ev => ev.type === EventTypesEnum.RECRUITING_MISSION).length;
    const vanHackatonEventsNumber = events.filter(ev => ev.type === EventTypesEnum.VAN_HACKATON).length;

    let filtersComponent = `
        <div class="card card-filter" onclick="filterReset()">
            <div>
                <span class="total-events">${events.length} event${events.length === 1 ? '' : 's'}</span>
                <p>All events</p>
            </div>
        </div>
        <div class="card card-filter" style="background-color: rgba(${EventTypesEnum.properties[EventTypesEnum.LEAP].colorRgb}, 0.2); ${selectedFilter === EventTypesEnum.LEAP ? 'border: 2px solid grey;' : ''}" onclick="filterEvents(EventTypesEnum.LEAP)" >
            <div>
                <span class="total-events">${leapEventsNumber} event${leapEventsNumber === 1 ? '' : 's'}</span>
                <p style="color: rgba(${EventTypesEnum.properties[EventTypesEnum.LEAP].colorRgb}, 1);">Leap events</p>
            </div>
        </div>
        <div class="card card-filter" style="background-color: rgba(${EventTypesEnum.properties[EventTypesEnum.RECRUITING_MISSION].colorRgb}, 0.2); ${selectedFilter === EventTypesEnum.RECRUITING_MISSION ? 'border: 2px solid grey;' : ''}" onclick="filterEvents(EventTypesEnum.RECRUITING_MISSION)">
            <div>
                <span class="total-events">${missionEventsNumber} event${missionEventsNumber === 1 ? '' : 's'}</span>
                <p style="color: rgba(${EventTypesEnum.properties[EventTypesEnum.RECRUITING_MISSION].colorRgb}, 1);">Recruiting Mission</p>
            </div>
        </div>
        <div class="card card-filter" style="background-color: rgba(${EventTypesEnum.properties[EventTypesEnum.VAN_HACKATON].colorRgb}, 0.2); ${selectedFilter === EventTypesEnum.VAN_HACKATON ? 'border: 2px solid grey;' : ''}"  onclick="filterEvents(EventTypesEnum.VAN_HACKATON)">
            <div>
                <span class="total-events">${vanHackatonEventsNumber} event${vanHackatonEventsNumber === 1 ? '' : 's'}</span>
                <p style="color: rgba(${EventTypesEnum.properties[EventTypesEnum.VAN_HACKATON].colorRgb}, 1);">Van Hackaton</p>
            </div>
        </div>`;

    render(filtersComponent, document.querySelector("#filters"))
}

function applyToEvent() {
    selectedEvent.applied = true;
    events.find(ev => ev.id === selectedEvent.id).applied = true;
    renderEventCardsComponent();
    showToast();
}


function filterReset() {
    selectedFilter = null;
    filteredEvents = [...events].sort((a, b) => a.date - b.date);
    renderEventCardsComponent();
    renderFilters();
}

function filterEvents(eventType) {
    selectedFilter = eventType;
    filteredEvents = events.filter(ev => ev.type === eventType).sort((a, b) => a.date - b.date);
    renderEventCardsComponent();
    renderFilters();
}

function showToast() {
    const snackbar = document.getElementById("snackbar");
    snackbar.className = "show";
    setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}


function render(template, node) {
    node.innerHTML = template;
};

renderFilters();
renderEventCardsComponent();
