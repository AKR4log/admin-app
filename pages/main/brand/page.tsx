import ListBrands from "@/lib/components/workshop/supported/container/list/list-brands";
import Link from "next/link";

export default function BrandPage() {
  return (
    <>
      <div className="flex w-auto flex-row content-end ">
        <Link href={'/main/brands/workshop'} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Создать Бренд</Link>
      </div>
      <ListBrands />
    </>
  );
}
