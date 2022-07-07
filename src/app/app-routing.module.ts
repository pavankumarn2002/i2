import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {Cdn} from './cdnLinks/cdn.component';
import {C} from './cell-c/c.component';
import {Q} from './cell-Q/Q.component';
import {Cp} from './columnPosition/cp.component';
import {W} from './cell-w/w.component';
import {Wp} from './widthPosition/wp.component';
import {H} from './cell-h/h.component';
import {P} from './cell-p/p.component';
import {M} from './cell-m/m.component';
import {D} from './cell-d/d.component';
import {G} from './cell-G/G.component';
import {T} from './cell-t/t.component';
import {Ts} from './cell-ts/ts.component';
import {Bs} from './cell-bs/bs.component';
import {F} from './cell-f/f.component';
import {B} from './cell-b/b.component';
import {R} from './cell-r/r.component';
import {Bg} from './cell-bg/bg.component';
import {O} from './cell-o/o.component';
import {Ta} from './cell-ta/ta.component';
import {Dw} from './cell-dw/dw.component';
import {A} from './cell-a/a.component';
import {Normal} from './cell-sl(ns)/normal.component';
import {Absolute} from './cell-sl(as)/absolute.component';
import {Responsive} from './cell-sl(rs)/responsive.component';
import {Nested} from './cell-sl(nested)/nested.component';
import {Tb} from './cell-tb/tb.component';
import {Sm} from './cell-sm/sm.component';
import {Ap} from './cell-ap/ap.component';
import {Pa} from './cell-pa/pa.component';
import {Po} from './cell-po/po.component';
import {Input} from './cell-in(input)/input.component';
import {IconInput} from './cell-in(iconInput)/iconInput.component';
import {Select} from './cell-in(select)/select.component';
import {IconSelect} from './cell-in(iconSelect)/iconSelect.component';
import {TextArea} from './cell-in(textArea)/textArea.component';
import {CheckBox} from './cell-in(checkBox)/checkBox.component';
import {RadioBox} from './cell-in(radioBox)/radioBox.component';
import {Mo} from './cell-mo/mo.component';
import {Fl} from './cell-fl/fl.component';
import {Gr} from './cell-gr/gr.component';
import {Pc} from './cell-pc/pc.component';
import {An} from './cell-an/an.component';
import {Ss} from './cell-ss/ss.component';
import {Wz} from './cell-wz/wz.component';
import {Bu} from './cell-bu/bu.component';
import {Tg} from './cell-tg/tg.component';
import {Pi} from './cell-pi/pi.component';
import {Pb} from './cell-pb/pb.component';
import {Rm} from './cell-rm/rm.component';
import {Cm} from './cell-cm/cm.component';
import {Nv} from './cell-nv/nv.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"cdn",component:Cdn},
  {path:"cell-c",component:C},
  {path:"cell-q",component:Q},
  {path:"cp",component:Cp},
  {path:"cell-w",component:W},
  {path:"wp",component:Wp},
  {path:"cell-h",component:H},
  {path:"cell-p",component:P},
  {path:"cell-m",component:M},
  {path:"cell-d",component:D},
  {path:"cell-g",component:G},
  {path:"cell-t",component:T},
  {path:"cell-ts",component:Ts},
  {path:"cell-bs",component:Bs},
  {path:"cell-f",component:F},
  {path:"cell-b",component:B},
  {path:"cell-r",component:R},
  {path:"cell-bg",component:Bg},
  {path:"cell-o",component:O},
  {path:"cell-ta",component:Ta},
  {path:"cell-dw",component:Dw},
  {path:"cell-a",component:A},
  {path:"normal",component:Normal},
  {path:"absolute",component:Absolute},
  {path:"responsive",component:Responsive},
  {path:"nested",component:Nested},
  {path:"cell-tb",component:Tb},
  {path:"cell-sm",component:Sm},
  {path:"cell-ap",component:Ap},
  {path:"cell-pa",component:Pa},
  {path:"cell-po",component:Po},
  {path:"input",component:Input},
  {path:"icon-input",component:IconInput},
  {path:"select",component:Select},
  {path:"icon-select",component:IconSelect},
  {path:"text",component:TextArea},
  {path:"check",component:CheckBox},
  {path:"radio",component:RadioBox},
  {path:"cell-mo",component:Mo},
  {path:"cell-fl",component:Fl},
  {path:"cell-gr",component:Gr},
  {path:"cell-pc",component:Pc},
  {path:"cell-an",component:An},
  {path:"cell-ss",component:Ss},
  {path:"cell-wz",component:Wz},
  {path:"cell-bu",component:Bu},
  {path:"cell-tg",component:Tg},
  {path:"cell-pi",component:Pi},
  {path:"cell-pb",component:Pb},
  {path:"cell-rm",component:Rm},
  {path:"cell-cm",component:Cm},
  {path:"cell-nv",component:Nv},
  {path:"data",component:DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
