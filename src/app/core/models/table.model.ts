export interface Table {
    id: number;
    tableNumber: number;
    maxSeating: number;
    isDeleted: boolean;
    isReserved: boolean;
    lastUpdatedDateTime: string;
}

export interface GetTableByIdResponse
{
    table: Table
}

export interface GetTablesResponse
{
    tables: Table[]
}
