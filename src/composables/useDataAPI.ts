import axios from 'axios'
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const addConsultData = async (Patient: any, Admission: any, Consult: any) => {
  const data = {...Patient, ...Admission, ...Consult}

  /* const res = await axios.get('http://localhost/kku/api/public/ipd-consult', {
    params: data
  });
  console.log(res.data); */

  const res = {
    data: {
      result: true
    }
  };
  await delay(3000);

  return res.data;
}

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
  HN: string,
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
    HN: data.hn,
    ward: data.ward,
    from: data.consult_from,
    to: data.consult_to,
    status: (parseInt(data.status) == 0 ? 'pending' : 'on service'),
    urgency: data.urgency,
    time: Date.parse(data.time)/1000
  }

}

export const getConsultData = async (limit = 20) => {
  let data = {}
  try {
    const res = await axios.get('http://localhost/kku/api/public/consults', {
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
