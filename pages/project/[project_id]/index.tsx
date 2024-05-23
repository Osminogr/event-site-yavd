import { Link, Snippet, Code, button as buttonStyles } from "@nextui-org/react";

import DefaultLayout from "@/layouts/default";
import {Divider} from "@nextui-org/divider";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { link } from "fs";
import { KopComent } from "@/components/kop-coment";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import { loadProjectInfo } from "next/dist/build/webpack-config";

type Data = {
  values: string[]
}

interface ProjectInfo  {
  title: string | null,
  description: string | null,
  logo: string | undefined,
  has_coment: string | null,
  type: string | null,
  format: string | null,
  comment: string | null,
  link: string | null,
  id: string | null,
  full_description: string | null
}

export default function ProjectPage() {
    const router = useRouter()

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
      for (const item of data.values) {
        const obj  = {
          title: item[0],
          description: item[3],
          logo: item[4],
          has_coment: item[6],
          type: item[1],
          format: item[2],
          comment: item[7],
          link: item[5],
          id: item[8],
          full_description: item[9]
        }
        test_list.push(obj)
      
      }

      let now_project_info = {} as ProjectInfo
      for (const project_data of test_list) {
        if (project_data.id == router.query.project_id?.toString()) {
            now_project_info = project_data
        } else {
            
        }
      console.log(now_project_info)
      }
  return (
    <DefaultLayout>
        <Breadcrumbs>
      <BreadcrumbItem href='/'>Проекты</BreadcrumbItem>
      <BreadcrumbItem>{now_project_info.title}</BreadcrumbItem>
        </Breadcrumbs>
      <section className="flex justify-center items-center grid-cols-8 sm:grid-cols-8 gap-4 p-2">
            <Card
            isFooterBlurred
            radius="lg"
            className="border-none col-span-8"
            >
            <Image
                alt="logo"
                className="object-cover "
                height={300}
                src={now_project_info.logo}
                width={300}
            />
            </Card>
      </section>
      <Divider />
      <section className="flex justify-center items-center grid-cols-8 sm:grid-cols-8 gap-4 p-2">
      <h1 className="col-span-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl dark:text-white text-center">{now_project_info.title}</h1>
      <p className="col-span-4 text-gray-300">{now_project_info.description}</p>
      </section>
      <Divider />

      {now_project_info.has_coment == 'TRUE' && <KopComent>{now_project_info.comment}</KopComent>}

      <section className="grid grid-cols-8 gap-4 p-4 m-4">
        <div className="col-span-8" >
            <div className="blur-none">
            <h1 className="text-2xl text-center">О проекте</h1>
            <Divider />
            <p className="p-2">
                {now_project_info.full_description}
            </p>
            </div>
        </div>
      </section>
      

    </DefaultLayout>
  );
}
