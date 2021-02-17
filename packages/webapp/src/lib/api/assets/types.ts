// Generated by https://quicktype.io

export type Asset = {
  id: number
  ticker: string
  name: string
  description: string
  sector: string
  ipo_date: string
  image: string
  is_etf: boolean
  asset_meta: AssetMeta
  sector_weightings: SectorWeighting[]
}

export type AssetMeta = {
  id: number
  price: number
  market_cap: number
  is_tracking: boolean
  changes: number
}

export type SectorWeighting = {
  id: number
  sector: string
  percentage: number
}

export type RawHistoricalPrice = [
  string,
  number,
  number,
  number,
  number,
  number
]
export type HistoricalPrice = {
  date: string
  high: number
  low: number
  open: number
  close: number
  adjustedClose: number
}
