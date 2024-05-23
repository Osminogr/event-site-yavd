import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { useState, useEffect } from 'react'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';


type Project = {
  title: string,
  description: string,
  logo: string,
  has_coment: string,
  type: string,
  format: string,
  id: string
}

type Data = {
  values: string[]
}



export default function CardList() {
    const [data, setData] = useState<Data | null>(null)
    const [isLoading, setLoading] = useState(true)

    
    useEffect(() => {
        fetch('https://sheets.googleapis.com/v4/spreadsheets/1-k5377-a6UBrOr8JwrxwVrrdXZoAXedhQ59s5Ky6FSY/values/cat?&key=AIzaSyDCE1z3wcbR4a0HwoJTqdnElivojf3mvyY')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
      }, [])

      if (isLoading) return <p>Loading...</p>
      if (!data) return <p>No data</p>

      let test_list = []
      for (const item of data['values']) {
        const obj  = {
          title: item[0],
          description: item[3],
          logo: item[4],
          has_coment: item[6],
          type: item[1],
          format: item[2],
          id: item[8]
        }
        test_list.push(obj)
      
      }
      console.log(test_list)


  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-6">
      {test_list.map((item, index) => (
        
        <Card shadow="md" key={index} isPressable onPress={() => console.log("item pressed")}>
        <CardBody className="overflow-visible p-0 relative">
        <a href={`/project/${item.id}`}>
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={item.title}
            className="w-full object-cover h-[200px]"
            src={item.logo}

          />
          </a>
        </CardBody>
        <CardFooter className={`text-small justify-between ${item.has_coment == 'TRUE' && 'text-green-500'}`}>
          <b>{item.title}</b>
          <p className="text-default-500">{item.type}</p>
        </CardFooter>
      </Card>
      
      ))}
    </div>
  );
}
