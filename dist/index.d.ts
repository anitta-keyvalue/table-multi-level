import React from 'react';

interface ThemeProps {
    colors?: {
        background?: string;
        primaryColor?: string;
        textColor?: string;
        borderColor?: string;
    };
    table?: {
        header?: {
            background?: string;
            textColor?: string;
            borderColor?: string;
        };
        cell?: {
            textColor?: string;
            borderColor?: string;
            nestedPadding?: string;
        };
        row?: {
            levelColors?: {
                background: string;
            }[];
        };
        filter?: {
            background?: string;
            textColor?: string;
            borderColor?: string;
            focusBorderColor?: string;
            placeholderColor?: string;
        };
    };
    pagination?: {
        button?: {
            background?: string;
            textColor?: string;
            disabledOpacity?: string;
        };
        select?: {
            background?: string;
            textColor?: string;
            borderColor?: string;
        };
        info?: {
            textColor?: string;
        };
    };
    expandIcon?: {
        color?: string;
    };
}

/**
 * Props for the Pagination component
 * @interface PaginationProps
 * @property {boolean} canPreviousPage - Whether previous page navigation is available
 * @property {boolean} canNextPage - Whether next page navigation is available
 * @property {number[]} pageOptions - Array of available page numbers
 * @property {number} pageCount - Total number of pages
 * @property {number} pageIndex - Current page index
 * @property {(page: number) => void} gotoPage - Function to navigate to a specific page
 * @property {() => void} nextPage - Function to navigate to next page
 * @property {() => void} previousPage - Function to navigate to previous page
 * @property {number} pageSize - Number of items per page
 * @property {(size: number) => void} setPageSize - Function to change page size
 * @property {ThemeProps} theme - Theme properties
 */
interface PaginationProps {
    canPreviousPage: boolean;
    canNextPage: boolean;
    pageOptions: number[];
    pageCount: number;
    pageIndex: number;
    gotoPage: (page: number) => void;
    nextPage: () => void;
    previousPage: () => void;
    pageSize: number;
    setPageSize: (size: number) => void;
    theme: ThemeProps;
}

interface Column {
    key: string;
    title: string;
    filterable?: boolean;
    render?: (value: string | number, item: DataItem) => React.ReactNode;
    sortable?: boolean;
    customSortFn?: (rowA: DataItem, rowB: DataItem, columnId: string) => number;
}
interface DataItem {
    id: number;
    name: string;
    value: number;
    status: 'Active' | 'Inactive' | 'Pending';
    children?: DataItem[];
}

/**
 * Props for the MultiLevelTable component
 * @interface MultiLevelTableProps
 * @property {DataItem[]} data - Array of data items to display in the table
 * @property {Column[]} columns - Array of column configurations
 * @property {number} [pageSize=10] - Number of items per page
 * @property {ThemeProps} theme - Theme properties
 */
interface MultiLevelTableProps {
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
}
/**
 * A multi-level table component that supports hierarchical data, sorting, filtering, and pagination
 * @component
 * @param {MultiLevelTableProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
declare const MultiLevelTable: React.FC<MultiLevelTableProps>;

export { MultiLevelTable };
export type { MultiLevelTableProps };
