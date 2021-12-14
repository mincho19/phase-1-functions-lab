// Code your solution in this file!
function distanceFromHqInBlocks(d){
    if (d >= 42){
        return d-42
    }
    else return 42-d
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks)*264
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((start-destination)*264)
}

function calculatesFarePrice(start, destination){
    let d = distanceTravelledInFeet(start,destination);
    if (d < 400){
        return 0
    }
    else if (400 <= d && d < 2000){
        return (d-400)*.02
    }
    else if (2000 <= d && d < 2500){
        return 25
    }
    else if (d >= 2500) {
        return 'cannot travel that far'
    }
}
