import herolist from './herolist.json';

export default {
  'POST /api/freeheros.json': (req, res) => {
    const { number } = req.body;
    function getRandomArrayElements(arr, count) {
      var shuffled = Array.from(arr),
        i = arr.length,
        min = i - count,
        temp,
        index;
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }
      return shuffled.slice(min);
    }
    const freeheros = getRandomArrayElements(herolist.heros, number);
    res.send(freeheros);
  },
};
