function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Dashboard-DZm5qXfA.js","assets/index-BlnJFpqu.js","assets/index-DiwrgTda.css","assets/Home-BAQBDTO-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as a,_ as o,j as t,R as r,a as e,N as i,P as s}from"./index-BlnJFpqu.js";const _=a.lazy(()=>o(()=>import("./Dashboard-DZm5qXfA.js"),__vite__mapDeps([0,1,2]))),n=a.lazy(()=>o(()=>import("./Home-BAQBDTO-.js"),__vite__mapDeps([3,1,2])));function u(){return t.jsxs(r,{children:[t.jsx(e,{path:"/",element:t.jsx(i,{to:s.PRIVATE})}),t.jsx(e,{path:s.DASHBOARD,element:t.jsx(_,{})}),t.jsx(e,{path:s.HOME,element:t.jsx(n,{})})]})}export{u as default};
