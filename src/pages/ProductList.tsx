import {
    ProductListBody,
    ProductListContainer,
    ProductListFilterTopBtnText,
    ProductListFilterTopWrapper,
    ProductListHeader,
    ProductListHeaderContent,
    ProductListHeaderDiscription,
    ProductListHeaderTitle,
    ProductListSection,
    ProductListWrapper,
} from "../componets/style/ProductList.style";
import WindowIcon from "@mui/icons-material/Window";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import TableRowsIcon from "@mui/icons-material/TableRows";
import TableRowsOutlinedIcon from "@mui/icons-material/TableRowsOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import type { IProduct } from "../types/Product";
import { useState } from "react";
import ProductItem from "../componets/ProductItem/ProductItem";

const ProductList = ({
    headerImage,
    headerTitle,
    headerDescription,
    isBanner = false,
    products,
}: {
    headerImage?: string;
    headerTitle: string;
    headerDescription?: string;
    isBanner?: boolean;
    products: IProduct[];
}) => {
    const [view, setView] = useState<"grid" | "list">("grid");

    return (
        <ProductListSection>
            {isBanner ? (
                <ProductListHeader
                    style={{
                        backgroundImage: `url(${headerImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                        color: "#fff",
                    }}>
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(0,0,0,0.4)",
                        }}></div>

                    <ProductListHeaderContent
                        style={{
                            position: "relative",
                            zIndex: 1,
                            padding: "2rem",
                        }}>
                        <ProductListHeaderTitle>
                            {headerTitle}
                        </ProductListHeaderTitle>
                        <ProductListHeaderDiscription>
                            {headerDescription}
                        </ProductListHeaderDiscription>
                    </ProductListHeaderContent>
                </ProductListHeader>
            ) : (
                <h2 className="product-list-title">{headerTitle}</h2>
            )}
            <ProductListBody>
                {/* <ProductListFilterContainer>Filter</ProductListFilterContainer> */}
                <ProductListWrapper>
                    <ProductListFilterTopWrapper>
                        <p className="product-list-filter-top-size-text">
                            {products.length} products
                        </p>
                        <div className="product-list-filter-top">
                            <div className="product-list-filter-top-view">
                                <ProductListFilterTopBtnText
                                    onClick={() => setView("grid")}
                                    active={view === "grid"}>
                                    {view === "grid" ? (
                                        <WindowIcon />
                                    ) : (
                                        <WindowOutlinedIcon />
                                    )}
                                </ProductListFilterTopBtnText>
                                <ProductListFilterTopBtnText
                                    onClick={() => setView("list")}
                                    active={view === "list"}>
                                    {view === "list" ? (
                                        <TableRowsIcon />
                                    ) : (
                                        <TableRowsOutlinedIcon />
                                    )}
                                </ProductListFilterTopBtnText>
                            </div>
                            <div className="product-list-filter-top-btn">
                                <p className="product-list-filter-top-btn-text">
                                    Best selling
                                </p>
                                <ArrowDropDownOutlinedIcon />
                            </div>
                        </div>
                    </ProductListFilterTopWrapper>
                    <ProductListContainer view={view}>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <ProductItem
                                    product={product}
                                    key={product._id}
                                    view={view}
                                />
                            ))
                        ) : (
                            <p>No products found.</p>
                        )}
                    </ProductListContainer>
                </ProductListWrapper>
            </ProductListBody>
        </ProductListSection>
    );
};

export default ProductList;
