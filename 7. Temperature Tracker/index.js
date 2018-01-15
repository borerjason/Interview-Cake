/*

You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.

Write a class TempTracker with these methods:

insert()—records a new temperature
getMax()—returns the highest temp we've seen so far
getMin()—returns the lowest temp we've seen so far
getMean()—returns the mean ↴ of all temps we've seen so far
getMode()—returns a mode ↴ of all temps we've seen so far
Optimize for space and time. Favor speeding up the getter methods getMax(), getMin(), getMean(), and getMode() over speeding up the insert() method.

Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.

If there is more than one mode, return any of the modes.

*/

class tempTracker {
  constructor() {
    this.highest = null;
    this.lowest = null;
    this.mean = {
      value: null, 
      sum: 0,
      countValues: 0,
    };
    this.mode = null;
    this.counts = {};
  }
  
  insert(temp) {

    this.mean.sum += temp;
    this.mean.countValues += 1;
    this.mean.value = Math.floor(this.mean.sum / this.mean.countValues);

    this.counts[temp] = this.counts[temp] + 1 || 1;

    if ( !this.highest || temp > this.highest ) {
      this.highest = temp;
    }
    if ( !this.lowest || temp < this.lowest ) {
      this.lowest = temp;
    }
    if (!this.mode || this.counts[this.mode] < this.counts[temp]) {
      this.mode = temp;
    }
  }

  getMax() {
    return this.highest;
  }

  getMin() {
    return this.lowest;
  }

  getMean() {
    return this.mean.value;
  }

  getMode() {
   return this.mode;
  }
}

module.exports = tempTracker;
