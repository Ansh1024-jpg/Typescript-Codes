var seatChoice;
(function (seatChoice) {
    seatChoice["AISLE"] = "AISLE";
    seatChoice["MIDDLE"] = "MIDDLE";
    seatChoice["WINDOW"] = "WINDOW";
    seatChoice[seatChoice["FOURTH"] = 0] = "FOURTH";
})(seatChoice || (seatChoice = {}));
var seat = seatChoice.AISLE;
