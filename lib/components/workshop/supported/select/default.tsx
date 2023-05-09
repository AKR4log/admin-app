const DefaultSelect = ({ title, array }: { title: string; array: [] }) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="brand"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {title}
          </label>
          <div className="mt-2">
            <select
              id="brand"
              name="brand"
              autoComplete="brand-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              {array.map((val: any) => {
                return <option id={val.id}>{val.name}</option>;
              })}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};
export default DefaultSelect;
