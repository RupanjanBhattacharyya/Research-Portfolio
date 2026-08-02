export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: 'Devices & Compact Modeling',
    items: ['ReRAM / Memristors', 'Compact Modeling', 'Verilog-A', 'Sentaurus TCAD (SDE, Sprocess)', 'Ginestra™', 'Device Physics'],
  },
  {
    label: 'Compute-in-Memory & Architecture',
    items: ['In-Memory Computing', 'Crossbar Accelerators', 'DNN+NeuroSim', 'Non-Ideality Analysis', 'Hardware–Software Co-Design', 'VLSI Design'],
  },
  {
    label: 'Machine Learning & Signal Processing',
    items: ['Python (NumPy, Pandas, TensorFlow)', 'Physics-Informed Neural Networks', 'CNNs', 'Feature-Extraction Pipelines', 'Digital Twins', 'Numerical Simulation'],
  },
  {
    label: 'Embedded & Real-Time Systems',
    items: ['Embedded C / Microcontrollers', 'Real-Time Processing', 'Multi-Sensor Fusion', 'Edge Inference', 'Analog Front-End Design', 'KiCad'],
  },
  {
    label: 'Simulation & EDA Tools',
    items: ['Cadence Virtuoso', 'Keysight ADS', 'AMD Vivado', 'MATLAB', 'Ansys Electronics', 'LTspice / QUCS', 'SolidWorks / AutoCAD'],
  },
  {
    label: 'Areas of Interest',
    items: ['Computer Architecture', 'Neuromorphic Computing', 'Signal Processing', 'Deep Learning', 'Control Systems', 'Robotics & Automation'],
  },
];
