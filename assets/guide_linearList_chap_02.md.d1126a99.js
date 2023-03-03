import{_ as s,o as n,c as a,g as l}from"./app.8840feec.js";const C=JSON.parse('{"title":"栈 Stack","description":"","frontmatter":{},"headers":[{"level":2,"title":"栈","slug":"栈","link":"#栈","children":[]}],"relativePath":"guide/linearList/chap_02.md"}'),p={name:"guide/linearList/chap_02.md"},o=l(`<h1 id="栈-stack" tabindex="-1">栈 Stack <a class="header-anchor" href="#栈-stack" aria-hidden="true">#</a></h1><p>可以用<code>顺序表</code>和<code>头部插入法的链表</code>来表示 特点：<code>只能在栈顶新增、删除元素，过程被称为压栈、弹栈。遵守先进后出的原则。FILO</code></p><ul><li>大话时刻：栈就像是一个，瓶子，你向里面放瓶口大的烧饼。放进去的垫底，然后再放他就往上摞。你那底下的你就得先把上边的拿出来，就是这么个情况。</li></ul><h2 id="栈" tabindex="-1">栈 <a class="header-anchor" href="#栈" aria-hidden="true">#</a></h2><div class="language-C"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">stdio.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">stdlib.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">maxSize</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span></span>
<span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> ElemType</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">typedef</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">struct</span><span style="color:#A6ACCD;"> Stack </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  ElemType </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">maxSize</span><span style="color:#89DDFF;">];</span><span style="color:#676E95;font-style:italic;"> // 数组存放数据</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> top</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // 栈顶索引</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/*  初始化 */</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">InitStack</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Stack </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">top</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;font-style:italic;"> // 索引-1 代表空栈</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 判断是否空栈 */</span></span>
<span class="line"><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">IsEmpty</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Stack </span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">top</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 获得栈顶元素 */</span></span>
<span class="line"><span style="color:#A6ACCD;">ElemType </span><span style="color:#82AAFF;">GetTopElement</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Stack </span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(!</span><span style="color:#82AAFF;">IsEmpty</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">))</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">NULL;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 压栈 */</span></span>
<span class="line"><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Push</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Stack </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ElemType </span><span style="color:#A6ACCD;font-style:italic;">el</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 边界判断 栈满情况</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">top</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">maxSize</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">))</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">[++</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> el</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 弹栈 */</span></span>
<span class="line"><span style="color:#C792EA;">bool</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Pop</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Stack </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ElemType </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">IsEmpty</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">))</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">false;</span></span>
<span class="line"><span style="color:#F07178;">  x </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">--];</span><span style="color:#676E95;font-style:italic;"> // 先取值 后栈顶索引减一</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  Stack s</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">bool</span><span style="color:#F07178;"> falg</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  ElemType x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">InitStack</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">  falg </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">IsEmpty</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">falg</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">是空栈</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">Push</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">Push</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">  x </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">GetTopElement</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">get top el: %d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> x</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">Push</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">Push</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">Pop</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">s</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> x</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">printf</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pop el: %d</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> x</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,5),t=[o];function e(c,F,r,y,D,i){return n(),a("div",null,t)}const f=s(p,[["render",e]]);export{C as __pageData,f as default};
