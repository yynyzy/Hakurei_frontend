function createAnimation(scrollStart: number, scrollEnd: number, startValue: number, endValue: number): Function {
  return function (x: number): number {
    if (x<scrollStart) {
      return startValue;
    }
    if (x>scrollEnd) {
      return endValue;
    }

    const progress = (x - scrollStart) / (scrollEnd - scrollStart);
    return startValue + (endValue - startValue) * progress;
  }
}
