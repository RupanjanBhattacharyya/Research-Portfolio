export interface CertificationEntry {
  title: string;
  issuer: string;
  date: string;
}

export const certifications: CertificationEntry[] = [
  {
    title: 'NPTEL Digital Design with Verilog — Elite Certification',
    issuer: 'IIT Guwahati (12-week course)',
    date: 'May 2026',
  },
  {
    title: 'Semiconductor Device Modeling with Sentaurus TCAD',
    issuer: 'Samsung Grade-I Fellowship · ISWDP',
    date: 'Dec 2025',
  },
  {
    title: 'Analog System Lab Kit Pro — Hardware Design Contestant',
    issuer: "Texas Instruments' Hardware Hackathon",
    date: 'Oct 2025',
  },
  {
    title: 'BYTE — Build Your Technical Edge (Analog) Certification',
    issuer: 'Texas Instruments',
    date: 'Jul 2025',
  },
];
