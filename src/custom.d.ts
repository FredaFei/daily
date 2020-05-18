type ErrorsFor<T> = {
  [K in keyof T]?: string[]
} | null

interface CostItemProps {
  id: RecordItemProps['id']
  date: RecordItemProps['date']
  records: Array<RecordItemProps>
}
interface RecordItemProps {
  id: string
  icon: string
  name: string
  amount: string | number
  amountType: 0 | 1
  date: string
  note: string
}
interface PagedResources<T> {
  pageNum: number;
  pageSize: number;
  totalPage: number;
  data: T[];
}