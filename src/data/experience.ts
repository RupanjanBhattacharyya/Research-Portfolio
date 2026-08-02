export interface ExperienceEntry {
  organization: string;
  role: string;
  dateRange: string;
  location: string;
  description: string;
  note?: string;
}

export const experience: ExperienceEntry[] = [
  {
    organization: 'NextGen Compute and Storage Lab, IIT Madras',
    role: 'Summer Research Fellow',
    dateRange: 'May 2026 — Present',
    location: 'Chennai, India',
    description:
      'Deriving a physics-based compact model for the voltage-dependent capacitance of hafnium-oxide resistive-memory devices by reformulating conductive-filament-gap dynamics as a two-state oxygen-vacancy chemical-kinetics rate balance. Implemented the closed-form model in Verilog-A as a SPICE-compatible primitive, enabling CMOS image-sensor pixel simulations that improve dynamic range by ~40% over a baseline pixel and ~25% over prior hybrid designs. Work co-developed with the device-modeling group toward an IEEE Electron Device Letters submission.',
  },
  {
    organization: 'Nano Intelligence Lab, Centre for Nanotechnology, IIT Roorkee',
    role: 'Research Intern — Hardware Modelling for Neuromorphic Transformers',
    dateRange: 'Mar 2026 — Jul 2026',
    location: 'Roorkee, India (Remote)',
    description:
      'Built the end-to-end memristor transformer accelerator as a physically-consistent digital twin under Dr. Ankush Kumar. Mapped a six-block, six-head Vision Transformer for CIFAR-10 onto a cascaded ReRAM-crossbar attention datapath, executing 98.7% of all multiply-accumulate operations in-memory across 50 crossbar-mapped layers, then ran a device-level non-ideality analysis (IR-drop, conductance variation, retention drift, stuck-at faults, ADC precision) and designed a mitigation pipeline that recovered accuracy substantially — distilling seven transferable hardware design principles benchmarked against a fabricated perovskite transformer engine.',
  },
  {
    organization: 'Centre of Excellence for Intelligent Sensors and Systems (iSenS), CSIR–CSIO',
    role: 'Summer Research Intern',
    dateRange: 'May 2025 — Jul 2025',
    location: 'Chandigarh, India',
    description:
      'Engineered a four-channel, 24-bit real-time seismic acquisition and classification system on an embedded compute module, sustaining 240 Hz per-channel sampling with timing jitter under five microseconds. Designed the custom analog front-end PCB in KiCad (instrumentation amplifier, Sallen–Key Butterworth filter, isolated dual-rail supply, TVS/Schottky protection) and a 47-feature multi-domain detection pipeline reaching over 87% real-time classification accuracy at under 3 ms inference latency.',
    note: 'Grade awarded: Outstanding',
  },
  {
    organization: 'Indian Institute of Technology, Guwahati',
    role: 'Winter Research Intern',
    dateRange: 'Dec 2024 — Jan 2025',
    location: 'Guwahati, India',
    description:
      'Architected a computational-imaging system for classroom attention-level detection, designing two parallel convolutional neural networks to jointly process facial emotion and head pose from a single video stream. Developed a weighted fusion algorithm combining both signals into a real-time attention score, and explored model quantization for edge deployment.',
  },
];
