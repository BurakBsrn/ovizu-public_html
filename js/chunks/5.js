(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ypqw:function(e,t,a){"use strict";a.r(t);var l={data:function(){return{accountForm:{citizen:!1,name:"Ad",surname:"Soyad",identity:"28570475834",nationality:"",policy:!1,birthday:{day:"01",month:"02",year:"2000"},gender:"01",email:"asdsdas@msn.com",phone:"05358348585"},passwordForm:{oldPw:"",newPw:"",newPw2:""},smsCheck:!1,emailCheck:!0,nationalities:[{value:"Uyruk 1",label:"Uyruk 1"},{value:"Uyruk 2",label:"Uyruk 2"},{value:"Uyruk 3",label:"Uyruk 3"},{value:"Uyruk 4",label:"Uyruk 4"},{value:"Uyruk 5",label:"Uyruk 5"}]}}},o=a("KHd+"),r=Object(o.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"main-space account-area"},[a("el-row",[a("el-col",{attrs:{lg:5}},[a("el-menu",{attrs:{"default-active":"1"}},[a("el-menu-item",{attrs:{index:"1"}},[a("router-link",{attrs:{to:"/account"}},[a("i",{staticClass:"el-icon-user"}),e._v(" "),a("span",[e._v("Kullanıcı Bilgilerim")])])],1),e._v(" "),a("el-menu-item",{attrs:{index:"2"}},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"flaticon-plane-ticket"}),e._v(" "),a("span",[e._v("Biletlerim")])])],1),e._v(" "),a("el-menu-item",{attrs:{index:"3"}},[a("router-link",{attrs:{to:"/account/support"}},[a("i",{staticClass:"el-icon-help"}),e._v(" "),a("span",[e._v("İptal & İade Talepleri")])])],1),e._v(" "),a("el-menu-item",{attrs:{index:"4"}},[a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"el-icon-switch-button"}),e._v(" "),a("span",[e._v("Çıkış yap")])])],1)],1)],1),e._v(" "),a("el-col",{attrs:{lg:19}},[a("div",{staticClass:"account-content"},[a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{lg:12}},[a("h1",{staticClass:"title"},[e._v("Kullanıcı Bilgilerim")]),e._v(" "),a("el-form",{staticClass:"custom-form",attrs:{"label-position":"top"}},[a("el-row",{attrs:{gutter:32}},[a("el-col",{attrs:{lg:24}},[a("el-form-item",{attrs:{label:"Ad"}},[a("el-input",{attrs:{placeholder:"Ad"},model:{value:e.accountForm.name,callback:function(t){e.$set(e.accountForm,"name",t)},expression:"accountForm.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{lg:24}},[a("el-form-item",{attrs:{label:"Soyad"}},[a("el-input",{attrs:{placeholder:"Soyad"},model:{value:e.accountForm.surname,callback:function(t){e.$set(e.accountForm,"surname",t)},expression:"accountForm.surname"}})],1)],1),e._v(" "),a("el-col",{attrs:{lg:24}},[a("el-form-item",{attrs:{label:"TC Kimlik No"}},[a("template",{slot:"label"},[0==e.accountForm.citizen?a("span",[e._v("TC Kimlik No")]):e._e(),e._v(" "),1==e.accountForm.citizen?a("span",[e._v("Uyruk")]):e._e(),e._v(" "),a("el-checkbox",{model:{value:e.accountForm.citizen,callback:function(t){e.$set(e.accountForm,"citizen",t)},expression:"accountForm.citizen"}},[e._v("T.C vatandaşı değilim.")])],1),e._v(" "),0==e.accountForm.citizen?a("el-input",{directives:[{name:"mask",rawName:"v-mask",value:"###########",expression:"'###########'"}],attrs:{type:"tel",placeholder:"•••••••••••"},model:{value:e.accountForm.identity,callback:function(t){e.$set(e.accountForm,"identity",t)},expression:"accountForm.identity"}}):e._e(),e._v(" "),1==e.accountForm.citizen?a("el-select",{staticClass:"w-100",attrs:{placeholder:"Uyruk"},model:{value:e.accountForm.nationality,callback:function(t){e.$set(e.accountForm,"nationality",t)},expression:"accountForm.nationality"}},e._l(e.nationalities,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e()],2)],1),e._v(" "),a("el-col",{attrs:{lg:24}},[a("el-form-item",{attrs:{label:"Doğum Tarihi"}},[a("el-row",{attrs:{gutter:8}},[a("el-col",{attrs:{span:8}},[a("el-select",{attrs:{placeholder:"Gün"},model:{value:e.accountForm.birthday.day,callback:function(t){e.$set(e.accountForm.birthday,"day",t)},expression:"accountForm.birthday.day"}},[a("el-option",{attrs:{label:"01",value:"01"}}),e._v(" "),a("el-option",{attrs:{label:"02",value:"02"}}),e._v(" "),a("el-option",{attrs:{label:"03",value:"03"}}),e._v(" "),a("el-option",{attrs:{label:"04",value:"04"}}),e._v(" "),a("el-option",{attrs:{label:"05",value:"05"}}),e._v(" "),a("el-option",{attrs:{label:"06",value:"06"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-select",{attrs:{placeholder:"Ay"},model:{value:e.accountForm.birthday.month,callback:function(t){e.$set(e.accountForm.birthday,"month",t)},expression:"accountForm.birthday.month"}},[a("el-option",{attrs:{label:"01",value:"01"}}),e._v(" "),a("el-option",{attrs:{label:"02",value:"02"}}),e._v(" "),a("el-option",{attrs:{label:"03",value:"03"}}),e._v(" "),a("el-option",{attrs:{label:"04",value:"04"}}),e._v(" "),a("el-option",{attrs:{label:"05",value:"05"}}),e._v(" "),a("el-option",{attrs:{label:"06",value:"06"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-select",{attrs:{placeholder:"Yıl"},model:{value:e.accountForm.birthday.year,callback:function(t){e.$set(e.accountForm.birthday,"year",t)},expression:"accountForm.birthday.year"}},[a("el-option",{attrs:{label:"2000",value:"2000"}}),e._v(" "),a("el-option",{attrs:{label:"2001",value:"2001"}}),e._v(" "),a("el-option",{attrs:{label:"2002",value:"2002"}}),e._v(" "),a("el-option",{attrs:{label:"2003",value:"2003"}}),e._v(" "),a("el-option",{attrs:{label:"2004",value:"2004"}}),e._v(" "),a("el-option",{attrs:{label:"2005",value:"2005"}})],1)],1)],1)],1)],1),e._v(" "),a("el-col",{attrs:{lg:24}},[a("el-form-item",{attrs:{label:"Cinsiyet"}},[a("el-select",{staticClass:"w-100",attrs:{placeholder:"Cinsiyet"},model:{value:e.accountForm.gender,callback:function(t){e.$set(e.accountForm,"gender",t)},expression:"accountForm.gender"}},[a("el-option",{attrs:{label:"Erkek",value:"01"}},[e._v("Erkek")]),e._v(" "),a("el-option",{attrs:{label:"Kadın",value:"02"}},[e._v("Kadın")])],1)],1)],1),e._v(" "),a("el-col",{attrs:{lg:24}},[a("el-form-item",{attrs:{label:"E-Posta Adresi"}},[a("el-input",{attrs:{placeholder:"E-Posta"},model:{value:e.accountForm.email,callback:function(t){e.$set(e.accountForm,"email",t)},expression:"accountForm.email"}})],1)],1),e._v(" "),a("el-col",{attrs:{lg:24}},[a("el-form-item",{attrs:{label:"Cep Telefonu"}},[a("el-input",{directives:[{name:"mask",rawName:"v-mask",value:"###########",expression:"'###########'"}],attrs:{type:"tel",placeholder:"•••••••••••"},model:{value:e.accountForm.phone,callback:function(t){e.$set(e.accountForm,"phone",t)},expression:"accountForm.phone"}})],1)],1)],1),e._v(" "),a("div",{staticClass:"text-right"},[a("el-button",{staticClass:"mt-15 mb-30",attrs:{type:"danger"}},[e._v("Bilgilerimi Güncelle")])],1)],1)],1),e._v(" "),a("el-col",{attrs:{lg:12}},[a("h3",{staticClass:"title"},[e._v("Şifremi Değiştir")]),e._v(" "),a("el-form",{staticClass:"custom-form",attrs:{"label-position":"top"}},[a("el-form-item",{attrs:{label:"Mevcut Şifre"}},[a("el-input",{attrs:{type:"password","show-password":"",placeholder:"Mevcut Şifre"},model:{value:e.passwordForm.oldPw,callback:function(t){e.$set(e.passwordForm,"oldPw",t)},expression:"passwordForm.oldPw"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Yeni Şifre"}},[a("el-input",{attrs:{type:"password","show-password":"",placeholder:"Yeni Şifre"},model:{value:e.passwordForm.newPw,callback:function(t){e.$set(e.passwordForm,"newPw",t)},expression:"passwordForm.newPw"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Yeni Şifre Tekrarı"}},[a("el-input",{attrs:{type:"password","show-password":"",placeholder:"Yeni Şifre Tekrarı"},model:{value:e.passwordForm.newPw2,callback:function(t){e.$set(e.passwordForm,"newPw2",t)},expression:"passwordForm.newPw2"}})],1),e._v(" "),a("div",{staticClass:"text-right mb-30"},[a("el-button",{staticClass:"mt-15",attrs:{type:"danger"}},[e._v("Şifremi Güncelle")])],1)],1),e._v(" "),a("div",{staticClass:"box-area"},[a("h3",{staticClass:"title mb-30"},[e._v("Duyuru Tercihleri")]),e._v(" "),a("el-form",[a("el-checkbox",{model:{value:e.emailCheck,callback:function(t){e.emailCheck=t},expression:"emailCheck"}},[e._v("İlgimi çekecek kampanyalarla ilgili "),a("strong",[e._v("e-mail")]),e._v(" almak istiyorum.")]),e._v(" "),a("el-checkbox",{staticClass:"mt-15",model:{value:e.smsCheck,callback:function(t){e.smsCheck=t},expression:"smsCheck"}},[e._v("İlgimi çekecek kampanyalarla ilgili "),a("strong",[e._v("sms")]),e._v(" almak istiyorum.")]),e._v(" "),a("div",{staticClass:"text-right"},[a("el-button",{staticClass:"mt-30",attrs:{type:"danger"}},[e._v("Kaydet")])],1)],1)],1)],1)],1)],1)])],1)],1)])}),[],!1,null,null,null);t.default=r.exports}}]);