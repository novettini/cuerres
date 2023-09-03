boton_do = document.querySelector("#tecla_do")
boton_re = document.querySelector("#tecla_re")
boton_mi = document.querySelector("#tecla_mi")
boton_fa = document.querySelector("#tecla_fa")
boton_sol = document.querySelector("#tecla_sol")
boton_la = document.querySelector("#tecla_la")
boton_si = document.querySelector("#tecla_si")
boton_do2 = document.querySelector("#tecla_do2")
boton_re2 = document.querySelector("#tecla_re2")
boton_do_sostenido =document.querySelector("#tecla_do_sostenido")
boton_re_sostenido =document.querySelector("#tecla_re_sostenido")
boton_fa_sostenido =document.querySelector("#tecla_fa_sostenido")
boton_sol_sostenido =document.querySelector("#tecla_sol_sostenido")
boton_la_sostenido =document.querySelector("#tecla_la_sostenido")
boton_do_sostenido2 =document.querySelector("#tecla_do_sostenido2")
audio_do = document.querySelector("#tonoDo")
audio_re = document.querySelector("#tonoRe")
audio_mi = document.querySelector("#tonoMi")
audio_fa = document.querySelector("#tonoFa")
audio_sol = document.querySelector("#tonoSol")
audio_la = document.querySelector("#tonoLa")
audio_si = document.querySelector("#tonoSi")
audio_do2 = document.querySelector("#tonoDo2")
audio_re2 = document.querySelector("#tonoRe2")
audio_do_sostenido = document.querySelector("#tonoDoSostenido")
audio_re_sostenido = document.querySelector("#tonoReSostenido")
audio_fa_sostenido = document.querySelector("#tonoFaSostenido")
audio_sol_sostenido = document.querySelector("#tonoSolSostenido")
audio_la_sostenido = document.querySelector("#tonoLaSostenido")
audio_do_sostenido2 = document.querySelector("#tonoDoSostenido2")
fondo= document.querySelector("#fondo")


window.onload=function(){

boton_do.addEventListener("click", () => {
        audio_do.load()
        audio_do.play()
   })
boton_re.addEventListener("click", () => {
        audio_re.load()
        audio_re.play()
})
boton_mi.addEventListener("click", () => {
        audio_mi.load()
        audio_mi.play()
})
boton_fa.addEventListener("click", () => {
        audio_fa.load()
        audio_fa.play()
 })
boton_sol.addEventListener("click", () => {
        audio_sol.load()
        audio_sol.play()

})
boton_la.addEventListener("click", () => {
        audio_la.load()
        audio_la.play()
 
})
boton_si.addEventListener("click", () => {
        audio_si.load()
        audio_si.play()
 
})
boton_do2.addEventListener("click", () => {
        audio_do2.load()
        audio_do2.play()
})
boton_re2.addEventListener("click", () => {
        audio_re2.load()
        audio_re2.play()
})
boton_do_sostenido.addEventListener("click", () => {
        audio_do_sostenido.load()
        audio_do_sostenido.play()
   
})
boton_re_sostenido.addEventListener("click", () => {
        audio_re_sostenido.load()
        audio_re_sostenido.play()
      
        
})
boton_fa_sostenido.addEventListener("click", () => {
        audio_fa_sostenido.load()
        audio_fa_sostenido.play()
   
    
        
})
boton_sol_sostenido.addEventListener("click", () => {
        audio_sol_sostenido.load()
        audio_sol_sostenido.play()
    
        
})
boton_la_sostenido.addEventListener("click", () => {
        audio_la_sostenido.load()
        audio_la_sostenido.play()
   
        
})
boton_do_sostenido2.addEventListener("click", () => {
        audio_do_sostenido2.load()
        audio_do_sostenido2.play()
   
})
boton_do.addEventListener("click", () => {
    fondo.className ='do'

});
boton_re.addEventListener("click", () => {
    fondo.className ='re';

});

boton_mi.addEventListener("click", () => {
    fondo.className ='mi';

});

boton_fa.addEventListener("click", () => {
    fondo.className ='fan ';

});

boton_sol.addEventListener("click", () => {
    fondo.className ='sol'

});
boton_la.addEventListener("click", () => {
    fondo.className ='la'

});
boton_si.addEventListener("click", () => {
    fondo.className ='si'

});
boton_do2.addEventListener("click", () => {
    fondo.className ='do2';

});

boton_re2.addEventListener("click", () => {
    fondo.className ='re2';

});

boton_do_sostenido.addEventListener("click", () => {
    fondo.className ='dos';

});
boton_re_sostenido.addEventListener("click", () => {
    fondo.className ='res'

});
boton_fa_sostenido.addEventListener("click", () => {
    fondo.className ='fas';

});boton_sol_sostenido.addEventListener("click", () => {
    fondo.className ='sols'

});
boton_la_sostenido.addEventListener("click", () => {
    fondo.className ='las';

});

boton_do_sostenido2.addEventListener("click", () => {
    fondo.className ='dos2';

});
}
