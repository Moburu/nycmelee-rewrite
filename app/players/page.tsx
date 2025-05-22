'use client'

import { Options } from 'react-select'
import MySelect from '@/components/MySelect'
import LoadingSpinner from '@/components/LoadingSpinner'
import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

type Option = {
  value: string;
  label: string;
}

export default function Page() {
  const [options, setOptions] = useState<Options<Option>>([])
  const [loading, setLoading] = useState<boolean>(true)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data }: any = await supabase.from('unique_entrants').select()
      const optionHolder = []
      for (let i = 0; i < data.length; i++) {
        optionHolder.push({label: data[i].tag, value: data[i].lowercase_tag})
      }
      setOptions(optionHolder)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <div className="w-screen flex flex-col">
        {loading ? <LoadingSpinner />
        : <MySelect entrants={options} />}
    </div>
    )
}
