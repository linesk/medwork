import axios from 'axios'
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

let ConsultAPI:string | boolean = ''
if (import.meta.env.DEV) {
  ConsultAPI = import.meta.env.VITE_API_ENDPOINT_LOCAL ?? ''
} else {
  ConsultAPI = import.meta.env.VITE_API_ENDPOINT ?? ''
}

interface ConsultDataType {
  id: number,
  HN: string,
  name: string,
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
    name: data.name,
    gender: 'male', //data.gender,
    dob: 861062400000,
    ward: data.ward,
    from: data.consult_from,
    to: data.consult_to,
    detail: data.detail,
    dx: data.dx,
    consult: data.consult, // Consult for?
    tel: data.tel,
    consultee: data.consultee,
    status: (parseInt(data.status) == 0 ? 'pending' : 'on service'),
    urgency: data.urgency,
    time: Date.parse(data.time)/1000
  }
}

export const findConsultCode = async (code: string) => {
  const HN = code.slice(0, 6)
  const Id = parseInt(code.slice(7), 16)
  await delay(2000)
  console.log('HN: '+HN+', Id: '+Id)
  try {
    const res = await axios.get(ConsultAPI+'/find-consult-hn', {
      params: {
        HN,
      }
    })
    if (res?.data == []) {
      return {}
    } else {
      // transform data before return
      return Object.values(res?.data).map(e=>ConsultTransform(e))
    }
  } catch (err) {
    console.error(err)
  }
  return {}
}

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
