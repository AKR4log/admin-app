import ListCategoryes from "@/lib/components/workshop/supported/container/list/list-categoryes";
import Link from "next/link";

export default function CategoryPage() {
  return (
    <>
      <div className="flex w-auto flex-row content-end ">
        <Link href={'/main/categories/workshop'} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Создать Категорию</Link>
      </div>
      <ListCategoryes />
    </>
  );
}
