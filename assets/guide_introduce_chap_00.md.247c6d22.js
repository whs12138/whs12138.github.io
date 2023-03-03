import{_ as s,o as l,c as n,g as a}from"./app.8840feec.js";const d=JSON.parse('{"title":"引言","description":"","frontmatter":{},"headers":[{"level":2,"title":"C语言怎样才算入门呢？","slug":"c语言怎样才算入门呢","link":"#c语言怎样才算入门呢","children":[{"level":3,"title":"下面给出几段代码，帮助理解指针。","slug":"下面给出几段代码-帮助理解指针。","link":"#下面给出几段代码-帮助理解指针。","children":[]}]}],"relativePath":"guide/introduce/chap_00.md"}'),o={name:"guide/introduce/chap_00.md"},p=a(`<h1 id="引言" tabindex="-1">引言 <a class="header-anchor" href="#引言" aria-hidden="true">#</a></h1><h2 id="c语言怎样才算入门呢" tabindex="-1">C语言怎样才算入门呢？ <a class="header-anchor" href="#c语言怎样才算入门呢" aria-hidden="true">#</a></h2><blockquote><p>其实C语言的特色就是指针嘛，如果只会基本的控制语句，不会运用指针的话，很难说自己会C语言</p></blockquote><h3 id="下面给出几段代码-帮助理解指针。" tabindex="-1">下面给出几段代码，帮助理解指针。 <a class="header-anchor" href="#下面给出几段代码-帮助理解指针。" aria-hidden="true">#</a></h3><ul><li>带着2个问题去看这些代码 <ul><li>foo(int <em>b) 与 foo(</em> &amp;b) 会有什么区别？他们中间都干了什么？为什么会这样？</li><li>如果指针可以在main()里面改变存储地址的数据，为什么还要放到函数里？</li></ul></li></ul><div class="language-c"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">stdio.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">iostream</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">stdlib.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">using namespace std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">){</span><span style="color:#676E95;font-style:italic;"> // (int* &amp;b)</span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b的值: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">b </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b存放的地址: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> b </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b的地址: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;">b </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">b </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  b </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">*)</span><span style="color:#82AAFF;">malloc</span><span style="color:#89DDFF;">(sizeof(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b的值: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">b </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b存放的地址: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> b </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">b的地址: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;">b </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">c </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">*)</span><span style="color:#82AAFF;">malloc</span><span style="color:#89DDFF;">(sizeof(</span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">c的值：</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">c </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">c的存放的地址：</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> c </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">c的地址：</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;">c </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">----------------</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;">endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">foo</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">c</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">----------------</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;">endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo后c的值：</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;">c </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo后c存放的地址：</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> c </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo后c的地址：</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#F07178;">c </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#F07178;"> endl</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,6),t=[p];function e(c,F,r,D,y,i){return l(),n("div",null,t)}const C=s(o,[["render",e]]);export{d as __pageData,C as default};
