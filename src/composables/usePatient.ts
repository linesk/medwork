import axios from 'axios'
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

let PatientAPI:string | boolean = ''
if (import.meta.env.DEV) {
  PatientAPI = import.meta.env.VITE_API_ENDPOINT_LOCAL ?? ''
} else {
  PatientAPI = import.meta.env.VITE_API_ENDPOINT ?? ''
}

interface PatientDataType {
  id?: number,
  hn: string,
  prefix?: string,
  name: string,
  surname: string,
  gender: string,
  dob: number,
}

const testData: PatientDataType = {
  id: 3,
  hn: "PA4343",
  prefix: "Mr",
  name: "Jui",
  surname: "Lims",
  gender: "male",
  dob: 861062400000 
}

export const findPatient = async (HN: string) => {
  let patientData:PatientDataType | null = null
  await delay(1500)
  try {
    patientData = await axios.get(PatientAPI+'/find-hn', {
      params: {
        HN
      }
    })
  } catch (err) {
    console.error(err)
    return false
  }
  if (patientData.data.length == 0) {
    patientData.data = {
      hn: HN, 
      name: '',
      surname: '',
      gender: 'male',
      dob: 1664269142000,
      prefix: ''
    }
  }
  return patientData
}
