const Kalkulator = {
    hitungLuasPersegi: function () {
        const sisi = parseFloat(document.getElementById("sisiLuasPersegi").value);
        if (isNaN(sisi) || sisi <= 0) {
            alert("Masukkan angka > 0!");
            return;
        }
        const luas = sisi * sisi;
                  document.getElementById("hasilLuasPersegi").innerText = luas;
                  document.getElementById("rumusLuasPersegi").innerText = `Rumus: ${sisi} × ${sisi} = ${luas} cm²`;
    },
  
    hitungKelilingPersegi: function () {
        const sisi = parseFloat(document.getElementById("sisiKelilingPersegi").value);
        if (isNaN(sisi) || sisi <= 0) {
            alert("Masukkan angka > 0!");
            return;
        }
        const keliling = 4 * sisi;
                  document.getElementById("hasilKelilingPersegi").innerText = keliling;
                  document.getElementById("rumusKelilingPersegi").innerText = `Rumus: 4 × ${sisi} = ${keliling} cm`;
    },
  
    resetLuasPersegi: function () {
        document.getElementById("sisiLuasPersegi").value = "";
        document.getElementById("hasilLuasPersegi").innerText = "0";
        document.getElementById("rumusLuasPersegi").innerText = "";
    },
  
    resetKelilingPersegi: function () {
        document.getElementById("sisiKelilingPersegi").value = "";
        document.getElementById("hasilKelilingPersegi").innerText = "0";
        document.getElementById("rumusKelilingPersegi").innerText = "";
    },
  
    hitungLuasPersegiPanjang: function () {
        const panjang = parseFloat(document.getElementById("panjangLuasPP").value);
        const lebar = parseFloat(document.getElementById("lebarLuasPP").value);
        if (isNaN(panjang) || panjang <= 0 || isNaN(lebar) || lebar <= 0) {
            alert("Masukkan angka > 0!");
            return;
        }
        const luas = panjang * lebar;
                  document.getElementById("hasilLuasPP").innerText = luas;
                  document.getElementById("rumusLuasPP").innerText = `Rumus: ${panjang} × ${lebar} = ${luas} cm²`;
    },
  
    hitungKelilingPersegiPanjang: function () {
        const panjang = parseFloat(document.getElementById("panjangKelilingPP").value);
        const lebar = parseFloat(document.getElementById("lebarKelilingPP").value);
        if (isNaN(panjang) || panjang <= 0 || isNaN(lebar) || lebar <= 0) {
            alert("Masukkan angka > 0!");
            return;
        }
        const keliling = 2 * (panjang + lebar);
                  document.getElementById("hasilKelilingPP").innerText = keliling;
                  document.getElementById("rumusKelilingPP").innerText = `Rumus: 2 × (${panjang} + ${lebar}) = ${keliling} cm`;
    },
  
    resetLuasPersegiPanjang: function () {
        document.getElementById("panjangLuasPP").value = "";
        document.getElementById("lebarLuasPP").value = "";
        document.getElementById("hasilLuasPP").innerText = "0";
        document.getElementById("rumusLuasPP").innerText = "";
    },
  
    resetKelilingPersegiPanjang: function () {
        document.getElementById("panjangKelilingPP").value = "";
        document.getElementById("lebarKelilingPP").value = "";
        document.getElementById("hasilKelilingPP").innerText = "0";
        document.getElementById("rumusKelilingPP").innerText = "";
    }
  };
