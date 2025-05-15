import React from "react";
import type { HeaderGroup } from "react-table";
import type { ThemeProps } from "../types/theme";
import type { DataItem } from "../types/types";
import "../styles/TableHeader.css";
/**
 * Props for the TableHeader component
 * @interface TableHeaderProps
 * @property {HeaderGroup<DataItem>[]} headerGroups - Array of header groups from react-table
 * @property {ThemeProps} theme - Theme properties
 * @property {boolean} [sortable=false] - Whether the table is sortable
 * @property {React.ReactNode} [ascendingIcon] - Custom icon for ascending sort
 * @property {React.ReactNode} [descendingIcon] - Custom icon for descending sort
 * @property {boolean} [selectable=false] - Whether the table is selectable
 * @property {boolean} [isAllSelected=false] - Whether all rows are selected
 * @property {() => void} [onSelectAll] - Function to select all rows
 */
interface TableHeaderProps {
    headerGroups: HeaderGroup<DataItem>[];
    theme: ThemeProps;
    sortable?: boolean;
    ascendingIcon?: React.ReactNode;
    descendingIcon?: React.ReactNode;
    selectable?: boolean;
    isAllSelected?: boolean;
    onSelectAll?: () => void;
}
/**
 * Renders the table header with support for sorting and filtering
 * @component
 * @param {TableHeaderProps} props - Component props
 * @returns {JSX.Element} Rendered table header
 */
export declare const TableHeader: React.FC<TableHeaderProps>;
export {};
