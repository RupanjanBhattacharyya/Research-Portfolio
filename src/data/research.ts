import type { ImageMetadata } from 'astro';

import memristorTransformer from '../assets/research/memristor-transformer.png';
import tcreram from '../assets/research/tcreram.png';
import seismicDetection from '../assets/research/seismic-detection.png';
import pinnInsulator from '../assets/research/pinn-insulator-1.png';

export interface ResearchEntry {
  title: string;
  venue: string;
  date: string;
  affiliation: string;
  collaborators?: string;
  summary: string;
  contributions: string[];
  tags: string[];
  image: ImageMetadata;
  imageAlt: string;
  imageCaption: string;
}

export const research: ResearchEntry[] = [
  {
    title: 'Device-Aware Framework for a Reliable Memristor Transformer Accelerator',
    venue: 'Research manuscript · Nano Intelligence Lab, IIT Roorkee',
    date: '2026',
    affiliation: 'Centre for Nanotechnology, IIT Roorkee',
    collaborators: 'with Dr. Ankush Kumar',
    summary:
      'Analog in-memory computing on memristor crossbars can accelerate the memory- and compute-bound self-attention of transformers, but its analog nature exposes it to device non-idealities that erode inference accuracy. I developed the accelerator end-to-end as a physically-consistent digital twin, then distilled reusable hardware design principles from a device-level non-ideality analysis.',
    contributions: [
      'Mapped a six-block, six-head Vision Transformer for CIFAR-10 onto a cascaded ReRAM-crossbar attention datapath (ReCAT) in DNN+NeuroSim V2.1, executing 98.7% of all multiply-accumulate operations in-memory across 50 crossbar-mapped layers with the entire forward and backward datapath quantized to 8 bits.',
      'Ran a Tier-1 device-parameter sweep isolating ADC precision as simultaneously the dominant accuracy driver and the dominant chip-area cost (~52% of area at 5-bit), and identified conductance variation as the sharpest accuracy risk.',
      'Integrated a Functional Array Simulator (FAST) that solves IR-drop exactly via sparse modified-nodal analysis and models retention with a physics-based Arrhenius stretched-exponential law replacing the empirical drift model.',
      'Designed a separate, auditable mitigation pipeline — affine per-crossbar IR-drop calibration, activation-function-modulation current gain, sensitivity-aware row remapping, R=3 cell redundancy, time-aware retention scaling, and zero-weight stuck-at-fault mapping — recovering accuracy e.g. 66.7→88.9% under IR-drop and 16→80% after 10⁵ s of retention.',
      'Benchmarked the twin against a fabricated fully-analog perovskite transformer engine and synthesized seven transferable hardware design principles for memristor transformer accelerators.',
    ],
    tags: ['In-Memory Computing', 'ReRAM Crossbar', 'Vision Transformer', 'NeuroSim', 'Hardware–Software Co-Design'],
    image: memristorTransformer,
    imageAlt:
      'Device-aware framework schematic: ViT-to-crossbar mapping, physically-consistent digital twin, device-knob sweep, non-ideality analysis, and mitigation pipeline.',
    imageCaption:
      'The device-aware framework end-to-end: quantized weight-to-crossbar mapping, the physically-consistent digital twin (ReCAT datapath, NeuroSim macro-model, FAST array-physics simulator), the Tier-1 device sweep, and the mitigation pipeline.',
  },
  {
    title: 'Physics-Informed Compact Modeling of Non-linear Capacitance in TCReRAM',
    venue: 'Co-authored manuscript · toward IEEE Electron Device Letters',
    date: '2026',
    affiliation: 'NextGen Compute and Storage Lab, IIT Madras',
    collaborators: 'with S. Chourasia, A. Padovani, L. Larcher, B. Chakrabarti et al.',
    summary:
      'Tunable capacitance in resistive memory is a promising mechanism for extending devices beyond conventional conductance-based operation. I built a physics-based compact model for the non-linear voltage-dependent capacitance (VDC) of tunable-capacitance ReRAM, capturing state- and bias-dependent behaviour from first principles rather than empirical curve-fitting.',
    contributions: [
      'Reformulated conductive-filament motion as a two-state chemical-kinetics rate balance — oxygen-vacancy generation and recombination competing under applied bias — and solved for the quasi-static steady state to obtain a closed-form filament-gap expression.',
      'Modelled total capacitance as parallel oxide and filament-barrier contributions, incorporating filament-induced oxide-barrier modulation and trap-assisted charge dynamics within a charge-based formulation.',
      'Validated the model against experimental C–V measurements and calibrated Ginestra™ multiscale TCAD across operating conditions, reproducing the observed non-linear capacitance modulation.',
      'Implemented the model in a SPICE-compatible form, enabling circuit-level pixel simulations that improve CMOS image-sensor dynamic range by ~40% over a baseline pixel and ~25% over prior hybrid designs.',
    ],
    tags: ['Compact Modeling', 'ReRAM', 'Device Physics', 'HfOₓ', 'SPICE / Verilog-A', 'TCAD'],
    image: tcreram,
    imageAlt:
      'TCReRAM device schematic, equivalent circuit, and voltage-dependent capacitance characteristics from experiment, TCAD, and the proposed compact model.',
    imageCaption:
      'Physics-based compact model of tunable-capacitance ReRAM: filament-gap chemical-kinetics formulation, oxide/barrier capacitance decomposition, and C–V validation against experiment and Ginestra™ TCAD.',
  },
  {
    title: 'Real-Time Seismic Event Detection & Classification on a Resource-Constrained Embedded Unit',
    venue: 'Research manuscript · CSIR–CSIO (iSenS)',
    date: '2025',
    affiliation: 'CSIR–Central Scientific Instruments Organisation, Chandigarh',
    collaborators: 'with Ripul Ghosh, Utsa Prokash Biswas',
    summary:
      'A compact, field-oriented hardware–software co-design that runs real-time seismic event detection and classification entirely on a low-power embedded compute module — favouring predictable, low-latency inference on the node itself over offloading to remote servers.',
    contributions: [
      'Designed a custom four-channel data-acquisition PCB in KiCad: a precision instrumentation amplifier, a second-order Sallen–Key Butterworth low-pass filter (35 Hz), an isolated ±3.3 V dual-rail supply, and TVS/Schottky over-voltage protection feeding a 24-bit ADC.',
      'Built a DRDY-driven, interrupt-oriented acquisition path over SPI sustaining 240 Hz per channel with timing jitter under five microseconds, and a thread-safe producer–consumer architecture (one acquisition producer, four per-channel STA/LTA consumers, one batch aggregator).',
      'Implemented a recursive energy-based STA/LTA trigger reinforced with a 3-of-5 sample voting rule that cut false-positive detections by roughly 40%, plus cross-channel event correlation and adaptive batch processing.',
      'Extracted a 47-dimensional multi-domain feature vector (temporal, spectral, wavelet time–frequency, and cross-channel) feeding a linear SVM at sub-0.5 ms inference per window — leaving a sustained 91% computational margin on the embedded processor.',
    ],
    tags: ['Embedded Systems', 'Real-Time DSP', 'Analog Front-End', 'Feature Engineering', 'Edge ML', 'Hardware–Software Co-Design'],
    image: seismicDetection,
    imageAlt: 'Real-time seismic acquisition and classification pipeline on embedded hardware.',
    imageCaption:
      'End-to-end seismic node: analog conditioning front-end, DRDY-synchronised 24-bit acquisition, STA/LTA detection with voting, multi-domain feature extraction, and on-device SVM classification.',
  },
  {
    title: 'Physics-Informed Neural Network for Transmission-Line Insulator Fault Detection',
    venue: 'Research manuscript · IIEST Shibpur',
    date: '2026',
    affiliation: 'Department of Electrical Engineering, IIEST Shibpur',
    collaborators: 'with A. Roy, S. Mishra, H. Dutta, A. B. Choudhury',
    summary:
      'A cascaded CNN + PINN architecture for automated insulator fault detection that couples computer vision with the governing thermodynamics — resolving internal and incipient degradation that surface-only detectors cannot capture. This work won the National Engineering Innovation Challenge organized by WBPDCL.',
    contributions: [
      'Built a Mask R-CNN (ResNet-101/FPN) front-end that isolates insulators from aerial/infrared backgrounds at 82.17% insulator IoU and 90.60% mean IoU, defining the spatial domain for the downstream physics stage.',
      'Deployed a physics-informed neural network that solves the inverse heat-transfer problem — embedding the transient heat equation, convective/radiative boundary conditions, and data-fidelity terms in the training loss — to recover fault-induced internal heat sources from measured infrared temperature fields.',
      'Validated the inverse PINN on a manufactured solution (0.97 correlation with the hidden source, PDE residual ≈2.3×10⁻⁴), confirming a correctly-behaving physics layer.',
      'Generated uncertainty-aware fault-severity scores with bootstrap confidence bounds and maintenance-priority tiers, following DL/T 664 relative-temperature-difference diagnostic practice.',
    ],
    tags: ['Physics-Informed ML', 'Inverse Problems', 'Computer Vision', 'Power Systems', 'Infrared Thermography'],
    image: pinnInsulator,
    imageAlt:
      'Cascaded CNN and PINN pipeline for insulator localization and physics-based thermal fault diagnosis.',
    imageCaption:
      'Cascaded architecture: CNN insulator localization and masking defines the domain; a physics-informed neural network inverts the heat equation to localize internal heat sources and produce an uncertainty-aware fault diagnosis.',
  },
];
