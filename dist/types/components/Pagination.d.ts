import React from 'react';
import type { ThemeProps } from '../types/theme';
import '../styles/Pagination.css';
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
export interface PaginationProps {
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
/**
 * Renders pagination controls for the table
 * @component
 * @param {PaginationProps} props - Component props
 * @returns {JSX.Element} Rendered pagination controls
 */
export declare const Pagination: React.FC<PaginationProps>;
