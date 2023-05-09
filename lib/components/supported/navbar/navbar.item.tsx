import Link from "next/link";

const ItemNavBar = ({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <li>
        <Link
          href={url}
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {children}
        </Link>
      </li>
    </>
  );
};
export default ItemNavBar;
