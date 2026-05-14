import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-model-viewer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <canvas #canvas class="model-canvas"></canvas>

    <!-- DEBUG PANEL — remove when done tuning -->
    <div class="dbg" *ngIf="debug">
      <div class="dbg__title">⚙ Model Debug</div>

      <div class="dbg__row">
        <span class="dbg__label">rot.x</span>
        <input type="range" min="-3.15" max="3.15" step="0.01"
               [(ngModel)]="debug.rx" (ngModelChange)="applyDebug()" />
        <input class="dbg__num" type="number" step="0.01"
               [(ngModel)]="debug.rx" (ngModelChange)="applyDebug()" />
        <span class="dbg__deg">{{ deg(debug.rx) }}°</span>
      </div>

      <div class="dbg__row">
        <span class="dbg__label">rot.y</span>
        <input type="range" min="-3.15" max="3.15" step="0.01"
               [(ngModel)]="debug.ry" (ngModelChange)="applyDebug()" />
        <input class="dbg__num" type="number" step="0.01"
               [(ngModel)]="debug.ry" (ngModelChange)="applyDebug()" />
        <span class="dbg__deg">{{ deg(debug.ry) }}°</span>
      </div>

      <div class="dbg__row">
        <span class="dbg__label">rot.z</span>
        <input type="range" min="-3.15" max="3.15" step="0.01"
               [(ngModel)]="debug.rz" (ngModelChange)="applyDebug()" />
        <input class="dbg__num" type="number" step="0.01"
               [(ngModel)]="debug.rz" (ngModelChange)="applyDebug()" />
        <span class="dbg__deg">{{ deg(debug.rz) }}°</span>
      </div>

      <div class="dbg__row">
        <span class="dbg__label">pos.x</span>
        <input type="range" min="-200" max="200" step="1"
               [(ngModel)]="debug.px" (ngModelChange)="applyDebug()" />
        <input class="dbg__num" type="number" step="1"
               [(ngModel)]="debug.px" (ngModelChange)="applyDebug()" />
      </div>

      <div class="dbg__row">
        <span class="dbg__label">pos.y</span>
        <input type="range" min="-100" max="100" step="1"
               [(ngModel)]="debug.py" (ngModelChange)="applyDebug()" />
        <input class="dbg__num" type="number" step="1"
               [(ngModel)]="debug.py" (ngModelChange)="applyDebug()" />
      </div>

      <div class="dbg__row">
        <span class="dbg__label">scale</span>
        <input type="range" min="0.1" max="3" step="0.01"
               [(ngModel)]="debug.scale" (ngModelChange)="applyDebug()" />
        <input class="dbg__num" type="number" step="0.01"
               [(ngModel)]="debug.scale" (ngModelChange)="applyDebug()" />
      </div>

      <div class="dbg__row">
        <span class="dbg__label">cam.z</span>
        <input type="range" min="50" max="600" step="5"
               [(ngModel)]="debug.camZ" (ngModelChange)="applyDebug()" />
        <input class="dbg__num" type="number" step="5"
               [(ngModel)]="debug.camZ" (ngModelChange)="applyDebug()" />
      </div>

      <button class="dbg__copy" (click)="copyValues()">Copy values</button>
      <div class="dbg__copied" *ngIf="copied">✓ copied!</div>
    </div>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100%; position: relative; }
    .model-canvas { width: 100%; height: 100%; display: block; }

    .dbg {
      position: absolute;
      top: 12px;
      right: 12px;
      background: rgba(5,10,18,0.92);
      border: 1px solid rgba(0,180,216,0.3);
      padding: 12px 14px;
      width: 300px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #ccc;
      z-index: 99;
      backdrop-filter: blur(6px);
    }
    .dbg__title {
      font-size: 10px;
      letter-spacing: .12em;
      color: #00b4d8;
      margin-bottom: 10px;
      text-transform: uppercase;
    }
    .dbg__row {
      display: grid;
      grid-template-columns: 36px 1fr 58px 32px;
      align-items: center;
      gap: 5px;
      margin-bottom: 7px;
    }
    .dbg__label { color: rgba(255,255,255,0.5); font-size: 10px; }
    .dbg__deg   { color: rgba(255,255,255,0.3); font-size: 10px; text-align: right; }
    .dbg__row input[type=range] {
      accent-color: #0440b2;
      cursor: pointer;
      width: 100%;
    }
    .dbg__num {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.12);
      color: #fff;
      font-family: inherit;
      font-size: 10px;
      padding: 2px 4px;
      width: 100%;
      text-align: right;
      outline: none;
      -moz-appearance: textfield;
    }
    .dbg__num:focus { border-color: #0440b2; }
    .dbg__num::-webkit-inner-spin-button,
    .dbg__num::-webkit-outer-spin-button { opacity: 0.4; }
    .dbg__copy {
      margin-top: 8px;
      width: 100%;
      background: rgba(4,64,178,0.25);
      border: 1px solid rgba(4,64,178,0.5);
      color: #fff;
      font-family: inherit;
      font-size: 10px;
      letter-spacing: .1em;
      padding: 5px 0;
      cursor: pointer;
    }
    .dbg__copy:hover { background: rgba(4,64,178,0.45); }
    .dbg__copied { color: #00c896; font-size: 10px; margin-top: 4px; text-align: center; }
  `],
})
export class ModelViewer implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  /** Mouse parallax — normalized -1..1, written by parent, smoothed in render loop */
  public mouseLookX = 0;
  public mouseLookY = 0;
  private _smoothX = 0;
  private _smoothY = 0;

  /** GSAP tweens this object directly — render loop reads it every frame */
  public animState = {
    positionX:  0,
    positionY:  10,
    scaleValue: 1.0,
    rotationX: -1.05,
    rotationY:  0,
    rotationZ:  1.57,
    cameraZ:    220,
  };

  @Input() modelPath = '/assets/DeltaV3_BodyM_ASSM.stl';

  /** Set to a truthy object to show the debug panel. null = production mode. */
  debug: { rx: number; ry: number; rz: number; px: number; py: number; scale: number; camZ: number } | null = null;

  copied = false;

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private renderer: import('three').WebGLRenderer | null = null;
  private scene: import('three').Scene | null = null;
  private camera: import('three').PerspectiveCamera | null = null;
  private model: import('three').Mesh | null = null;
  private baseScale = 1;
  private animationId = 0;
  private resizeObserver?: ResizeObserver;

  async ngOnInit() {
    if (!this.isBrowser) return;
    await this.initScene();
    this.startLoop();
  }

  ngOnDestroy() {
    if (!this.isBrowser) return;
    cancelAnimationFrame(this.animationId);
    this.resizeObserver?.disconnect();
    this.renderer?.dispose();
  }

  deg(rad: number) {
    return Math.round((rad * 180) / Math.PI);
  }

  applyDebug() {
    if (!this.debug || !this.model || !this.camera) return;
    this.model.rotation.x = this.debug.rx;
    this.model.rotation.y = this.debug.ry;
    this.model.rotation.z = this.debug.rz;
    this.model.position.x = this.debug.px;
    this.model.position.y = this.debug.py;
    this.model.scale.setScalar(this.baseScale * this.debug.scale);
    this.camera.position.z = this.debug.camZ;
    this.camera.lookAt(0, 0, 0);
  }

  copyValues() {
    if (!this.debug) return;
    const txt = `rotation.x = ${this.debug.rx.toFixed(4)};  // ${this.deg(this.debug.rx)}°
rotation.y = ${this.debug.ry.toFixed(4)};  // ${this.deg(this.debug.ry)}°
rotation.z = ${this.debug.rz.toFixed(4)};  // ${this.deg(this.debug.rz)}°
position.x = ${this.debug.px};
position.y = ${this.debug.py};
scale      = ${this.debug.scale.toFixed(2)};
camera.z   = ${this.debug.camZ};`;
    navigator.clipboard.writeText(txt).then(() => {
      this.copied = true;
      setTimeout(() => (this.copied = false), 1800);
    });
  }

  private async initScene() {
    const THREE = await import('three');
    const { STLLoader } = await import('three/examples/jsm/loaders/STLLoader.js');
    const { mergeVertices } = await import('three/examples/jsm/utils/BufferGeometryUtils.js');
    const { RoomEnvironment } = await import('three/examples/jsm/environments/RoomEnvironment.js');

    const canvas = this.canvasRef.nativeElement;
    const w = canvas.clientWidth || 800;
    const h = canvas.clientHeight || 600;

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(w, h, false);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(38, w / h, 0.1, 2000);
    this.camera.position.set(0, 30, 220);
    this.camera.lookAt(0, 0, 0);

    const ambient = new THREE.AmbientLight(0xffffff, 0.45);
    this.scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 1.5);
    key.position.set(80, 120, 80);
    this.scene.add(key);

    const fill = new THREE.DirectionalLight(0x4488ff, 0.5);
    fill.position.set(-80, 40, 60);
    this.scene.add(fill);

    const rim = new THREE.DirectionalLight(0x00b4d8, 0.45);
    rim.position.set(0, -60, -100);
    this.scene.add(rim);

    // Neutral env map so MeshStandardMaterial picks up ambient reflections
    const pmrem = new THREE.PMREMGenerator(this.renderer!);
    this.scene!.environment = pmrem.fromScene(new RoomEnvironment()).texture;
    pmrem.dispose();

    const loader = new STLLoader();
    loader.load(this.modelPath, (geometry) => {
      geometry = mergeVertices(geometry);  // weld coincident STL vertices for smooth normals
      geometry.computeVertexNormals();
      geometry.center();

      const box = new THREE.Box3().setFromObject(new THREE.Mesh(geometry));
      const size = new THREE.Vector3();
      box.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      this.baseScale = 120 / maxDim;

      const material = new THREE.MeshStandardMaterial({
        color: 0xb0b8c4,
        roughness: 0.3,
        metalness: 0.55,
        envMapIntensity: 0.6,
      });

      this.model = new THREE.Mesh(geometry, material);
      this.scene!.add(this.model);

      // Sync debug panel to initial values
      if (this.debug) {
        this.debug.rx = this.model.rotation.x;
        this.debug.scale = this.animState.scaleValue;
      }
    });

    this.resizeObserver = new ResizeObserver(() => this.onResize());
    this.resizeObserver.observe(canvas);
  }

  private onResize() {
    const canvas = this.canvasRef.nativeElement;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (!w || !h || !this.renderer || !this.camera) return;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  private startLoop() {
    let t = 0;
    const tick = () => {
      this.animationId = requestAnimationFrame(tick);
      t += 0.004;

      if (this.model) {
        if (this.debug) {
          // Debug mode: panel controls everything, skip GSAP + float
          this.applyDebug();
        } else {
          // Normal mode — all values from animState, gentle float on Y
          this._smoothX += (this.mouseLookX - this._smoothX) * 0.06;
          this._smoothY += (this.mouseLookY - this._smoothY) * 0.06;

          const idleX = Math.sin(t * 0.75) * 0.022;
          const idleZ = Math.cos(t * 0.55) * 0.016;

          this.model.rotation.x = this.animState.rotationX + this._smoothY * 0.10 + idleX;
          this.model.rotation.y = this.animState.rotationY + this._smoothX * 0.18;
          this.model.rotation.z = this.animState.rotationZ + this._smoothX * 0.06 + idleZ;
          this.model.position.x = this.animState.positionX + this._smoothX * 6;
          this.model.position.y = this.animState.positionY + Math.sin(t) * 1.5 + this._smoothY * 2;
          this.model.scale.setScalar(this.baseScale * this.animState.scaleValue);
          if (this.camera) {
            this.camera.position.z = this.animState.cameraZ;
            this.camera.lookAt(0, 0, 0);
          }
        }
      }

      this.renderer?.render(this.scene!, this.camera!);
    };
    tick();
  }
}
