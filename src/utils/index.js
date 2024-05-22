// Your helper here

const parseTimeToMilliseconds = (timeString) => {
    const timeUnit = timeString.slice(-1);
    const timeValue = parseInt(timeString.slice(0, -1), 10);

    switch (timeUnit) {
        case "d":
            return timeValue * 24 * 60 * 60 * 1000;
        case "h":
            return timeValue * 60 * 60 * 1000;
        case "m":
            return timeValue * 60 * 1000;
        case "s":
            return timeValue * 1000;
        default:
            return 0;
    }
};

module.exports = {
    parseTimeToMilliseconds
}