async function getInfo() {
    buses
    const inputElValue = document.getElementById('stopId').value;
    const stopNameIdDivEl = document.getElementById("stopName");
    const busesIdUlEl = document.getElementById("buses");
    
    const url = `http://localhost:3030/jsonstore/bus/businfo/${inputElValue}`;
    try {
        const stopResponse = await fetch(url);
        const stopData = await stopResponse.json();
        stopNameIdDivEl.textContent = stopData.name;

        const busesObj = stopData.buses;
        const busesEntries = Object.entries(busesObj);
        
        busesIdUlEl.innerHTML = '';
        
        for (const [busId, time] of busesEntries) {
            const busLiEl = document.createElement('li');
            busLiEl.textContent = `Bus ${busId} arrives in ${time} minutes`
            busesIdUlEl.appendChild(busLiEl);
        }
    } catch (error) {
        busesIdUlEl.innerHTML = '';
        stopNameIdDivEl.textContent = "Error";
    }

}