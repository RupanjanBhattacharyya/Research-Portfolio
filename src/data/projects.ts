export interface ProjectEntry {
  title: string;
  description: string;
  tags: string[];
  date: string;
  association?: string;
}

export const projects: ProjectEntry[] = [
  {
    title: 'Electromagnetic Levitation — Physics-Based Digital Twin',
    description:
      'A repulsive eddy-current levitation actuator driven at mains-derived frequency, simulated in Ansys Maxwell (2D/3D transient) and FEMM to compute the magnetic-field distribution, induced eddy-current density, and net lift force. Modelled the system as a nonlinear state-space digital twin in Python — predicting a 25.56 rad/s natural frequency and optimizing coil geometry to match the target force constant within 1% — and stabilized it with a PID controller, using an open-/short-circuit transformer analogy to extract coil parameters against experimental data.',
    tags: ['Ansys Maxwell', 'FEMM', 'Control Systems', 'Digital Twin', 'Python'],
    date: 'Aug 2024 — Nov 2024',
    association: 'IIEST Shibpur · under Prof. Mainak Sengupta',
  },
  {
    title: 'Semiconductor Device Modeling with Sentaurus TCAD',
    description:
      'Hands-on semiconductor device modeling under the Samsung Grade-I Fellowship: simulated fabrication process flows with Synopsys Sentaurus TCAD (Structural Device Editor scripting and Sprocess) and calibrated device models to align simulation results with experimental data across the device-to-system stack.',
    tags: ['Sentaurus TCAD', 'SDE Scripting', 'Sprocess', 'Device Fabrication'],
    date: 'Oct — Dec 2025',
    association: 'India Semiconductor Workforce Development Program',
  },
  {
    title: 'Analog Signal-Processing Hardware — TI ASLK Pro',
    description:
      'Designed and tested analog signal-processing circuits on the Texas Instruments Analog System Lab Kit (ASLK Pro) as a hardware-design contestant in the TI hardware hackathon, building on the BYTE analog-design and simulation certification.',
    tags: ['Analog Design', 'Signal Processing', 'Hardware Prototyping'],
    date: '2025',
    association: 'Texas Instruments',
  },
];
