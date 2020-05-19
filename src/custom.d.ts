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
  amount: number
  costType: 0 | 1
  date: string
  note: string
}

interface PagedResources<T> {
  pageNum: number;
  pageSize: number;
  totalPage: number;
  data: T[];
}
interface CostType {
  id: string
  icon: string
  name: string
  costType: 0 | 1
  userId: string
}
interface Resource<T> {
  data: T
}