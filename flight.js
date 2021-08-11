const suggestAirports = async () => {
    document.getElementById("alternate-airports-section").style.display = "block";
    let departureInput = document.getElementById("departure-input").value;
    let arrivalInput = document.getElementById("arrival-input").value;
    let withinMiles = document.getElementById("within-miles").value;
    // alert(departureInput.value, arrivalInput.value, withinMiles.value);  

    // let apiBody = {
    //     "resource": "/ccpbasicdetails",
    //     "path": "/ccpbasicdetails",
    //     "httpMethod": "POST",
    //     "body": "{\"departure_airport\": \""+departureInput+
    //             "\",\"destination_airport\": \""+arrivalInput+
    //             "\", \"alternate_airports_within\":"+withinMiles+"}"
    //   }

    let apiBody = {
        "resource": "/ccpbasicdetails",
        "path": "/ccpbasicdetails",
        "httpMethod": "POST",
        "body": "{\"departure_airport\": \"KFWS\",\"destination_airport\": \"KACT\", \"alternate_airports_within\":20}"
      }

    const response = await fetch('https://rlbkoiiew5.execute-api.us-east-2.amazonaws.com/production/ccpbasicdetails', {
        method: 'POST',
        mode: 'cors',
        // credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Accept':'*/*', 
          // 'origin': '*',
          'Access-Control-Allow-Origin': '*',
        //   'Access-Control-Allow-Credentials': 'true'
        

        },
        body: apiBody});
    // const response = await fetch('http://example.com/movies.json');
    const myJson = await response.json();
    alert(myJson);
}