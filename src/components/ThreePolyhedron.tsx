import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreePolyhedron: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Scene setup
    const scene = new THREE.Scene();

    const width = mount.clientWidth || 200;
    const height = mount.clientHeight || 180;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Group to hold the polyhedron
    const group = new THREE.Group();
    scene.add(group);

    // Create a hollow, thick wireframe cage icosahedron
    const radius = 1.35;
    const icosahedronGeom = new THREE.IcosahedronGeometry(radius, 0);

    // Tube edges or wireframe for the hollow cage look matching the screenshot
    const wireframeGeom = new THREE.WireframeGeometry(icosahedronGeom);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4ade80,
      linewidth: 2,
      transparent: true,
      opacity: 0.85,
    });
    const lineMesh = new THREE.LineSegments(wireframeGeom, lineMaterial);
    group.add(lineMesh);

    // Inner translucent polyhedron with glossy specular reflections
    const faceMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x16a34a,
      emissive: 0x052e16,
      emissiveIntensity: 0.4,
      metalness: 0.85,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transparent: true,
      opacity: 0.65,
      wireframe: false,
    });
    const mesh = new THREE.Mesh(icosahedronGeom, faceMaterial);
    group.add(mesh);

    // Inner core glowing sphere
    const coreGeom = new THREE.SphereGeometry(0.35, 16, 16);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x4ade80,
      emissive: 0x22c55e,
      emissiveIntensity: 1.2,
      roughness: 0.2,
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMaterial);
    group.add(coreMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x4ade80, 2.5);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x16a34a, 1.5);
    fillLight.position.set(-3, -2, -2);
    scene.add(fillLight);

    const pointLight = new THREE.PointLight(0x22c55e, 3, 6);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Interactive mouse tracking
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.6;
      targetRotationX = -y * 0.6;
    };

    mount.addEventListener('mousemove', handleMouseMove);

    // Resize observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(mount);

    // Animation Loop
    let animationFrameId: number;
    let isVisible = true;

    // Pause when offscreen
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    intersectionObserver.observe(mount);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      if (!prefersReducedMotion) {
        group.rotation.x += 0.007;
        group.rotation.y += 0.009;
      }

      // Smooth lerp towards mouse pointer
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      mount.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      icosahedronGeom.dispose();
      wireframeGeom.dispose();
      coreGeom.dispose();
      lineMaterial.dispose();
      faceMaterial.dispose();
      coreMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[160px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      title="Interactive 3D Green Polyhedron (Move mouse over)"
    />
  );
};

