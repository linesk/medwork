import axios from 'axios'
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));


export const Divisions = {
  neuro: 'Neurology',
  cardio: 'Cardiology',
  chest: 'Chest',
  nephro: 'Nephrology',
  gi: 'GI',
  nutrition: 'Nutrition',
  id: 'ID',
  endo: 'Endocrine',
  hemato: 'Hematology',
  air: 'Rheumatology',
  skin: 'Dermatology',
  toxico: 'Toxicology',
}
export const FromDivisions = {
  Sx: 'Surgery',
  OBGY: 'OB Gyne',
  Ortho: 'Orthopedics',
  ENT: 'ENT',
  Psychi: 'Psychiatry',
  Eye: 'Ophthalmology',
  Palli: 'Palliative',
  Xray: 'Radiology',
  Ped: 'Pediatrics',
  Other: 'Other'
}
