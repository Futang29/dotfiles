
      try {
        (function $o({contextBridge:To,ipcRenderer:Oo}){if(!Oo)return;Oo.on("__ELECTRON_LOG_IPC__",(Lo,Mo)=>{window.postMessage({cmd:"message",...Mo})}),Oo.invoke("__ELECTRON_LOG__",{cmd:"getOptions"}).catch(Lo=>console.error(new Error(`electron-log isn't initialized in the main process. Please call log.initialize() before. ${Lo.message}`)));const Do={sendToMain(Lo){try{Oo.send("__ELECTRON_LOG__",Lo)}catch(Mo){console.error("electronLog.sendToMain ",Mo,"data:",Lo),Oo.send("__ELECTRON_LOG__",{cmd:"errorHandler",error:{message:Mo==null?void 0:Mo.message,stack:Mo==null?void 0:Mo.stack},errorName:"sendToMain"})}},log(...Lo){Do.sendToMain({data:Lo,level:"info"})}};for(const Lo of["error","warn","info","verbose","debug","silly"])Do[Lo]=(...Mo)=>Do.sendToMain({data:Mo,level:Lo});if(To&&process.contextIsolated)try{To.exposeInMainWorld("__electronLog",Do)}catch{}typeof window=="object"?window.__electronLog=Do:__electronLog=Do})(require('electron'));
      } catch(e) {
        console.error(e);
      }
    