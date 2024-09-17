export interface FinishedOrders {
    id: number;
    product :string;
    material:string;
    price: string;
    date?: Date;
    userId: number;
    status: 'cancelled' | 'done' | null;
    products: number[] | null;
  }