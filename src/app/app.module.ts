import {BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
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
import { If } from './cell-if/cell-if.component';
import { Dt } from './cell-dt/cell-dt.component';
import { InnerTextComponent } from './inner-text/inner-text.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { Vr } from './cell-vr/cell-vr.component';
import { VcClickComponent } from './vc-click/vc-click.component';
@NgModule({
  declarations: [
    AppComponent,
    Cdn,
    C,
    Q,
    Cp,
    W,
    Wp,
    H,
    P,
    M,
    D,
    G,
    T,
    Ts,
    Bs,
    F,
    B,
    R,
    Bg,
    O,
    Ta,
    Dw,
    A,
    Normal,
    Absolute,
    Responsive,
    Nested,
    Tb,
    Sm,
    Ap,
    Pa,
    Po,
    Input,
    IconInput,
    Select,
    IconSelect,
    TextArea,
    CheckBox,
    RadioBox,
    Mo,
    Fl,
    Gr,
    Pc,
    An,
    Ss,
    Wz,
    Bu,
    Tg,
    Pi,
    Pb,
    Rm,
    Cm,
    Nv,
    DataComponent,
    If,
    Dt,
    InnerTextComponent,
    TwoWayComponent,
    Vr,
    VcClickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
