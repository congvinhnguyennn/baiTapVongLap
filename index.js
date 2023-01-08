const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});


function timSoChanLe() {
    let e = "", t = "";
    for (let i = 0; i < 100; i++){
        if(i % 2 == 0){
            e += i + " ";
        }
        else {
            t += i + " ";
        }
    }
        // n % 2 == 0 ? e += n + " " : t += n + " ";
    document.getElementById("txtResult").innerHTML = "Số chẵn: " + e + "<br>👉Số lẻ: " + t
}

function demSoChia3(){
    let e = 0;
    for (let i = 0; i < 1000; i++){
        if(i % 3 == 0){
            e++;
        }
    }
    document.getElementById("txtResult2").innerHTML = "Có " + e + " số chia hết cho 3 nhỏ hơn 1000"
}

function timSoDuongNhoNhat(){
    // Find smallest integer number
    let e = 0,
        t = 0;
    for (let i = 0; i < 10000; i++){
        if(e += i, e > 10000){
            t = i;
            break;
        }
    }
    document.getElementById("txtResult3").innerHTML = "Số nguyên dương nhỏ nhất là: " + t
}

function tinhTong(){
    let e = document.getElementById("inputNum1").value, 
        t = document.getElementById("inputNum2").value,
        n = 0;
    for (i = 1; i <= t; i++){
        n += Math.pow(e, i);
    }
    document.getElementById("txtResult4").innerHTML = "Tổng: " + n
}

function tinhGiaiThua(){
    let e = document.getElementById("inputNum3").value,
        t = 1;
    for (i = 1; i <= e; i++){
        t *= i;
    }
    document.getElementById("txtResult5").innerHTML = "Giai thừa: " + t
}

function addDivTag(){
    let e = "";
    for (i = 1; i <= 10; i++){
        e += i % 2 == 0 ? "<div class='bg-danger text-white p-2'>Div chẵn</div>" : "<div class='bg-primary text-white  p-2'>Div lẻ </div>";
    }
    document.getElementById("txtResult6").innerHTML = e
}

function inSoNguyenTo(){
    // check prime function
    function checkPrime(e){
        if(e < 2){
            return false;
        }
        for (let t = 2; t < e; t++){
            if(e % t == 0){
                return false;
            }
        }
        return true;
    }
    let t = "";
        o = document.getElementById("inputNum4").value;
    for (let n = 1; n <= o; n++){
        checkPrime(n) && (t += n + " ");
    }
    document.getElementById("txtResult7").innerHTML = "Số nguyên tố: " + t
}