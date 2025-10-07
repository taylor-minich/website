sandbox.setOptions({
    background: '#fff',
    framesPerUpdate: 1,
    animation: {
      startOnEnter: true,
      stopOnLeave: true,
    },
    mouse: {
      interactionType: 2,
      connectDistMult: 0.6,
      distRatio: 1,
    },
    particles: {
      color: '#34500d',
      ppm: 250,
      max: 500,
      maxWork: 30,
      connectDistance: 100,
      relSize: 1,
      relSpeed: 1,
      rotationSpeed: 1,
      regenerateOnResize: false
    },
    gravity: {
      repulsive: 0.55,
      pulling: 0,
      friction: 0.99,
    }
  })