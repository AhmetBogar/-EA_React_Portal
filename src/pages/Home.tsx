import React, { useEffect, useState } from 'react'
import { getAllProducts } from './Api'


function Home() {

    const [proObj, setProObj] = useState<any>()

    useEffect( () =>{
        getAllProducts().then(res=>{
            //İşlem başarılı, datalar geldi.
            const dt=res.data
            setProObj(dt)
        }).catch(err=>{
            //İşlemde hata varsa çalışacak kodlar.
            alert('Servis Hatası Oluştu.')
        })
    },[])


  return (
    <>
        
    </>
  )
}

export default Home