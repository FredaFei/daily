export const getAmount = (records:Array<RecordItemProps>) => {
  return records.reduce((sum, record) => {
    sum += record.amount
    return sum
  }, 0)
}