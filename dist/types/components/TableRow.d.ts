import React from "react";
import type { Row } from "react-table";
import type { ThemeProps } from "../types/theme";
import type { Column, DataItem } from "../types/types";
import "../styles/TableRow.css";
/**
 * Props for the TableRow component
 * @interface TableRowProps
 * @property {Row<DataItem> | DataItem} row - Row data from react-table or direct data item
 * @property {Column[]} columns - Array of column configurations
 * @property {boolean} hasChildren - Whether the row has child rows
 * @property {boolean} isExpanded - Whether the row is expanded
 * @property {() => void} onToggle - Function to toggle row expansion
 * @property {number} [level=0] - Nesting level of the row
 * @property {ThemeProps} theme - Theme properties
 * @property {React.ReactNode} [expandIcon] - Custom expand icon
 * @property {boolean} [selectable=false] - Whether the row is selectable
 * @property {boolean} [isRowSelected=false] - Whether the row is selected
 * @property {(rowId: number) => void} [onRowSelect] - Function to select a row
 */
interface TableRowProps {
    row: Row<DataItem> | DataItem;
    columns: Column[];
    hasChildren: boolean;
    isExpanded: boolean;
    onToggle: () => void;
    level?: number;
    theme: ThemeProps;
    expandIcon?: React.ReactNode;
    selectable?: boolean;
    isRowSelected?: boolean;
    onRowSelect?: (rowId: number) => void;
}
/**
 * Renders a table row with support for nested rows and expansion
 * @component
 * @param {TableRowProps} props - Component props
 * @returns {JSX.Element} Rendered table row
 */
export declare const TableRow: React.FC<TableRowProps>;
export {};
