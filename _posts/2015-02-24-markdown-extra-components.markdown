---
title: "用数学证明产品逻辑"
layout: post
date: 2023-06-18 22:48
image: /assets/images/markdown.jpg
headerImage: false
tag:
- markdown
- components
- extra
category: blog
author: jamesfoster
description: Markdown summary with different options
---

## 问题·Question:
在很多场景里，产品思路的逻辑推演无法通过有效的数据进行验证，尽管逻辑推演恰当，但结论似乎违背常识。

## 拆解·
已知被宣讲人的疑问如下：
∵推演结论反常识
推导过程=a
∴该推演结论错误

问：
a如何自证逻辑？

## 常规解决方案·
- A:质问被宣讲人“那你能证明你的逻辑吗？”
（方案浅析：不建议！产品经理在宣讲中应尽量避免使用魔法攻击）

- B:赞美被宣讲人“对对对！你说的都对！”
（方案浅析：不建议！过于直白的赞美，可信度不高，适得其反）

- ChatGPT解决方案：
  1推理和逻辑验证
  (方案浅析：不建议！用不能证得的逻辑推演个证明不了另一个不能证得的逻辑推演)
  
  2类比和类推
  (方案浅析：可以尝试！相似的逻辑和前提下其他成功案例，有一定说服力)
  
  3专家意见和经验
  (方案浅析：此乃妙手！“人家xxx说可以啊！”)
  
  4假设和假设验证
  （方案浅析：不建议！逻辑同问题，假设无数据和事实支撑）

## 吕离火解决方案·LuLiho' Answer
将（推演结论反常识）设为 （+∞＜0）
注：正无穷大整数，但小于0，该结论反常识。
∴如果我们证得（+∞<0），（推演结论反常识）的产品逻辑的正确性！

解：
根据拉马努金求和
设:
W=+∞=1+2+3+4+5...
M=1-2+3-4+5...
∴W-M=0+4+0+8+0+12=4(1+2+3+4...）=4W
∴W=-M/3

M错位相加:
M=1-2+3-4...
M=  1-2+3-4...
∴2M=1-1+1-1...

2M再次错位相加抵消
2M=
2M+2M = 1
M=1/4

∵W=-M/3
∴W=-1/4 ÷ 3=-1/12
证得+∞=-1/12<O
即（推演结论反常识）的产品逻辑依然有正确性！

此时被宣讲人若对你的逻辑推演表示赞同（已经被忽悠懵了），那么，你需要告诉他：
拉马努金的推演根本就是错误的！

逆转裁判点勾皮剂

拉马努金完全忽略了省略号里项数的动态量变化！我把省略号内的无穷数字当成了静态项数来处理，尽管证明过程非常精妙，亮点纷呈，但这个结论依然是错误的！！
由此我们得出结论：即便在产品逻辑推演中能够拿出精彩纷呈的验证过程，和貌似严谨的数据推导，得出的结论依然可能是错误的！那么我们在产品设计过程中，抛弃数据推演，作出反常时的决定，依然有可能得到伟大的产品！！
我愿称之为：产品经理的金色裁断！！






---

## Evidence

You can try the evidence!

<span class="evidence">Paragraphs can be written like so. A paragraph is the basic block of Markdown. A paragraph is what text will turn into when there is no reason it should become anything else.</span>

{% highlight html %}
<span class="evidence">Paragraphs can be written like so. A paragraph is the basic block of Markdown. A paragraph is what text will turn into when there is no reason it should become anything else.</span>
{% endhighlight %}

---

## Side-by-side

Like the [Medium](https://medium.com/) component.

**Image** on the left and **Text** on the right:

{% highlight html %}
<div class="side-by-side">
    <div class="toleft">
        <img class="image" src="{{ site.url }}/{{ site.picture }}" alt="Alt Text">
        <figcaption class="caption">Photo by John Doe</figcaption>
    </div>

    <div class="toright">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>
{% endhighlight %}

<div class="side-by-side">
    <div class="toleft">
        <img class="image" src="{{ site.url }}/{{ site.picture }}" alt="Alt Text">
        <figcaption class="caption">Photo by John Doe</figcaption>
    </div>

    <div class="toright">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>

**Text** on the left and **Image** on the right:

{% highlight html %}
<div class="side-by-side">
    <div class="toleft">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <div class="toright">
        <img class="image" src="{{ site.url }}/{{ site.picture }}" alt="Alt Text">
        <figcaption class="caption">Photo by John Doe</figcaption>
    </div>
</div>
{% endhighlight %}

<div class="side-by-side">
    <div class="toleft">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <div class="toright">
        <img class="image" src="{{ site.url }}/{{ site.picture }}" alt="Alt Text">
        <figcaption class="caption">Photo by John Doe</figcaption>
    </div>
</div>

---

## Star

You can give evidence to a post. Just add the tag to the markdown file.

{% highlight raw %}
star: true
{% endhighlight %}

---

## Especial Breaker

You can add a especial *hr* to your text.

{% highlight html %}
<div class="breaker"></div>
{% endhighlight %}

<div class="breaker"></div>

---

## Spoiler

You can add an especial hidden content that appears on hover.

{% highlight html %}
<div class="spoiler"><p>your content</p></div>
{% endhighlight %}

<div class="spoiler"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>

---

## Gist

You can add Gists from github.

{% highlight raw %}
{ % gist sergiokopplin/91ff4220480727b47224245ee2e9c291 % }
{% endhighlight %}

{% gist sergiokopplin/91ff4220480727b47224245ee2e9c291 %}

---

## Codepen

You can add Pens from Codepen.

{% highlight html %}
<p data-height="268" data-theme-id="0" data-slug-hash="gfdDu" data-default-tab="result" data-user="chriscoyier" class='codepen'>
    See the Pen <a href='https://codepen.io/chriscoyier/pen/gfdDu/'>Crappy Recreation of the Book Cover of *The Flame Alphabet*</a> by Chris Coyier (<a href='https://codepen.io/chriscoyier'>@chriscoyier</a>) on <a href='https://codepen.io'>CodePen</a>.
</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
{% endhighlight %}

<p data-height="268" data-theme-id="0" data-slug-hash="gfdDu" data-default-tab="result" data-user="chriscoyier" class='codepen'>See the Pen <a href='https://codepen.io/chriscoyier/pen/gfdDu/'>Crappy Recreation of the Book Cover of *The Flame Alphabet*</a> by Chris Coyier (<a href='https://codepen.io/chriscoyier'>@chriscoyier</a>) on <a href='https://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

---

## Slideshare

Add your presentations here!

{% highlight html %}
<iframe src="//www.slideshare.net/slideshow/embed_code/key/hqDhSJoWkrHe7l" width="560" height="310" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>
{% endhighlight %}

<iframe src="//www.slideshare.net/slideshow/embed_code/key/hqDhSJoWkrHe7l" width="560" height="310" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>

---

## Videos

Do you want some videos? Youtube, Vimeo or Vevo? Copy the embed code and paste on your post!

**Example**

{% highlight html %}
<iframe width="560" height="310" src="https://www.youtube.com/embed/r7XhWUDj-Ts" frameborder="0" allowfullscreen></iframe>
{% endhighlight %}

<iframe width="560" height="310" src="https://www.youtube.com/embed/r7XhWUDj-Ts" frameborder="0" allowfullscreen><
