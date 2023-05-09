const InputDefault = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div className="col-span-full">
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {title}
        </label>
        <div className="mt-2 flex flex-row">{children}</div>
        <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
      </div>
    </>
  );
};
export default InputDefault;
