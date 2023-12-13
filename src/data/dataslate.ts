import { Faction } from './faction.ts'
import { BaseOfOperations } from './baseOfOperations.ts'
import supabaseClient from '../superbaseClient.ts'
import useSystemError from '../stores/systemError.ts'
import { SpecOps } from './specOps.ts'
export interface Dataslate {
  id: number
  userId: string
  teamName: string
  faction: Faction
  reqPoints: number
  specOpsLog: number[]
  baseOfOperations: BaseOfOperations
  history?: string
  notes?: string
  quirks?: string
  selectableKeyword?: string | null
}

interface ApiResponse<Data> {
  data?: Data
  error?: string | 'Unknown error'
}

const setError = useSystemError.getState().setError

export const postDataslate = async (
  userId: string,
  teamName: string,
  faction: Faction,
  baseOfOperationsName: string,
): Promise<ApiResponse<Dataslate>> => {
  const newBaseOfOperations: BaseOfOperations = {
    userId,
    name: baseOfOperationsName,
    assetCapacity: 2,
    id: 0,
    stash: {
      availableEP: 0,
      availableEquipment: [],
    },
    strategicAssets: [],
  }

  const newDataslate: Dataslate = {
    userId,
    teamName,
    faction,
    baseOfOperations: newBaseOfOperations,
    id: 0,
    reqPoints: 4,
    specOpsLog: [],
  }

  try {
    const { data, error } = await supabaseClient
      .from('dataslate_json')
      .insert({
        user_id: userId,
        json: newDataslate,
      })
      .select()
      .single()

    if (error) return { error: error.message }

    return {
      data: {
        ...newDataslate,
        id: data.id,
      },
    }
  } catch (e) {
    return { error: 'Unknown error' }
  }
}

export const getDataslates = async (): Promise<ApiResponse<Dataslate[]>> => {
  try {
    const { data, error } = await supabaseClient.from('dataslate_json').select()

    if (error) return { error: error.message }

    return {
      data: data.map((data) => ({
        ...data.json,
        id: data.id,
      })),
    }
  } catch (e) {
    return { error: 'Unknown error' }
  }
}

export const getDataslate = async (
  dataslateId: string,
): Promise<ApiResponse<Dataslate>> => {
  try {
    const { data, error } = await supabaseClient
      .from('dataslate_json')
      .select('*')
      .eq('id', dataslateId)
      .single()

    if (error) return { error: error.message }

    return { data: { ...data.json, id: data.id } }
  } catch (e) {
    return { error: 'Unknown error' }
  }
}

export const updateDataslate = async (
  dataslate: Dataslate,
): Promise<ApiResponse<Dataslate>> => {
  try {
    const { data, error } = await supabaseClient
      .from('dataslate_json')
      .update({
        json: dataslate,
      })
      .eq('id', dataslate.id)
      .select()
      .single()

    if (error) return { error: error.message }

    return { data: data.json }
  } catch (e) {
    return { error: 'Unknown error' }
  }
}

export const deleteDataslate = async (dataslate: Dataslate) => {
  const { error } = await supabaseClient
    .from('dataslate_json')
    .delete()
    .eq('id', dataslate.id)
  if (error?.code) {
    setError(
      'To admit defeat is to blaspheme against the Emperor, but in this case I am unable to perform this action',
    )
  } else {
    window.location.href = '/'
  }
}
