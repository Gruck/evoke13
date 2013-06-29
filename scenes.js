D.scenes.pushScene = function(scene) {
  var lastScene = D.scenes.length == 0 ? {start:0, duration :0} : D.scenes[D.scenes.length -1];
  scene.start = lastScene.start+lastScene.duration;
  D.scenes.push(scene);
}

function loadScenes() {
  // intro
  D.scenes.pushScene( {
    duration: 6857,
    fragments: ["city_intro"],
    vertex: "quad",
    update: [function(prog) {
      updateRaymarchStatic(prog, [0, 15.0, 15.0]);
    }]
  });

  // sad
  D.scenes.pushScene( {
    duration: 13414,
    fragments: ["city_1"],
    vertex: "quad",
    update: [function(prog) {
      updateRaymarchTranslate(prog, [0, 15.0, 15.0],[20, 10.0, 15.0]);
    }]
  });

  // rainbow!
  D.scenes.pushScene( {
    duration: 13714,
    fragments: ["city_rainbow"],
    vertex: "quad",
    update: [function(prog) {
      updateRaymarchTranslate(prog, [20, 10.0, 15.0],[20, 20.0, -100.0]);
    }]
  });

  // traveling right with chroma
  D.scenes.pushScene( {
    duration: 13715,
    fragments: ["city_2", "chroma"],
    vertex: "quad",
    update: [function(prog) {
      updateRaymarchTranslate(prog, [20, 15.0, 15.0],[100, 15.0, 15.0]);
    }, updateDefault]
  });

  D.scenes.pushScene( {
    duration: 13714,
    fragments: ["city_2", "blur"],
    vertex: "quad",
    update: [function(prog) {
      updateRaymarchTransition(prog, [100, 15.0, 15.0],[100, 15.0, 15.0],
                                      0, [0,1,0], 1, [0,1,0]);
    }, updateDefault]
  });

  D.scenes.pushScene( {
    duration: 13714,
    fragments: ["city_fancy"],
    vertex: "quad",
    update: [function(prog) {
      updateRaymarchStatic(prog, [0, 15.0, 15.0]);
    }]
  });

  assertScenesSorted();
  var lastScene = D.scenes[D.scenes.length - 1];
  seeker.max = D.endTime = lastScene.start + lastScene.duration;
}
