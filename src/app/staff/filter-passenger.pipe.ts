import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filterPassenger',
})
export class FilterPassengerPipe implements PipeTransform {
  transform(
    value: any,
    FilteredCheckedInStatus: string,
    checkedInStatus: string,
  ) {
    const arr = []
    if (value.length == 0 || FilteredCheckedInStatus === '') {
      return value
    }

    for (let item of value) {
      if (
        item.checkedInStatus === FilteredCheckedInStatus
      ) {
        arr.push(item)
        console.log(arr)
      }
    }
    return arr
  }
}
