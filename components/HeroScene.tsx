"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Particle field — floating metallic dust
    const particleCount = window.innerWidth < 768 ? 260 : 550;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 26;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color("#c9a15a"),
      size: 0.035,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Wireframe torus — abstract gear / wheel silhouette
    const torusGeo = new THREE.TorusGeometry(3.1, 0.05, 16, 96);
    const torusMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#8b929c"),
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 2.6;
    torus.position.set(3.2, -0.6, -3);
    scene.add(torus);

    const torus2Geo = new THREE.TorusGeometry(1.9, 0.035, 16, 80);
    const torus2Mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#c9a15a"),
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const torus2 = new THREE.Mesh(torus2Geo, torus2Mat);
    torus2.rotation.x = Math.PI / 3;
    torus2.position.set(-3.6, 1.1, -2.5);
    scene.add(torus2);

    let frameId = 0;
    let visible = true;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!visible) return;
      const t = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        particles.rotation.y = t * 0.02;
        particles.rotation.x = t * 0.005;
        torus.rotation.z = t * 0.08;
        torus2.rotation.z = -t * 0.1;
      }

      renderer.render(scene, camera);
    };
    animate();

    const onVisibility = () => {
      visible = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", onVisibility);

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      particleGeo.dispose();
      particleMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      torus2Geo.dispose();
      torus2Mat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
