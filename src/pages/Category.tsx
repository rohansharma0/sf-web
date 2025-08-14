import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../services/category.services";
import ProductList from "./ProductList";
import type { ICategory } from "../types/Category";
import { useParams } from "react-router";

const Category = () => {
    const { id } = useParams<{ id: string }>();

    const {
        data: category,
        isLoading,
        isError,
    } = useQuery<ICategory | null>({
        queryKey: ["category", id],
        queryFn: () => categoryService.getCategoryById(id!),
        enabled: !!id,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !category) {
        return <div>Category not found.</div>;
    }

    return (
        <ProductList
            headerImage={category.image}
            headerTitle={category.title}
            headerDescription={category.description}
            isBanner={category.isBanner}
            products={category.products}
        />
    );
};

export default Category;
