  // playerMoveStart = (e) => {
  //   if (!this.locked) {
  //     // Moving Up ( W key )
  //     if (e.keyCode === 87) {
  //       let data = this.context.getImageData(
  //         this.youEntity.x,
  //         this.youEntity.y - this.youEntity.r -1,
  //         1,1
  //       ).data

  //       if (checkBound(data)) {
  //         this.mapLoc[1] += 5
  //       }
  //     }

  //     // Moving Down ( S key )
  //     if (e.keyCode === 83) {
  //       let data = this.context.getImageData(
  //         this.youEntity.x,
  //         this.youEntity.y + this.youEntity.r +1,
  //         1,1
  //       ).data

  //       if (checkBound(data)) {
  //         this.mapLoc[1] -= 5
  //       }
  //     }

  //     // Moving Left ( A key )
  //     if (e.keyCode === 65) {
  //       let data = this.context.getImageData(
  //         this.youEntity.x - this.youEntity.r -1,
  //         this.youEntity.y,
  //         1,1
  //       ).data

  //       if (checkBound(data)) {
  //         this.mapLoc[0] += 5
  //       }
  //     }

  //     // Moving Right ( D key )
  //     if (e.keyCode === 68) {
  //       let data = this.context.getImageData(
  //         this.youEntity.x + this.youEntity.r +1,
  //         this.youEntity.y,
  //         1,1
  //       ).data

  //       if (checkBound(data)) {
  //         this.mapLoc[0] -= 5
  //       }
  //     }
  //   }
  // }

  // handleInterval = () => {
    // this.locked = false
    // this.interval = setInterval(() => {
    //   this.drawAll()
    // }, 1000/this.fps)
    
  // }

  // handleIntervalClear = () => {
  //   this.locked = true
  //   clearInterval(this.interval)
  // }