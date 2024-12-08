
// every function decorated with async keyword will return a promise
export async function fetchAvailablePlaces() {
    const response = await fetch('http://localhost:3000/places');
    const resData = await response.json();

    if(!response.ok) { // ok = 200, 300  status codes, bad status codes are 400, 500
    throw new Error('Failed to fetch places.');
    }

    return resData.places;
}

export async function fetchUserPlaces() {
    const response = await fetch('http://localhost:3000/user-places');
    const resData = await response.json();

    if(!response.ok) { // ok = 200, 300  status codes, bad status codes are 400, 500
    throw new Error('Failed to fetch user places.');
    }

    return resData.places;
}


export async function updateUserPlaces(places) {
    // fetchs default method is GET, to send data to the server, we need to use the method property
    // and set it to PUT
    const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({ places }), // coverts the array to json format
        headers: { // headers are used to tell the server what kind of data we are sending
            'Content-Type': 'application/json'
        }
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error('Failed to update user data.');
    }

    return resData.message;
}