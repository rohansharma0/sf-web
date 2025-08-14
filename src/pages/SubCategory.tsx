import { useQuery } from "@tanstack/react-query";
import ProductList from "./ProductList";
import type { ISubCategory } from "../types/SubCategory";
import { useParams } from "react-router";
import { subCategoryService } from "../services/subcategory.services";

const SubCategory = () => {
    const { id } = useParams<{ id: string }>();

    const {
        data: subCategory,
        isLoading,
        isError,
    } = useQuery<ISubCategory | null>({
        queryKey: ["subCategory", id],
        queryFn: () => subCategoryService.getSubCategoryById(id!),
        enabled: !!id,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !subCategory) {
        return <div>Sub Category not found.</div>;
    }

    return (
        <ProductList
            headerImage={subCategory.image}
            headerTitle={subCategory.title}
            headerDescription={subCategory.description}
            isBanner={subCategory.isBanner}
            products={subCategory.products}
        />
    );
};

export default SubCategory;
