import CategoryDetail from "@/pages/main/category/detail/page";

const CategoryDetailPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <main>
      <CategoryDetail id={id} />
    </main>
  );
};

export default CategoryDetailPage;
