import { createContext } from "react";

export const CategoryContext = createContext({
    selectedItem: null,
    setSelectedItem: null,
});

export const SubCategoryContext = createContext({
    selectedItem: null,
    setSelectedItem: null,
});
