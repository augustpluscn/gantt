import * as fs from 'fs/promises';

const versionApi = {
  read: () => fs.readFile('./version.json'),
  write: (str) => fs.writeFile('./version.json', str)
}
const packageApi = {
  read: () => fs.readFile('./package.json'),
  write: (str) => fs.writeFile('./package.json', str)
}

// 版本号修改
function updateVersionTool(resData) {
  resData = JSON.parse(resData.toString())
  const versionArr = resData.version.split('.')

  versionArr[2] = Number(versionArr[2]) + new Date().getTime()

  resData.version = versionArr.toString().replace(/,/g, '.')

  return resData
}

// 修改版本
async function updateVersion() {
  try {
    // 修改package.json下面的版本号
    const packData = await packageApi.read()
    const pack = updateVersionTool(packData)
    const version = pack.version

    // 统一版本号，用package控制
    const versionJson = await versionApi.read()
    const versionData = JSON.parse(versionJson.toString())
    versionData.version = version

    // 写入版本文件
    await packageApi.write(JSON.stringify(pack))
    await versionApi.write(JSON.stringify(versionData))

    console.log('最新版本号：' + version)
  } catch (e) {
    console.log(e)
    return new Error(e)
  }
}
updateVersion()
