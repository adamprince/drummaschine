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

// Touch Devices
if ("ontouchstart" in document.documentElement) {
  document.getElementById("pad-1").addEventListener("click", function(){
    keyData.q.sound.play();
  });
  document.getElementById("pad-2").addEventListener("click", function(){
    keyData.w.sound.play();
  });
  document.getElementById("pad-3").addEventListener("click", function(){
    keyData.e.sound.play();
  });
  document.getElementById("pad-4").addEventListener("click", function(){
    keyData.b.sound.play();
  });
  document.getElementById("pad-5").addEventListener("click", function(){
    keyData.t.sound.play();
  });
  document.getElementById("pad-6").addEventListener("click", function(){
    keyData.x.sound.play();
  });
  document.getElementById("pad-7").addEventListener("click", function(){
    keyData.u.sound.play();
  });
  document.getElementById("pad-8").addEventListener("click", function(){
    keyData.i.sound.play();
  });
  document.getElementById("pad-9").addEventListener("click", function(){
    keyData.o.sound.play();
  });
  document.getElementById("pad-10").addEventListener("click", function(){
    keyData.p.sound.play();
  });
  document.getElementById("pad-11").addEventListener("click", function(){
    keyData.a.sound.play();
  });
  document.getElementById("pad-12").addEventListener("click", function(){
    keyData.j.sound.play();
  });
} else {
  document.addEventListener('keydown', function (event) {
    if(event.key){
      keyData[event.key].sound.play();
    }
  });
}