import React from 'react';
import type { Cell } from 'react-table';
import type { ThemeProps } from '../types/theme';
import type { DataItem } from '../types/types';
import '../styles/TableCell.css';
/**
 * Props for the TableCell component
 * @interface TableCellProps
 * @property {Cell<DataItem>} cell - Cell data from react-table
 * @property {boolean} hasChildren - Whether the row has child rows
 * @property {boolean} isExpanded - Whether the row is expanded
 * @property {() => void} onToggle - Function to toggle row expansion
 * @property {number} [paddingLeft=0] - Left padding for nested cells
 * @property {ThemeProps} theme - Theme properties
 * @property {React.ReactNode} [expandIcon] - Custom expand icon
 * @property {boolean} [selectable=false] - Whether the cell is selectable
 * @property {boolean} [isRowSelected=false] - Whether the row is selected
 * @property {(rowId: number) => void} [onRowSelect] - Function to select a row
 * @property {number} [rowId] - ID of the row
 */
interface TableCellProps {
    cell: Cell<DataItem>;
    hasChildren: boolean;
    isExpanded: boolean;
    onToggle: () => void;
    paddingLeft?: number;
    theme: ThemeProps;
    expandIcon?: React.ReactNode;
    selectable?: boolean;
    isRowSelected?: boolean;
    onRowSelect?: (rowId: number) => void;
    rowId?: number;
}
/**
 * Renders a table cell with support for expand/collapse icons
 * @component
 * @param {TableCellProps} props - Component props
 * @returns {JSX.Element} Rendered table cell
 */
export declare const TableCell: React.FC<TableCellProps>;
export {};
