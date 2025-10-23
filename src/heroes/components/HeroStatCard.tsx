import type { FC, JSX, PropsWithChildren } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props extends PropsWithChildren {
  title: string;
  icon: JSX.Element;
}

export const HeroStatCard: FC<Props> = ({ title, icon, children }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
       {children}
      </CardContent>
    </Card>
  );
};
