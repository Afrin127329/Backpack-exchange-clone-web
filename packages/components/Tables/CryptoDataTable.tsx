"use client";

import { CaretSortIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import * as React from "react";

import { Button } from "@/packages/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/packages/components/ui/dropdown-menu";
import { Input } from "@/packages/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/packages/components/ui/table";
import { HistoricalPriceChart } from "@/packages/lib/useHistoricalData";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { DetailedCryptoData } from "../../lib/type";

// const data: Payment[] = [
//   {
//     id: "m5gr84i9",
//     amount: 316,
//     status: "success",
//     email: "ken99@yahoo.com",
//   },
//   {
//     id: "3u1reuv4",
//     amount: 242,
//     status: "success",
//     email: "Abe45@gmail.com",
//   },
//   {
//     id: "derv1ws0",
//     amount: 837,
//     status: "processing",
//     email: "Monserrat44@gmail.com",
//   },
//   {
//     id: "5kma53ae",
//     amount: 874,
//     status: "success",
//     email: "Silas22@gmail.com",
//   },
//   {
//     id: "bhqecj4p",
//     amount: 721,
//     status: "failed",
//     email: "carmella@hotmail.com",
//   },
// ];

// export type Payment = {
//   id: string;
//   amount: number;
//   status: "pending" | "processing" | "success" | "failed";
//   email: string;
// };

export const columns: ColumnDef<DetailedCryptoData>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name = row.original.name;
      const symbol = row.original.symbol;
      const image = row.original.image as string | StaticImport;

      return (
        <div className=" flex items-center gap-4">
          <div className="relative flex-none overflow-hidden rounded-full border border-zinc-200 dark:border-zinc-800 w-[40px] h-[40px]">
            <Image src={image} width={40} height={40} alt={`${name} logo`} />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-base dark:text-baseTextHighEmphasis font-bold whitespace-nowrap">
              {name}
            </span>
            <span className="text-xs uppercase flex-medium text-left leading-5 text-baseTextMedEmphasis">
              {symbol}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "current_price",
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="cursor-pointer dark:hover:text-zinc-400 hover:text-zinc-600 flex items-center gap-2"
        >
          <span>Price</span>
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </div>
      );
    },
    cell: ({ row }) => {
      const price = row.original.current_price;
      return <div className="lowercase text-base">${price}</div>;
    },
  },
  {
    accessorKey: "Market Cap",
    header: "Market Cap",
    cell: ({ row }) => {
      let marketCap: any = row.original.market_cap;
      const amount = parseFloat(marketCap);

      const formatNumber = (num: number) => {
        let formattedNumber;

        if (num >= 1e12) {
          formattedNumber = (num / 1e12).toFixed(2) + "T";
        } else if (num >= 1e9) {
          formattedNumber = (num / 1e9).toFixed(2) + "B";
        } else if (num >= 1e6) {
          formattedNumber = (num / 1e6).toFixed(2) + "M";
        } else {
          formattedNumber = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(num);
          return formattedNumber;
        }

        return "$" + formattedNumber;
      };
      const formatted = formatNumber(amount);

      return <div className="font-medium text-base">{formatted}</div>;
    },
  },
  {
    accessorKey: "24 Volume",
    header: "24h Volume",
    cell: ({ row }) => {
      // @ts-ignore
      const totalVolume = parseFloat(row.original.total_volume);
      const formatVolume = (volume: number) => {
        if (volume >= 1e9) {
          return (volume / 1e9).toFixed(1) + "B";
        } else if (volume >= 1e6) {
          return (volume / 1e6).toFixed(1) + "M";
        } else if (volume >= 1e3) {
          return (volume / 1e3).toFixed(1) + "K";
        }
        return volume;
      };

      const formattedVolume = formatVolume(totalVolume);
      return <div className="font-medium text-base">${formattedVolume}</div>;
    },
  },
  {
    accessorKey: "Change in 24h",
    header: "24h Change",
    cell: ({ row }) => {
      const change24h = row.original.price_change_percentage_24h;
      const textColor = change24h < 0 ? "text-redText" : "text-greenText";
      const formattedChange =
        change24h > 0 ? `+${change24h.toFixed(2)}` : change24h.toFixed(2);

      return (
        <div>
          <div className={`font-medium ${textColor} text-base`}>
            {formattedChange}%
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "Last 7 days",
    header: "Last 7 days",
    cell: ({ row }) => {
      const coinId = row.original.id;

      return (
        <div className="font-medium text-base">
          {/* <CryptoPriceChart cryptoData={coinId} /> */}
          {coinId && <HistoricalPriceChart coinId={coinId} />}
        </div>
      );
    },
  },

  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const payment = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <DotsHorizontalIcon className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];

// @ts-ignore
export function CryptoDataTable({ data }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4 justify-evenly gap-2">
        <div className="text-xl mr-4 font-bold bg-blue-600/[16%] text-blueText p-2 rounded-lg">
          Spot
        </div>
        <Input
          placeholder="Search..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id === "current_price" ? "price" : column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border border-zinc-200 dark:border-zinc-800">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-baseBackgroundL1"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border border-zinc-200 dark:border-zinc-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-baseBackgroundL1"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      <Link href={`/trade/${row.original.name}`}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Link>
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing {table.getRowCount()} of{" "}
          {table.getFilteredRowModel().rows.length} row(s).
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
