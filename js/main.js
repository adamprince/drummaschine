var keyData = {
  q: {
    sound: new Howl({
      src: ['audio/606/q.wav']
    })
  },
  w: {
    sound: new Howl({
      src: ['audio/606/w.wav']
    })
  },
  e: {
    sound: new Howl({
      src: ['audio/606/e.wav']
    })
  },
  r: {
    sound: new Howl({
      src: ['audio/606/r.wav']
    })
  },
  t: {
    sound: new Howl({
      src: ['audio/606/t.wav']
    })
  },
  y: {
    sound: new Howl({
      src: ['audio/606/y.wav']
    })
  },
  u: {
    sound: new Howl({
      src: ['audio/606/u.wav']
    })
  },
  i: {
    sound: new Howl({
      src: ['audio/606/i.wav']
    })
  },
  o: {
    sound: new Howl({
      src: ['audio/606/o.wav']
    })
  },
  p: {
    sound: new Howl({
      src: ['audio/606/p.wav']
    })
  },
  a: {
    sound: new Howl({
      src: ['audio/606/a.wav']
    })
  },
  s: {
    sound: new Howl({
      src: ['audio/606/s.wav']
    })
  },
    d: {
    sound: new Howl({
      src: ['audio/606/d.wav']
    })
  },
  f: {
    sound: new Howl({
      src: ['audio/606/f.wav']
    })
  },
  g: {
    sound: new Howl({
      src: ['audio/606/g.wav']
    })
  },
  h: {
    sound: new Howl({
      src: ['audio/606/h.wav']
    })
  },
  j: {
    sound: new Howl({
      src: ['audio/606/j.wav']
    })
  },
  k: {
    sound: new Howl({
      src: ['audio/606/k.wav']
    })
  },
  l: {
    sound: new Howl({
      src: ['audio/606/l.wav']
    })
  },
  z: {
    sound: new Howl({
      src: ['audio/606/z.wav']
    })
  },
  x: {
    sound: new Howl({
      src: ['audio/606/x.wav']
    })
  },
  c: {
    sound: new Howl({
      src: ['audio/606/c.wav']
    })
  },
  v: {
    sound: new Howl({
      src: ['audio/606/v.wav']
    })
  },
  b: {
    sound: new Howl({
      src: ['audio/606/b.wav']
    })
  },
  n: {
    sound: new Howl({
      src: ['audio/606/n.wav']
    })
  },
  m: {
    sound: new Howl({
      src: ['audio/606/m.wav']
    })
  }
};

document.addEventListener('keydown', function (event) {
  if(event.key){
    keyData[event.key].sound.play();
  }
});