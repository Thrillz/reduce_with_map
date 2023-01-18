const arr1 = [{name: 'vic', goals: 43, assists: 2},
              {name: 'kev', goals: 13, assists: 0},
             {name: 'sally', goals:1, assists: 5}]


const arr2 = [{name: 'vic', goals: 23, assists: 3},
              {name: 'kev', goals: 33, assists: 1},
              {name: 'sally', goals:10, dribbles: 5}]


function addit(...dataarray) {
  const res = dataarray.flat()
  const tally = res.reduce((begin, val) => {
    
    const { name, ...points } = val;
    if (!begin.has(name)) {
      
      begin.set(name, [points])
    }
    else {
      begin.get(name).map((e) => {
        for (const k in points) {
          if (e[k]) {
            e[k] += points[k]
          } else {
            e[k] = points[k]
          }
        }
      })
    }
    return begin
  }, new Map())

  let ks = {}
  tally.forEach((v,k) => {
    object = Object.assign({}, ...v)
    ks[k] = object
  })

  return ks
  }

console.table(addit(arr1, arr2))