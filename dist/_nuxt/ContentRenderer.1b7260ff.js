import f from"./MarkdownRenderer.dbfc7f11.js";import{a as o,w as l,e as c,h as d}from"./entry.97536b20.js";const h=o({props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(n){l(()=>n.excerpt,t=>{var e,r,a;t&&!((e=n.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(r=n==null?void 0:n.value)==null?void 0:r._path}.${(a=n==null?void 0:n.value)==null?void 0:a._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(n){var u,i;const t=c(),{value:e,excerpt:r,tag:a}=n;return e&&(e==null?void 0:e._type)==="markdown"&&((i=(u=e==null?void 0:e.body)==null?void 0:u.children)==null?void 0:i.length)?d(f,{value:e,excerpt:r,tag:a,...this.$attrs}):e&&(t==null?void 0:t.default)?t.default({value:e,excerpt:r,tag:a,...this.$attrs}):t!=null&&t.empty?t.empty({value:e,excerpt:r,tag:a,...this.$attrs}):t!=null&&t.default?t.default({value:e,excerpt:r,tag:a,...this.$attrs}):d("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:r,tag:a},null,2))}});export{h as default};
