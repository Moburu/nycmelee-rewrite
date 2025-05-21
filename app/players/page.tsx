'use client'

import LoadingSpinner from '@/components/LoadingSpinner'
import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const supabase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('entrant').select().limit(10)
      console.log(data)
      setNotes(data)
      setLoading(false)
    }
    getData()
  }, [])

  return (
    <pre>
        {loading ? <LoadingSpinner /> :
        JSON.stringify(notes, null, 2)}
    </pre>
    )
}
