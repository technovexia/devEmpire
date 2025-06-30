import * as THREE from 'three';

export interface ParticleSystemOptions {
  count: number;
  color: string;
  size: number;
  speed: number;
  spread: number;
}

export class ParticleSystem {
  public geometry: THREE.BufferGeometry;
  public material: THREE.PointsMaterial;
  public points: THREE.Points;
  private positions: Float32Array;
  private velocities: Float32Array;

  constructor(options: ParticleSystemOptions) {
    const { count, color, size, speed, spread } = options;

    this.geometry = new THREE.BufferGeometry();
    this.positions = new Float32Array(count * 3);
    this.velocities = new Float32Array(count * 3);

    // Initialize particle positions and velocities
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Random position within spread
      this.positions[i3] = (Math.random() - 0.5) * spread;
      this.positions[i3 + 1] = (Math.random() - 0.5) * spread;
      this.positions[i3 + 2] = (Math.random() - 0.5) * spread;

      // Random velocity
      this.velocities[i3] = (Math.random() - 0.5) * speed;
      this.velocities[i3 + 1] = (Math.random() - 0.5) * speed;
      this.velocities[i3 + 2] = (Math.random() - 0.5) * speed;
    }

    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));

    this.material = new THREE.PointsMaterial({
      color: new THREE.Color(color),
      size,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    this.points = new THREE.Points(this.geometry, this.material);
  }

  update(deltaTime: number) {
    const positions = this.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += this.velocities[i] * deltaTime;
      positions[i + 1] += this.velocities[i + 1] * deltaTime;
      positions[i + 2] += this.velocities[i + 2] * deltaTime;

      // Reset particles that go too far
      if (Math.abs(positions[i]) > 50) {
        positions[i] = (Math.random() - 0.5) * 10;
        positions[i + 1] = (Math.random() - 0.5) * 10;
        positions[i + 2] = (Math.random() - 0.5) * 10;
      }
    }

    this.geometry.attributes.position.needsUpdate = true;
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
  }
}

export function createGlowMaterial(color: string, intensity: number = 1): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(color) },
      intensity: { value: intensity },
      time: { value: 0 }
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPositionNormal;
      
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPositionNormal = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform float intensity;
      uniform float time;
      
      varying vec3 vNormal;
      varying vec3 vPositionNormal;
      
      void main() {
        float fresnel = dot(vNormal, vPositionNormal);
        fresnel = pow(1.0 - abs(fresnel), 2.0);
        
        float pulse = sin(time * 2.0) * 0.1 + 0.9;
        
        gl_FragColor = vec4(color, fresnel * intensity * pulse);
      }
    `,
    transparent: true,
    side: THREE.DoubleSide
  });
}

export function createHologramMaterial(color: string): THREE.ShaderMaterial {
  return new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(color) },
      time: { value: 0 },
      opacity: { value: 0.8 }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      
      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform float time;
      uniform float opacity;
      
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      
      void main() {
        // Scanline effect
        float scanline = sin(vWorldPosition.y * 10.0 + time * 5.0) * 0.5 + 0.5;
        scanline = smoothstep(0.3, 0.7, scanline);
        
        // Edge glow
        float fresnel = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
        fresnel = pow(fresnel, 2.0);
        
        // Flicker effect
        float flicker = sin(time * 30.0) * 0.1 + 0.9;
        
        vec3 finalColor = color * (scanline + fresnel) * flicker;
        
        gl_FragColor = vec4(finalColor, opacity * (scanline + fresnel * 0.5));
      }
    `,
    transparent: true,
    side: THREE.DoubleSide
  });
}

export function createEnergyField(radius: number, color: string): THREE.Group {
  const group = new THREE.Group();
  
  // Core sphere
  const coreGeometry = new THREE.SphereGeometry(radius * 0.8, 32, 32);
  const coreMaterial = createGlowMaterial(color, 0.5);
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  group.add(core);
  
  // Energy rings
  for (let i = 0; i < 3; i++) {
    const ringGeometry = new THREE.TorusGeometry(radius * (1 + i * 0.3), 0.05, 8, 32);
    const ringMaterial = createHologramMaterial(color);
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    
    ring.rotation.x = Math.random() * Math.PI;
    ring.rotation.y = Math.random() * Math.PI;
    ring.rotation.z = Math.random() * Math.PI;
    
    group.add(ring);
  }
  
  return group;
}

export function createFloatingCrystal(size: number, color: string): THREE.Mesh {
  const geometry = new THREE.OctahedronGeometry(size);
  const material = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color),
    transparent: true,
    opacity: 0.8,
    roughness: 0.1,
    metalness: 0.9,
    transmission: 0.3,
    emissive: new THREE.Color(color),
    emissiveIntensity: 0.3
  });
  
  return new THREE.Mesh(geometry, material);
}

export function animateFloat(object: THREE.Object3D, amplitude: number = 1, speed: number = 1) {
  const originalY = object.position.y;
  
  return (time: number) => {
    object.position.y = originalY + Math.sin(time * speed) * amplitude;
  };
}

export function animateRotation(object: THREE.Object3D, axis: 'x' | 'y' | 'z' = 'y', speed: number = 1) {
  return (time: number) => {
    object.rotation[axis] = time * speed;
  };
}

export function animatePulse(material: THREE.Material & { uniforms?: any }, intensity: number = 1, speed: number = 1) {
  return (time: number) => {
    if (material.uniforms && material.uniforms.intensity) {
      material.uniforms.intensity.value = intensity * (Math.sin(time * speed) * 0.5 + 0.5);
    }
  };
}

export class PerformanceMonitor {
  private frameCount = 0;
  private lastTime = 0;
  private fps = 60;
  
  public shouldReduceQuality = false;
  public qualityLevel = 1; // 0 = low, 1 = medium, 2 = high

  update(currentTime: number) {
    this.frameCount++;
    
    if (currentTime - this.lastTime >= 1000) {
      this.fps = this.frameCount;
      this.frameCount = 0;
      this.lastTime = currentTime;
      
      // Adjust quality based on performance
      if (this.fps < 30) {
        this.qualityLevel = Math.max(0, this.qualityLevel - 1);
        this.shouldReduceQuality = true;
      } else if (this.fps > 55 && this.qualityLevel < 2) {
        this.qualityLevel = Math.min(2, this.qualityLevel + 1);
        this.shouldReduceQuality = false;
      }
    }
  }

  getFPS(): number {
    return this.fps;
  }

  getQualityLevel(): number {
    return this.qualityLevel;
  }
}

export function disposeObject3D(object: THREE.Object3D) {
  object.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (child.geometry) {
        child.geometry.dispose();
      }
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(material => material.dispose());
        } else {
          child.material.dispose();
        }
      }
    }
  });
}

export function createResponsiveCamera(
  container: HTMLElement,
  fov: number = 75,
  near: number = 0.1,
  far: number = 1000
): THREE.PerspectiveCamera {
  const camera = new THREE.PerspectiveCamera(
    fov,
    container.clientWidth / container.clientHeight,
    near,
    far
  );

  const handleResize = () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
  };

  window.addEventListener('resize', handleResize);
  
  return camera;
}
