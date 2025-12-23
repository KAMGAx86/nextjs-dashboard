// permet d'afficher loading pendant que les donnees charge
//c'est un fihcier special de Nextjs

import DashboardSkeleton from "@/app/ui/skeletons";

export default function Loading() {
  return <DashboardSkeleton/>;
}