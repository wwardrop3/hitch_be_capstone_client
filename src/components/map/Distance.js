

const commutesPerYear = 260*2
const mpg = 40
const ppg = 4
const secondsPerDay = 60*60*24

export const Distance = (leg) => {

    const days = Math.floor(
        (commutesPerYear*leg.leg.duration?.value) / secondsPerDay
    )
    const yearlyCost = Math.floor(
        (((leg.leg.distance?.value / 1609) * commutesPerYear) / mpg) * ppg
    )
    return (
        <>
        <div>
        Would drive for <span className="highlight">{days}</span> days per year   
        </div> 
        <div>
        Would cost <span className="highlight">{yearlyCost}</span> per year
        </div>
        </>
    )
    
    
}