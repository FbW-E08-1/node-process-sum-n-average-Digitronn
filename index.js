const args = process.argv.slice(2)

const func1 = () => {
  const sum = args.slice(1).reduce((acc, cur) => parseInt(acc) + parseInt(cur))
  return sum
}

const func2 = () => {
  const sum = args.slice(1).reduce((acc, cur) => parseInt(acc) + parseInt(cur))
  const average = sum / (args.length - 1)
  return average
}

switch (args[0]) {
  case "sum":
    console.log(func1())
    break

  case "avg":
    console.log(func2())
    break

  default:
    console.log(
      "I cannot calculate that, please type either sum (to calculate the sum) or avg (To calculate the Average)"
    )
    break
}
