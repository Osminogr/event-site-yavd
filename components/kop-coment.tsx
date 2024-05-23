import { Divider } from "@nextui-org/react";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const KopComent: FC<Props> = ({ children }) => {
    return (
    <section className="grid grid-cols-8 gap-4 p-4 m-4">
        <div className="col-span-4 border-solid border-2 border-green-600 rounded-lg p-4" >
            <div className="blur-none">
            <h1 className="text-2xl text-center">Коментарий КОП</h1>
            <Divider />
            <p className="p-2">
                {children}
            </p>
            </div>
            </div>

      </section>
  );
}
