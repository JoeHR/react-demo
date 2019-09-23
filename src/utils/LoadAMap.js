const MAPKEY = "71e57bcd0a410b6347130eb9985a957f"

export default class AMapLoad{

  getAMapScriptSrc(){
    return `https://webapi.amap.com/maps?v=1.4.15&key=${MAPKEY}&plugin=Map3D`
  }


  buildScriptTag(src){
    const script = document.createElement('script')
    script.type='text/javascript'
    script.async = true
    script.defer = true
    script.src = src
    return script
  }

  getAmapuiPromise(){
    const script = this.buildScriptTag(`//webapi.amap.com/ui/1.0/main-async.js`)
    const p = new Promise(resolve => {
      script.onload = () => {
        resolve()
      }
    })
    document.body.appendChild(script)
    return p
  }

  getAMapLucaPromise(){
    const script = this.buildScriptTag(`//webapi.amap.com/loca?v=1.3.2&key=${MAPKEY}`)
    const p = new Promise(resolve => {
      script.onload = () => {
        resolve()
      }
    })
    document.body.appendChild(script)
    return p
  }

  getMainPromise(){
    const script = this.buildScriptTag(this.getAMapScriptSrc())
    const p = new Promise(resolve=>{
      script.onload = ()=>{
        resolve()
      }
    })
    document.body.appendChild(script)
    return p
  }

  load(){
    return this.getMainPromise()
  }

  loadAll(){
    return Promise.all([this.getMainPromise(),this.getAMapLucaPromise()])
  }

}