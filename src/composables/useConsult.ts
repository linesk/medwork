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
    hn: data.hn,
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
  await delay(1000)
  // console.log('HN: '+HN+', Id: '+Id)
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
  const data = {...Patient.data, ...Admission, ...Consult}

  // console.log(Patient.data)
  // console.log(data)
  const res = await axios.get(ConsultAPI+'/ipd-consult', {
    params: data
  });
  // console.log(res.data);

  await delay(1000);

  return res.data;
}

export const checkConsultData = (Patient: any, Admission: any, Consult: any) => {
  const patientValues = ['hn', 'name', 'surname', 'dob']
  const admissionValues = ['ward', 'cover']
  const consultValues = ["consult_from", "consult_to", "detail", "dx", "consult", "consultee", "tel"]
  let returnVal: Array<boolean | string> = [true]

  for (const el of patientValues) {
    if (Patient.data[el] == '') {
      returnVal[0] = false
      returnVal.push(el)
    }
  }
  for (const el of admissionValues) {
    if (Admission.value[el] == '') {
      returnVal[0] = false
      returnVal.push(el)
    }
  }
  for (const el of consultValues) {
    if (Consult.value[el] == '') {
      returnVal[0] = false
      returnVal.push(el)
    }
  }
  return returnVal
}

