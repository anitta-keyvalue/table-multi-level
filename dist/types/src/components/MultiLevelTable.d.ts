import React from "react";
import type { PaginationProps } from "./Pagination";
import type { ThemeProps } from "../types/theme";
import type { Column, DataItem } from "../types/types";
import "../styles/MultiLevelTable.css";
/**
 * Props for the MultiLevelTable component
 * @interface MultiLevelTableProps
 * @property {DataItem[]} data - Array of data items to display in the table
 * @property {Column[]} columns - Array of column configurations
 * @property {number} [pageSize=10] - Number of items per page
 * @property {ThemeProps} theme - Theme properties
 * @property {(row: DataItem) => void} [onRowClick] - Optional callback function when a parent row is clicked
 */
export interface MultiLevelTableProps {
    data: DataItem[];
    columns: Column[];
    pageSize?: number;
    theme?: ThemeProps;
    renderCustomPagination?: (props?: PaginationProps) => React.ReactNode;
    sortable?: boolean;
    ascendingIcon?: React.ReactNode;
    descendingIcon?: React.ReactNode;
    expandIcon?: React.ReactNode;
    selectable?: boolean;
    onSelectionChange?: (selectedRows: Set<string | number>) => void;
    onRowClick?: (row: DataItem) => void;
}
/**
 * A multi-level table component that supports hierarchical data, sorting, filtering, and pagination
 * @component
 * @param {MultiLevelTableProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
export declare const MultiLevelTable: React.FC<MultiLevelTableProps>;
