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

interface ConsultDataType {
  id: number,
  hn: string,
  name: string,
  dx: string,
  consult: string,
  ward: string,
  from: string,
  to: string,
  status: string,
  urgency: number,
  time: number,
  consultant?: string
}

const ConsultTransform: (data: any) => ConsultDataType = (data) => {
  return {
    id: parseInt(data.id),
    hn: data.hn,
    name: data.name,
    dx: data.dx,
    consult: data.consult,
    ward: data.ward,
    from: data.consult_from,
    to: data.consult_to,
    status: (parseInt(data.status) == 0 ? 'pending' : 'on service'),
    urgency: data.urgency,
    time: Date.parse(data.time)/1000
  }
}

export const getConsultData = async (limit = 20) => {
  // Use Endpoint
  let ConsultAPI:string | boolean = ''
  if (import.meta.env.DEV) {
    ConsultAPI = import.meta.env.VITE_API_ENDPOINT_LOCAL ?? ''
  } else {
    ConsultAPI = import.meta.env.VITE_API_ENDPOINT ?? ''
  }
  let data = {}
  try {
    const res = await axios.get(ConsultAPI + '/consults', {
      params: {
        limit
      },
      // headers: {
      //   Authorization: localStorage.getItem('medwork-auth') ?? ''
      // }
    })
    if (res.data.error) {
      return null
    }
    else {
      data = res.data
    }
  } catch (e) {
    console.error(e)
  }
  const ConsultData: Array<ConsultDataType> = Object.values(data).map(e => ConsultTransform(e))
  
  ConsultData.sort((a, b) => (b.id - a.id))
  console.log(ConsultData)
  return ConsultData
}
