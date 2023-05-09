import { ChartPieIcon, ChatBubbleBottomCenterIcon, CpuChipIcon, InboxStackIcon, RectangleGroupIcon, TagIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import ItemNavBar from "./navbar.item";

const NavBar = () => {
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <ItemNavBar url="/main/home">
              <ChartPieIcon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Статистика</span>
            </ItemNavBar>
            <ItemNavBar url="/main/products">
              <InboxStackIcon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Продукты</span>
            </ItemNavBar>
            <ItemNavBar url="/main/messages">
              <ChatBubbleBottomCenterIcon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Сообщения</span>
            </ItemNavBar>
            <ItemNavBar url="/main/presentation">
              <RectangleGroupIcon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Домашняя страница</span>
            </ItemNavBar>
            <ItemNavBar url="/main/users">
              <UserGroupIcon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Пользователи</span>
            </ItemNavBar>
            <ItemNavBar url="/main/categories">
              <TagIcon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Категории</span>
            </ItemNavBar>
            <ItemNavBar url="/main/brands">
              <CpuChipIcon className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Бренды</span>
            </ItemNavBar>
          </ul>
        </div>
      </aside>
    </>
  );
};
export default NavBar;
