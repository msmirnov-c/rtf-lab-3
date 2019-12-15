const footer = document.querySelector('footer');

let a = [
    document.createElement('a'),
    document.createElement('a'),
    document.createElement('a')
]

const shadow = document.createElement('div');
shadow.id = "shadow";
shadow.append(a[0]);
shadow.append(a[1]);
shadow.append(a[2]);

a[0].innerHTML = "&copy;Built in 2019";

a[1].href = "https://vk.com/feelosof";
a[1].target = "_blank";
a[1].innerHTML = "Made by FeeLeD";

a[2].href = "https://builtin.com/artificial-intelligence";
a[2].target = "_blank";
a[2].innerHTML = "Information Source";

footer.append(shadow);