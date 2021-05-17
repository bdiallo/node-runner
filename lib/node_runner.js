#{source}

(async () => {
  try {
    const args = #{args}
    const value = await #{func}(...args)
    const output = JSON.stringify(['ok', value, []])
    console.log(output)
  } catch (err) {
    console.log(JSON.stringify(['err', '' + err, err.stack]))
  }
})()
