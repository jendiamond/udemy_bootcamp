### Section 2
```
$(selector).action();

$("button").click();

$("button").click(function(){
  alert("A button is clicked")
});

$(document).ready(write code in here);

$(document).ready(function(){
  $("button").click(function(){
    $("myPara").css("background-color", "pink");
  });
});
```

---

### Section 3 - 30

_9.All Selector 4:13
10.Tagname Selector 2:01
11.Multiple Selectors 0:52
12.ID Selector 2:04
13.Class Selector 0:52
14.Hands-On Practice: Class Selector 3:23
15.this Selector 2:00
16.Hands-On Practice: this and Tagname Selectors 6:13
17.Attribute based Selectors - Part 1 (name, value equals and value not equal) 5:30
18.Attribute based Selectors - Part 2 (value starts with, ends with and contains) 3:22
19.Attribute based Selectors - Part 3 (value contains a word) 5:22
20.Position based Selectors - Part 1 (first, last, even indexed and odd indexed) 7:52
21.Position based Selectors - Part 2 (index equals, less than and greater than) 2:37
22.Relationship based Selectors - Part 1 (first child and last child) 7:15
23.Relationship based Selectors - Part 2 (nth child and nth last child) 2:28
24.Relationship Selectors - 3 (first and last of type, nth and nth last of type) 3:36
25.Relationship based Selectors - Part 4 (only child and only of type) 3:29
26.Child and Sibling Selectors 7:16
27.Form based Selectors 7:05
28.State based Selectors 12:11
29.Content based Selectors 6:32
Quiz 3:Quiz: Selectors
30.Exercises: Selectors

---

### _9.All Selector 4:13

```
$(document).ready(function(){
  $("#btnFirst.click").click(function(){
    $("*").css("background-color", "yellow");
  });
});
```

### 10.Tagname Selector

```
$(document).ready(function(){
  $("#btnFirst.click").click(function(){
    $("p").css("background-color", "yellow");
  });
});
```

11.Multiple Selectors

```
$(document).ready(function(){
  $("#btnFirst.click").click(function(){
    $("button, p").css("background-color", "yellow");
  });
});
```

### 12.ID Selector

<li id="sub1">English</li>

```
$(document).ready(function(){
  $("#btnFirst.click").click(function(){
    $("#sub1").css("background-color", "yellow");
  });
});
```

### 13.Class Selector
```
<ol class="suject"
<li id="sub1">English</li>

```
$(document).ready(function(){
  $("#btnFirst.click").click(function(){
    $("#.subject").css("background-color", "yellow");
  });
});
```

### 14.Hands-On Practice: Class Selector

### 15.this Selector

Selects current element

```
$(document).ready(function(){
  $("#btnFirst.click").click(function(){
    $("this").css("background-color", "yellow");
  });
});
```

### 16.Hands-On Practice: this and Tagname Selectors

---

Section: 4 Let the Actions Happen (jQuery Events)
31.Overview 3:33
32.Mouse Events 9:55
33.Keyboard Events 3:27
34.Form Events - Part 1 (focus, blur, focusin and focusout) 6:54
35.Form Events - Part 2 (change, select and submit) 9:20
36.Browser Events 5:30
37.How to Attach Event Handlers? 11:40
38.Method Chaining 4:10
Quiz 4
39.Exercises: Events
