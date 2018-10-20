const rook = {
    currentX: 0,
    currentY: 0,
    setX: function (x) {
        this.currentX = x
        return this
    },
    setY: function (y) {
        this.currentY = y
        return this
    },
    moveToCenter: function () {
        this.currentX = 0
        this.currentY = 0
        return this
    }
}