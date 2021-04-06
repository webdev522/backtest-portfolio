/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface BacktestDataBody {
  title: string;
  data: {
    dateRange: {
      startDate: {
        year: number;
        month: number;
        [k: string]: unknown;
      };
      endDate: {
        year: number;
        month: number;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    initialAmount: number;
    cashflows: {
      enabled: boolean;
      amount: number;
      period: string;
      [k: string]: unknown;
    };
    portfolios: {
      id: number;
      name: string;
      rebalancing: string;
      isTemp?: boolean;
      assets: {
        id: number;
        image?: string;
        ticker: string;
        weight: number;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  returns: {
    x: string;
    y: number;
    [k: string]: unknown;
  }[][];
  indicators: {
    id: number;
    cagr: number | null;
    sharpe: number | null;
    [k: string]: unknown;
  }[];
  [k: string]: unknown;
}
