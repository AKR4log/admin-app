const ContainerDefault = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <form>
        <div className="space-y-12">{children}</div>
      </form>
    </>
  );
};
export default ContainerDefault;
