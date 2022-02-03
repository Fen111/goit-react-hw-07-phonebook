(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={filterWrapper:"Filter_filterWrapper__3bxIz",label:"Filter_label__8SiXJ",input:"Filter_input__vyo3S"}},17:function(t,e,n){t.exports={listItem:"ContactListItem_listItem__1TG4I",text:"ContactListItem_text__okOk_",itemButton:"ContactListItem_itemButton__iG4lT"}},22:function(t,e,n){t.exports={container:"Container_container__3dBDl"}},25:function(t,e,n){t.exports={list:"ContactList_list__2VQF5"}},26:function(t,e,n){t.exports={title:"Section_title__2QYsD"}},43:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),s=n.n(r),o=n(4),i=n(22),u=n.n(i),l=n(2);function b(t){var e=t.children;return Object(l.jsx)("div",{className:u.a.container,children:e})}var d=n(12),m=n(23),j=n(5),p=Object(m.a)({reducerPath:"contactsApi",baseQuery:Object(j.d)({baseUrl:"https://61f3b58010f0f7001768c5ac.mockapi.io/"}),tagTypes:["Contacts"],endpoints:function(t){return{fetchContacts:t.query({query:function(){return"contacts"},providesTags:["Contacts"]}),deleteContact:t.mutation({query:function(t){return{url:"/contacts/".concat(t),method:"DELETE"}},invalidatesTags:["Contacts"]}),addContact:t.mutation({query:function(t){return{url:"/contacts",method:"POST",body:{name:t.name,number:t.number}}},invalidatesTags:["Contacts"]})}}}),O=p.useFetchContactsQuery,f=p.useDeleteContactMutation,h=p.useAddContactMutation,x=n(14),_=(n(40),n(8)),C=n.n(_);function v(){var t=Object(a.useState)(""),e=Object(d.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),s=Object(d.a)(r,2),o=s[0],i=s[1],u=O().data,b=h(),m=Object(d.a)(b,1)[0],j=function(t){var e=t.target,n=e.name,a=e.value;"name"===n&&c(a),"number"===n&&i(a)},p=function(){c(""),i("")};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:C.a.form,onSubmit:function(t){var e;t.preventDefault(),p(),e={name:n,number:o},u.find((function(t){return t.name===e.name}))?x.b.error("".concat(e.name," is already in contacts!")):u.find((function(t){return t.number===e.number}))?x.b.error("".concat(e.number," is already in contacts!")):(x.b.success("Contact added"),m({name:n,number:o}))},children:[Object(l.jsxs)("label",{className:C.a.label,children:["Name",Object(l.jsx)("input",{className:C.a.input,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:j})]}),Object(l.jsxs)("label",{className:C.a.label,children:["Number",Object(l.jsx)("input",{className:C.a.input,type:"tel",name:"number",value:o,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:j})]}),Object(l.jsx)("button",{className:C.a.formButton,type:"submit",children:"Add contact"})]}),Object(l.jsx)(x.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}var g=n(1),y={changeFilter:Object(g.b)("contacts/changeFilter")},F=function(t){return t.filter},N=n(16),k=n.n(N);function w(){var t=Object(o.e)(F),e=Object(o.d)();return Object(l.jsx)("div",{className:k.a.filterWrapper,children:Object(l.jsxs)("label",{className:k.a.label,children:["Find contacts by name",Object(l.jsx)("input",{className:k.a.input,type:"text",value:t,onChange:function(t){return e(y.changeFilter(t.target.value))}})]})})}var B=n(24),T=n(17),I=n.n(T);function L(t){var e=t.name,n=t.number,a=t.id,c=f(),r=Object(d.a)(c,1)[0];return Object(l.jsxs)("li",{className:I.a.listItem,children:[Object(l.jsxs)("p",{className:I.a.text,children:[e,": ",n]}),Object(l.jsx)("button",{className:I.a.itemButton,type:"button",onClick:function(){return r(a)}})]})}var A=n(25),S=n.n(A);function q(){var t=O().data,e=Object(o.e)(F);return Object(l.jsx)(l.Fragment,{children:t&&Object(l.jsx)("ul",{className:S.a.list,children:t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})).map((function(t){return Object(l.jsx)(L,Object(B.a)({},t),t.id)}))})})}var P=n(26),z=n.n(P);function D(t){var e=t.title,n=t.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{className:z.a.title,children:e}),n]})}function E(){return Object(l.jsxs)(b,{children:[Object(l.jsx)(D,{title:"Phonebook"}),Object(l.jsx)(v,{}),Object(l.jsx)(D,{title:"Contacts"}),Object(l.jsx)(w,{}),Object(l.jsx)(q,{})]})}var M=n(28),Q=n(11),J=Object(g.d)("",Object(Q.a)({},y.changeFilter,(function(t,e){return e.payload}))),H=n(27),W=n.n(H),Z=Object(g.a)({reducer:Object(Q.a)({filter:J},p.reducerPath,p.reducer),middleware:function(t){return[].concat(Object(M.a)(t()),[p.middleware,W.a])},devTools:!1});n(42),n(43);s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o.a,{store:Z,children:Object(l.jsx)(E,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"ContactForm_form__25QEg",label:"ContactForm_label__1MLHj",input:"ContactForm_input__33YcH",formButton:"ContactForm_formButton__2cx-k"}}},[[44,1,2]]]);
//# sourceMappingURL=main.cacf01dd.chunk.js.map