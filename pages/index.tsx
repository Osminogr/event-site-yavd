import { Link, Snippet, Code, button as buttonStyles } from "@nextui-org/react";

import DefaultLayout from "@/layouts/default";
import CardList from "@/components/card-list";
import {Divider} from "@nextui-org/divider";


export default function IndexPage() {
  
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-100 md:text-5xl lg:text-6xl dark:text-white">Каталог проектов</h1>
        <Divider />
        <p className="text-gray-300">Здесь вы можете найти все проекты представленные на мероприятии!</p>
        <p className="text-gray-300">Команда КОП будет оставлять коментарии к пройденым станциям, так что не забывайте обновлять страницу.</p>
        <p className="text-gray-300">Проекты к которым уже имеется отчет будут выделены зеленым цветом</p>
        <Divider />
        <CardList />
      </section>
    </DefaultLayout>
  );
}
