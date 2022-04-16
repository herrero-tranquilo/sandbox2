import React, { useRef, useEffect, useCallback } from "react";
import Style from "styled-components";
import { TimelineMax, Expo } from "gsap";
import * as THREE from "three";

const Reanderer = props => {
  const objArray = [];
  const mount = useRef(null);
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 5);
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshLambertMaterial({ color: 0xf7f7f7 });
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const onMouseMove = useCallback(
    e => {
      e.preventDefault();
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      var intersects = raycaster.intersectObjects(scene.children, true);
      for (var i = 0; i < intersects.length; i++) {
        const tl = new TimelineMax();
        tl.to(intersects[i].object.scale, 1, {
          x: 2,
          ease: Expo.easeOut
        });
        tl.to(intersects[i].object.scale, 0.5, {
          x: 0.5,
          ease: Expo.easeOut
        });
        tl.to(intersects[i].object.position, 0.5, {
          x: 2,
          ease: Expo.easeOut
        });
        tl.to(
          intersects[i].object.rotation,
          0.5,
          {
            y: Math.PI * 0.5,
            ease: Expo.easeOut
          },
          "=-1.5"
        );
      }
    },
    [camera, mouse, raycaster, scene.children]
  );
  const handleResize = useCallback(() => {
    let { clientWidth, clientHeight } = mount.current;
    const renderScene = () => {
      requestAnimationFrame(renderScene);
      renderer.render(scene, camera);
    };
    renderer.setSize(clientWidth, clientHeight);
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    renderScene();
  }, [renderer, scene, camera]);
  useEffect(() => {
    const dom = mount.current;
    renderer.setClearColor("#e5e5e5");

    objArray.reduce((acc, obj) => {
      acc.add(obj);
      return acc;
    }, scene);

    dom.appendChild(renderer.domElement);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      dom.removeChild(renderer.domElement);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [scene, objArray, renderer, onMouseMove, handleResize]);

  objArray[0] = (() => {
    const light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(0, 0, 0);
    return light;
  })();
  objArray[1] = (() => {
    const light = new THREE.PointLight(0xffffff, 2, 1000);
    light.position.set(0, 0, 15);
    return light;
  })();

  for (let i = 2; i < 17; i++) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 3
    );
    objArray[i] = mesh;
  }

  return (
    <Div className={props.className} ref={mount}>
      {props.children}
    </Div>
  );
};
export default Reanderer;

const Div = Style.div`
  height:100vh;
`;
