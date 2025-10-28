import { useState } from "react"

function TripsList() {
    const [trips,setTrips] = useState([])
    console.log(trips)


    fetch('http://localhost:3000/trips')
    .then((res) => res.json())
    .then((data) => setTrips(data))


    return (
        <div>TripsList</div>
    )
}
export default TripsList