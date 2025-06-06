import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import require$$0, { useMemo, useState, useEffect } from 'react';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var reactTable = {exports: {}};

var reactTable_production_min = {exports: {}};

var hasRequiredReactTable_production_min;

function requireReactTable_production_min () {
	if (hasRequiredReactTable_production_min) return reactTable_production_min.exports;
	hasRequiredReactTable_production_min = 1;
	(function (module, exports) {
		!function(e,t){t(exports,require$$0);}(commonjsGlobal,(function(e,t){function n(e,t,n,o,r,i,u){try{var l=e[i](u),s=l.value;}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(o,r);}function o(e){return function(){var t=this,o=arguments;return new Promise((function(r,i){var u=e.apply(t,o);function l(e){n(u,r,i,l,s,"next",e);}function s(e){n(u,r,i,l,s,"throw",e);}l(void 0);}))}}function r(){return (r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);}return e}).apply(this,arguments)}function i(e,t){if(null==e)return {};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}function u(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t);if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return (String)(e)}(e,"string");return "symbol"==typeof t?t:String(t)}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var l={init:"init"},s=function(e){var t=e.value;return void 0===t?"":t},a=function(){return t.createElement(t.Fragment,null," ")},c={Cell:s,width:150,minWidth:0,maxWidth:Number.MAX_SAFE_INTEGER};function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){var n=t.style,o=t.className;return e=r({},e,{},i(t,["style","className"])),n&&(e.style=e.style?r({},e.style||{},{},n||{}):n),o&&(e.className=e.className?e.className+" "+o:o),""===e.className&&delete e.className,e}),{})}var f=function(e,t){return void 0===t&&(t={}),function(n){return void 0===n&&(n={}),[].concat(e,[n]).reduce((function(e,o){return function e(t,n,o){return "function"==typeof n?e({},n(t,o)):Array.isArray(n)?d.apply(void 0,[t].concat(n)):d(t,n)}(e,o,r({},t,{userProps:n}))}),{})}},p=function(e,t,n,o){return void 0===n&&(n={}),e.reduce((function(e,t){return t(e,n)}),t)},g=function(e,t,n){return void 0===n&&(n={}),e.forEach((function(e){e(t,n);}))};function v(e,t,n,o){e.findIndex((function(e){return e.pluginName===n}));t.forEach((function(t){e.findIndex((function(e){return e.pluginName===t}));}));}function m(e,t){return "function"==typeof e?e(t):e}function h(e){var n=t.useRef();return n.current=e,t.useCallback((function(){return n.current}),[])}var y="undefined"!=typeof document?t.useLayoutEffect:t.useEffect;function w(e,n){var o=t.useRef(false);y((function(){o.current&&e(),o.current=true;}),n);}function R(e,t,n){return void 0===n&&(n={}),function(o,i){ void 0===i&&(i={});var u="string"==typeof o?t[o]:o;if(void 0===u)throw console.info(t),new Error("Renderer Error ☝️");return b(u,r({},e,{column:t},n,{},i))}}function b(e,n){return function(e){return "function"==typeof e&&((t=Object.getPrototypeOf(e)).prototype&&t.prototype.isReactComponent);var t;}(o=e)||"function"==typeof o||function(e){return "object"==typeof e&&"symbol"==typeof e.$$typeof&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}(o)?t.createElement(e,n):e;var o;}function S(e,t,n){return void 0===n&&(n=0),e.map((function(e){return x(e=r({},e,{parent:t,depth:n})),e.columns&&(e.columns=S(e.columns,e,n+1)),e}))}function C(e){return G(e,"columns")}function x(e){var t=e.id,n=e.accessor,o=e.Header;if("string"==typeof n){t=t||n;var r=n.split(".");n=function(e){return function(e,t,n){if(!t)return e;var o,r="function"==typeof t?t:JSON.stringify(t),i=E.get(r)||function(){var e=function(e){return function e(t,n){ void 0===n&&(n=[]);if(Array.isArray(t))for(var o=0;o<t.length;o+=1)e(t[o],n);else n.push(t);return n}(e).map((function(e){return String(e).replace(".","_")})).join(".").replace(T,".").replace(O,"").split(".")}(t);return E.set(r,e),e}();try{o=i.reduce((function(e,t){return e[t]}),e);}catch(e){}return void 0!==o?o:n}(e,r)};}if(!t&&"string"==typeof o&&o&&(t=o),!t&&e.columns)throw console.error(e),new Error('A column ID (or unique "Header" value) is required!');if(!t)throw console.error(e),new Error("A column ID (or string accessor) is required!");return Object.assign(e,{id:t,accessor:n}),e}function P(e,t){if(!t)throw new Error;return Object.assign(e,r({Header:a,Footer:a},c,{},t,{},e)),Object.assign(e,{originalWidth:e.width}),e}function B(e,t,n){ void 0===n&&(n=function(){return {}});for(var o=[],i=e,u=0,l=function(){return u++},s=function(){var e={headers:[]},u=[],s=i.some((function(e){return e.parent}));i.forEach((function(o){var i,a=[].concat(u).reverse()[0];if(s){if(o.parent)i=r({},o.parent,{originalId:o.parent.id,id:o.parent.id+"_"+l(),headers:[o]},n(o));else i=P(r({originalId:o.id+"_placeholder",id:o.id+"_placeholder_"+l(),placeholderOf:o,headers:[o]},n(o)),t);a&&a.originalId===i.originalId?a.headers.push(o):u.push(i);}e.headers.push(o);})),o.push(e),i=u;};i.length;)s();return o.reverse()}var E=new Map;function I(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=0;o<t.length;o+=1)if(void 0!==t[o])return t[o]}function F(e){if("function"==typeof e)return e}function G(e,t){var n=[];return function e(o){o.forEach((function(o){o[t]?e(o[t]):n.push(o);}));}(e),n}function A(e,t){var n=t.manualExpandedKey,o=t.expanded,r=t.expandSubRows,i=void 0===r||r,u=[];return e.forEach((function(e){return function e(t,r){ void 0===r&&(r=true),t.isExpanded=t.original&&t.original[n]||o[t.id],t.canExpand=t.subRows&&!!t.subRows.length,r&&u.push(t),t.subRows&&t.subRows.length&&t.isExpanded&&t.subRows.forEach((function(t){return e(t,i)}));}(e)})),u}function k(e,t,n){return F(e)||t[e]||n[e]||n.text}function H(e,t,n){return e?e(t,n):void 0===t}function W(){throw new Error("React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.")}var z=null;var T=/\[/g,O=/\]/g;var M=function(e){return r({role:"table"},e)},j=function(e){return r({role:"rowgroup"},e)},L=function(e,t){var n=t.column;return r({key:"header_"+n.id,colSpan:n.totalVisibleHeaderCount,role:"columnheader"},e)},N=function(e,t){var n=t.column;return r({key:"footer_"+n.id,colSpan:n.totalVisibleHeaderCount},e)},D=function(e,t){return r({key:"headerGroup_"+t.index,role:"row"},e)},V=function(e,t){return r({key:"footerGroup_"+t.index},e)},_=function(e,t){return r({key:"row_"+t.row.id,role:"row"},e)},X=function(e,t){var n=t.cell;return r({key:"cell_"+n.row.id+"_"+n.column.id,role:"cell"},e)};function q(){return {useOptions:[],stateReducers:[],useControlledState:[],columns:[],columnsDeps:[],allColumns:[],allColumnsDeps:[],accessValue:[],materializedColumns:[],materializedColumnsDeps:[],useInstanceAfterData:[],visibleColumns:[],visibleColumnsDeps:[],headerGroups:[],headerGroupsDeps:[],useInstanceBeforeDimensions:[],useInstance:[],prepareRow:[],getTableProps:[M],getTableBodyProps:[j],getHeaderGroupProps:[D],getFooterGroupProps:[V],getHeaderProps:[L],getFooterProps:[N],getRowProps:[_],getCellProps:[X],useFinalInstance:[]}}l.resetHiddenColumns="resetHiddenColumns",l.toggleHideColumn="toggleHideColumn",l.setHiddenColumns="setHiddenColumns",l.toggleHideAllColumns="toggleHideAllColumns";var K=function(e){e.getToggleHiddenProps=[U],e.getToggleHideAllColumnsProps=[$],e.stateReducers.push(J),e.useInstanceBeforeDimensions.push(Y),e.headerGroupsDeps.push((function(e,t){var n=t.instance;return [].concat(e,[n.state.hiddenColumns])})),e.useInstance.push(Q);};K.pluginName="useColumnVisibility";var U=function(e,t){var n=t.column;return [e,{onChange:function(e){n.toggleHidden(!e.target.checked);},style:{cursor:"pointer"},checked:n.isVisible,title:"Toggle Column Visible"}]},$=function(e,t){var n=t.instance;return [e,{onChange:function(e){n.toggleHideAllColumns(!e.target.checked);},style:{cursor:"pointer"},checked:!n.allColumnsHidden&&!n.state.hiddenColumns.length,title:"Toggle All Columns Hidden",indeterminate:!n.allColumnsHidden&&n.state.hiddenColumns.length}]};function J(e,t,n,o){if(t.type===l.init)return r({hiddenColumns:[]},e);if(t.type===l.resetHiddenColumns)return r({},e,{hiddenColumns:o.initialState.hiddenColumns||[]});if(t.type===l.toggleHideColumn){var i=(void 0!==t.value?t.value:!e.hiddenColumns.includes(t.columnId))?[].concat(e.hiddenColumns,[t.columnId]):e.hiddenColumns.filter((function(e){return e!==t.columnId}));return r({},e,{hiddenColumns:i})}return t.type===l.setHiddenColumns?r({},e,{hiddenColumns:m(t.value,e.hiddenColumns)}):t.type===l.toggleHideAllColumns?r({},e,{hiddenColumns:(void 0!==t.value?t.value:!e.hiddenColumns.length)?o.allColumns.map((function(e){return e.id})):[]}):void 0}function Y(e){var n=e.headers,o=e.state.hiddenColumns;t.useRef(false).current;var r=0;n.forEach((function(e){return r+=function e(t,n){t.isVisible=n&&!o.includes(t.id);var r=0;return t.headers&&t.headers.length?t.headers.forEach((function(n){return r+=e(n,t.isVisible)})):r=t.isVisible?1:0,t.totalVisibleHeaderCount=r,r}(e,true)}));}function Q(e){var n=e.columns,o=e.flatHeaders,r=e.dispatch,i=e.allColumns,u=e.getHooks,s=e.state.hiddenColumns,a=e.autoResetHiddenColumns,c=void 0===a||a,d=h(e),p=i.length===s.length,g=t.useCallback((function(e,t){return r({type:l.toggleHideColumn,columnId:e,value:t})}),[r]),v=t.useCallback((function(e){return r({type:l.setHiddenColumns,value:e})}),[r]),m=t.useCallback((function(e){return r({type:l.toggleHideAllColumns,value:e})}),[r]),y=f(u().getToggleHideAllColumnsProps,{instance:d()});o.forEach((function(e){e.toggleHidden=function(t){r({type:l.toggleHideColumn,columnId:e.id,value:t});},e.getToggleHiddenProps=f(u().getToggleHiddenProps,{instance:d(),column:e});}));var R=h(c);w((function(){R()&&r({type:l.resetHiddenColumns});}),[r,n]),Object.assign(e,{allColumnsHidden:p,toggleHideColumn:g,setHiddenColumns:v,toggleHideAllColumns:m,getToggleHideAllColumnsProps:y});}var Z={},ee={},te=function(e,t,n){return e},ne=function(e,t){return e.subRows||[]},oe=function(e,t,n){return ""+(n?[n.id,t].join("."):t)},re=function(e){return e};function ie(e){var t=e.initialState,n=void 0===t?Z:t,o=e.defaultColumn,u=void 0===o?ee:o,l=e.getSubRows,s=void 0===l?ne:l,a=e.getRowId,c=void 0===a?oe:a,d=e.stateReducer,f=void 0===d?te:d,p=e.useControlledState,g=void 0===p?re:p;return r({},i(e,["initialState","defaultColumn","getSubRows","getRowId","stateReducer","useControlledState"]),{initialState:n,defaultColumn:u,getSubRows:s,getRowId:c,stateReducer:f,useControlledState:g})}function ue(e,t){ void 0===t&&(t=0);var n=0,o=0,r=0,i=0;return e.forEach((function(e){var u=e.headers;if(e.totalLeft=t,u&&u.length){var l=ue(u,t),s=l[0],a=l[1],c=l[2],d=l[3];e.totalMinWidth=s,e.totalWidth=a,e.totalMaxWidth=c,e.totalFlexWidth=d;}else e.totalMinWidth=e.minWidth,e.totalWidth=Math.min(Math.max(e.minWidth,e.width),e.maxWidth),e.totalMaxWidth=e.maxWidth,e.totalFlexWidth=e.canResize?e.totalWidth:0;e.isVisible&&(t+=e.totalWidth,n+=e.totalMinWidth,o+=e.totalWidth,r+=e.totalMaxWidth,i+=e.totalFlexWidth);})),[n,o,r,i]}function le(e){var t=e.data,n=e.rows,o=e.flatRows,r=e.rowsById,i=e.column,u=e.getRowId,l=e.getSubRows,s=e.accessValueHooks,a=e.getInstance;t.forEach((function(e,c){return function e(n,c,d,f,g){ void 0===d&&(d=0);var v=n,m=u(n,c,f),h=r[m];if(h)h.subRows&&h.originalSubRows.forEach((function(t,n){return e(t,n,d+1,h)}));else if((h={id:m,original:v,index:c,depth:d,cells:[{}]}).cells.map=W,h.cells.filter=W,h.cells.forEach=W,h.cells[0].getCellProps=W,h.values={},g.push(h),o.push(h),r[m]=h,h.originalSubRows=l(n,c),h.originalSubRows){var y=[];h.originalSubRows.forEach((function(t,n){return e(t,n,d+1,h,y)})),h.subRows=y;}i.accessor&&(h.values[i.id]=i.accessor(n,c,h,g,t)),h.values[i.id]=p(s,h.values[i.id],{row:h,column:i,instance:a()});}(e,c,0,void 0,n)}));}l.resetExpanded="resetExpanded",l.toggleRowExpanded="toggleRowExpanded",l.toggleAllRowsExpanded="toggleAllRowsExpanded";var se=function(e){e.getToggleAllRowsExpandedProps=[ae],e.getToggleRowExpandedProps=[ce],e.stateReducers.push(de),e.useInstance.push(fe),e.prepareRow.push(pe);};se.pluginName="useExpanded";var ae=function(e,t){var n=t.instance;return [e,{onClick:function(e){n.toggleAllRowsExpanded();},style:{cursor:"pointer"},title:"Toggle All Rows Expanded"}]},ce=function(e,t){var n=t.row;return [e,{onClick:function(){n.toggleRowExpanded();},style:{cursor:"pointer"},title:"Toggle Row Expanded"}]};function de(e,t,n,o){if(t.type===l.init)return r({expanded:{}},e);if(t.type===l.resetExpanded)return r({},e,{expanded:o.initialState.expanded||{}});if(t.type===l.toggleAllRowsExpanded){var s=t.value,a=o.rowsById,c=Object.keys(a).length===Object.keys(e.expanded).length;if(void 0!==s?s:!c){var d={};return Object.keys(a).forEach((function(e){d[e]=true;})),r({},e,{expanded:d})}return r({},e,{expanded:{}})}if(t.type===l.toggleRowExpanded){var f,p=t.id,g=t.value,v=e.expanded[p],m=void 0!==g?g:!v;if(!v&&m)return r({},e,{expanded:r({},e.expanded,(f={},f[p]=true,f))});if(v&&!m){var h=e.expanded;h[p];return r({},e,{expanded:i(h,[p].map(u))})}return e}}function fe(e){var n=e.data,o=e.rows,r=e.rowsById,i=e.manualExpandedKey,u=void 0===i?"expanded":i,s=e.paginateExpandedRows,a=void 0===s||s,c=e.expandSubRows,d=void 0===c||c,p=e.autoResetExpanded,g=void 0===p||p,m=e.getHooks,y=e.plugins,R=e.state.expanded,b=e.dispatch;v(y,["useSortBy","useGroupBy","usePivotColumns","useGlobalFilter"],"useExpanded");var S=h(g),C=Boolean(Object.keys(r).length&&Object.keys(R).length);C&&Object.keys(r).some((function(e){return !R[e]}))&&(C=false),w((function(){S()&&b({type:l.resetExpanded});}),[b,n]);var x=t.useCallback((function(e,t){b({type:l.toggleRowExpanded,id:e,value:t});}),[b]),P=t.useCallback((function(e){return b({type:l.toggleAllRowsExpanded,value:e})}),[b]),B=t.useMemo((function(){return a?A(o,{manualExpandedKey:u,expanded:R,expandSubRows:d}):o}),[a,o,u,R,d]),E=t.useMemo((function(){return function(e){var t=0;return Object.keys(e).forEach((function(e){var n=e.split(".");t=Math.max(t,n.length);})),t}(R)}),[R]),I=h(e),F=f(m().getToggleAllRowsExpandedProps,{instance:I()});Object.assign(e,{preExpandedRows:o,expandedRows:B,rows:B,expandedDepth:E,isAllRowsExpanded:C,toggleRowExpanded:x,toggleAllRowsExpanded:P,getToggleAllRowsExpandedProps:F});}function pe(e,t){var n=t.instance.getHooks,o=t.instance;e.toggleRowExpanded=function(t){return o.toggleRowExpanded(e.id,t)},e.getToggleRowExpandedProps=f(n().getToggleRowExpandedProps,{instance:o,row:e});}var ge=function(e,t,n){return e=e.filter((function(e){return t.some((function(t){var o=e.values[t];return String(o).toLowerCase().includes(String(n).toLowerCase())}))}))};ge.autoRemove=function(e){return !e};var ve=function(e,t,n){return e.filter((function(e){return t.some((function(t){var o=e.values[t];return void 0===o||String(o).toLowerCase()===String(n).toLowerCase()}))}))};ve.autoRemove=function(e){return !e};var me=function(e,t,n){return e.filter((function(e){return t.some((function(t){var o=e.values[t];return void 0===o||String(o)===String(n)}))}))};me.autoRemove=function(e){return !e};var he=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t].includes(n)}))}))};he.autoRemove=function(e){return !e||!e.length};var ye=function(e,t,n){return e.filter((function(e){return t.some((function(t){var o=e.values[t];return o&&o.length&&n.every((function(e){return o.includes(e)}))}))}))};ye.autoRemove=function(e){return !e||!e.length};var we=function(e,t,n){return e.filter((function(e){return t.some((function(t){var o=e.values[t];return o&&o.length&&n.some((function(e){return o.includes(e)}))}))}))};we.autoRemove=function(e){return !e||!e.length};var Re=function(e,t,n){return e.filter((function(e){return t.some((function(t){var o=e.values[t];return n.includes(o)}))}))};Re.autoRemove=function(e){return !e||!e.length};var be=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]===n}))}))};be.autoRemove=function(e){return void 0===e};var Se=function(e,t,n){return e.filter((function(e){return t.some((function(t){return e.values[t]==n}))}))};Se.autoRemove=function(e){return null==e};var Ce=function(e,t,n){var o=n||[],r=o[0],i=o[1];if((r="number"==typeof r?r:-1/0)>(i="number"==typeof i?i:1/0)){var u=r;r=i,i=u;}return e.filter((function(e){return t.some((function(t){var n=e.values[t];return n>=r&&n<=i}))}))};Ce.autoRemove=function(e){return !e||"number"!=typeof e[0]&&"number"!=typeof e[1]};var xe=Object.freeze({__proto__:null,text:ge,exactText:ve,exactTextCase:me,includes:he,includesAll:ye,includesSome:we,includesValue:Re,exact:be,equals:Se,between:Ce});l.resetFilters="resetFilters",l.setFilter="setFilter",l.setAllFilters="setAllFilters";var Pe=function(e){e.stateReducers.push(Be),e.useInstance.push(Ee);};function Be(e,t,n,o){if(t.type===l.init)return r({filters:[]},e);if(t.type===l.resetFilters)return r({},e,{filters:o.initialState.filters||[]});if(t.type===l.setFilter){var i=t.columnId,u=t.filterValue,s=o.allColumns,a=o.filterTypes,c=s.find((function(e){return e.id===i}));if(!c)throw new Error("React-Table: Could not find a column with id: "+i);var d=k(c.filter,a||{},xe),f=e.filters.find((function(e){return e.id===i})),p=m(u,f&&f.value);return H(d.autoRemove,p,c)?r({},e,{filters:e.filters.filter((function(e){return e.id!==i}))}):r({},e,f?{filters:e.filters.map((function(e){return e.id===i?{id:i,value:p}:e}))}:{filters:[].concat(e.filters,[{id:i,value:p}])})}if(t.type===l.setAllFilters){var g=t.filters,v=o.allColumns,h=o.filterTypes;return r({},e,{filters:m(g,e.filters).filter((function(e){var t=v.find((function(t){return t.id===e.id}));return !H(k(t.filter,h||{},xe).autoRemove,e.value,t)}))})}}function Ee(e){var n=e.data,o=e.rows,r=e.flatRows,i=e.rowsById,u=e.allColumns,s=e.filterTypes,a=e.manualFilters,c=e.defaultCanFilter,d=void 0!==c&&c,f=e.disableFilters,p=e.state.filters,g=e.dispatch,v=e.autoResetFilters,m=void 0===v||v,y=t.useCallback((function(e,t){g({type:l.setFilter,columnId:e,filterValue:t});}),[g]),R=t.useCallback((function(e){g({type:l.setAllFilters,filters:e});}),[g]);u.forEach((function(e){var t=e.id,n=e.accessor,o=e.defaultCanFilter,r=e.disableFilters;e.canFilter=n?I(true!==r&&void 0,true!==f&&void 0,true):I(o,d,false),e.setFilter=function(t){return y(e.id,t)};var i=p.find((function(e){return e.id===t}));e.filterValue=i&&i.value;}));var b=t.useMemo((function(){if(a||!p.length)return [o,r,i];var e=[],t={};return [function n(o,r){ void 0===r&&(r=0);var i=o;return (i=p.reduce((function(e,t){var n=t.id,o=t.value,i=u.find((function(e){return e.id===n}));if(!i)return e;0===r&&(i.preFilteredRows=e);var l=k(i.filter,s||{},xe);return l?(i.filteredRows=l(e,[n],o),i.filteredRows):(console.warn("Could not find a valid 'column.filter' for column with the ID: "+i.id+"."),e)}),o)).forEach((function(o){e.push(o),t[o.id]=o,o.subRows&&(o.subRows=o.subRows&&o.subRows.length>0?n(o.subRows,r+1):o.subRows);})),i}(o),e,t]}),[a,p,o,r,i,u,s]),S=b[0],C=b[1],x=b[2];t.useMemo((function(){u.filter((function(e){return !p.find((function(t){return t.id===e.id}))})).forEach((function(e){e.preFilteredRows=S,e.filteredRows=S;}));}),[S,p,u]);var P=h(m);w((function(){P()&&g({type:l.resetFilters});}),[g,a?null:n]),Object.assign(e,{preFilteredRows:o,preFilteredFlatRows:r,preFilteredRowsById:i,filteredRows:S,filteredFlatRows:C,filteredRowsById:x,rows:S,flatRows:C,rowsById:x,setFilter:y,setAllFilters:R});}Pe.pluginName="useFilters",l.resetGlobalFilter="resetGlobalFilter",l.setGlobalFilter="setGlobalFilter";var Ie=function(e){e.stateReducers.push(Fe),e.useInstance.push(Ge);};function Fe(e,t,n,o){if(t.type===l.resetGlobalFilter)return r({},e,{globalFilter:o.initialState.globalFilter||void 0});if(t.type===l.setGlobalFilter){var u=t.filterValue,s=o.userFilterTypes,a=k(o.globalFilter,s||{},xe),c=m(u,e.globalFilter);if(H(a.autoRemove,c)){e.globalFilter;return i(e,["globalFilter"])}return r({},e,{globalFilter:c})}}function Ge(e){var n=e.data,o=e.rows,r=e.flatRows,i=e.rowsById,u=e.allColumns,s=e.filterTypes,a=e.globalFilter,c=e.manualGlobalFilter,d=e.state.globalFilter,f=e.dispatch,p=e.autoResetGlobalFilter,g=void 0===p||p,v=e.disableGlobalFilter,m=t.useCallback((function(e){f({type:l.setGlobalFilter,filterValue:e});}),[f]),y=t.useMemo((function(){if(c||void 0===d)return [o,r,i];var e=[],t={},n=k(a,s||{},xe);if(!n)return console.warn("Could not find a valid 'globalFilter' option."),o;u.forEach((function(e){var t=e.disableGlobalFilter;e.canFilter=I(true!==t&&void 0,true!==v&&void 0,true);}));var l=u.filter((function(e){return  true===e.canFilter}));return [function o(r){return (r=n(r,l.map((function(e){return e.id})),d)).forEach((function(n){e.push(n),t[n.id]=n,n.subRows=n.subRows&&n.subRows.length?o(n.subRows):n.subRows;})),r}(o),e,t]}),[c,d,a,s,u,o,r,i,v]),R=y[0],b=y[1],S=y[2],C=h(g);w((function(){C()&&f({type:l.resetGlobalFilter});}),[f,c?null:n]),Object.assign(e,{preGlobalFilteredRows:o,preGlobalFilteredFlatRows:r,preGlobalFilteredRowsById:i,globalFilteredRows:R,globalFilteredFlatRows:b,globalFilteredRowsById:S,rows:R,flatRows:b,rowsById:S,setGlobalFilter:m,disableGlobalFilter:v});}function Ae(e,t){return t.reduce((function(e,t){return e+("number"==typeof t?t:0)}),0)}Ie.pluginName="useGlobalFilter";var ke=Object.freeze({__proto__:null,sum:Ae,min:function(e){var t=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.min(t,e));})),t},max:function(e){var t=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.max(t,e));})),t},minMax:function(e){var t=e[0]||0,n=e[0]||0;return e.forEach((function(e){"number"==typeof e&&(t=Math.min(t,e),n=Math.max(n,e));})),t+".."+n},average:function(e){return Ae(0,e)/e.length},median:function(e){if(!e.length)return null;var t=Math.floor(e.length/2),n=[].concat(e).sort((function(e,t){return e-t}));return e.length%2!=0?n[t]:(n[t-1]+n[t])/2},unique:function(e){return Array.from(new Set(e).values())},uniqueCount:function(e){return new Set(e).size},count:function(e){return e.length}}),He=[],We={};l.resetGroupBy="resetGroupBy",l.setGroupBy="setGroupBy",l.toggleGroupBy="toggleGroupBy";var ze=function(e){e.getGroupByToggleProps=[Te],e.stateReducers.push(Oe),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return [].concat(e,[n.state.groupBy])})),e.visibleColumns.push(Me),e.useInstance.push(Le),e.prepareRow.push(Ne);};ze.pluginName="useGroupBy";var Te=function(e,t){var n=t.header;return [e,{onClick:n.canGroupBy?function(e){e.persist(),n.toggleGroupBy();}:void 0,style:{cursor:n.canGroupBy?"pointer":void 0},title:"Toggle GroupBy"}]};function Oe(e,t,n,o){if(t.type===l.init)return r({groupBy:[]},e);if(t.type===l.resetGroupBy)return r({},e,{groupBy:o.initialState.groupBy||[]});if(t.type===l.setGroupBy)return r({},e,{groupBy:t.value});if(t.type===l.toggleGroupBy){var i=t.columnId,u=t.value,s=void 0!==u?u:!e.groupBy.includes(i);return r({},e,s?{groupBy:[].concat(e.groupBy,[i])}:{groupBy:e.groupBy.filter((function(e){return e!==i}))})}}function Me(e,t){var n=t.instance.state.groupBy,o=n.map((function(t){return e.find((function(e){return e.id===t}))})).filter(Boolean),r=e.filter((function(e){return !n.includes(e.id)}));return (e=[].concat(o,r)).forEach((function(e){e.isGrouped=n.includes(e.id),e.groupedIndex=n.indexOf(e.id);})),e}var je={};function Le(e){var n=e.data,o=e.rows,i=e.flatRows,u=e.rowsById,s=e.allColumns,a=e.flatHeaders,c=e.groupByFn,d=void 0===c?De:c,p=e.manualGroupBy,g=e.aggregations,m=void 0===g?je:g,y=e.plugins,R=e.state.groupBy,b=e.dispatch,S=e.autoResetGroupBy,C=void 0===S||S,x=e.disableGroupBy,P=e.defaultCanGroupBy,B=e.getHooks;v(y,["useColumnOrder","useFilters"],"useGroupBy");var E=h(e);s.forEach((function(t){var n=t.accessor,o=t.defaultGroupBy,r=t.disableGroupBy;t.canGroupBy=n?I(t.canGroupBy,true!==r&&void 0,true!==x&&void 0,true):I(t.canGroupBy,o,P,false),t.canGroupBy&&(t.toggleGroupBy=function(){return e.toggleGroupBy(t.id)}),t.Aggregated=t.Aggregated||t.Cell;}));var F=t.useCallback((function(e,t){b({type:l.toggleGroupBy,columnId:e,value:t});}),[b]),A=t.useCallback((function(e){b({type:l.setGroupBy,value:e});}),[b]);a.forEach((function(e){e.getGroupByToggleProps=f(B().getGroupByToggleProps,{instance:E(),header:e});}));var k=t.useMemo((function(){if(p||!R.length)return [o,i,u,He,We,i,u];var e=R.filter((function(e){return s.find((function(t){return t.id===e}))})),t=[],n={},l=[],a={},c=[],f={},g=function o(i,u,p){if(void 0===u&&(u=0),u===e.length)return i.map((function(e){return r({},e,{depth:u})}));var g=e[u],v=d(i,g);return Object.entries(v).map((function(r,i){var d=r[0],v=r[1],h=g+":"+d,y=o(v,u+1,h=p?p+">"+h:h),w=u?G(v,"leafRows"):v,R=function(t,n,o){var r={};return s.forEach((function(i){if(e.includes(i.id))r[i.id]=n[0]?n[0].values[i.id]:null;else {var u="function"==typeof i.aggregate?i.aggregate:m[i.aggregate]||ke[i.aggregate];if(u){var l=n.map((function(e){return e.values[i.id]})),s=t.map((function(e){var t=e.values[i.id];if(!o&&i.aggregateValue){var n="function"==typeof i.aggregateValue?i.aggregateValue:m[i.aggregateValue]||ke[i.aggregateValue];if(!n)throw console.info({column:i}),new Error("React Table: Invalid column.aggregateValue option for column listed above");t=n(t,e,i);}return t}));r[i.id]=u(s,l);}else {if(i.aggregate)throw console.info({column:i}),new Error("React Table: Invalid column.aggregate option for column listed above");r[i.id]=null;}}})),r}(w,v,u),b={id:h,isGrouped:true,groupByID:g,groupByVal:d,values:R,subRows:y,leafRows:w,depth:u,index:i};return y.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(l.push(e),a[e.id]=e):(c.push(e),f[e.id]=e);})),b}))}(o);return g.forEach((function(e){t.push(e),n[e.id]=e,e.isGrouped?(l.push(e),a[e.id]=e):(c.push(e),f[e.id]=e);})),[g,t,n,l,a,c,f]}),[p,R,o,i,u,s,m,d]),H=k[0],W=k[1],z=k[2],T=k[3],O=k[4],M=k[5],j=k[6],L=h(C);w((function(){L()&&b({type:l.resetGroupBy});}),[b,p?null:n]),Object.assign(e,{preGroupedRows:o,preGroupedFlatRow:i,preGroupedRowsById:u,groupedRows:H,groupedFlatRows:W,groupedRowsById:z,onlyGroupedFlatRows:T,onlyGroupedRowsById:O,nonGroupedFlatRows:M,nonGroupedRowsById:j,rows:H,flatRows:W,rowsById:z,toggleGroupBy:F,setGroupBy:A});}function Ne(e){e.allCells.forEach((function(t){var n;t.isGrouped=t.column.isGrouped&&t.column.id===e.groupByID,t.isPlaceholder=!t.isGrouped&&t.column.isGrouped,t.isAggregated=!t.isGrouped&&!t.isPlaceholder&&(null==(n=e.subRows)?void 0:n.length);}));}function De(e,t){return e.reduce((function(e,n,o){var r=""+n.values[t];return e[r]=Array.isArray(e[r])?e[r]:[],e[r].push(n),e}),{})}var Ve=/([0-9]+)/gm;function _e(e,t){return e===t?0:e>t?1:-1}function Xe(e,t,n){return [e.values[n],t.values[n]]}function qe(e){return "number"==typeof e?isNaN(e)||e===1/0||e===-1/0?"":String(e):"string"==typeof e?e:""}var Ke=Object.freeze({__proto__:null,alphanumeric:function(e,t,n){var o=Xe(e,t,n),r=o[0],i=o[1];for(r=qe(r),i=qe(i),r=r.split(Ve).filter(Boolean),i=i.split(Ve).filter(Boolean);r.length&&i.length;){var u=r.shift(),l=i.shift(),s=parseInt(u,10),a=parseInt(l,10),c=[s,a].sort();if(isNaN(c[0])){if(u>l)return 1;if(l>u)return  -1}else {if(isNaN(c[1]))return isNaN(s)?-1:1;if(s>a)return 1;if(a>s)return  -1}}return r.length-i.length},datetime:function(e,t,n){var o=Xe(e,t,n),r=o[0],i=o[1];return _e(r=r.getTime(),i=i.getTime())},basic:function(e,t,n){var o=Xe(e,t,n);return _e(o[0],o[1])},string:function(e,t,n){var o=Xe(e,t,n),r=o[0],i=o[1];for(r=r.split("").filter(Boolean),i=i.split("").filter(Boolean);r.length&&i.length;){var u=r.shift(),l=i.shift(),s=u.toLowerCase(),a=l.toLowerCase();if(s>a)return 1;if(a>s)return  -1;if(u>l)return 1;if(l>u)return  -1}return r.length-i.length},number:function(e,t,n){var o=Xe(e,t,n),r=o[0],i=o[1],u=/[^0-9.]/gi;return _e(r=Number(String(r).replace(u,"")),i=Number(String(i).replace(u,"")))}});l.resetSortBy="resetSortBy",l.setSortBy="setSortBy",l.toggleSortBy="toggleSortBy",l.clearSortBy="clearSortBy",c.sortType="alphanumeric",c.sortDescFirst=false;var Ue=function(e){e.getSortByToggleProps=[$e],e.stateReducers.push(Je),e.useInstance.push(Ye);};Ue.pluginName="useSortBy";var $e=function(e,t){var n=t.instance,o=t.column,r=n.isMultiSortEvent,i=void 0===r?function(e){return e.shiftKey}:r;return [e,{onClick:o.canSort?function(e){e.persist(),o.toggleSortBy(void 0,!n.disableMultiSort&&i(e));}:void 0,style:{cursor:o.canSort?"pointer":void 0},title:o.canSort?"Toggle SortBy":void 0}]};function Je(e,t,n,o){if(t.type===l.init)return r({sortBy:[]},e);if(t.type===l.resetSortBy)return r({},e,{sortBy:o.initialState.sortBy||[]});if(t.type===l.clearSortBy)return r({},e,{sortBy:e.sortBy.filter((function(e){return e.id!==t.columnId}))});if(t.type===l.setSortBy)return r({},e,{sortBy:t.sortBy});if(t.type===l.toggleSortBy){var i,u=t.columnId,s=t.desc,a=t.multi,c=o.allColumns,d=o.disableMultiSort,f=o.disableSortRemove,p=o.disableMultiRemove,g=o.maxMultiSortColCount,v=void 0===g?Number.MAX_SAFE_INTEGER:g,m=e.sortBy,h=c.find((function(e){return e.id===u})).sortDescFirst,y=m.find((function(e){return e.id===u})),w=m.findIndex((function(e){return e.id===u})),R=null!=s,b=[];return "toggle"!==(i=!d&&a?y?"toggle":"add":w!==m.length-1||1!==m.length?"replace":y?"toggle":"replace")||f||R||a&&p||!(y&&y.desc&&!h||!y.desc&&h)||(i="remove"),"replace"===i?b=[{id:u,desc:R?s:h}]:"add"===i?(b=[].concat(m,[{id:u,desc:R?s:h}])).splice(0,b.length-v):"toggle"===i?b=m.map((function(e){return e.id===u?r({},e,{desc:R?s:!y.desc}):e})):"remove"===i&&(b=m.filter((function(e){return e.id!==u}))),r({},e,{sortBy:b})}}function Ye(e){var n=e.data,o=e.rows,r=e.flatRows,i=e.allColumns,u=e.orderByFn,s=void 0===u?Qe:u,a=e.sortTypes,c=e.manualSortBy,d=e.defaultCanSort,p=e.disableSortBy,g=e.flatHeaders,m=e.state.sortBy,y=e.dispatch,R=e.plugins,b=e.getHooks,S=e.autoResetSortBy,C=void 0===S||S;v(R,["useFilters","useGlobalFilter","useGroupBy","usePivotColumns"],"useSortBy");var x=t.useCallback((function(e){y({type:l.setSortBy,sortBy:e});}),[y]),P=t.useCallback((function(e,t,n){y({type:l.toggleSortBy,columnId:e,desc:t,multi:n});}),[y]),B=h(e);g.forEach((function(e){var t=e.accessor,n=e.canSort,o=e.disableSortBy,r=e.id,i=t?I(true!==o&&void 0,true!==p&&void 0,true):I(d,n,false);e.canSort=i,e.canSort&&(e.toggleSortBy=function(t,n){return P(e.id,t,n)},e.clearSortBy=function(){y({type:l.clearSortBy,columnId:e.id});}),e.getSortByToggleProps=f(b().getSortByToggleProps,{instance:B(),column:e});var u=m.find((function(e){return e.id===r}));e.isSorted=!!u,e.sortedIndex=m.findIndex((function(e){return e.id===r})),e.isSortedDesc=e.isSorted?u.desc:void 0;}));var E=t.useMemo((function(){if(c||!m.length)return [o,r];var e=[],t=m.filter((function(e){return i.find((function(t){return t.id===e.id}))}));return [function n(o){var r=s(o,t.map((function(e){var t=i.find((function(t){return t.id===e.id}));if(!t)throw new Error("React-Table: Could not find a column with id: "+e.id+" while sorting");var n=t.sortType,o=F(n)||(a||{})[n]||Ke[n];if(!o)throw new Error("React-Table: Could not find a valid sortType of '"+n+"' for column '"+e.id+"'.");return function(t,n){return o(t,n,e.id,e.desc)}})),t.map((function(e){var t=i.find((function(t){return t.id===e.id}));return t&&t.sortInverted?e.desc:!e.desc})));return r.forEach((function(t){e.push(t),t.subRows&&0!==t.subRows.length&&(t.subRows=n(t.subRows));})),r}(o),e]}),[c,m,o,r,i,s,a]),G=E[0],A=E[1],k=h(C);w((function(){k()&&y({type:l.resetSortBy});}),[c?null:n]),Object.assign(e,{preSortedRows:o,preSortedFlatRows:r,sortedRows:G,sortedFlatRows:A,rows:G,flatRows:A,setSortBy:x,toggleSortBy:P});}function Qe(e,t,n){return [].concat(e).sort((function(e,o){for(var r=0;r<t.length;r+=1){var i=t[r],u=false===n[r]||"desc"===n[r],l=i(e,o);if(0!==l)return u?-l:l}return n[0]?e.index-o.index:o.index-e.index}))}l.resetPage="resetPage",l.gotoPage="gotoPage",l.setPageSize="setPageSize";var Ze=function(e){e.stateReducers.push(et),e.useInstance.push(tt);};function et(e,t,n,o){if(t.type===l.init)return r({pageSize:10,pageIndex:0},e);if(t.type===l.resetPage)return r({},e,{pageIndex:o.initialState.pageIndex||0});if(t.type===l.gotoPage){var i=o.pageCount,u=o.page,s=m(t.pageIndex,e.pageIndex),a=false;return s>e.pageIndex?a=-1===i?u.length>=e.pageSize:s<i:s<e.pageIndex&&(a=s>-1),a?r({},e,{pageIndex:s}):e}if(t.type===l.setPageSize){var c=t.pageSize,d=e.pageSize*e.pageIndex;return r({},e,{pageIndex:Math.floor(d/c),pageSize:c})}}function tt(e){var n=e.rows,o=e.autoResetPage,r=void 0===o||o,i=e.manualExpandedKey,u=void 0===i?"expanded":i,s=e.plugins,a=e.pageCount,c=e.paginateExpandedRows,d=void 0===c||c,f=e.expandSubRows,p=void 0===f||f,g=e.state,m=g.pageSize,y=g.pageIndex,R=g.expanded,b=g.globalFilter,S=g.filters,C=g.groupBy,x=g.sortBy,P=e.dispatch,B=e.data,E=e.manualPagination;v(s,["useGlobalFilter","useFilters","useGroupBy","useSortBy","useExpanded"],"usePagination");var I=h(r);w((function(){I()&&P({type:l.resetPage});}),[P,E?null:B,b,S,C,x]);var F=E?a:Math.ceil(n.length/m),G=t.useMemo((function(){return F>0?[].concat(new Array(F)).fill(null).map((function(e,t){return t})):[]}),[F]),k=t.useMemo((function(){var e;if(E)e=n;else {var t=m*y,o=t+m;e=n.slice(t,o);}return d?e:A(e,{manualExpandedKey:u,expanded:R,expandSubRows:p})}),[p,R,u,E,y,m,d,n]),H=y>0,W=-1===F?k.length>=m:y<F-1,z=t.useCallback((function(e){P({type:l.gotoPage,pageIndex:e});}),[P]),T=t.useCallback((function(){return z((function(e){return e-1}))}),[z]),O=t.useCallback((function(){return z((function(e){return e+1}))}),[z]),M=t.useCallback((function(e){P({type:l.setPageSize,pageSize:e});}),[P]);Object.assign(e,{pageOptions:G,pageCount:F,page:k,canPreviousPage:H,canNextPage:W,gotoPage:z,previousPage:T,nextPage:O,setPageSize:M});}Ze.pluginName="usePagination",l.resetPivot="resetPivot",l.togglePivot="togglePivot";var nt=function(e){e.getPivotToggleProps=[rt],e.stateReducers.push(it),e.useInstanceAfterData.push(ut),e.allColumns.push(lt),e.accessValue.push(st),e.materializedColumns.push(at),e.materializedColumnsDeps.push(ct),e.visibleColumns.push(dt),e.visibleColumnsDeps.push(ft),e.useInstance.push(pt),e.prepareRow.push(gt);};nt.pluginName="usePivotColumns";var ot=[],rt=function(e,t){var n=t.header;return [e,{onClick:n.canPivot?function(e){e.persist(),n.togglePivot();}:void 0,style:{cursor:n.canPivot?"pointer":void 0},title:"Toggle Pivot"}]};function it(e,t,n,o){if(t.type===l.init)return r({pivotColumns:ot},e);if(t.type===l.resetPivot)return r({},e,{pivotColumns:o.initialState.pivotColumns||ot});if(t.type===l.togglePivot){var i=t.columnId,u=t.value,s=void 0!==u?u:!e.pivotColumns.includes(i);return r({},e,s?{pivotColumns:[].concat(e.pivotColumns,[i])}:{pivotColumns:e.pivotColumns.filter((function(e){return e!==i}))})}}function ut(e){e.allColumns.forEach((function(t){t.isPivotSource=e.state.pivotColumns.includes(t.id);}));}function lt(e,t){var n=t.instance;return e.forEach((function(e){e.isPivotSource=n.state.pivotColumns.includes(e.id),e.uniqueValues=new Set;})),e}function st(e,t){var n=t.column;return n.uniqueValues&&void 0!==e&&n.uniqueValues.add(e),e}function at(e,t){var n=t.instance,o=n.allColumns,i=n.state;if(!i.pivotColumns.length||!i.groupBy||!i.groupBy.length)return e;var u=i.pivotColumns.map((function(e){return o.find((function(t){return t.id===e}))})).filter(Boolean),l=o.filter((function(e){return !e.isPivotSource&&!i.groupBy.includes(e.id)&&!i.pivotColumns.includes(e.id)})),s=C(function e(t,n,o){ void 0===t&&(t=0),void 0===o&&(o=[]);var i=u[t];return i?Array.from(i.uniqueValues).sort().map((function(u){var l=r({},i,{Header:i.PivotHeader||"string"==typeof i.header?i.Header+": "+u:u,isPivotGroup:true,parent:n,depth:t,id:n?n.id+"."+i.id+"."+u:i.id+"."+u,pivotValue:u});return l.columns=e(t+1,l,[].concat(o,[function(e){return e.values[i.id]===u}])),l})):l.map((function(e){return r({},e,{canPivot:false,isPivoted:true,parent:n,depth:t,id:""+(n?n.id+"."+e.id:e.id),accessor:function(t,n,r){if(o.every((function(e){return e(r)})))return r.values[e.id]}})}))}());return [].concat(e,s)}function ct(e,t){var n=t.instance.state,o=n.pivotColumns,r=n.groupBy;return [].concat(e,[o,r])}function dt(e,t){var n=t.instance.state;return e=e.filter((function(e){return !e.isPivotSource})),n.pivotColumns.length&&n.groupBy&&n.groupBy.length&&(e=e.filter((function(e){return e.isGrouped||e.isPivoted}))),e}function ft(e,t){var n=t.instance;return [].concat(e,[n.state.pivotColumns,n.state.groupBy])}function pt(e){var t=e.columns,n=e.allColumns,o=e.flatHeaders,r=e.getHooks,i=e.plugins,u=e.dispatch,s=e.autoResetPivot,a=void 0===s||s,c=e.manaulPivot,d=e.disablePivot,p=e.defaultCanPivot;v(i,["useGroupBy"],"usePivotColumns");var g=h(e);n.forEach((function(t){var n=t.accessor,o=t.defaultPivot,r=t.disablePivot;t.canPivot=n?I(t.canPivot,true!==r&&void 0,true!==d&&void 0,true):I(t.canPivot,o,p,false),t.canPivot&&(t.togglePivot=function(){return e.togglePivot(t.id)}),t.Aggregated=t.Aggregated||t.Cell;}));o.forEach((function(e){e.getPivotToggleProps=f(r().getPivotToggleProps,{instance:g(),header:e});}));var m=h(a);w((function(){m()&&u({type:l.resetPivot});}),[u,c?null:t]),Object.assign(e,{togglePivot:function(e,t){u({type:l.togglePivot,columnId:e,value:t});}});}function gt(e){e.allCells.forEach((function(e){e.isPivoted=e.column.isPivoted;}));}l.resetSelectedRows="resetSelectedRows",l.toggleAllRowsSelected="toggleAllRowsSelected",l.toggleRowSelected="toggleRowSelected",l.toggleAllPageRowsSelected="toggleAllPageRowsSelected";var vt=function(e){e.getToggleRowSelectedProps=[mt],e.getToggleAllRowsSelectedProps=[ht],e.getToggleAllPageRowsSelectedProps=[yt],e.stateReducers.push(wt),e.useInstance.push(Rt),e.prepareRow.push(bt);};vt.pluginName="useRowSelect";var mt=function(e,t){var n=t.instance,o=t.row,r=n.manualRowSelectedKey,i=void 0===r?"isSelected":r;return [e,{onChange:function(e){o.toggleRowSelected(e.target.checked);},style:{cursor:"pointer"},checked:!(!o.original||!o.original[i])||o.isSelected,title:"Toggle Row Selected",indeterminate:o.isSomeSelected}]},ht=function(e,t){var n=t.instance;return [e,{onChange:function(e){n.toggleAllRowsSelected(e.target.checked);},style:{cursor:"pointer"},checked:n.isAllRowsSelected,title:"Toggle All Rows Selected",indeterminate:Boolean(!n.isAllRowsSelected&&Object.keys(n.state.selectedRowIds).length)}]},yt=function(e,t){var n=t.instance;return [e,{onChange:function(e){n.toggleAllPageRowsSelected(e.target.checked);},style:{cursor:"pointer"},checked:n.isAllPageRowsSelected,title:"Toggle All Current Page Rows Selected",indeterminate:Boolean(!n.isAllPageRowsSelected&&n.page.some((function(e){var t=e.id;return n.state.selectedRowIds[t]})))}]};function wt(e,t,n,o){if(t.type===l.init)return r({selectedRowIds:{}},e);if(t.type===l.resetSelectedRows)return r({},e,{selectedRowIds:o.initialState.selectedRowIds||{}});if(t.type===l.toggleAllRowsSelected){var i=t.value,u=o.isAllRowsSelected,s=o.rowsById,a=o.nonGroupedRowsById,c=void 0===a?s:a,d=void 0!==i?i:!u,f=Object.assign({},e.selectedRowIds);return d?Object.keys(c).forEach((function(e){f[e]=true;})):Object.keys(c).forEach((function(e){delete f[e];})),r({},e,{selectedRowIds:f})}if(t.type===l.toggleRowSelected){var p=t.id,g=t.value,v=o.rowsById,m=o.selectSubRows,h=void 0===m||m,y=o.getSubRows,w=e.selectedRowIds[p],R=void 0!==g?g:!w;if(w===R)return e;var b=r({},e.selectedRowIds);return function e(t){var n=v[t];if(n&&(n.isGrouped||(R?b[t]=true:delete b[t]),h&&y(n)))return y(n).forEach((function(t){return e(t.id)}))}(p),r({},e,{selectedRowIds:b})}if(t.type===l.toggleAllPageRowsSelected){var S=t.value,C=o.page,x=o.rowsById,P=o.selectSubRows,B=void 0===P||P,E=o.isAllPageRowsSelected,I=o.getSubRows,F=void 0!==S?S:!E,G=r({},e.selectedRowIds);return C.forEach((function(e){return function e(t){var n=x[t];if(n.isGrouped||(F?G[t]=true:delete G[t]),B&&I(n))return I(n).forEach((function(t){return e(t.id)}))}(e.id)})),r({},e,{selectedRowIds:G})}return e}function Rt(e){var n=e.data,o=e.rows,r=e.getHooks,i=e.plugins,u=e.rowsById,s=e.nonGroupedRowsById,a=void 0===s?u:s,c=e.autoResetSelectedRows,d=void 0===c||c,p=e.state.selectedRowIds,g=e.selectSubRows,m=void 0===g||g,y=e.dispatch,R=e.page,b=e.getSubRows;v(i,["useFilters","useGroupBy","useSortBy","useExpanded","usePagination"],"useRowSelect");var S=t.useMemo((function(){var e=[];return o.forEach((function(t){var n=m?function e(t,n,o){if(n[t.id])return  true;var r=o(t);if(r&&r.length){var i=true,u=false;return r.forEach((function(t){u&&!i||(e(t,n,o)?u=true:i=false);})),!!i||!!u&&null}return  false}(t,p,b):!!p[t.id];t.isSelected=!!n,t.isSomeSelected=null===n,n&&e.push(t);})),e}),[o,m,p,b]),C=Boolean(Object.keys(a).length&&Object.keys(p).length),x=C;C&&Object.keys(a).some((function(e){return !p[e]}))&&(C=false),C||R&&R.length&&R.some((function(e){var t=e.id;return !p[t]}))&&(x=false);var P=h(d);w((function(){P()&&y({type:l.resetSelectedRows});}),[y,n]);var B=t.useCallback((function(e){return y({type:l.toggleAllRowsSelected,value:e})}),[y]),E=t.useCallback((function(e){return y({type:l.toggleAllPageRowsSelected,value:e})}),[y]),I=t.useCallback((function(e,t){return y({type:l.toggleRowSelected,id:e,value:t})}),[y]),F=h(e),G=f(r().getToggleAllRowsSelectedProps,{instance:F()}),A=f(r().getToggleAllPageRowsSelectedProps,{instance:F()});Object.assign(e,{selectedFlatRows:S,isAllRowsSelected:C,isAllPageRowsSelected:x,toggleRowSelected:I,toggleAllRowsSelected:B,getToggleAllRowsSelectedProps:G,getToggleAllPageRowsSelectedProps:A,toggleAllPageRowsSelected:E});}function bt(e,t){var n=t.instance;e.toggleRowSelected=function(t){return n.toggleRowSelected(e.id,t)},e.getToggleRowSelectedProps=f(n.getHooks().getToggleRowSelectedProps,{instance:n,row:e});}var St=function(e){return {}},Ct=function(e){return {}};l.setRowState="setRowState",l.setCellState="setCellState",l.resetRowState="resetRowState";var xt=function(e){e.stateReducers.push(Pt),e.useInstance.push(Bt),e.prepareRow.push(Et);};function Pt(e,t,n,o){var i=o.initialRowStateAccessor,u=void 0===i?St:i,s=o.initialCellStateAccessor,a=void 0===s?Ct:s,c=o.rowsById;if(t.type===l.init)return r({rowState:{}},e);if(t.type===l.resetRowState)return r({},e,{rowState:o.initialState.rowState||{}});if(t.type===l.setRowState){var d,f=t.rowId,p=t.value,g=void 0!==e.rowState[f]?e.rowState[f]:u(c[f]);return r({},e,{rowState:r({},e.rowState,(d={},d[f]=m(p,g),d))})}if(t.type===l.setCellState){var v,h,y,w,R,b=t.rowId,S=t.columnId,C=t.value,x=void 0!==e.rowState[b]?e.rowState[b]:u(c[b]),P=void 0!==(null==x?void 0:null==(v=x.cellState)?void 0:v[S])?x.cellState[S]:a(null==(h=c[b])?void 0:null==(y=h.cells)?void 0:y.find((function(e){return e.column.id===S})));return r({},e,{rowState:r({},e.rowState,(R={},R[b]=r({},x,{cellState:r({},x.cellState||{},(w={},w[S]=m(C,P),w))}),R))})}}function Bt(e){var n=e.autoResetRowState,o=void 0===n||n,r=e.data,i=e.dispatch,u=t.useCallback((function(e,t){return i({type:l.setRowState,rowId:e,value:t})}),[i]),s=t.useCallback((function(e,t,n){return i({type:l.setCellState,rowId:e,columnId:t,value:n})}),[i]),a=h(o);w((function(){a()&&i({type:l.resetRowState});}),[r]),Object.assign(e,{setRowState:u,setCellState:s});}function Et(e,t){var n=t.instance,o=n.initialRowStateAccessor,r=void 0===o?St:o,i=n.initialCellStateAccessor,u=void 0===i?Ct:i,l=n.state.rowState;e&&(e.state=void 0!==l[e.id]?l[e.id]:r(e),e.setState=function(t){return n.setRowState(e.id,t)},e.cells.forEach((function(t){e.state.cellState||(e.state.cellState={}),t.state=void 0!==e.state.cellState[t.column.id]?e.state.cellState[t.column.id]:u(t),t.setState=function(o){return n.setCellState(e.id,t.column.id,o)};})));}xt.pluginName="useRowState",l.resetColumnOrder="resetColumnOrder",l.setColumnOrder="setColumnOrder";var It=function(e){e.stateReducers.push(Ft),e.visibleColumnsDeps.push((function(e,t){var n=t.instance;return [].concat(e,[n.state.columnOrder])})),e.visibleColumns.push(Gt),e.useInstance.push(At);};function Ft(e,t,n,o){return t.type===l.init?r({columnOrder:[]},e):t.type===l.resetColumnOrder?r({},e,{columnOrder:o.initialState.columnOrder||[]}):t.type===l.setColumnOrder?r({},e,{columnOrder:m(t.columnOrder,e.columnOrder)}):void 0}function Gt(e,t){var n=t.instance.state.columnOrder;if(!n||!n.length)return e;for(var o=[].concat(n),r=[].concat(e),i=[],u=function(){var e=o.shift(),t=r.findIndex((function(t){return t.id===e}));t>-1&&i.push(r.splice(t,1)[0]);};r.length&&o.length;)u();return [].concat(i,r)}function At(e){var n=e.dispatch;e.setColumnOrder=t.useCallback((function(e){return n({type:l.setColumnOrder,columnOrder:e})}),[n]);}It.pluginName="useColumnOrder",c.canResize=true,l.columnStartResizing="columnStartResizing",l.columnResizing="columnResizing",l.columnDoneResizing="columnDoneResizing",l.resetResize="resetResize";var kt=function(e){e.getResizerProps=[Ht],e.getHeaderProps.push({style:{position:"relative"}}),e.stateReducers.push(Wt),e.useInstance.push(Tt),e.useInstanceBeforeDimensions.push(zt);},Ht=function(e,t){var n=t.instance,o=t.header,r=n.dispatch,i=function(e,t){var n=false;if("touchstart"===e.type){if(e.touches&&e.touches.length>1)return;n=true;}var o,i,u=function(e){var t=[];return function e(n){n.columns&&n.columns.length&&n.columns.map(e);t.push(n);}(e),t}(t).map((function(e){return [e.id,e.totalWidth]})),s=n?Math.round(e.touches[0].clientX):e.clientX,a=function(){window.cancelAnimationFrame(o),o=null,r({type:l.columnDoneResizing});},c=function(){window.cancelAnimationFrame(o),o=null,r({type:l.columnResizing,clientX:i});},d=function(e){i=e,o||(o=window.requestAnimationFrame(c));},f={mouse:{moveEvent:"mousemove",moveHandler:function(e){return d(e.clientX)},upEvent:"mouseup",upHandler:function(e){document.removeEventListener("mousemove",f.mouse.moveHandler),document.removeEventListener("mouseup",f.mouse.upHandler),a();}},touch:{moveEvent:"touchmove",moveHandler:function(e){return e.cancelable&&(e.preventDefault(),e.stopPropagation()),d(e.touches[0].clientX),false},upEvent:"touchend",upHandler:function(e){document.removeEventListener(f.touch.moveEvent,f.touch.moveHandler),document.removeEventListener(f.touch.upEvent,f.touch.moveHandler),a();}}},p=n?f.touch:f.mouse,g=!!function(){if("boolean"==typeof z)return z;var e=false;try{var t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t);}catch(t){e=false;}return z=e}()&&{passive:false};document.addEventListener(p.moveEvent,p.moveHandler,g),document.addEventListener(p.upEvent,p.upHandler,g),r({type:l.columnStartResizing,columnId:t.id,columnWidth:t.totalWidth,headerIdWidths:u,clientX:s});};return [e,{onMouseDown:function(e){return e.persist()||i(e,o)},onTouchStart:function(e){return e.persist()||i(e,o)},style:{cursor:"col-resize"},draggable:false,role:"separator"}]};function Wt(e,t){if(t.type===l.init)return r({columnResizing:{columnWidths:{}}},e);if(t.type===l.resetResize)return r({},e,{columnResizing:{columnWidths:{}}});if(t.type===l.columnStartResizing){var n=t.clientX,o=t.columnId,i=t.columnWidth,u=t.headerIdWidths;return r({},e,{columnResizing:r({},e.columnResizing,{startX:n,headerIdWidths:u,columnWidth:i,isResizingColumn:o})})}if(t.type===l.columnResizing){var s=t.clientX,a=e.columnResizing,c=a.startX,d=a.columnWidth,f=a.headerIdWidths,p=(s-c)/d,g={};return (void 0===f?[]:f).forEach((function(e){var t=e[0],n=e[1];g[t]=Math.max(n+n*p,0);})),r({},e,{columnResizing:r({},e.columnResizing,{columnWidths:r({},e.columnResizing.columnWidths,{},g)})})}return t.type===l.columnDoneResizing?r({},e,{columnResizing:r({},e.columnResizing,{startX:null,isResizingColumn:null})}):void 0}kt.pluginName="useResizeColumns";var zt=function(e){var t=e.flatHeaders,n=e.disableResizing,o=e.getHooks,r=e.state.columnResizing,i=h(e);t.forEach((function(e){var t=I(true!==e.disableResizing&&void 0,true!==n&&void 0,true);e.canResize=t,e.width=r.columnWidths[e.id]||e.originalWidth||e.width,e.isResizing=r.isResizingColumn===e.id,t&&(e.getResizerProps=f(o().getResizerProps,{instance:i(),header:e}));}));};function Tt(e){var n=e.plugins,o=e.dispatch,r=e.autoResetResize,i=void 0===r||r,u=e.columns;v(n,["useAbsoluteLayout"],"useResizeColumns");var s=h(i);w((function(){s()&&o({type:l.resetResize});}),[u]);var a=t.useCallback((function(){return o({type:l.resetResize})}),[o]);Object.assign(e,{resetResizing:a});}var Ot={position:"absolute",top:0},Mt=function(e){e.getTableBodyProps.push(jt),e.getRowProps.push(jt),e.getHeaderGroupProps.push(jt),e.getFooterGroupProps.push(jt),e.getHeaderProps.push((function(e,t){var n=t.column;return [e,{style:r({},Ot,{left:n.totalLeft+"px",width:n.totalWidth+"px"})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return [e,{style:r({},Ot,{left:n.column.totalLeft+"px",width:n.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return [e,{style:r({},Ot,{left:n.totalLeft+"px",width:n.totalWidth+"px"})}]}));};Mt.pluginName="useAbsoluteLayout";var jt=function(e,t){return [e,{style:{position:"relative",width:t.instance.totalColumnsWidth+"px"}}]},Lt={display:"inline-block",boxSizing:"border-box"},Nt=function(e,t){return [e,{style:{display:"flex",width:t.instance.totalColumnsWidth+"px"}}]},Dt=function(e){e.getRowProps.push(Nt),e.getHeaderGroupProps.push(Nt),e.getFooterGroupProps.push(Nt),e.getHeaderProps.push((function(e,t){var n=t.column;return [e,{style:r({},Lt,{width:n.totalWidth+"px"})}]})),e.getCellProps.push((function(e,t){var n=t.cell;return [e,{style:r({},Lt,{width:n.column.totalWidth+"px"})}]})),e.getFooterProps.push((function(e,t){var n=t.column;return [e,{style:r({},Lt,{width:n.totalWidth+"px"})}]}));};function Vt(e){e.getTableProps.push(_t),e.getRowProps.push(Xt),e.getHeaderGroupProps.push(Xt),e.getFooterGroupProps.push(Xt),e.getHeaderProps.push(qt),e.getCellProps.push(Kt),e.getFooterProps.push(Ut);}Dt.pluginName="useBlockLayout",Vt.pluginName="useFlexLayout";var _t=function(e,t){return [e,{style:{minWidth:t.instance.totalColumnsMinWidth+"px"}}]},Xt=function(e,t){return [e,{style:{display:"flex",flex:"1 0 auto",minWidth:t.instance.totalColumnsMinWidth+"px"}}]},qt=function(e,t){var n=t.column;return [e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]},Kt=function(e,t){var n=t.cell;return [e,{style:{boxSizing:"border-box",flex:n.column.totalFlexWidth+" 0 auto",minWidth:n.column.totalMinWidth+"px",width:n.column.totalWidth+"px"}}]},Ut=function(e,t){var n=t.column;return [e,{style:{boxSizing:"border-box",flex:n.totalFlexWidth?n.totalFlexWidth+" 0 auto":void 0,minWidth:n.totalMinWidth+"px",width:n.totalWidth+"px"}}]};function $t(e){e.stateReducers.push(Zt),e.getTableProps.push(Jt),e.getHeaderProps.push(Yt),e.getRowProps.push(Qt);}l.columnStartResizing="columnStartResizing",l.columnResizing="columnResizing",l.columnDoneResizing="columnDoneResizing",l.resetResize="resetResize",$t.pluginName="useGridLayout";var Jt=function(e,t){var n=t.instance;return [e,{style:{display:"grid",gridTemplateColumns:n.visibleColumns.map((function(e){var t;return n.state.gridLayout.columnWidths[e.id]?n.state.gridLayout.columnWidths[e.id]+"px":(null==(t=n.state.columnResizing)?void 0:t.isResizingColumn)?n.state.gridLayout.startWidths[e.id]+"px":"number"==typeof e.width?e.width+"px":e.width})).join(" ")}}]},Yt=function(e,t){var n=t.column;return [e,{id:"header-cell-"+n.id,style:{position:"sticky",gridColumn:"span "+n.totalVisibleHeaderCount}}]},Qt=function(e,t){var n=t.row;return n.isExpanded?[e,{style:{gridColumn:"1 / "+(n.cells.length+1)}}]:[e,{}]};function Zt(e,t,n,o){if(t.type===l.init)return r({gridLayout:{columnWidths:{}}},e);if(t.type===l.resetResize)return r({},e,{gridLayout:{columnWidths:{}}});if(t.type===l.columnStartResizing){var i=t.columnId,u=t.headerIdWidths,s=en(i);if(void 0!==s){var a=o.visibleColumns.reduce((function(e,t){var n;return r({},e,((n={})[t.id]=en(t.id),n))}),{}),c=o.visibleColumns.reduce((function(e,t){var n;return r({},e,((n={})[t.id]=t.minWidth,n))}),{}),d=o.visibleColumns.reduce((function(e,t){var n;return r({},e,((n={})[t.id]=t.maxWidth,n))}),{}),f=u.map((function(e){var t=e[0];return [t,en(t)]}));return r({},e,{gridLayout:r({},e.gridLayout,{startWidths:a,minWidths:c,maxWidths:d,headerIdGridWidths:f,columnWidth:s})})}return e}if(t.type===l.columnResizing){var p=t.clientX,g=e.columnResizing.startX,v=e.gridLayout,m=v.columnWidth,h=v.minWidths,y=v.maxWidths,w=v.headerIdGridWidths,R=(p-g)/m,b={};return (void 0===w?[]:w).forEach((function(e){var t=e[0],n=e[1];b[t]=Math.min(Math.max(h[t],n+n*R),y[t]);})),r({},e,{gridLayout:r({},e.gridLayout,{columnWidths:r({},e.gridLayout.columnWidths,{},b)})})}return t.type===l.columnDoneResizing?r({},e,{gridLayout:r({},e.gridLayout,{startWidths:{},minWidths:{},maxWidths:{}})}):void 0}function en(e){var t,n=null==(t=document.getElementById("header-cell-"+e))?void 0:t.offsetWidth;if(void 0!==n)return n}e._UNSTABLE_usePivotColumns=nt,e.actions=l,e.defaultColumn=c,e.defaultGroupByFn=De,e.defaultOrderByFn=Qe,e.defaultRenderer=s,e.emptyRenderer=a,e.ensurePluginOrder=v,e.flexRender=b,e.functionalUpdate=m,e.loopHooks=g,e.makePropGetter=f,e.makeRenderer=R,e.reduceHooks=p,e.safeUseLayoutEffect=y,e.useAbsoluteLayout=Mt,e.useAsyncDebounce=function(e,n){ void 0===n&&(n=0);var r=t.useRef({}),i=h(e),u=h(n);return t.useCallback(function(){var e=o(regeneratorRuntime.mark((function e(){var t,n,l,s=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=s.length,n=new Array(t),l=0;l<t;l++)n[l]=s[l];return r.current.promise||(r.current.promise=new Promise((function(e,t){r.current.resolve=e,r.current.reject=t;}))),r.current.timeout&&clearTimeout(r.current.timeout),r.current.timeout=setTimeout(o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete r.current.timeout,e.prev=1,e.t0=r.current,e.next=5,i().apply(void 0,n);case 5:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),r.current.reject(e.t2);case 12:return e.prev=12,delete r.current.promise,e.finish(12);case 15:case "end":return e.stop()}}),e,null,[[1,9,12,15]])}))),u()),e.abrupt("return",r.current.promise);case 5:case "end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),[i,u])},e.useBlockLayout=Dt,e.useColumnOrder=It,e.useExpanded=se,e.useFilters=Pe,e.useFlexLayout=Vt,e.useGetLatest=h,e.useGlobalFilter=Ie,e.useGridLayout=$t,e.useGroupBy=ze,e.useMountedLayoutEffect=w,e.usePagination=Ze,e.useResizeColumns=kt,e.useRowSelect=vt,e.useRowState=xt,e.useSortBy=Ue,e.useTable=function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];e=ie(e),o=[K].concat(o);var u=t.useRef({}),s=h(u.current);Object.assign(s(),r({},e,{plugins:o,hooks:q()})),o.filter(Boolean).forEach((function(e){e(s().hooks);}));var a=h(s().hooks);s().getHooks=a,delete s().hooks,Object.assign(s(),p(a().useOptions,ie(e)));var c=s(),d=c.data,v=c.columns,m=c.initialState,y=c.defaultColumn,w=c.getSubRows,b=c.getRowId,E=c.stateReducer,I=c.useControlledState,F=h(E),G=t.useCallback((function(e,t){if(!t.type)throw console.info({action:t}),new Error("Unknown Action 👆");return [].concat(a().stateReducers,Array.isArray(F())?F():[F()]).reduce((function(n,o){return o(n,t,e,s())||n}),e)}),[a,F,s]),A=t.useReducer(G,void 0,(function(){return G(m,{type:l.init})})),k=A[0],H=A[1],W=p([].concat(a().useControlledState,[I]),k,{instance:s()});Object.assign(s(),{state:W,dispatch:H});var z=t.useMemo((function(){return S(p(a().columns,v,{instance:s()}))}),[a,s,v].concat(p(a().columnsDeps,[],{instance:s()})));s().columns=z;var T=t.useMemo((function(){return p(a().allColumns,C(z),{instance:s()}).map(x)}),[z,a,s].concat(p(a().allColumnsDeps,[],{instance:s()})));s().allColumns=T;var O=t.useMemo((function(){for(var e=[],t=[],n={},o=[].concat(T);o.length;){var r=o.shift();le({data:d,rows:e,flatRows:t,rowsById:n,column:r,getRowId:b,getSubRows:w,accessValueHooks:a().accessValue,getInstance:s});}return [e,t,n]}),[T,d,b,w,a,s]),M=O[0],j=O[1],L=O[2];Object.assign(s(),{rows:M,initialRows:[].concat(M),flatRows:j,rowsById:L}),g(a().useInstanceAfterData,s());var N=t.useMemo((function(){return p(a().visibleColumns,T,{instance:s()}).map((function(e){return P(e,y)}))}),[a,T,s,y].concat(p(a().visibleColumnsDeps,[],{instance:s()})));T=t.useMemo((function(){var e=[].concat(N);return T.forEach((function(t){e.find((function(e){return e.id===t.id}))||e.push(t);})),e}),[T,N]),s().allColumns=T;var D=t.useMemo((function(){return p(a().headerGroups,B(N,y),s())}),[a,N,y,s].concat(p(a().headerGroupsDeps,[],{instance:s()})));s().headerGroups=D;var V=t.useMemo((function(){return D.length?D[0].headers:[]}),[D]);s().headers=V,s().flatHeaders=D.reduce((function(e,t){return [].concat(e,t.headers)}),[]),g(a().useInstanceBeforeDimensions,s());var _=N.filter((function(e){return e.isVisible})).map((function(e){return e.id})).sort().join("_");N=t.useMemo((function(){return N.filter((function(e){return e.isVisible}))}),[N,_]),s().visibleColumns=N;var X=ue(V),U=X[0],$=X[1],J=X[2];return s().totalColumnsMinWidth=U,s().totalColumnsWidth=$,s().totalColumnsMaxWidth=J,g(a().useInstance,s()),[].concat(s().flatHeaders,s().allColumns).forEach((function(e){e.render=R(s(),e),e.getHeaderProps=f(a().getHeaderProps,{instance:s(),column:e}),e.getFooterProps=f(a().getFooterProps,{instance:s(),column:e});})),s().headerGroups=t.useMemo((function(){return D.filter((function(e,t){return e.headers=e.headers.filter((function(e){return e.headers?function e(t){return t.filter((function(t){return t.headers?e(t.headers):t.isVisible})).length}(e.headers):e.isVisible})),!!e.headers.length&&(e.getHeaderGroupProps=f(a().getHeaderGroupProps,{instance:s(),headerGroup:e,index:t}),e.getFooterGroupProps=f(a().getFooterGroupProps,{instance:s(),headerGroup:e,index:t}),true)}))}),[D,s,a]),s().footerGroups=[].concat(s().headerGroups).reverse(),s().prepareRow=t.useCallback((function(e){e.getRowProps=f(a().getRowProps,{instance:s(),row:e}),e.allCells=T.map((function(t){var n=e.values[t.id],o={column:t,row:e,value:n};return o.getCellProps=f(a().getCellProps,{instance:s(),cell:o}),o.render=R(s(),t,{row:e,cell:o,value:n}),o})),e.cells=N.map((function(t){return e.allCells.find((function(e){return e.column.id===t.id}))})),g(a().prepareRow,e,{instance:s()});}),[a,s,T,N]),s().getTableProps=f(a().getTableProps,{instance:s()}),s().getTableBodyProps=f(a().getTableBodyProps,{instance:s()}),g(a().useFinalInstance,s()),s()},Object.defineProperty(e,"__esModule",{value:true});}));
		
	} (reactTable_production_min, reactTable_production_min.exports));
	return reactTable_production_min.exports;
}

var reactTable_development = {exports: {}};

var hasRequiredReactTable_development;

function requireReactTable_development () {
	if (hasRequiredReactTable_development) return reactTable_development.exports;
	hasRequiredReactTable_development = 1;
	(function (module, exports) {
		(function (global, factory) {
		  factory(exports, require$$0) ;
		}(commonjsGlobal, (function (exports, React) {
		  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

		  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
		    try {
		      var info = gen[key](arg);
		      var value = info.value;
		    } catch (error) {
		      reject(error);
		      return;
		    }

		    if (info.done) {
		      resolve(value);
		    } else {
		      Promise.resolve(value).then(_next, _throw);
		    }
		  }

		  function _asyncToGenerator(fn) {
		    return function () {
		      var self = this,
		          args = arguments;
		      return new Promise(function (resolve, reject) {
		        var gen = fn.apply(self, args);

		        function _next(value) {
		          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
		        }

		        function _throw(err) {
		          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
		        }

		        _next(undefined);
		      });
		    };
		  }

		  function _extends() {
		    _extends = Object.assign || function (target) {
		      for (var i = 1; i < arguments.length; i++) {
		        var source = arguments[i];

		        for (var key in source) {
		          if (Object.prototype.hasOwnProperty.call(source, key)) {
		            target[key] = source[key];
		          }
		        }
		      }

		      return target;
		    };

		    return _extends.apply(this, arguments);
		  }

		  function _objectWithoutPropertiesLoose(source, excluded) {
		    if (source == null) return {};
		    var target = {};
		    var sourceKeys = Object.keys(source);
		    var key, i;

		    for (i = 0; i < sourceKeys.length; i++) {
		      key = sourceKeys[i];
		      if (excluded.indexOf(key) >= 0) continue;
		      target[key] = source[key];
		    }

		    return target;
		  }

		  function _toPrimitive(input, hint) {
		    if (typeof input !== "object" || input === null) return input;
		    var prim = input[Symbol.toPrimitive];

		    if (prim !== undefined) {
		      var res = prim.call(input, hint);
		      if (typeof res !== "object") return res;
		      throw new TypeError("@@toPrimitive must return a primitive value.");
		    }

		    return (String )(input);
		  }

		  function _toPropertyKey(arg) {
		    var key = _toPrimitive(arg, "string");

		    return typeof key === "symbol" ? key : String(key);
		  }

		  var renderErr = 'Renderer Error ☝️';
		  var actions = {
		    init: 'init'
		  };
		  var defaultRenderer = function defaultRenderer(_ref) {
		    var _ref$value = _ref.value,
		        value = _ref$value === void 0 ? '' : _ref$value;
		    return value;
		  };
		  var emptyRenderer = function emptyRenderer() {
		    return React.createElement(React.Fragment, null, "\xA0");
		  };
		  var defaultColumn = {
		    Cell: defaultRenderer,
		    width: 150,
		    minWidth: 0,
		    maxWidth: Number.MAX_SAFE_INTEGER
		  };

		  function mergeProps() {
		    for (var _len = arguments.length, propList = new Array(_len), _key = 0; _key < _len; _key++) {
		      propList[_key] = arguments[_key];
		    }

		    return propList.reduce(function (props, next) {
		      var style = next.style,
		          className = next.className,
		          rest = _objectWithoutPropertiesLoose(next, ["style", "className"]);

		      props = _extends({}, props, {}, rest);

		      if (style) {
		        props.style = props.style ? _extends({}, props.style || {}, {}, style || {}) : style;
		      }

		      if (className) {
		        props.className = props.className ? props.className + ' ' + className : className;
		      }

		      if (props.className === '') {
		        delete props.className;
		      }

		      return props;
		    }, {});
		  }

		  function handlePropGetter(prevProps, userProps, meta) {
		    // Handle a lambda, pass it the previous props
		    if (typeof userProps === 'function') {
		      return handlePropGetter({}, userProps(prevProps, meta));
		    } // Handle an array, merge each item as separate props


		    if (Array.isArray(userProps)) {
		      return mergeProps.apply(void 0, [prevProps].concat(userProps));
		    } // Handle an object by default, merge the two objects


		    return mergeProps(prevProps, userProps);
		  }

		  var makePropGetter = function makePropGetter(hooks, meta) {
		    if (meta === void 0) {
		      meta = {};
		    }

		    return function (userProps) {
		      if (userProps === void 0) {
		        userProps = {};
		      }

		      return [].concat(hooks, [userProps]).reduce(function (prev, next) {
		        return handlePropGetter(prev, next, _extends({}, meta, {
		          userProps: userProps
		        }));
		      }, {});
		    };
		  };
		  var reduceHooks = function reduceHooks(hooks, initial, meta, allowUndefined) {
		    if (meta === void 0) {
		      meta = {};
		    }

		    return hooks.reduce(function (prev, next) {
		      var nextValue = next(prev, meta);

		      {
		        if (!allowUndefined && typeof nextValue === 'undefined') {
		          console.info(next);
		          throw new Error('React Table: A reducer hook ☝️ just returned undefined! This is not allowed.');
		        }
		      }

		      return nextValue;
		    }, initial);
		  };
		  var loopHooks = function loopHooks(hooks, context, meta) {
		    if (meta === void 0) {
		      meta = {};
		    }

		    return hooks.forEach(function (hook) {
		      var nextValue = hook(context, meta);

		      {
		        if (typeof nextValue !== 'undefined') {
		          console.info(hook, nextValue);
		          throw new Error('React Table: A loop-type hook ☝️ just returned a value! This is not allowed.');
		        }
		      }
		    });
		  };
		  function ensurePluginOrder(plugins, befores, pluginName, afters) {
		    if ( afters) {
		      throw new Error("Defining plugins in the \"after\" section of ensurePluginOrder is no longer supported (see plugin " + pluginName + ")");
		    }

		    var pluginIndex = plugins.findIndex(function (plugin) {
		      return plugin.pluginName === pluginName;
		    });

		    if (pluginIndex === -1) {
		      {
		        throw new Error("The plugin \"" + pluginName + "\" was not found in the plugin list!\nThis usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:\n\n  " + pluginName + ".pluginName = '" + pluginName + "'\n");
		      }
		    }

		    befores.forEach(function (before) {
		      var beforeIndex = plugins.findIndex(function (plugin) {
		        return plugin.pluginName === before;
		      });

		      if (beforeIndex > -1 && beforeIndex > pluginIndex) {
		        {
		          throw new Error("React Table: The " + pluginName + " plugin hook must be placed after the " + before + " plugin hook!");
		        }
		      }
		    });
		  }
		  function functionalUpdate(updater, old) {
		    return typeof updater === 'function' ? updater(old) : updater;
		  }
		  function useGetLatest(obj) {
		    var ref = React.useRef();
		    ref.current = obj;
		    return React.useCallback(function () {
		      return ref.current;
		    }, []);
		  } // SSR has issues with useLayoutEffect still, so use useEffect during SSR

		  var safeUseLayoutEffect = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;
		  function useMountedLayoutEffect(fn, deps) {
		    var mountedRef = React.useRef(false);
		    safeUseLayoutEffect(function () {
		      if (mountedRef.current) {
		        fn();
		      }

		      mountedRef.current = true; // eslint-disable-next-line
		    }, deps);
		  }
		  function useAsyncDebounce(defaultFn, defaultWait) {
		    if (defaultWait === void 0) {
		      defaultWait = 0;
		    }

		    var debounceRef = React.useRef({});
		    var getDefaultFn = useGetLatest(defaultFn);
		    var getDefaultWait = useGetLatest(defaultWait);
		    return React.useCallback(
		    /*#__PURE__*/
		    function () {
		      var _ref2 = _asyncToGenerator(
		      /*#__PURE__*/
		      regeneratorRuntime.mark(function _callee2() {
		        var _len2,
		            args,
		            _key2,
		            _args2 = arguments;

		        return regeneratorRuntime.wrap(function _callee2$(_context2) {
		          while (1) {
		            switch (_context2.prev = _context2.next) {
		              case 0:
		                for (_len2 = _args2.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		                  args[_key2] = _args2[_key2];
		                }

		                if (!debounceRef.current.promise) {
		                  debounceRef.current.promise = new Promise(function (resolve, reject) {
		                    debounceRef.current.resolve = resolve;
		                    debounceRef.current.reject = reject;
		                  });
		                }

		                if (debounceRef.current.timeout) {
		                  clearTimeout(debounceRef.current.timeout);
		                }

		                debounceRef.current.timeout = setTimeout(
		                /*#__PURE__*/
		                _asyncToGenerator(
		                /*#__PURE__*/
		                regeneratorRuntime.mark(function _callee() {
		                  return regeneratorRuntime.wrap(function _callee$(_context) {
		                    while (1) {
		                      switch (_context.prev = _context.next) {
		                        case 0:
		                          delete debounceRef.current.timeout;
		                          _context.prev = 1;
		                          _context.t0 = debounceRef.current;
		                          _context.next = 5;
		                          return getDefaultFn().apply(void 0, args);

		                        case 5:
		                          _context.t1 = _context.sent;

		                          _context.t0.resolve.call(_context.t0, _context.t1);

		                          _context.next = 12;
		                          break;

		                        case 9:
		                          _context.prev = 9;
		                          _context.t2 = _context["catch"](1);
		                          debounceRef.current.reject(_context.t2);

		                        case 12:
		                          _context.prev = 12;
		                          delete debounceRef.current.promise;
		                          return _context.finish(12);

		                        case 15:
		                        case "end":
		                          return _context.stop();
		                      }
		                    }
		                  }, _callee, null, [[1, 9, 12, 15]]);
		                })), getDefaultWait());
		                return _context2.abrupt("return", debounceRef.current.promise);

		              case 5:
		              case "end":
		                return _context2.stop();
		            }
		          }
		        }, _callee2);
		      }));

		      return function () {
		        return _ref2.apply(this, arguments);
		      };
		    }(), [getDefaultFn, getDefaultWait]);
		  }
		  function makeRenderer(instance, column, meta) {
		    if (meta === void 0) {
		      meta = {};
		    }

		    return function (type, userProps) {
		      if (userProps === void 0) {
		        userProps = {};
		      }

		      var Comp = typeof type === 'string' ? column[type] : type;

		      if (typeof Comp === 'undefined') {
		        console.info(column);
		        throw new Error(renderErr);
		      }

		      return flexRender(Comp, _extends({}, instance, {
		        column: column
		      }, meta, {}, userProps));
		    };
		  }
		  function flexRender(Comp, props) {
		    return isReactComponent(Comp) ? React.createElement(Comp, props) : Comp;
		  }

		  function isReactComponent(component) {
		    return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
		  }

		  function isClassComponent(component) {
		    return typeof component === 'function' && function () {
		      var proto = Object.getPrototypeOf(component);
		      return proto.prototype && proto.prototype.isReactComponent;
		    }();
		  }

		  function isExoticComponent(component) {
		    return typeof component === 'object' && typeof component.$$typeof === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
		  }

		  function linkColumnStructure(columns, parent, depth) {
		    if (depth === void 0) {
		      depth = 0;
		    }

		    return columns.map(function (column) {
		      column = _extends({}, column, {
		        parent: parent,
		        depth: depth
		      });
		      assignColumnAccessor(column);

		      if (column.columns) {
		        column.columns = linkColumnStructure(column.columns, column, depth + 1);
		      }

		      return column;
		    });
		  }
		  function flattenColumns(columns) {
		    return flattenBy(columns, 'columns');
		  }
		  function assignColumnAccessor(column) {
		    // First check for string accessor
		    var id = column.id,
		        accessor = column.accessor,
		        Header = column.Header;

		    if (typeof accessor === 'string') {
		      id = id || accessor;
		      var accessorPath = accessor.split('.');

		      accessor = function accessor(row) {
		        return getBy(row, accessorPath);
		      };
		    }

		    if (!id && typeof Header === 'string' && Header) {
		      id = Header;
		    }

		    if (!id && column.columns) {
		      console.error(column);
		      throw new Error('A column ID (or unique "Header" value) is required!');
		    }

		    if (!id) {
		      console.error(column);
		      throw new Error('A column ID (or string accessor) is required!');
		    }

		    Object.assign(column, {
		      id: id,
		      accessor: accessor
		    });
		    return column;
		  }
		  function decorateColumn(column, userDefaultColumn) {
		    if (!userDefaultColumn) {
		      throw new Error();
		    }

		    Object.assign(column, _extends({
		      // Make sure there is a fallback header, just in case
		      Header: emptyRenderer,
		      Footer: emptyRenderer
		    }, defaultColumn, {}, userDefaultColumn, {}, column));
		    Object.assign(column, {
		      originalWidth: column.width
		    });
		    return column;
		  } // Build the header groups from the bottom up

		  function makeHeaderGroups(allColumns, defaultColumn, additionalHeaderProperties) {
		    if (additionalHeaderProperties === void 0) {
		      additionalHeaderProperties = function additionalHeaderProperties() {
		        return {};
		      };
		    }

		    var headerGroups = [];
		    var scanColumns = allColumns;
		    var uid = 0;

		    var getUID = function getUID() {
		      return uid++;
		    };

		    var _loop = function _loop() {
		      // The header group we are creating
		      var headerGroup = {
		        headers: []
		      }; // The parent columns we're going to scan next

		      var parentColumns = [];
		      var hasParents = scanColumns.some(function (d) {
		        return d.parent;
		      }); // Scan each column for parents

		      scanColumns.forEach(function (column) {
		        // What is the latest (last) parent column?
		        var latestParentColumn = [].concat(parentColumns).reverse()[0];
		        var newParent;

		        if (hasParents) {
		          // If the column has a parent, add it if necessary
		          if (column.parent) {
		            newParent = _extends({}, column.parent, {
		              originalId: column.parent.id,
		              id: column.parent.id + "_" + getUID(),
		              headers: [column]
		            }, additionalHeaderProperties(column));
		          } else {
		            // If other columns have parents, we'll need to add a place holder if necessary
		            var originalId = column.id + "_placeholder";
		            newParent = decorateColumn(_extends({
		              originalId: originalId,
		              id: column.id + "_placeholder_" + getUID(),
		              placeholderOf: column,
		              headers: [column]
		            }, additionalHeaderProperties(column)), defaultColumn);
		          } // If the resulting parent columns are the same, just add
		          // the column and increment the header span


		          if (latestParentColumn && latestParentColumn.originalId === newParent.originalId) {
		            latestParentColumn.headers.push(column);
		          } else {
		            parentColumns.push(newParent);
		          }
		        }

		        headerGroup.headers.push(column);
		      });
		      headerGroups.push(headerGroup); // Start scanning the parent columns

		      scanColumns = parentColumns;
		    };

		    while (scanColumns.length) {
		      _loop();
		    }

		    return headerGroups.reverse();
		  }
		  var pathObjCache = new Map();
		  function getBy(obj, path, def) {
		    if (!path) {
		      return obj;
		    }

		    var cacheKey = typeof path === 'function' ? path : JSON.stringify(path);

		    var pathObj = pathObjCache.get(cacheKey) || function () {
		      var pathObj = makePathArray(path);
		      pathObjCache.set(cacheKey, pathObj);
		      return pathObj;
		    }();

		    var val;

		    try {
		      val = pathObj.reduce(function (cursor, pathPart) {
		        return cursor[pathPart];
		      }, obj);
		    } catch (e) {// continue regardless of error
		    }

		    return typeof val !== 'undefined' ? val : def;
		  }
		  function getFirstDefined() {
		    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    for (var i = 0; i < args.length; i += 1) {
		      if (typeof args[i] !== 'undefined') {
		        return args[i];
		      }
		    }
		  }
		  function isFunction(a) {
		    if (typeof a === 'function') {
		      return a;
		    }
		  }
		  function flattenBy(arr, key) {
		    var flat = [];

		    var recurse = function recurse(arr) {
		      arr.forEach(function (d) {
		        if (!d[key]) {
		          flat.push(d);
		        } else {
		          recurse(d[key]);
		        }
		      });
		    };

		    recurse(arr);
		    return flat;
		  }
		  function expandRows(rows, _ref) {
		    var manualExpandedKey = _ref.manualExpandedKey,
		        expanded = _ref.expanded,
		        _ref$expandSubRows = _ref.expandSubRows,
		        expandSubRows = _ref$expandSubRows === void 0 ? true : _ref$expandSubRows;
		    var expandedRows = [];

		    var handleRow = function handleRow(row, addToExpandedRows) {
		      if (addToExpandedRows === void 0) {
		        addToExpandedRows = true;
		      }

		      row.isExpanded = row.original && row.original[manualExpandedKey] || expanded[row.id];
		      row.canExpand = row.subRows && !!row.subRows.length;

		      if (addToExpandedRows) {
		        expandedRows.push(row);
		      }

		      if (row.subRows && row.subRows.length && row.isExpanded) {
		        row.subRows.forEach(function (row) {
		          return handleRow(row, expandSubRows);
		        });
		      }
		    };

		    rows.forEach(function (row) {
		      return handleRow(row);
		    });
		    return expandedRows;
		  }
		  function getFilterMethod(filter, userFilterTypes, filterTypes) {
		    return isFunction(filter) || userFilterTypes[filter] || filterTypes[filter] || filterTypes.text;
		  }
		  function shouldAutoRemoveFilter(autoRemove, value, column) {
		    return autoRemove ? autoRemove(value, column) : typeof value === 'undefined';
		  }
		  function unpreparedAccessWarning() {
		    throw new Error('React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.');
		  }
		  var passiveSupported = null;
		  function passiveEventSupported() {
		    // memoize support to avoid adding multiple test events
		    if (typeof passiveSupported === 'boolean') return passiveSupported;
		    var supported = false;

		    try {
		      var options = {
		        get passive() {
		          supported = true;
		          return false;
		        }

		      };
		      window.addEventListener('test', null, options);
		      window.removeEventListener('test', null, options);
		    } catch (err) {
		      supported = false;
		    }

		    passiveSupported = supported;
		    return passiveSupported;
		  } //

		  var reOpenBracket = /\[/g;
		  var reCloseBracket = /\]/g;

		  function makePathArray(obj) {
		    return flattenDeep(obj) // remove all periods in parts
		    .map(function (d) {
		      return String(d).replace('.', '_');
		    }) // join parts using period
		    .join('.') // replace brackets with periods
		    .replace(reOpenBracket, '.').replace(reCloseBracket, '') // split it back out on periods
		    .split('.');
		  }

		  function flattenDeep(arr, newArr) {
		    if (newArr === void 0) {
		      newArr = [];
		    }

		    if (!Array.isArray(arr)) {
		      newArr.push(arr);
		    } else {
		      for (var i = 0; i < arr.length; i += 1) {
		        flattenDeep(arr[i], newArr);
		      }
		    }

		    return newArr;
		  }

		  var defaultGetTableProps = function defaultGetTableProps(props) {
		    return _extends({
		      role: 'table'
		    }, props);
		  };

		  var defaultGetTableBodyProps = function defaultGetTableBodyProps(props) {
		    return _extends({
		      role: 'rowgroup'
		    }, props);
		  };

		  var defaultGetHeaderProps = function defaultGetHeaderProps(props, _ref) {
		    var column = _ref.column;
		    return _extends({
		      key: "header_" + column.id,
		      colSpan: column.totalVisibleHeaderCount,
		      role: 'columnheader'
		    }, props);
		  };

		  var defaultGetFooterProps = function defaultGetFooterProps(props, _ref2) {
		    var column = _ref2.column;
		    return _extends({
		      key: "footer_" + column.id,
		      colSpan: column.totalVisibleHeaderCount
		    }, props);
		  };

		  var defaultGetHeaderGroupProps = function defaultGetHeaderGroupProps(props, _ref3) {
		    var index = _ref3.index;
		    return _extends({
		      key: "headerGroup_" + index,
		      role: 'row'
		    }, props);
		  };

		  var defaultGetFooterGroupProps = function defaultGetFooterGroupProps(props, _ref4) {
		    var index = _ref4.index;
		    return _extends({
		      key: "footerGroup_" + index
		    }, props);
		  };

		  var defaultGetRowProps = function defaultGetRowProps(props, _ref5) {
		    var row = _ref5.row;
		    return _extends({
		      key: "row_" + row.id,
		      role: 'row'
		    }, props);
		  };

		  var defaultGetCellProps = function defaultGetCellProps(props, _ref6) {
		    var cell = _ref6.cell;
		    return _extends({
		      key: "cell_" + cell.row.id + "_" + cell.column.id,
		      role: 'cell'
		    }, props);
		  };

		  function makeDefaultPluginHooks() {
		    return {
		      useOptions: [],
		      stateReducers: [],
		      useControlledState: [],
		      columns: [],
		      columnsDeps: [],
		      allColumns: [],
		      allColumnsDeps: [],
		      accessValue: [],
		      materializedColumns: [],
		      materializedColumnsDeps: [],
		      useInstanceAfterData: [],
		      visibleColumns: [],
		      visibleColumnsDeps: [],
		      headerGroups: [],
		      headerGroupsDeps: [],
		      useInstanceBeforeDimensions: [],
		      useInstance: [],
		      prepareRow: [],
		      getTableProps: [defaultGetTableProps],
		      getTableBodyProps: [defaultGetTableBodyProps],
		      getHeaderGroupProps: [defaultGetHeaderGroupProps],
		      getFooterGroupProps: [defaultGetFooterGroupProps],
		      getHeaderProps: [defaultGetHeaderProps],
		      getFooterProps: [defaultGetFooterProps],
		      getRowProps: [defaultGetRowProps],
		      getCellProps: [defaultGetCellProps],
		      useFinalInstance: []
		    };
		  }

		  actions.resetHiddenColumns = 'resetHiddenColumns';
		  actions.toggleHideColumn = 'toggleHideColumn';
		  actions.setHiddenColumns = 'setHiddenColumns';
		  actions.toggleHideAllColumns = 'toggleHideAllColumns';
		  var useColumnVisibility = function useColumnVisibility(hooks) {
		    hooks.getToggleHiddenProps = [defaultGetToggleHiddenProps];
		    hooks.getToggleHideAllColumnsProps = [defaultGetToggleHideAllColumnsProps];
		    hooks.stateReducers.push(reducer);
		    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions);
		    hooks.headerGroupsDeps.push(function (deps, _ref) {
		      var instance = _ref.instance;
		      return [].concat(deps, [instance.state.hiddenColumns]);
		    });
		    hooks.useInstance.push(useInstance);
		  };
		  useColumnVisibility.pluginName = 'useColumnVisibility';

		  var defaultGetToggleHiddenProps = function defaultGetToggleHiddenProps(props, _ref2) {
		    var column = _ref2.column;
		    return [props, {
		      onChange: function onChange(e) {
		        column.toggleHidden(!e.target.checked);
		      },
		      style: {
		        cursor: 'pointer'
		      },
		      checked: column.isVisible,
		      title: 'Toggle Column Visible'
		    }];
		  };

		  var defaultGetToggleHideAllColumnsProps = function defaultGetToggleHideAllColumnsProps(props, _ref3) {
		    var instance = _ref3.instance;
		    return [props, {
		      onChange: function onChange(e) {
		        instance.toggleHideAllColumns(!e.target.checked);
		      },
		      style: {
		        cursor: 'pointer'
		      },
		      checked: !instance.allColumnsHidden && !instance.state.hiddenColumns.length,
		      title: 'Toggle All Columns Hidden',
		      indeterminate: !instance.allColumnsHidden && instance.state.hiddenColumns.length
		    }];
		  };

		  function reducer(state, action, previousState, instance) {
		    if (action.type === actions.init) {
		      return _extends({
		        hiddenColumns: []
		      }, state);
		    }

		    if (action.type === actions.resetHiddenColumns) {
		      return _extends({}, state, {
		        hiddenColumns: instance.initialState.hiddenColumns || []
		      });
		    }

		    if (action.type === actions.toggleHideColumn) {
		      var should = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.includes(action.columnId);
		      var hiddenColumns = should ? [].concat(state.hiddenColumns, [action.columnId]) : state.hiddenColumns.filter(function (d) {
		        return d !== action.columnId;
		      });
		      return _extends({}, state, {
		        hiddenColumns: hiddenColumns
		      });
		    }

		    if (action.type === actions.setHiddenColumns) {
		      return _extends({}, state, {
		        hiddenColumns: functionalUpdate(action.value, state.hiddenColumns)
		      });
		    }

		    if (action.type === actions.toggleHideAllColumns) {
		      var shouldAll = typeof action.value !== 'undefined' ? action.value : !state.hiddenColumns.length;
		      return _extends({}, state, {
		        hiddenColumns: shouldAll ? instance.allColumns.map(function (d) {
		          return d.id;
		        }) : []
		      });
		    }
		  }

		  function useInstanceBeforeDimensions(instance) {
		    var headers = instance.headers,
		        hiddenColumns = instance.state.hiddenColumns;
		    var isMountedRef = React.useRef(false);

		    if (!isMountedRef.current) ;

		    var handleColumn = function handleColumn(column, parentVisible) {
		      column.isVisible = parentVisible && !hiddenColumns.includes(column.id);
		      var totalVisibleHeaderCount = 0;

		      if (column.headers && column.headers.length) {
		        column.headers.forEach(function (subColumn) {
		          return totalVisibleHeaderCount += handleColumn(subColumn, column.isVisible);
		        });
		      } else {
		        totalVisibleHeaderCount = column.isVisible ? 1 : 0;
		      }

		      column.totalVisibleHeaderCount = totalVisibleHeaderCount;
		      return totalVisibleHeaderCount;
		    };

		    var totalVisibleHeaderCount = 0;
		    headers.forEach(function (subHeader) {
		      return totalVisibleHeaderCount += handleColumn(subHeader, true);
		    });
		  }

		  function useInstance(instance) {
		    var columns = instance.columns,
		        flatHeaders = instance.flatHeaders,
		        dispatch = instance.dispatch,
		        allColumns = instance.allColumns,
		        getHooks = instance.getHooks,
		        hiddenColumns = instance.state.hiddenColumns,
		        _instance$autoResetHi = instance.autoResetHiddenColumns,
		        autoResetHiddenColumns = _instance$autoResetHi === void 0 ? true : _instance$autoResetHi;
		    var getInstance = useGetLatest(instance);
		    var allColumnsHidden = allColumns.length === hiddenColumns.length;
		    var toggleHideColumn = React.useCallback(function (columnId, value) {
		      return dispatch({
		        type: actions.toggleHideColumn,
		        columnId: columnId,
		        value: value
		      });
		    }, [dispatch]);
		    var setHiddenColumns = React.useCallback(function (value) {
		      return dispatch({
		        type: actions.setHiddenColumns,
		        value: value
		      });
		    }, [dispatch]);
		    var toggleHideAllColumns = React.useCallback(function (value) {
		      return dispatch({
		        type: actions.toggleHideAllColumns,
		        value: value
		      });
		    }, [dispatch]);
		    var getToggleHideAllColumnsProps = makePropGetter(getHooks().getToggleHideAllColumnsProps, {
		      instance: getInstance()
		    });
		    flatHeaders.forEach(function (column) {
		      column.toggleHidden = function (value) {
		        dispatch({
		          type: actions.toggleHideColumn,
		          columnId: column.id,
		          value: value
		        });
		      };

		      column.getToggleHiddenProps = makePropGetter(getHooks().getToggleHiddenProps, {
		        instance: getInstance(),
		        column: column
		      });
		    });
		    var getAutoResetHiddenColumns = useGetLatest(autoResetHiddenColumns);
		    useMountedLayoutEffect(function () {
		      if (getAutoResetHiddenColumns()) {
		        dispatch({
		          type: actions.resetHiddenColumns
		        });
		      }
		    }, [dispatch, columns]);
		    Object.assign(instance, {
		      allColumnsHidden: allColumnsHidden,
		      toggleHideColumn: toggleHideColumn,
		      setHiddenColumns: setHiddenColumns,
		      toggleHideAllColumns: toggleHideAllColumns,
		      getToggleHideAllColumnsProps: getToggleHideAllColumnsProps
		    });
		  }

		  var defaultInitialState = {};
		  var defaultColumnInstance = {};

		  var defaultReducer = function defaultReducer(state, action, prevState) {
		    return state;
		  };

		  var defaultGetSubRows = function defaultGetSubRows(row, index) {
		    return row.subRows || [];
		  };

		  var defaultGetRowId = function defaultGetRowId(row, index, parent) {
		    return "" + (parent ? [parent.id, index].join('.') : index);
		  };

		  var defaultUseControlledState = function defaultUseControlledState(d) {
		    return d;
		  };

		  function applyDefaults(props) {
		    var _props$initialState = props.initialState,
		        initialState = _props$initialState === void 0 ? defaultInitialState : _props$initialState,
		        _props$defaultColumn = props.defaultColumn,
		        defaultColumn = _props$defaultColumn === void 0 ? defaultColumnInstance : _props$defaultColumn,
		        _props$getSubRows = props.getSubRows,
		        getSubRows = _props$getSubRows === void 0 ? defaultGetSubRows : _props$getSubRows,
		        _props$getRowId = props.getRowId,
		        getRowId = _props$getRowId === void 0 ? defaultGetRowId : _props$getRowId,
		        _props$stateReducer = props.stateReducer,
		        stateReducer = _props$stateReducer === void 0 ? defaultReducer : _props$stateReducer,
		        _props$useControlledS = props.useControlledState,
		        useControlledState = _props$useControlledS === void 0 ? defaultUseControlledState : _props$useControlledS,
		        rest = _objectWithoutPropertiesLoose(props, ["initialState", "defaultColumn", "getSubRows", "getRowId", "stateReducer", "useControlledState"]);

		    return _extends({}, rest, {
		      initialState: initialState,
		      defaultColumn: defaultColumn,
		      getSubRows: getSubRows,
		      getRowId: getRowId,
		      stateReducer: stateReducer,
		      useControlledState: useControlledState
		    });
		  }

		  var useTable = function useTable(props) {
		    for (var _len = arguments.length, plugins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		      plugins[_key - 1] = arguments[_key];
		    }

		    // Apply default props
		    props = applyDefaults(props); // Add core plugins

		    plugins = [useColumnVisibility].concat(plugins); // Create the table instance

		    var instanceRef = React.useRef({}); // Create a getter for the instance (helps avoid a lot of potential memory leaks)

		    var getInstance = useGetLatest(instanceRef.current); // Assign the props, plugins and hooks to the instance

		    Object.assign(getInstance(), _extends({}, props, {
		      plugins: plugins,
		      hooks: makeDefaultPluginHooks()
		    })); // Allow plugins to register hooks as early as possible

		    plugins.filter(Boolean).forEach(function (plugin) {
		      plugin(getInstance().hooks);
		    }); // Consume all hooks and make a getter for them

		    var getHooks = useGetLatest(getInstance().hooks);
		    getInstance().getHooks = getHooks;
		    delete getInstance().hooks; // Allow useOptions hooks to modify the options coming into the table

		    Object.assign(getInstance(), reduceHooks(getHooks().useOptions, applyDefaults(props)));

		    var _getInstance = getInstance(),
		        data = _getInstance.data,
		        userColumns = _getInstance.columns,
		        initialState = _getInstance.initialState,
		        defaultColumn = _getInstance.defaultColumn,
		        getSubRows = _getInstance.getSubRows,
		        getRowId = _getInstance.getRowId,
		        stateReducer = _getInstance.stateReducer,
		        useControlledState = _getInstance.useControlledState; // Setup user reducer ref


		    var getStateReducer = useGetLatest(stateReducer); // Build the reducer

		    var reducer = React.useCallback(function (state, action) {
		      // Detect invalid actions
		      if (!action.type) {
		        console.info({
		          action: action
		        });
		        throw new Error('Unknown Action 👆');
		      } // Reduce the state from all plugin reducers


		      return [].concat(getHooks().stateReducers, Array.isArray(getStateReducer()) ? getStateReducer() : [getStateReducer()]).reduce(function (s, handler) {
		        return handler(s, action, state, getInstance()) || s;
		      }, state);
		    }, [getHooks, getStateReducer, getInstance]); // Start the reducer

		    var _React$useReducer = React.useReducer(reducer, undefined, function () {
		      return reducer(initialState, {
		        type: actions.init
		      });
		    }),
		        reducerState = _React$useReducer[0],
		        dispatch = _React$useReducer[1]; // Allow the user to control the final state with hooks


		    var state = reduceHooks([].concat(getHooks().useControlledState, [useControlledState]), reducerState, {
		      instance: getInstance()
		    });
		    Object.assign(getInstance(), {
		      state: state,
		      dispatch: dispatch
		    }); // Decorate All the columns

		    var columns = React.useMemo(function () {
		      return linkColumnStructure(reduceHooks(getHooks().columns, userColumns, {
		        instance: getInstance()
		      }));
		    }, [getHooks, getInstance, userColumns].concat(reduceHooks(getHooks().columnsDeps, [], {
		      instance: getInstance()
		    })));
		    getInstance().columns = columns; // Get the flat list of all columns and allow hooks to decorate
		    // those columns (and trigger this memoization via deps)

		    var allColumns = React.useMemo(function () {
		      return reduceHooks(getHooks().allColumns, flattenColumns(columns), {
		        instance: getInstance()
		      }).map(assignColumnAccessor);
		    }, [columns, getHooks, getInstance].concat(reduceHooks(getHooks().allColumnsDeps, [], {
		      instance: getInstance()
		    })));
		    getInstance().allColumns = allColumns; // Access the row model using initial columns

		    var _React$useMemo = React.useMemo(function () {
		      var rows = [];
		      var flatRows = [];
		      var rowsById = {};
		      var allColumnsQueue = [].concat(allColumns);

		      while (allColumnsQueue.length) {
		        var column = allColumnsQueue.shift();
		        accessRowsForColumn({
		          data: data,
		          rows: rows,
		          flatRows: flatRows,
		          rowsById: rowsById,
		          column: column,
		          getRowId: getRowId,
		          getSubRows: getSubRows,
		          accessValueHooks: getHooks().accessValue,
		          getInstance: getInstance
		        });
		      }

		      return [rows, flatRows, rowsById];
		    }, [allColumns, data, getRowId, getSubRows, getHooks, getInstance]),
		        rows = _React$useMemo[0],
		        flatRows = _React$useMemo[1],
		        rowsById = _React$useMemo[2];

		    Object.assign(getInstance(), {
		      rows: rows,
		      initialRows: [].concat(rows),
		      flatRows: flatRows,
		      rowsById: rowsById // materializedColumns,

		    });
		    loopHooks(getHooks().useInstanceAfterData, getInstance()); // Get the flat list of all columns AFTER the rows
		    // have been access, and allow hooks to decorate
		    // those columns (and trigger this memoization via deps)

		    var visibleColumns = React.useMemo(function () {
		      return reduceHooks(getHooks().visibleColumns, allColumns, {
		        instance: getInstance()
		      }).map(function (d) {
		        return decorateColumn(d, defaultColumn);
		      });
		    }, [getHooks, allColumns, getInstance, defaultColumn].concat(reduceHooks(getHooks().visibleColumnsDeps, [], {
		      instance: getInstance()
		    }))); // Combine new visible columns with all columns

		    allColumns = React.useMemo(function () {
		      var columns = [].concat(visibleColumns);
		      allColumns.forEach(function (column) {
		        if (!columns.find(function (d) {
		          return d.id === column.id;
		        })) {
		          columns.push(column);
		        }
		      });
		      return columns;
		    }, [allColumns, visibleColumns]);
		    getInstance().allColumns = allColumns;

		    {
		      var duplicateColumns = allColumns.filter(function (column, i) {
		        return allColumns.findIndex(function (d) {
		          return d.id === column.id;
		        }) !== i;
		      });

		      if (duplicateColumns.length) {
		        console.info(allColumns);
		        throw new Error("Duplicate columns were found with ids: \"" + duplicateColumns.map(function (d) {
		          return d.id;
		        }).join(', ') + "\" in the columns array above");
		      }
		    } // Make the headerGroups


		    var headerGroups = React.useMemo(function () {
		      return reduceHooks(getHooks().headerGroups, makeHeaderGroups(visibleColumns, defaultColumn), getInstance());
		    }, [getHooks, visibleColumns, defaultColumn, getInstance].concat(reduceHooks(getHooks().headerGroupsDeps, [], {
		      instance: getInstance()
		    })));
		    getInstance().headerGroups = headerGroups; // Get the first level of headers

		    var headers = React.useMemo(function () {
		      return headerGroups.length ? headerGroups[0].headers : [];
		    }, [headerGroups]);
		    getInstance().headers = headers; // Provide a flat header list for utilities

		    getInstance().flatHeaders = headerGroups.reduce(function (all, headerGroup) {
		      return [].concat(all, headerGroup.headers);
		    }, []);
		    loopHooks(getHooks().useInstanceBeforeDimensions, getInstance()); // Filter columns down to visible ones

		    var visibleColumnsDep = visibleColumns.filter(function (d) {
		      return d.isVisible;
		    }).map(function (d) {
		      return d.id;
		    }).sort().join('_');
		    visibleColumns = React.useMemo(function () {
		      return visibleColumns.filter(function (d) {
		        return d.isVisible;
		      });
		    }, // eslint-disable-next-line react-hooks/exhaustive-deps
		    [visibleColumns, visibleColumnsDep]);
		    getInstance().visibleColumns = visibleColumns; // Header Visibility is needed by this point

		    var _calculateHeaderWidth = calculateHeaderWidths(headers),
		        totalColumnsMinWidth = _calculateHeaderWidth[0],
		        totalColumnsWidth = _calculateHeaderWidth[1],
		        totalColumnsMaxWidth = _calculateHeaderWidth[2];

		    getInstance().totalColumnsMinWidth = totalColumnsMinWidth;
		    getInstance().totalColumnsWidth = totalColumnsWidth;
		    getInstance().totalColumnsMaxWidth = totalColumnsMaxWidth;
		    loopHooks(getHooks().useInstance, getInstance()) // Each materialized header needs to be assigned a render function and other
		    // prop getter properties here.
		    ;
		    [].concat(getInstance().flatHeaders, getInstance().allColumns).forEach(function (column) {
		      // Give columns/headers rendering power
		      column.render = makeRenderer(getInstance(), column); // Give columns/headers a default getHeaderProps

		      column.getHeaderProps = makePropGetter(getHooks().getHeaderProps, {
		        instance: getInstance(),
		        column: column
		      }); // Give columns/headers a default getFooterProps

		      column.getFooterProps = makePropGetter(getHooks().getFooterProps, {
		        instance: getInstance(),
		        column: column
		      });
		    });
		    getInstance().headerGroups = React.useMemo(function () {
		      return headerGroups.filter(function (headerGroup, i) {
		        // Filter out any headers and headerGroups that don't have visible columns
		        headerGroup.headers = headerGroup.headers.filter(function (column) {
		          var recurse = function recurse(headers) {
		            return headers.filter(function (column) {
		              if (column.headers) {
		                return recurse(column.headers);
		              }

		              return column.isVisible;
		            }).length;
		          };

		          if (column.headers) {
		            return recurse(column.headers);
		          }

		          return column.isVisible;
		        }); // Give headerGroups getRowProps

		        if (headerGroup.headers.length) {
		          headerGroup.getHeaderGroupProps = makePropGetter(getHooks().getHeaderGroupProps, {
		            instance: getInstance(),
		            headerGroup: headerGroup,
		            index: i
		          });
		          headerGroup.getFooterGroupProps = makePropGetter(getHooks().getFooterGroupProps, {
		            instance: getInstance(),
		            headerGroup: headerGroup,
		            index: i
		          });
		          return true;
		        }

		        return false;
		      });
		    }, [headerGroups, getInstance, getHooks]);
		    getInstance().footerGroups = [].concat(getInstance().headerGroups).reverse(); // The prepareRow function is absolutely necessary and MUST be called on
		    // any rows the user wishes to be displayed.

		    getInstance().prepareRow = React.useCallback(function (row) {
		      row.getRowProps = makePropGetter(getHooks().getRowProps, {
		        instance: getInstance(),
		        row: row
		      }); // Build the visible cells for each row

		      row.allCells = allColumns.map(function (column) {
		        var value = row.values[column.id];
		        var cell = {
		          column: column,
		          row: row,
		          value: value
		        }; // Give each cell a getCellProps base

		        cell.getCellProps = makePropGetter(getHooks().getCellProps, {
		          instance: getInstance(),
		          cell: cell
		        }); // Give each cell a renderer function (supports multiple renderers)

		        cell.render = makeRenderer(getInstance(), column, {
		          row: row,
		          cell: cell,
		          value: value
		        });
		        return cell;
		      });
		      row.cells = visibleColumns.map(function (column) {
		        return row.allCells.find(function (cell) {
		          return cell.column.id === column.id;
		        });
		      }); // need to apply any row specific hooks (useExpanded requires this)

		      loopHooks(getHooks().prepareRow, row, {
		        instance: getInstance()
		      });
		    }, [getHooks, getInstance, allColumns, visibleColumns]);
		    getInstance().getTableProps = makePropGetter(getHooks().getTableProps, {
		      instance: getInstance()
		    });
		    getInstance().getTableBodyProps = makePropGetter(getHooks().getTableBodyProps, {
		      instance: getInstance()
		    });
		    loopHooks(getHooks().useFinalInstance, getInstance());
		    return getInstance();
		  };

		  function calculateHeaderWidths(headers, left) {
		    if (left === void 0) {
		      left = 0;
		    }

		    var sumTotalMinWidth = 0;
		    var sumTotalWidth = 0;
		    var sumTotalMaxWidth = 0;
		    var sumTotalFlexWidth = 0;
		    headers.forEach(function (header) {
		      var subHeaders = header.headers;
		      header.totalLeft = left;

		      if (subHeaders && subHeaders.length) {
		        var _calculateHeaderWidth2 = calculateHeaderWidths(subHeaders, left),
		            totalMinWidth = _calculateHeaderWidth2[0],
		            totalWidth = _calculateHeaderWidth2[1],
		            totalMaxWidth = _calculateHeaderWidth2[2],
		            totalFlexWidth = _calculateHeaderWidth2[3];

		        header.totalMinWidth = totalMinWidth;
		        header.totalWidth = totalWidth;
		        header.totalMaxWidth = totalMaxWidth;
		        header.totalFlexWidth = totalFlexWidth;
		      } else {
		        header.totalMinWidth = header.minWidth;
		        header.totalWidth = Math.min(Math.max(header.minWidth, header.width), header.maxWidth);
		        header.totalMaxWidth = header.maxWidth;
		        header.totalFlexWidth = header.canResize ? header.totalWidth : 0;
		      }

		      if (header.isVisible) {
		        left += header.totalWidth;
		        sumTotalMinWidth += header.totalMinWidth;
		        sumTotalWidth += header.totalWidth;
		        sumTotalMaxWidth += header.totalMaxWidth;
		        sumTotalFlexWidth += header.totalFlexWidth;
		      }
		    });
		    return [sumTotalMinWidth, sumTotalWidth, sumTotalMaxWidth, sumTotalFlexWidth];
		  }

		  function accessRowsForColumn(_ref) {
		    var data = _ref.data,
		        rows = _ref.rows,
		        flatRows = _ref.flatRows,
		        rowsById = _ref.rowsById,
		        column = _ref.column,
		        getRowId = _ref.getRowId,
		        getSubRows = _ref.getSubRows,
		        accessValueHooks = _ref.accessValueHooks,
		        getInstance = _ref.getInstance;

		    // Access the row's data column-by-column
		    // We do it this way so we can incrementally add materialized
		    // columns after the first pass and avoid excessive looping
		    var accessRow = function accessRow(originalRow, rowIndex, depth, parent, parentRows) {
		      if (depth === void 0) {
		        depth = 0;
		      }

		      // Keep the original reference around
		      var original = originalRow;
		      var id = getRowId(originalRow, rowIndex, parent);
		      var row = rowsById[id]; // If the row hasn't been created, let's make it

		      if (!row) {
		        row = {
		          id: id,
		          original: original,
		          index: rowIndex,
		          depth: depth,
		          cells: [{}] // This is a dummy cell

		        }; // Override common array functions (and the dummy cell's getCellProps function)
		        // to show an error if it is accessed without calling prepareRow

		        row.cells.map = unpreparedAccessWarning;
		        row.cells.filter = unpreparedAccessWarning;
		        row.cells.forEach = unpreparedAccessWarning;
		        row.cells[0].getCellProps = unpreparedAccessWarning; // Create the cells and values

		        row.values = {}; // Push this row into the parentRows array

		        parentRows.push(row); // Keep track of every row in a flat array

		        flatRows.push(row); // Also keep track of every row by its ID

		        rowsById[id] = row; // Get the original subrows

		        row.originalSubRows = getSubRows(originalRow, rowIndex); // Then recursively access them

		        if (row.originalSubRows) {
		          var subRows = [];
		          row.originalSubRows.forEach(function (d, i) {
		            return accessRow(d, i, depth + 1, row, subRows);
		          }); // Keep the new subRows array on the row

		          row.subRows = subRows;
		        }
		      } else if (row.subRows) {
		        // If the row exists, then it's already been accessed
		        // Keep recursing, but don't worry about passing the
		        // accumlator array (those rows already exist)
		        row.originalSubRows.forEach(function (d, i) {
		          return accessRow(d, i, depth + 1, row);
		        });
		      } // If the column has an accessor, use it to get a value


		      if (column.accessor) {
		        row.values[column.id] = column.accessor(originalRow, rowIndex, row, parentRows, data);
		      } // Allow plugins to manipulate the column value


		      row.values[column.id] = reduceHooks(accessValueHooks, row.values[column.id], {
		        row: row,
		        column: column,
		        instance: getInstance()
		      }, true);
		    };

		    data.forEach(function (originalRow, rowIndex) {
		      return accessRow(originalRow, rowIndex, 0, undefined, rows);
		    });
		  }

		  actions.resetExpanded = 'resetExpanded';
		  actions.toggleRowExpanded = 'toggleRowExpanded';
		  actions.toggleAllRowsExpanded = 'toggleAllRowsExpanded';
		  var useExpanded = function useExpanded(hooks) {
		    hooks.getToggleAllRowsExpandedProps = [defaultGetToggleAllRowsExpandedProps];
		    hooks.getToggleRowExpandedProps = [defaultGetToggleRowExpandedProps];
		    hooks.stateReducers.push(reducer$1);
		    hooks.useInstance.push(useInstance$1);
		    hooks.prepareRow.push(prepareRow);
		  };
		  useExpanded.pluginName = 'useExpanded';

		  var defaultGetToggleAllRowsExpandedProps = function defaultGetToggleAllRowsExpandedProps(props, _ref) {
		    var instance = _ref.instance;
		    return [props, {
		      onClick: function onClick(e) {
		        instance.toggleAllRowsExpanded();
		      },
		      style: {
		        cursor: 'pointer'
		      },
		      title: 'Toggle All Rows Expanded'
		    }];
		  };

		  var defaultGetToggleRowExpandedProps = function defaultGetToggleRowExpandedProps(props, _ref2) {
		    var row = _ref2.row;
		    return [props, {
		      onClick: function onClick() {
		        row.toggleRowExpanded();
		      },
		      style: {
		        cursor: 'pointer'
		      },
		      title: 'Toggle Row Expanded'
		    }];
		  }; // Reducer


		  function reducer$1(state, action, previousState, instance) {
		    if (action.type === actions.init) {
		      return _extends({
		        expanded: {}
		      }, state);
		    }

		    if (action.type === actions.resetExpanded) {
		      return _extends({}, state, {
		        expanded: instance.initialState.expanded || {}
		      });
		    }

		    if (action.type === actions.toggleAllRowsExpanded) {
		      var value = action.value;
		      var rowsById = instance.rowsById;
		      var isAllRowsExpanded = Object.keys(rowsById).length === Object.keys(state.expanded).length;
		      var expandAll = typeof value !== 'undefined' ? value : !isAllRowsExpanded;

		      if (expandAll) {
		        var expanded = {};
		        Object.keys(rowsById).forEach(function (rowId) {
		          expanded[rowId] = true;
		        });
		        return _extends({}, state, {
		          expanded: expanded
		        });
		      }

		      return _extends({}, state, {
		        expanded: {}
		      });
		    }

		    if (action.type === actions.toggleRowExpanded) {
		      var id = action.id,
		          setExpanded = action.value;
		      var exists = state.expanded[id];
		      var shouldExist = typeof setExpanded !== 'undefined' ? setExpanded : !exists;

		      if (!exists && shouldExist) {
		        var _extends2;

		        return _extends({}, state, {
		          expanded: _extends({}, state.expanded, (_extends2 = {}, _extends2[id] = true, _extends2))
		        });
		      } else if (exists && !shouldExist) {
		        var _state$expanded = state.expanded;
		            _state$expanded[id];
		            var rest = _objectWithoutPropertiesLoose(_state$expanded, [id].map(_toPropertyKey));

		        return _extends({}, state, {
		          expanded: rest
		        });
		      } else {
		        return state;
		      }
		    }
		  }

		  function useInstance$1(instance) {
		    var data = instance.data,
		        rows = instance.rows,
		        rowsById = instance.rowsById,
		        _instance$manualExpan = instance.manualExpandedKey,
		        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
		        _instance$paginateExp = instance.paginateExpandedRows,
		        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
		        _instance$expandSubRo = instance.expandSubRows,
		        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
		        _instance$autoResetEx = instance.autoResetExpanded,
		        autoResetExpanded = _instance$autoResetEx === void 0 ? true : _instance$autoResetEx,
		        getHooks = instance.getHooks,
		        plugins = instance.plugins,
		        expanded = instance.state.expanded,
		        dispatch = instance.dispatch;
		    ensurePluginOrder(plugins, ['useSortBy', 'useGroupBy', 'usePivotColumns', 'useGlobalFilter'], 'useExpanded');
		    var getAutoResetExpanded = useGetLatest(autoResetExpanded);
		    var isAllRowsExpanded = Boolean(Object.keys(rowsById).length && Object.keys(expanded).length);

		    if (isAllRowsExpanded) {
		      if (Object.keys(rowsById).some(function (id) {
		        return !expanded[id];
		      })) {
		        isAllRowsExpanded = false;
		      }
		    } // Bypass any effects from firing when this changes


		    useMountedLayoutEffect(function () {
		      if (getAutoResetExpanded()) {
		        dispatch({
		          type: actions.resetExpanded
		        });
		      }
		    }, [dispatch, data]);
		    var toggleRowExpanded = React.useCallback(function (id, value) {
		      dispatch({
		        type: actions.toggleRowExpanded,
		        id: id,
		        value: value
		      });
		    }, [dispatch]);
		    var toggleAllRowsExpanded = React.useCallback(function (value) {
		      return dispatch({
		        type: actions.toggleAllRowsExpanded,
		        value: value
		      });
		    }, [dispatch]);
		    var expandedRows = React.useMemo(function () {
		      if (paginateExpandedRows) {
		        return expandRows(rows, {
		          manualExpandedKey: manualExpandedKey,
		          expanded: expanded,
		          expandSubRows: expandSubRows
		        });
		      }

		      return rows;
		    }, [paginateExpandedRows, rows, manualExpandedKey, expanded, expandSubRows]);
		    var expandedDepth = React.useMemo(function () {
		      return findExpandedDepth(expanded);
		    }, [expanded]);
		    var getInstance = useGetLatest(instance);
		    var getToggleAllRowsExpandedProps = makePropGetter(getHooks().getToggleAllRowsExpandedProps, {
		      instance: getInstance()
		    });
		    Object.assign(instance, {
		      preExpandedRows: rows,
		      expandedRows: expandedRows,
		      rows: expandedRows,
		      expandedDepth: expandedDepth,
		      isAllRowsExpanded: isAllRowsExpanded,
		      toggleRowExpanded: toggleRowExpanded,
		      toggleAllRowsExpanded: toggleAllRowsExpanded,
		      getToggleAllRowsExpandedProps: getToggleAllRowsExpandedProps
		    });
		  }

		  function prepareRow(row, _ref3) {
		    var getHooks = _ref3.instance.getHooks,
		        instance = _ref3.instance;

		    row.toggleRowExpanded = function (set) {
		      return instance.toggleRowExpanded(row.id, set);
		    };

		    row.getToggleRowExpandedProps = makePropGetter(getHooks().getToggleRowExpandedProps, {
		      instance: instance,
		      row: row
		    });
		  }

		  function findExpandedDepth(expanded) {
		    var maxDepth = 0;
		    Object.keys(expanded).forEach(function (id) {
		      var splitId = id.split('.');
		      maxDepth = Math.max(maxDepth, splitId.length);
		    });
		    return maxDepth;
		  }

		  var text = function text(rows, ids, filterValue) {
		    rows = rows.filter(function (row) {
		      return ids.some(function (id) {
		        var rowValue = row.values[id];
		        return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
		      });
		    });
		    return rows;
		  };

		  text.autoRemove = function (val) {
		    return !val;
		  };

		  var exactText = function exactText(rows, ids, filterValue) {
		    return rows.filter(function (row) {
		      return ids.some(function (id) {
		        var rowValue = row.values[id];
		        return rowValue !== undefined ? String(rowValue).toLowerCase() === String(filterValue).toLowerCase() : true;
		      });
		    });
		  };

		  exactText.autoRemove = function (val) {
		    return !val;
		  };

		  var exactTextCase = function exactTextCase(rows, ids, filterValue) {
		    return rows.filter(function (row) {
		      return ids.some(function (id) {
		        var rowValue = row.values[id];
		        return rowValue !== undefined ? String(rowValue) === String(filterValue) : true;
		      });
		    });
		  };

		  exactTextCase.autoRemove = function (val) {
		    return !val;
		  };

		  var includes = function includes(rows, ids, filterValue) {
		    return rows.filter(function (row) {
		      return ids.some(function (id) {
		        var rowValue = row.values[id];
		        return rowValue.includes(filterValue);
		      });
		    });
		  };

		  includes.autoRemove = function (val) {
		    return !val || !val.length;
		  };

		  var includesAll = function includesAll(rows, ids, filterValue) {
		    return rows.filter(function (row) {
		      return ids.some(function (id) {
		        var rowValue = row.values[id];
		        return rowValue && rowValue.length && filterValue.every(function (val) {
		          return rowValue.includes(val);
		        });
		      });
		    });
		  };

		  includesAll.autoRemove = function (val) {
		    return !val || !val.length;
		  };

		  var includesSome = function includesSome(rows, ids, filterValue) {
		    return rows.filter(function (row) {
		      return ids.some(function (id) {
		        var rowValue = row.values[id];
		        return rowValue && rowValue.length && filterValue.some(function (val) {
		          return rowValue.includes(val);
		        });
		      });
		    });
		  };

		  includesSome.autoRemove = function (val) {
		    return !val || !val.length;
		  };

		  var includesValue = function includesValue(rows, ids, filterValue) {
		    return rows.filter(function (row) {
		      return ids.some(function (id) {
		        var rowValue = row.values[id];
		        return filterValue.includes(rowValue);
		      });
		    });
		  };

		  includesValue.autoRemove = function (val) {
		    return !val || !val.length;
		  };

		  var exact = function exact(rows, ids, filterValue) {
		    return rows.filter(function (row) {
		      return ids.some(function (id) {
		        var rowValue = row.values[id];
		        return rowValue === filterValue;
		      });
		    });
		  };

		  exact.autoRemove = function (val) {
		    return typeof val === 'undefined';
		  };

		  var equals = function equals(rows, ids, filterValue) {
		    return rows.filter(function (row) {
		      return ids.some(function (id) {
		        var rowValue = row.values[id]; // eslint-disable-next-line eqeqeq

		        return rowValue == filterValue;
		      });
		    });
		  };

		  equals.autoRemove = function (val) {
		    return val == null;
		  };

		  var between = function between(rows, ids, filterValue) {
		    var _ref = filterValue || [],
		        min = _ref[0],
		        max = _ref[1];

		    min = typeof min === 'number' ? min : -Infinity;
		    max = typeof max === 'number' ? max : Infinity;

		    if (min > max) {
		      var temp = min;
		      min = max;
		      max = temp;
		    }

		    return rows.filter(function (row) {
		      return ids.some(function (id) {
		        var rowValue = row.values[id];
		        return rowValue >= min && rowValue <= max;
		      });
		    });
		  };

		  between.autoRemove = function (val) {
		    return !val || typeof val[0] !== 'number' && typeof val[1] !== 'number';
		  };

		  var filterTypes = /*#__PURE__*/Object.freeze({
		    __proto__: null,
		    text: text,
		    exactText: exactText,
		    exactTextCase: exactTextCase,
		    includes: includes,
		    includesAll: includesAll,
		    includesSome: includesSome,
		    includesValue: includesValue,
		    exact: exact,
		    equals: equals,
		    between: between
		  });

		  actions.resetFilters = 'resetFilters';
		  actions.setFilter = 'setFilter';
		  actions.setAllFilters = 'setAllFilters';
		  var useFilters = function useFilters(hooks) {
		    hooks.stateReducers.push(reducer$2);
		    hooks.useInstance.push(useInstance$2);
		  };
		  useFilters.pluginName = 'useFilters';

		  function reducer$2(state, action, previousState, instance) {
		    if (action.type === actions.init) {
		      return _extends({
		        filters: []
		      }, state);
		    }

		    if (action.type === actions.resetFilters) {
		      return _extends({}, state, {
		        filters: instance.initialState.filters || []
		      });
		    }

		    if (action.type === actions.setFilter) {
		      var columnId = action.columnId,
		          filterValue = action.filterValue;
		      var allColumns = instance.allColumns,
		          userFilterTypes = instance.filterTypes;
		      var column = allColumns.find(function (d) {
		        return d.id === columnId;
		      });

		      if (!column) {
		        throw new Error("React-Table: Could not find a column with id: " + columnId);
		      }

		      var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);
		      var previousfilter = state.filters.find(function (d) {
		        return d.id === columnId;
		      });
		      var newFilter = functionalUpdate(filterValue, previousfilter && previousfilter.value); //

		      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter, column)) {
		        return _extends({}, state, {
		          filters: state.filters.filter(function (d) {
		            return d.id !== columnId;
		          })
		        });
		      }

		      if (previousfilter) {
		        return _extends({}, state, {
		          filters: state.filters.map(function (d) {
		            if (d.id === columnId) {
		              return {
		                id: columnId,
		                value: newFilter
		              };
		            }

		            return d;
		          })
		        });
		      }

		      return _extends({}, state, {
		        filters: [].concat(state.filters, [{
		          id: columnId,
		          value: newFilter
		        }])
		      });
		    }

		    if (action.type === actions.setAllFilters) {
		      var filters = action.filters;
		      var _allColumns = instance.allColumns,
		          _userFilterTypes = instance.filterTypes;
		      return _extends({}, state, {
		        // Filter out undefined values
		        filters: functionalUpdate(filters, state.filters).filter(function (filter) {
		          var column = _allColumns.find(function (d) {
		            return d.id === filter.id;
		          });

		          var filterMethod = getFilterMethod(column.filter, _userFilterTypes || {}, filterTypes);

		          if (shouldAutoRemoveFilter(filterMethod.autoRemove, filter.value, column)) {
		            return false;
		          }

		          return true;
		        })
		      });
		    }
		  }

		  function useInstance$2(instance) {
		    var data = instance.data,
		        rows = instance.rows,
		        flatRows = instance.flatRows,
		        rowsById = instance.rowsById,
		        allColumns = instance.allColumns,
		        userFilterTypes = instance.filterTypes,
		        manualFilters = instance.manualFilters,
		        _instance$defaultCanF = instance.defaultCanFilter,
		        defaultCanFilter = _instance$defaultCanF === void 0 ? false : _instance$defaultCanF,
		        disableFilters = instance.disableFilters,
		        filters = instance.state.filters,
		        dispatch = instance.dispatch,
		        _instance$autoResetFi = instance.autoResetFilters,
		        autoResetFilters = _instance$autoResetFi === void 0 ? true : _instance$autoResetFi;
		    var setFilter = React.useCallback(function (columnId, filterValue) {
		      dispatch({
		        type: actions.setFilter,
		        columnId: columnId,
		        filterValue: filterValue
		      });
		    }, [dispatch]);
		    var setAllFilters = React.useCallback(function (filters) {
		      dispatch({
		        type: actions.setAllFilters,
		        filters: filters
		      });
		    }, [dispatch]);
		    allColumns.forEach(function (column) {
		      var id = column.id,
		          accessor = column.accessor,
		          columnDefaultCanFilter = column.defaultCanFilter,
		          columnDisableFilters = column.disableFilters; // Determine if a column is filterable

		      column.canFilter = accessor ? getFirstDefined(columnDisableFilters === true ? false : undefined, disableFilters === true ? false : undefined, true) : getFirstDefined(columnDefaultCanFilter, defaultCanFilter, false); // Provide the column a way of updating the filter value

		      column.setFilter = function (val) {
		        return setFilter(column.id, val);
		      }; // Provide the current filter value to the column for
		      // convenience


		      var found = filters.find(function (d) {
		        return d.id === id;
		      });
		      column.filterValue = found && found.value;
		    });

		    var _React$useMemo = React.useMemo(function () {
		      if (manualFilters || !filters.length) {
		        return [rows, flatRows, rowsById];
		      }

		      var filteredFlatRows = [];
		      var filteredRowsById = {}; // Filters top level and nested rows

		      var filterRows = function filterRows(rows, depth) {
		        if (depth === void 0) {
		          depth = 0;
		        }

		        var filteredRows = rows;
		        filteredRows = filters.reduce(function (filteredSoFar, _ref) {
		          var columnId = _ref.id,
		              filterValue = _ref.value;
		          // Find the filters column
		          var column = allColumns.find(function (d) {
		            return d.id === columnId;
		          });

		          if (!column) {
		            return filteredSoFar;
		          }

		          if (depth === 0) {
		            column.preFilteredRows = filteredSoFar;
		          }

		          var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);

		          if (!filterMethod) {
		            console.warn("Could not find a valid 'column.filter' for column with the ID: " + column.id + ".");
		            return filteredSoFar;
		          } // Pass the rows, id, filterValue and column to the filterMethod
		          // to get the filtered rows back


		          column.filteredRows = filterMethod(filteredSoFar, [columnId], filterValue);
		          return column.filteredRows;
		        }, rows); // Apply the filter to any subRows
		        // We technically could do this recursively in the above loop,
		        // but that would severely hinder the API for the user, since they
		        // would be required to do that recursion in some scenarios

		        filteredRows.forEach(function (row) {
		          filteredFlatRows.push(row);
		          filteredRowsById[row.id] = row;

		          if (!row.subRows) {
		            return;
		          }

		          row.subRows = row.subRows && row.subRows.length > 0 ? filterRows(row.subRows, depth + 1) : row.subRows;
		        });
		        return filteredRows;
		      };

		      return [filterRows(rows), filteredFlatRows, filteredRowsById];
		    }, [manualFilters, filters, rows, flatRows, rowsById, allColumns, userFilterTypes]),
		        filteredRows = _React$useMemo[0],
		        filteredFlatRows = _React$useMemo[1],
		        filteredRowsById = _React$useMemo[2];

		    React.useMemo(function () {
		      // Now that each filtered column has it's partially filtered rows,
		      // lets assign the final filtered rows to all of the other columns
		      var nonFilteredColumns = allColumns.filter(function (column) {
		        return !filters.find(function (d) {
		          return d.id === column.id;
		        });
		      }); // This essentially enables faceted filter options to be built easily
		      // using every column's preFilteredRows value

		      nonFilteredColumns.forEach(function (column) {
		        column.preFilteredRows = filteredRows;
		        column.filteredRows = filteredRows;
		      });
		    }, [filteredRows, filters, allColumns]);
		    var getAutoResetFilters = useGetLatest(autoResetFilters);
		    useMountedLayoutEffect(function () {
		      if (getAutoResetFilters()) {
		        dispatch({
		          type: actions.resetFilters
		        });
		      }
		    }, [dispatch, manualFilters ? null : data]);
		    Object.assign(instance, {
		      preFilteredRows: rows,
		      preFilteredFlatRows: flatRows,
		      preFilteredRowsById: rowsById,
		      filteredRows: filteredRows,
		      filteredFlatRows: filteredFlatRows,
		      filteredRowsById: filteredRowsById,
		      rows: filteredRows,
		      flatRows: filteredFlatRows,
		      rowsById: filteredRowsById,
		      setFilter: setFilter,
		      setAllFilters: setAllFilters
		    });
		  }

		  actions.resetGlobalFilter = 'resetGlobalFilter';
		  actions.setGlobalFilter = 'setGlobalFilter';
		  var useGlobalFilter = function useGlobalFilter(hooks) {
		    hooks.stateReducers.push(reducer$3);
		    hooks.useInstance.push(useInstance$3);
		  };
		  useGlobalFilter.pluginName = 'useGlobalFilter';

		  function reducer$3(state, action, previousState, instance) {
		    if (action.type === actions.resetGlobalFilter) {
		      return _extends({}, state, {
		        globalFilter: instance.initialState.globalFilter || undefined
		      });
		    }

		    if (action.type === actions.setGlobalFilter) {
		      var filterValue = action.filterValue;
		      var userFilterTypes = instance.userFilterTypes;
		      var filterMethod = getFilterMethod(instance.globalFilter, userFilterTypes || {}, filterTypes);
		      var newFilter = functionalUpdate(filterValue, state.globalFilter); //

		      if (shouldAutoRemoveFilter(filterMethod.autoRemove, newFilter)) {
		        state.globalFilter;
		            var stateWithoutGlobalFilter = _objectWithoutPropertiesLoose(state, ["globalFilter"]);

		        return stateWithoutGlobalFilter;
		      }

		      return _extends({}, state, {
		        globalFilter: newFilter
		      });
		    }
		  }

		  function useInstance$3(instance) {
		    var data = instance.data,
		        rows = instance.rows,
		        flatRows = instance.flatRows,
		        rowsById = instance.rowsById,
		        allColumns = instance.allColumns,
		        userFilterTypes = instance.filterTypes,
		        globalFilter = instance.globalFilter,
		        manualGlobalFilter = instance.manualGlobalFilter,
		        globalFilterValue = instance.state.globalFilter,
		        dispatch = instance.dispatch,
		        _instance$autoResetGl = instance.autoResetGlobalFilter,
		        autoResetGlobalFilter = _instance$autoResetGl === void 0 ? true : _instance$autoResetGl,
		        disableGlobalFilter = instance.disableGlobalFilter;
		    var setGlobalFilter = React.useCallback(function (filterValue) {
		      dispatch({
		        type: actions.setGlobalFilter,
		        filterValue: filterValue
		      });
		    }, [dispatch]); // TODO: Create a filter cache for incremental high speed multi-filtering
		    // This gets pretty complicated pretty fast, since you have to maintain a
		    // cache for each row group (top-level rows, and each row's recursive subrows)
		    // This would make multi-filtering a lot faster though. Too far?

		    var _React$useMemo = React.useMemo(function () {
		      if (manualGlobalFilter || typeof globalFilterValue === 'undefined') {
		        return [rows, flatRows, rowsById];
		      }

		      var filteredFlatRows = [];
		      var filteredRowsById = {};
		      var filterMethod = getFilterMethod(globalFilter, userFilterTypes || {}, filterTypes);

		      if (!filterMethod) {
		        console.warn("Could not find a valid 'globalFilter' option.");
		        return rows;
		      }

		      allColumns.forEach(function (column) {
		        var columnDisableGlobalFilter = column.disableGlobalFilter;
		        column.canFilter = getFirstDefined(columnDisableGlobalFilter === true ? false : undefined, disableGlobalFilter === true ? false : undefined, true);
		      });
		      var filterableColumns = allColumns.filter(function (c) {
		        return c.canFilter === true;
		      }); // Filters top level and nested rows

		      var filterRows = function filterRows(filteredRows) {
		        filteredRows = filterMethod(filteredRows, filterableColumns.map(function (d) {
		          return d.id;
		        }), globalFilterValue);
		        filteredRows.forEach(function (row) {
		          filteredFlatRows.push(row);
		          filteredRowsById[row.id] = row;
		          row.subRows = row.subRows && row.subRows.length ? filterRows(row.subRows) : row.subRows;
		        });
		        return filteredRows;
		      };

		      return [filterRows(rows), filteredFlatRows, filteredRowsById];
		    }, [manualGlobalFilter, globalFilterValue, globalFilter, userFilterTypes, allColumns, rows, flatRows, rowsById, disableGlobalFilter]),
		        globalFilteredRows = _React$useMemo[0],
		        globalFilteredFlatRows = _React$useMemo[1],
		        globalFilteredRowsById = _React$useMemo[2];

		    var getAutoResetGlobalFilter = useGetLatest(autoResetGlobalFilter);
		    useMountedLayoutEffect(function () {
		      if (getAutoResetGlobalFilter()) {
		        dispatch({
		          type: actions.resetGlobalFilter
		        });
		      }
		    }, [dispatch, manualGlobalFilter ? null : data]);
		    Object.assign(instance, {
		      preGlobalFilteredRows: rows,
		      preGlobalFilteredFlatRows: flatRows,
		      preGlobalFilteredRowsById: rowsById,
		      globalFilteredRows: globalFilteredRows,
		      globalFilteredFlatRows: globalFilteredFlatRows,
		      globalFilteredRowsById: globalFilteredRowsById,
		      rows: globalFilteredRows,
		      flatRows: globalFilteredFlatRows,
		      rowsById: globalFilteredRowsById,
		      setGlobalFilter: setGlobalFilter,
		      disableGlobalFilter: disableGlobalFilter
		    });
		  }

		  function sum(values, aggregatedValues) {
		    // It's faster to just add the aggregations together instead of
		    // process leaf nodes individually
		    return aggregatedValues.reduce(function (sum, next) {
		      return sum + (typeof next === 'number' ? next : 0);
		    }, 0);
		  }
		  function min(values) {
		    var min = values[0] || 0;
		    values.forEach(function (value) {
		      if (typeof value === 'number') {
		        min = Math.min(min, value);
		      }
		    });
		    return min;
		  }
		  function max(values) {
		    var max = values[0] || 0;
		    values.forEach(function (value) {
		      if (typeof value === 'number') {
		        max = Math.max(max, value);
		      }
		    });
		    return max;
		  }
		  function minMax(values) {
		    var min = values[0] || 0;
		    var max = values[0] || 0;
		    values.forEach(function (value) {
		      if (typeof value === 'number') {
		        min = Math.min(min, value);
		        max = Math.max(max, value);
		      }
		    });
		    return min + ".." + max;
		  }
		  function average(values) {
		    return sum(null, values) / values.length;
		  }
		  function median(values) {
		    if (!values.length) {
		      return null;
		    }

		    var mid = Math.floor(values.length / 2);
		    var nums = [].concat(values).sort(function (a, b) {
		      return a - b;
		    });
		    return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
		  }
		  function unique(values) {
		    return Array.from(new Set(values).values());
		  }
		  function uniqueCount(values) {
		    return new Set(values).size;
		  }
		  function count(values) {
		    return values.length;
		  }

		  var aggregations = /*#__PURE__*/Object.freeze({
		    __proto__: null,
		    sum: sum,
		    min: min,
		    max: max,
		    minMax: minMax,
		    average: average,
		    median: median,
		    unique: unique,
		    uniqueCount: uniqueCount,
		    count: count
		  });

		  var emptyArray = [];
		  var emptyObject = {}; // Actions

		  actions.resetGroupBy = 'resetGroupBy';
		  actions.setGroupBy = 'setGroupBy';
		  actions.toggleGroupBy = 'toggleGroupBy';
		  var useGroupBy = function useGroupBy(hooks) {
		    hooks.getGroupByToggleProps = [defaultGetGroupByToggleProps];
		    hooks.stateReducers.push(reducer$4);
		    hooks.visibleColumnsDeps.push(function (deps, _ref) {
		      var instance = _ref.instance;
		      return [].concat(deps, [instance.state.groupBy]);
		    });
		    hooks.visibleColumns.push(visibleColumns);
		    hooks.useInstance.push(useInstance$4);
		    hooks.prepareRow.push(prepareRow$1);
		  };
		  useGroupBy.pluginName = 'useGroupBy';

		  var defaultGetGroupByToggleProps = function defaultGetGroupByToggleProps(props, _ref2) {
		    var header = _ref2.header;
		    return [props, {
		      onClick: header.canGroupBy ? function (e) {
		        e.persist();
		        header.toggleGroupBy();
		      } : undefined,
		      style: {
		        cursor: header.canGroupBy ? 'pointer' : undefined
		      },
		      title: 'Toggle GroupBy'
		    }];
		  }; // Reducer


		  function reducer$4(state, action, previousState, instance) {
		    if (action.type === actions.init) {
		      return _extends({
		        groupBy: []
		      }, state);
		    }

		    if (action.type === actions.resetGroupBy) {
		      return _extends({}, state, {
		        groupBy: instance.initialState.groupBy || []
		      });
		    }

		    if (action.type === actions.setGroupBy) {
		      var value = action.value;
		      return _extends({}, state, {
		        groupBy: value
		      });
		    }

		    if (action.type === actions.toggleGroupBy) {
		      var columnId = action.columnId,
		          setGroupBy = action.value;
		      var resolvedGroupBy = typeof setGroupBy !== 'undefined' ? setGroupBy : !state.groupBy.includes(columnId);

		      if (resolvedGroupBy) {
		        return _extends({}, state, {
		          groupBy: [].concat(state.groupBy, [columnId])
		        });
		      }

		      return _extends({}, state, {
		        groupBy: state.groupBy.filter(function (d) {
		          return d !== columnId;
		        })
		      });
		    }
		  }

		  function visibleColumns(columns, _ref3) {
		    var groupBy = _ref3.instance.state.groupBy;
		    // Sort grouped columns to the start of the column list
		    // before the headers are built
		    var groupByColumns = groupBy.map(function (g) {
		      return columns.find(function (col) {
		        return col.id === g;
		      });
		    }).filter(Boolean);
		    var nonGroupByColumns = columns.filter(function (col) {
		      return !groupBy.includes(col.id);
		    });
		    columns = [].concat(groupByColumns, nonGroupByColumns);
		    columns.forEach(function (column) {
		      column.isGrouped = groupBy.includes(column.id);
		      column.groupedIndex = groupBy.indexOf(column.id);
		    });
		    return columns;
		  }

		  var defaultUserAggregations = {};

		  function useInstance$4(instance) {
		    var data = instance.data,
		        rows = instance.rows,
		        flatRows = instance.flatRows,
		        rowsById = instance.rowsById,
		        allColumns = instance.allColumns,
		        flatHeaders = instance.flatHeaders,
		        _instance$groupByFn = instance.groupByFn,
		        groupByFn = _instance$groupByFn === void 0 ? defaultGroupByFn : _instance$groupByFn,
		        manualGroupBy = instance.manualGroupBy,
		        _instance$aggregation = instance.aggregations,
		        userAggregations = _instance$aggregation === void 0 ? defaultUserAggregations : _instance$aggregation,
		        plugins = instance.plugins,
		        groupBy = instance.state.groupBy,
		        dispatch = instance.dispatch,
		        _instance$autoResetGr = instance.autoResetGroupBy,
		        autoResetGroupBy = _instance$autoResetGr === void 0 ? true : _instance$autoResetGr,
		        disableGroupBy = instance.disableGroupBy,
		        defaultCanGroupBy = instance.defaultCanGroupBy,
		        getHooks = instance.getHooks;
		    ensurePluginOrder(plugins, ['useColumnOrder', 'useFilters'], 'useGroupBy');
		    var getInstance = useGetLatest(instance);
		    allColumns.forEach(function (column) {
		      var accessor = column.accessor,
		          defaultColumnGroupBy = column.defaultGroupBy,
		          columnDisableGroupBy = column.disableGroupBy;
		      column.canGroupBy = accessor ? getFirstDefined(column.canGroupBy, columnDisableGroupBy === true ? false : undefined, disableGroupBy === true ? false : undefined, true) : getFirstDefined(column.canGroupBy, defaultColumnGroupBy, defaultCanGroupBy, false);

		      if (column.canGroupBy) {
		        column.toggleGroupBy = function () {
		          return instance.toggleGroupBy(column.id);
		        };
		      }

		      column.Aggregated = column.Aggregated || column.Cell;
		    });
		    var toggleGroupBy = React.useCallback(function (columnId, value) {
		      dispatch({
		        type: actions.toggleGroupBy,
		        columnId: columnId,
		        value: value
		      });
		    }, [dispatch]);
		    var setGroupBy = React.useCallback(function (value) {
		      dispatch({
		        type: actions.setGroupBy,
		        value: value
		      });
		    }, [dispatch]);
		    flatHeaders.forEach(function (header) {
		      header.getGroupByToggleProps = makePropGetter(getHooks().getGroupByToggleProps, {
		        instance: getInstance(),
		        header: header
		      });
		    });

		    var _React$useMemo = React.useMemo(function () {
		      if (manualGroupBy || !groupBy.length) {
		        return [rows, flatRows, rowsById, emptyArray, emptyObject, flatRows, rowsById];
		      } // Ensure that the list of filtered columns exist


		      var existingGroupBy = groupBy.filter(function (g) {
		        return allColumns.find(function (col) {
		          return col.id === g;
		        });
		      }); // Find the columns that can or are aggregating
		      // Uses each column to aggregate rows into a single value

		      var aggregateRowsToValues = function aggregateRowsToValues(leafRows, groupedRows, depth) {
		        var values = {};
		        allColumns.forEach(function (column) {
		          // Don't aggregate columns that are in the groupBy
		          if (existingGroupBy.includes(column.id)) {
		            values[column.id] = groupedRows[0] ? groupedRows[0].values[column.id] : null;
		            return;
		          } // Aggregate the values


		          var aggregateFn = typeof column.aggregate === 'function' ? column.aggregate : userAggregations[column.aggregate] || aggregations[column.aggregate];

		          if (aggregateFn) {
		            // Get the columnValues to aggregate
		            var groupedValues = groupedRows.map(function (row) {
		              return row.values[column.id];
		            }); // Get the columnValues to aggregate

		            var leafValues = leafRows.map(function (row) {
		              var columnValue = row.values[column.id];

		              if (!depth && column.aggregateValue) {
		                var aggregateValueFn = typeof column.aggregateValue === 'function' ? column.aggregateValue : userAggregations[column.aggregateValue] || aggregations[column.aggregateValue];

		                if (!aggregateValueFn) {
		                  console.info({
		                    column: column
		                  });
		                  throw new Error("React Table: Invalid column.aggregateValue option for column listed above");
		                }

		                columnValue = aggregateValueFn(columnValue, row, column);
		              }

		              return columnValue;
		            });
		            values[column.id] = aggregateFn(leafValues, groupedValues);
		          } else if (column.aggregate) {
		            console.info({
		              column: column
		            });
		            throw new Error("React Table: Invalid column.aggregate option for column listed above");
		          } else {
		            values[column.id] = null;
		          }
		        });
		        return values;
		      };

		      var groupedFlatRows = [];
		      var groupedRowsById = {};
		      var onlyGroupedFlatRows = [];
		      var onlyGroupedRowsById = {};
		      var nonGroupedFlatRows = [];
		      var nonGroupedRowsById = {}; // Recursively group the data

		      var groupUpRecursively = function groupUpRecursively(rows, depth, parentId) {
		        if (depth === void 0) {
		          depth = 0;
		        }

		        // This is the last level, just return the rows
		        if (depth === existingGroupBy.length) {
		          return rows.map(function (row) {
		            return _extends({}, row, {
		              depth: depth
		            });
		          });
		        }

		        var columnId = existingGroupBy[depth]; // Group the rows together for this level

		        var rowGroupsMap = groupByFn(rows, columnId); // Peform aggregations for each group

		        var aggregatedGroupedRows = Object.entries(rowGroupsMap).map(function (_ref4, index) {
		          var groupByVal = _ref4[0],
		              groupedRows = _ref4[1];
		          var id = columnId + ":" + groupByVal;
		          id = parentId ? parentId + ">" + id : id; // First, Recurse to group sub rows before aggregation

		          var subRows = groupUpRecursively(groupedRows, depth + 1, id); // Flatten the leaf rows of the rows in this group

		          var leafRows = depth ? flattenBy(groupedRows, 'leafRows') : groupedRows;
		          var values = aggregateRowsToValues(leafRows, groupedRows, depth);
		          var row = {
		            id: id,
		            isGrouped: true,
		            groupByID: columnId,
		            groupByVal: groupByVal,
		            values: values,
		            subRows: subRows,
		            leafRows: leafRows,
		            depth: depth,
		            index: index
		          };
		          subRows.forEach(function (subRow) {
		            groupedFlatRows.push(subRow);
		            groupedRowsById[subRow.id] = subRow;

		            if (subRow.isGrouped) {
		              onlyGroupedFlatRows.push(subRow);
		              onlyGroupedRowsById[subRow.id] = subRow;
		            } else {
		              nonGroupedFlatRows.push(subRow);
		              nonGroupedRowsById[subRow.id] = subRow;
		            }
		          });
		          return row;
		        });
		        return aggregatedGroupedRows;
		      };

		      var groupedRows = groupUpRecursively(rows);
		      groupedRows.forEach(function (subRow) {
		        groupedFlatRows.push(subRow);
		        groupedRowsById[subRow.id] = subRow;

		        if (subRow.isGrouped) {
		          onlyGroupedFlatRows.push(subRow);
		          onlyGroupedRowsById[subRow.id] = subRow;
		        } else {
		          nonGroupedFlatRows.push(subRow);
		          nonGroupedRowsById[subRow.id] = subRow;
		        }
		      }); // Assign the new data

		      return [groupedRows, groupedFlatRows, groupedRowsById, onlyGroupedFlatRows, onlyGroupedRowsById, nonGroupedFlatRows, nonGroupedRowsById];
		    }, [manualGroupBy, groupBy, rows, flatRows, rowsById, allColumns, userAggregations, groupByFn]),
		        groupedRows = _React$useMemo[0],
		        groupedFlatRows = _React$useMemo[1],
		        groupedRowsById = _React$useMemo[2],
		        onlyGroupedFlatRows = _React$useMemo[3],
		        onlyGroupedRowsById = _React$useMemo[4],
		        nonGroupedFlatRows = _React$useMemo[5],
		        nonGroupedRowsById = _React$useMemo[6];

		    var getAutoResetGroupBy = useGetLatest(autoResetGroupBy);
		    useMountedLayoutEffect(function () {
		      if (getAutoResetGroupBy()) {
		        dispatch({
		          type: actions.resetGroupBy
		        });
		      }
		    }, [dispatch, manualGroupBy ? null : data]);
		    Object.assign(instance, {
		      preGroupedRows: rows,
		      preGroupedFlatRow: flatRows,
		      preGroupedRowsById: rowsById,
		      groupedRows: groupedRows,
		      groupedFlatRows: groupedFlatRows,
		      groupedRowsById: groupedRowsById,
		      onlyGroupedFlatRows: onlyGroupedFlatRows,
		      onlyGroupedRowsById: onlyGroupedRowsById,
		      nonGroupedFlatRows: nonGroupedFlatRows,
		      nonGroupedRowsById: nonGroupedRowsById,
		      rows: groupedRows,
		      flatRows: groupedFlatRows,
		      rowsById: groupedRowsById,
		      toggleGroupBy: toggleGroupBy,
		      setGroupBy: setGroupBy
		    });
		  }

		  function prepareRow$1(row) {
		    row.allCells.forEach(function (cell) {
		      var _row$subRows;

		      // Grouped cells are in the groupBy and the pivot cell for the row
		      cell.isGrouped = cell.column.isGrouped && cell.column.id === row.groupByID; // Placeholder cells are any columns in the groupBy that are not grouped

		      cell.isPlaceholder = !cell.isGrouped && cell.column.isGrouped; // Aggregated cells are not grouped, not repeated, but still have subRows

		      cell.isAggregated = !cell.isGrouped && !cell.isPlaceholder && ((_row$subRows = row.subRows) == null ? void 0 : _row$subRows.length);
		    });
		  }

		  function defaultGroupByFn(rows, columnId) {
		    return rows.reduce(function (prev, row, i) {
		      // TODO: Might want to implement a key serializer here so
		      // irregular column values can still be grouped if needed?
		      var resKey = "" + row.values[columnId];
		      prev[resKey] = Array.isArray(prev[resKey]) ? prev[resKey] : [];
		      prev[resKey].push(row);
		      return prev;
		    }, {});
		  }

		  var reSplitAlphaNumeric = /([0-9]+)/gm; // Mixed sorting is slow, but very inclusive of many edge cases.
		  // It handles numbers, mixed alphanumeric combinations, and even
		  // null, undefined, and Infinity

		  var alphanumeric = function alphanumeric(rowA, rowB, columnId) {
		    var _getRowValuesByColumn = getRowValuesByColumnID(rowA, rowB, columnId),
		        a = _getRowValuesByColumn[0],
		        b = _getRowValuesByColumn[1]; // Force to strings (or "" for unsupported types)


		    a = toString(a);
		    b = toString(b); // Split on number groups, but keep the delimiter
		    // Then remove falsey split values

		    a = a.split(reSplitAlphaNumeric).filter(Boolean);
		    b = b.split(reSplitAlphaNumeric).filter(Boolean); // While

		    while (a.length && b.length) {
		      var aa = a.shift();
		      var bb = b.shift();
		      var an = parseInt(aa, 10);
		      var bn = parseInt(bb, 10);
		      var combo = [an, bn].sort(); // Both are string

		      if (isNaN(combo[0])) {
		        if (aa > bb) {
		          return 1;
		        }

		        if (bb > aa) {
		          return -1;
		        }

		        continue;
		      } // One is a string, one is a number


		      if (isNaN(combo[1])) {
		        return isNaN(an) ? -1 : 1;
		      } // Both are numbers


		      if (an > bn) {
		        return 1;
		      }

		      if (bn > an) {
		        return -1;
		      }
		    }

		    return a.length - b.length;
		  };
		  function datetime(rowA, rowB, columnId) {
		    var _getRowValuesByColumn2 = getRowValuesByColumnID(rowA, rowB, columnId),
		        a = _getRowValuesByColumn2[0],
		        b = _getRowValuesByColumn2[1];

		    a = a.getTime();
		    b = b.getTime();
		    return compareBasic(a, b);
		  }
		  function basic(rowA, rowB, columnId) {
		    var _getRowValuesByColumn3 = getRowValuesByColumnID(rowA, rowB, columnId),
		        a = _getRowValuesByColumn3[0],
		        b = _getRowValuesByColumn3[1];

		    return compareBasic(a, b);
		  }
		  function string(rowA, rowB, columnId) {
		    var _getRowValuesByColumn4 = getRowValuesByColumnID(rowA, rowB, columnId),
		        a = _getRowValuesByColumn4[0],
		        b = _getRowValuesByColumn4[1];

		    a = a.split('').filter(Boolean);
		    b = b.split('').filter(Boolean);

		    while (a.length && b.length) {
		      var aa = a.shift();
		      var bb = b.shift();
		      var alower = aa.toLowerCase();
		      var blower = bb.toLowerCase(); // Case insensitive comparison until characters match

		      if (alower > blower) {
		        return 1;
		      }

		      if (blower > alower) {
		        return -1;
		      } // If lowercase characters are identical


		      if (aa > bb) {
		        return 1;
		      }

		      if (bb > aa) {
		        return -1;
		      }

		      continue;
		    }

		    return a.length - b.length;
		  }
		  function number(rowA, rowB, columnId) {
		    var _getRowValuesByColumn5 = getRowValuesByColumnID(rowA, rowB, columnId),
		        a = _getRowValuesByColumn5[0],
		        b = _getRowValuesByColumn5[1];

		    var replaceNonNumeric = /[^0-9.]/gi;
		    a = Number(String(a).replace(replaceNonNumeric, ''));
		    b = Number(String(b).replace(replaceNonNumeric, ''));
		    return compareBasic(a, b);
		  } // Utils

		  function compareBasic(a, b) {
		    return a === b ? 0 : a > b ? 1 : -1;
		  }

		  function getRowValuesByColumnID(row1, row2, columnId) {
		    return [row1.values[columnId], row2.values[columnId]];
		  }

		  function toString(a) {
		    if (typeof a === 'number') {
		      if (isNaN(a) || a === Infinity || a === -Infinity) {
		        return '';
		      }

		      return String(a);
		    }

		    if (typeof a === 'string') {
		      return a;
		    }

		    return '';
		  }

		  var sortTypes = /*#__PURE__*/Object.freeze({
		    __proto__: null,
		    alphanumeric: alphanumeric,
		    datetime: datetime,
		    basic: basic,
		    string: string,
		    number: number
		  });

		  actions.resetSortBy = 'resetSortBy';
		  actions.setSortBy = 'setSortBy';
		  actions.toggleSortBy = 'toggleSortBy';
		  actions.clearSortBy = 'clearSortBy';
		  defaultColumn.sortType = 'alphanumeric';
		  defaultColumn.sortDescFirst = false;
		  var useSortBy = function useSortBy(hooks) {
		    hooks.getSortByToggleProps = [defaultGetSortByToggleProps];
		    hooks.stateReducers.push(reducer$5);
		    hooks.useInstance.push(useInstance$5);
		  };
		  useSortBy.pluginName = 'useSortBy';

		  var defaultGetSortByToggleProps = function defaultGetSortByToggleProps(props, _ref) {
		    var instance = _ref.instance,
		        column = _ref.column;
		    var _instance$isMultiSort = instance.isMultiSortEvent,
		        isMultiSortEvent = _instance$isMultiSort === void 0 ? function (e) {
		      return e.shiftKey;
		    } : _instance$isMultiSort;
		    return [props, {
		      onClick: column.canSort ? function (e) {
		        e.persist();
		        column.toggleSortBy(undefined, !instance.disableMultiSort && isMultiSortEvent(e));
		      } : undefined,
		      style: {
		        cursor: column.canSort ? 'pointer' : undefined
		      },
		      title: column.canSort ? 'Toggle SortBy' : undefined
		    }];
		  }; // Reducer


		  function reducer$5(state, action, previousState, instance) {
		    if (action.type === actions.init) {
		      return _extends({
		        sortBy: []
		      }, state);
		    }

		    if (action.type === actions.resetSortBy) {
		      return _extends({}, state, {
		        sortBy: instance.initialState.sortBy || []
		      });
		    }

		    if (action.type === actions.clearSortBy) {
		      var sortBy = state.sortBy;
		      var newSortBy = sortBy.filter(function (d) {
		        return d.id !== action.columnId;
		      });
		      return _extends({}, state, {
		        sortBy: newSortBy
		      });
		    }

		    if (action.type === actions.setSortBy) {
		      var _sortBy = action.sortBy;
		      return _extends({}, state, {
		        sortBy: _sortBy
		      });
		    }

		    if (action.type === actions.toggleSortBy) {
		      var columnId = action.columnId,
		          desc = action.desc,
		          multi = action.multi;
		      var allColumns = instance.allColumns,
		          disableMultiSort = instance.disableMultiSort,
		          disableSortRemove = instance.disableSortRemove,
		          disableMultiRemove = instance.disableMultiRemove,
		          _instance$maxMultiSor = instance.maxMultiSortColCount,
		          maxMultiSortColCount = _instance$maxMultiSor === void 0 ? Number.MAX_SAFE_INTEGER : _instance$maxMultiSor;
		      var _sortBy2 = state.sortBy; // Find the column for this columnId

		      var column = allColumns.find(function (d) {
		        return d.id === columnId;
		      });
		      var sortDescFirst = column.sortDescFirst; // Find any existing sortBy for this column

		      var existingSortBy = _sortBy2.find(function (d) {
		        return d.id === columnId;
		      });

		      var existingIndex = _sortBy2.findIndex(function (d) {
		        return d.id === columnId;
		      });

		      var hasDescDefined = typeof desc !== 'undefined' && desc !== null;
		      var _newSortBy = []; // What should we do with this sort action?

		      var sortAction;

		      if (!disableMultiSort && multi) {
		        if (existingSortBy) {
		          sortAction = 'toggle';
		        } else {
		          sortAction = 'add';
		        }
		      } else {
		        // Normal mode
		        if (existingIndex !== _sortBy2.length - 1 || _sortBy2.length !== 1) {
		          sortAction = 'replace';
		        } else if (existingSortBy) {
		          sortAction = 'toggle';
		        } else {
		          sortAction = 'replace';
		        }
		      } // Handle toggle states that will remove the sortBy


		      if (sortAction === 'toggle' && // Must be toggling
		      !disableSortRemove && // If disableSortRemove, disable in general
		      !hasDescDefined && ( // Must not be setting desc
		      multi ? !disableMultiRemove : true) && ( // If multi, don't allow if disableMultiRemove
		      existingSortBy && // Finally, detect if it should indeed be removed
		      existingSortBy.desc && !sortDescFirst || !existingSortBy.desc && sortDescFirst)) {
		        sortAction = 'remove';
		      }

		      if (sortAction === 'replace') {
		        _newSortBy = [{
		          id: columnId,
		          desc: hasDescDefined ? desc : sortDescFirst
		        }];
		      } else if (sortAction === 'add') {
		        _newSortBy = [].concat(_sortBy2, [{
		          id: columnId,
		          desc: hasDescDefined ? desc : sortDescFirst
		        }]); // Take latest n columns

		        _newSortBy.splice(0, _newSortBy.length - maxMultiSortColCount);
		      } else if (sortAction === 'toggle') {
		        // This flips (or sets) the
		        _newSortBy = _sortBy2.map(function (d) {
		          if (d.id === columnId) {
		            return _extends({}, d, {
		              desc: hasDescDefined ? desc : !existingSortBy.desc
		            });
		          }

		          return d;
		        });
		      } else if (sortAction === 'remove') {
		        _newSortBy = _sortBy2.filter(function (d) {
		          return d.id !== columnId;
		        });
		      }

		      return _extends({}, state, {
		        sortBy: _newSortBy
		      });
		    }
		  }

		  function useInstance$5(instance) {
		    var data = instance.data,
		        rows = instance.rows,
		        flatRows = instance.flatRows,
		        allColumns = instance.allColumns,
		        _instance$orderByFn = instance.orderByFn,
		        orderByFn = _instance$orderByFn === void 0 ? defaultOrderByFn : _instance$orderByFn,
		        userSortTypes = instance.sortTypes,
		        manualSortBy = instance.manualSortBy,
		        defaultCanSort = instance.defaultCanSort,
		        disableSortBy = instance.disableSortBy,
		        flatHeaders = instance.flatHeaders,
		        sortBy = instance.state.sortBy,
		        dispatch = instance.dispatch,
		        plugins = instance.plugins,
		        getHooks = instance.getHooks,
		        _instance$autoResetSo = instance.autoResetSortBy,
		        autoResetSortBy = _instance$autoResetSo === void 0 ? true : _instance$autoResetSo;
		    ensurePluginOrder(plugins, ['useFilters', 'useGlobalFilter', 'useGroupBy', 'usePivotColumns'], 'useSortBy');
		    var setSortBy = React.useCallback(function (sortBy) {
		      dispatch({
		        type: actions.setSortBy,
		        sortBy: sortBy
		      });
		    }, [dispatch]); // Updates sorting based on a columnId, desc flag and multi flag

		    var toggleSortBy = React.useCallback(function (columnId, desc, multi) {
		      dispatch({
		        type: actions.toggleSortBy,
		        columnId: columnId,
		        desc: desc,
		        multi: multi
		      });
		    }, [dispatch]); // use reference to avoid memory leak in #1608

		    var getInstance = useGetLatest(instance); // Add the getSortByToggleProps method to columns and headers

		    flatHeaders.forEach(function (column) {
		      var accessor = column.accessor,
		          defaultColumnCanSort = column.canSort,
		          columnDisableSortBy = column.disableSortBy,
		          id = column.id;
		      var canSort = accessor ? getFirstDefined(columnDisableSortBy === true ? false : undefined, disableSortBy === true ? false : undefined, true) : getFirstDefined(defaultCanSort, defaultColumnCanSort, false);
		      column.canSort = canSort;

		      if (column.canSort) {
		        column.toggleSortBy = function (desc, multi) {
		          return toggleSortBy(column.id, desc, multi);
		        };

		        column.clearSortBy = function () {
		          dispatch({
		            type: actions.clearSortBy,
		            columnId: column.id
		          });
		        };
		      }

		      column.getSortByToggleProps = makePropGetter(getHooks().getSortByToggleProps, {
		        instance: getInstance(),
		        column: column
		      });
		      var columnSort = sortBy.find(function (d) {
		        return d.id === id;
		      });
		      column.isSorted = !!columnSort;
		      column.sortedIndex = sortBy.findIndex(function (d) {
		        return d.id === id;
		      });
		      column.isSortedDesc = column.isSorted ? columnSort.desc : undefined;
		    });

		    var _React$useMemo = React.useMemo(function () {
		      if (manualSortBy || !sortBy.length) {
		        return [rows, flatRows];
		      }

		      var sortedFlatRows = []; // Filter out sortBys that correspond to non existing columns

		      var availableSortBy = sortBy.filter(function (sort) {
		        return allColumns.find(function (col) {
		          return col.id === sort.id;
		        });
		      });

		      var sortData = function sortData(rows) {
		        // Use the orderByFn to compose multiple sortBy's together.
		        // This will also perform a stable sorting using the row index
		        // if needed.
		        var sortedData = orderByFn(rows, availableSortBy.map(function (sort) {
		          // Support custom sorting methods for each column
		          var column = allColumns.find(function (d) {
		            return d.id === sort.id;
		          });

		          if (!column) {
		            throw new Error("React-Table: Could not find a column with id: " + sort.id + " while sorting");
		          }

		          var sortType = column.sortType; // Look up sortBy functions in this order:
		          // column function
		          // column string lookup on user sortType
		          // column string lookup on built-in sortType
		          // default function
		          // default string lookup on user sortType
		          // default string lookup on built-in sortType

		          var sortMethod = isFunction(sortType) || (userSortTypes || {})[sortType] || sortTypes[sortType];

		          if (!sortMethod) {
		            throw new Error("React-Table: Could not find a valid sortType of '" + sortType + "' for column '" + sort.id + "'.");
		          } // Return the correct sortFn.
		          // This function should always return in ascending order


		          return function (a, b) {
		            return sortMethod(a, b, sort.id, sort.desc);
		          };
		        }), // Map the directions
		        availableSortBy.map(function (sort) {
		          // Detect and use the sortInverted option
		          var column = allColumns.find(function (d) {
		            return d.id === sort.id;
		          });

		          if (column && column.sortInverted) {
		            return sort.desc;
		          }

		          return !sort.desc;
		        })); // If there are sub-rows, sort them

		        sortedData.forEach(function (row) {
		          sortedFlatRows.push(row);

		          if (!row.subRows || row.subRows.length === 0) {
		            return;
		          }

		          row.subRows = sortData(row.subRows);
		        });
		        return sortedData;
		      };

		      return [sortData(rows), sortedFlatRows];
		    }, [manualSortBy, sortBy, rows, flatRows, allColumns, orderByFn, userSortTypes]),
		        sortedRows = _React$useMemo[0],
		        sortedFlatRows = _React$useMemo[1];

		    var getAutoResetSortBy = useGetLatest(autoResetSortBy);
		    useMountedLayoutEffect(function () {
		      if (getAutoResetSortBy()) {
		        dispatch({
		          type: actions.resetSortBy
		        });
		      }
		    }, [manualSortBy ? null : data]);
		    Object.assign(instance, {
		      preSortedRows: rows,
		      preSortedFlatRows: flatRows,
		      sortedRows: sortedRows,
		      sortedFlatRows: sortedFlatRows,
		      rows: sortedRows,
		      flatRows: sortedFlatRows,
		      setSortBy: setSortBy,
		      toggleSortBy: toggleSortBy
		    });
		  }

		  function defaultOrderByFn(arr, funcs, dirs) {
		    return [].concat(arr).sort(function (rowA, rowB) {
		      for (var i = 0; i < funcs.length; i += 1) {
		        var sortFn = funcs[i];
		        var desc = dirs[i] === false || dirs[i] === 'desc';
		        var sortInt = sortFn(rowA, rowB);

		        if (sortInt !== 0) {
		          return desc ? -sortInt : sortInt;
		        }
		      }

		      return dirs[0] ? rowA.index - rowB.index : rowB.index - rowA.index;
		    });
		  }

		  var pluginName = 'usePagination'; // Actions

		  actions.resetPage = 'resetPage';
		  actions.gotoPage = 'gotoPage';
		  actions.setPageSize = 'setPageSize';
		  var usePagination = function usePagination(hooks) {
		    hooks.stateReducers.push(reducer$6);
		    hooks.useInstance.push(useInstance$6);
		  };
		  usePagination.pluginName = pluginName;

		  function reducer$6(state, action, previousState, instance) {
		    if (action.type === actions.init) {
		      return _extends({
		        pageSize: 10,
		        pageIndex: 0
		      }, state);
		    }

		    if (action.type === actions.resetPage) {
		      return _extends({}, state, {
		        pageIndex: instance.initialState.pageIndex || 0
		      });
		    }

		    if (action.type === actions.gotoPage) {
		      var pageCount = instance.pageCount,
		          page = instance.page;
		      var newPageIndex = functionalUpdate(action.pageIndex, state.pageIndex);
		      var canNavigate = false;

		      if (newPageIndex > state.pageIndex) {
		        // next page
		        canNavigate = pageCount === -1 ? page.length >= state.pageSize : newPageIndex < pageCount;
		      } else if (newPageIndex < state.pageIndex) {
		        // prev page
		        canNavigate = newPageIndex > -1;
		      }

		      if (!canNavigate) {
		        return state;
		      }

		      return _extends({}, state, {
		        pageIndex: newPageIndex
		      });
		    }

		    if (action.type === actions.setPageSize) {
		      var pageSize = action.pageSize;
		      var topRowIndex = state.pageSize * state.pageIndex;
		      var pageIndex = Math.floor(topRowIndex / pageSize);
		      return _extends({}, state, {
		        pageIndex: pageIndex,
		        pageSize: pageSize
		      });
		    }
		  }

		  function useInstance$6(instance) {
		    var rows = instance.rows,
		        _instance$autoResetPa = instance.autoResetPage,
		        autoResetPage = _instance$autoResetPa === void 0 ? true : _instance$autoResetPa,
		        _instance$manualExpan = instance.manualExpandedKey,
		        manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
		        plugins = instance.plugins,
		        userPageCount = instance.pageCount,
		        _instance$paginateExp = instance.paginateExpandedRows,
		        paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
		        _instance$expandSubRo = instance.expandSubRows,
		        expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
		        _instance$state = instance.state,
		        pageSize = _instance$state.pageSize,
		        pageIndex = _instance$state.pageIndex,
		        expanded = _instance$state.expanded,
		        globalFilter = _instance$state.globalFilter,
		        filters = _instance$state.filters,
		        groupBy = _instance$state.groupBy,
		        sortBy = _instance$state.sortBy,
		        dispatch = instance.dispatch,
		        data = instance.data,
		        manualPagination = instance.manualPagination;
		    ensurePluginOrder(plugins, ['useGlobalFilter', 'useFilters', 'useGroupBy', 'useSortBy', 'useExpanded'], 'usePagination');
		    var getAutoResetPage = useGetLatest(autoResetPage);
		    useMountedLayoutEffect(function () {
		      if (getAutoResetPage()) {
		        dispatch({
		          type: actions.resetPage
		        });
		      }
		    }, [dispatch, manualPagination ? null : data, globalFilter, filters, groupBy, sortBy]);
		    var pageCount = manualPagination ? userPageCount : Math.ceil(rows.length / pageSize);
		    var pageOptions = React.useMemo(function () {
		      return pageCount > 0 ? [].concat(new Array(pageCount)).fill(null).map(function (d, i) {
		        return i;
		      }) : [];
		    }, [pageCount]);
		    var page = React.useMemo(function () {
		      var page;

		      if (manualPagination) {
		        page = rows;
		      } else {
		        var pageStart = pageSize * pageIndex;
		        var pageEnd = pageStart + pageSize;
		        page = rows.slice(pageStart, pageEnd);
		      }

		      if (paginateExpandedRows) {
		        return page;
		      }

		      return expandRows(page, {
		        manualExpandedKey: manualExpandedKey,
		        expanded: expanded,
		        expandSubRows: expandSubRows
		      });
		    }, [expandSubRows, expanded, manualExpandedKey, manualPagination, pageIndex, pageSize, paginateExpandedRows, rows]);
		    var canPreviousPage = pageIndex > 0;
		    var canNextPage = pageCount === -1 ? page.length >= pageSize : pageIndex < pageCount - 1;
		    var gotoPage = React.useCallback(function (pageIndex) {
		      dispatch({
		        type: actions.gotoPage,
		        pageIndex: pageIndex
		      });
		    }, [dispatch]);
		    var previousPage = React.useCallback(function () {
		      return gotoPage(function (old) {
		        return old - 1;
		      });
		    }, [gotoPage]);
		    var nextPage = React.useCallback(function () {
		      return gotoPage(function (old) {
		        return old + 1;
		      });
		    }, [gotoPage]);
		    var setPageSize = React.useCallback(function (pageSize) {
		      dispatch({
		        type: actions.setPageSize,
		        pageSize: pageSize
		      });
		    }, [dispatch]);
		    Object.assign(instance, {
		      pageOptions: pageOptions,
		      pageCount: pageCount,
		      page: page,
		      canPreviousPage: canPreviousPage,
		      canNextPage: canNextPage,
		      gotoPage: gotoPage,
		      previousPage: previousPage,
		      nextPage: nextPage,
		      setPageSize: setPageSize
		    });
		  }

		  actions.resetPivot = 'resetPivot';
		  actions.togglePivot = 'togglePivot';
		  var _UNSTABLE_usePivotColumns = function _UNSTABLE_usePivotColumns(hooks) {
		    hooks.getPivotToggleProps = [defaultGetPivotToggleProps];
		    hooks.stateReducers.push(reducer$7);
		    hooks.useInstanceAfterData.push(useInstanceAfterData);
		    hooks.allColumns.push(allColumns);
		    hooks.accessValue.push(accessValue);
		    hooks.materializedColumns.push(materializedColumns);
		    hooks.materializedColumnsDeps.push(materializedColumnsDeps);
		    hooks.visibleColumns.push(visibleColumns$1);
		    hooks.visibleColumnsDeps.push(visibleColumnsDeps);
		    hooks.useInstance.push(useInstance$7);
		    hooks.prepareRow.push(prepareRow$2);
		  };
		  _UNSTABLE_usePivotColumns.pluginName = 'usePivotColumns';
		  var defaultPivotColumns = [];

		  var defaultGetPivotToggleProps = function defaultGetPivotToggleProps(props, _ref) {
		    var header = _ref.header;
		    return [props, {
		      onClick: header.canPivot ? function (e) {
		        e.persist();
		        header.togglePivot();
		      } : undefined,
		      style: {
		        cursor: header.canPivot ? 'pointer' : undefined
		      },
		      title: 'Toggle Pivot'
		    }];
		  }; // Reducer


		  function reducer$7(state, action, previousState, instance) {
		    if (action.type === actions.init) {
		      return _extends({
		        pivotColumns: defaultPivotColumns
		      }, state);
		    }

		    if (action.type === actions.resetPivot) {
		      return _extends({}, state, {
		        pivotColumns: instance.initialState.pivotColumns || defaultPivotColumns
		      });
		    }

		    if (action.type === actions.togglePivot) {
		      var columnId = action.columnId,
		          setPivot = action.value;
		      var resolvedPivot = typeof setPivot !== 'undefined' ? setPivot : !state.pivotColumns.includes(columnId);

		      if (resolvedPivot) {
		        return _extends({}, state, {
		          pivotColumns: [].concat(state.pivotColumns, [columnId])
		        });
		      }

		      return _extends({}, state, {
		        pivotColumns: state.pivotColumns.filter(function (d) {
		          return d !== columnId;
		        })
		      });
		    }
		  }

		  function useInstanceAfterData(instance) {
		    instance.allColumns.forEach(function (column) {
		      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
		    });
		  }

		  function allColumns(columns, _ref2) {
		    var instance = _ref2.instance;
		    columns.forEach(function (column) {
		      column.isPivotSource = instance.state.pivotColumns.includes(column.id);
		      column.uniqueValues = new Set();
		    });
		    return columns;
		  }

		  function accessValue(value, _ref3) {
		    var column = _ref3.column;

		    if (column.uniqueValues && typeof value !== 'undefined') {
		      column.uniqueValues.add(value);
		    }

		    return value;
		  }

		  function materializedColumns(materialized, _ref4) {
		    var instance = _ref4.instance;
		    var allColumns = instance.allColumns,
		        state = instance.state;

		    if (!state.pivotColumns.length || !state.groupBy || !state.groupBy.length) {
		      return materialized;
		    }

		    var pivotColumns = state.pivotColumns.map(function (id) {
		      return allColumns.find(function (d) {
		        return d.id === id;
		      });
		    }).filter(Boolean);
		    var sourceColumns = allColumns.filter(function (d) {
		      return !d.isPivotSource && !state.groupBy.includes(d.id) && !state.pivotColumns.includes(d.id);
		    });

		    var buildPivotColumns = function buildPivotColumns(depth, parent, pivotFilters) {
		      if (depth === void 0) {
		        depth = 0;
		      }

		      if (pivotFilters === void 0) {
		        pivotFilters = [];
		      }

		      var pivotColumn = pivotColumns[depth];

		      if (!pivotColumn) {
		        return sourceColumns.map(function (sourceColumn) {
		          // TODO: We could offer support here for renesting pivoted
		          // columns inside copies of their header groups. For now,
		          // that seems like it would be (1) overkill on nesting, considering
		          // you already get nesting for every pivot level and (2)
		          // really hard. :)
		          return _extends({}, sourceColumn, {
		            canPivot: false,
		            isPivoted: true,
		            parent: parent,
		            depth: depth,
		            id: "" + (parent ? parent.id + "." + sourceColumn.id : sourceColumn.id),
		            accessor: function accessor(originalRow, i, row) {
		              if (pivotFilters.every(function (filter) {
		                return filter(row);
		              })) {
		                return row.values[sourceColumn.id];
		              }
		            }
		          });
		        });
		      }

		      var uniqueValues = Array.from(pivotColumn.uniqueValues).sort();
		      return uniqueValues.map(function (uniqueValue) {
		        var columnGroup = _extends({}, pivotColumn, {
		          Header: pivotColumn.PivotHeader || typeof pivotColumn.header === 'string' ? pivotColumn.Header + ": " + uniqueValue : uniqueValue,
		          isPivotGroup: true,
		          parent: parent,
		          depth: depth,
		          id: parent ? parent.id + "." + pivotColumn.id + "." + uniqueValue : pivotColumn.id + "." + uniqueValue,
		          pivotValue: uniqueValue
		        });

		        columnGroup.columns = buildPivotColumns(depth + 1, columnGroup, [].concat(pivotFilters, [function (row) {
		          return row.values[pivotColumn.id] === uniqueValue;
		        }]));
		        return columnGroup;
		      });
		    };

		    var newMaterialized = flattenColumns(buildPivotColumns());
		    return [].concat(materialized, newMaterialized);
		  }

		  function materializedColumnsDeps(deps, _ref5) {
		    var _ref5$instance$state = _ref5.instance.state,
		        pivotColumns = _ref5$instance$state.pivotColumns,
		        groupBy = _ref5$instance$state.groupBy;
		    return [].concat(deps, [pivotColumns, groupBy]);
		  }

		  function visibleColumns$1(visibleColumns, _ref6) {
		    var state = _ref6.instance.state;
		    visibleColumns = visibleColumns.filter(function (d) {
		      return !d.isPivotSource;
		    });

		    if (state.pivotColumns.length && state.groupBy && state.groupBy.length) {
		      visibleColumns = visibleColumns.filter(function (column) {
		        return column.isGrouped || column.isPivoted;
		      });
		    }

		    return visibleColumns;
		  }

		  function visibleColumnsDeps(deps, _ref7) {
		    var instance = _ref7.instance;
		    return [].concat(deps, [instance.state.pivotColumns, instance.state.groupBy]);
		  }

		  function useInstance$7(instance) {
		    var columns = instance.columns,
		        allColumns = instance.allColumns,
		        flatHeaders = instance.flatHeaders,
		        getHooks = instance.getHooks,
		        plugins = instance.plugins,
		        dispatch = instance.dispatch,
		        _instance$autoResetPi = instance.autoResetPivot,
		        autoResetPivot = _instance$autoResetPi === void 0 ? true : _instance$autoResetPi,
		        manaulPivot = instance.manaulPivot,
		        disablePivot = instance.disablePivot,
		        defaultCanPivot = instance.defaultCanPivot;
		    ensurePluginOrder(plugins, ['useGroupBy'], 'usePivotColumns');
		    var getInstance = useGetLatest(instance);
		    allColumns.forEach(function (column) {
		      var accessor = column.accessor,
		          defaultColumnPivot = column.defaultPivot,
		          columnDisablePivot = column.disablePivot;
		      column.canPivot = accessor ? getFirstDefined(column.canPivot, columnDisablePivot === true ? false : undefined, disablePivot === true ? false : undefined, true) : getFirstDefined(column.canPivot, defaultColumnPivot, defaultCanPivot, false);

		      if (column.canPivot) {
		        column.togglePivot = function () {
		          return instance.togglePivot(column.id);
		        };
		      }

		      column.Aggregated = column.Aggregated || column.Cell;
		    });

		    var togglePivot = function togglePivot(columnId, value) {
		      dispatch({
		        type: actions.togglePivot,
		        columnId: columnId,
		        value: value
		      });
		    };

		    flatHeaders.forEach(function (header) {
		      header.getPivotToggleProps = makePropGetter(getHooks().getPivotToggleProps, {
		        instance: getInstance(),
		        header: header
		      });
		    });
		    var getAutoResetPivot = useGetLatest(autoResetPivot);
		    useMountedLayoutEffect(function () {
		      if (getAutoResetPivot()) {
		        dispatch({
		          type: actions.resetPivot
		        });
		      }
		    }, [dispatch, manaulPivot ? null : columns]);
		    Object.assign(instance, {
		      togglePivot: togglePivot
		    });
		  }

		  function prepareRow$2(row) {
		    row.allCells.forEach(function (cell) {
		      // Grouped cells are in the pivotColumns and the pivot cell for the row
		      cell.isPivoted = cell.column.isPivoted;
		    });
		  }

		  var pluginName$1 = 'useRowSelect'; // Actions

		  actions.resetSelectedRows = 'resetSelectedRows';
		  actions.toggleAllRowsSelected = 'toggleAllRowsSelected';
		  actions.toggleRowSelected = 'toggleRowSelected';
		  actions.toggleAllPageRowsSelected = 'toggleAllPageRowsSelected';
		  var useRowSelect = function useRowSelect(hooks) {
		    hooks.getToggleRowSelectedProps = [defaultGetToggleRowSelectedProps];
		    hooks.getToggleAllRowsSelectedProps = [defaultGetToggleAllRowsSelectedProps];
		    hooks.getToggleAllPageRowsSelectedProps = [defaultGetToggleAllPageRowsSelectedProps];
		    hooks.stateReducers.push(reducer$8);
		    hooks.useInstance.push(useInstance$8);
		    hooks.prepareRow.push(prepareRow$3);
		  };
		  useRowSelect.pluginName = pluginName$1;

		  var defaultGetToggleRowSelectedProps = function defaultGetToggleRowSelectedProps(props, _ref) {
		    var instance = _ref.instance,
		        row = _ref.row;
		    var _instance$manualRowSe = instance.manualRowSelectedKey,
		        manualRowSelectedKey = _instance$manualRowSe === void 0 ? 'isSelected' : _instance$manualRowSe;
		    var checked = false;

		    if (row.original && row.original[manualRowSelectedKey]) {
		      checked = true;
		    } else {
		      checked = row.isSelected;
		    }

		    return [props, {
		      onChange: function onChange(e) {
		        row.toggleRowSelected(e.target.checked);
		      },
		      style: {
		        cursor: 'pointer'
		      },
		      checked: checked,
		      title: 'Toggle Row Selected',
		      indeterminate: row.isSomeSelected
		    }];
		  };

		  var defaultGetToggleAllRowsSelectedProps = function defaultGetToggleAllRowsSelectedProps(props, _ref2) {
		    var instance = _ref2.instance;
		    return [props, {
		      onChange: function onChange(e) {
		        instance.toggleAllRowsSelected(e.target.checked);
		      },
		      style: {
		        cursor: 'pointer'
		      },
		      checked: instance.isAllRowsSelected,
		      title: 'Toggle All Rows Selected',
		      indeterminate: Boolean(!instance.isAllRowsSelected && Object.keys(instance.state.selectedRowIds).length)
		    }];
		  };

		  var defaultGetToggleAllPageRowsSelectedProps = function defaultGetToggleAllPageRowsSelectedProps(props, _ref3) {
		    var instance = _ref3.instance;
		    return [props, {
		      onChange: function onChange(e) {
		        instance.toggleAllPageRowsSelected(e.target.checked);
		      },
		      style: {
		        cursor: 'pointer'
		      },
		      checked: instance.isAllPageRowsSelected,
		      title: 'Toggle All Current Page Rows Selected',
		      indeterminate: Boolean(!instance.isAllPageRowsSelected && instance.page.some(function (_ref4) {
		        var id = _ref4.id;
		        return instance.state.selectedRowIds[id];
		      }))
		    }];
		  }; // eslint-disable-next-line max-params


		  function reducer$8(state, action, previousState, instance) {
		    if (action.type === actions.init) {
		      return _extends({
		        selectedRowIds: {}
		      }, state);
		    }

		    if (action.type === actions.resetSelectedRows) {
		      return _extends({}, state, {
		        selectedRowIds: instance.initialState.selectedRowIds || {}
		      });
		    }

		    if (action.type === actions.toggleAllRowsSelected) {
		      var setSelected = action.value;
		      var isAllRowsSelected = instance.isAllRowsSelected,
		          rowsById = instance.rowsById,
		          _instance$nonGroupedR = instance.nonGroupedRowsById,
		          nonGroupedRowsById = _instance$nonGroupedR === void 0 ? rowsById : _instance$nonGroupedR;
		      var selectAll = typeof setSelected !== 'undefined' ? setSelected : !isAllRowsSelected; // Only remove/add the rows that are visible on the screen
		      //  Leave all the other rows that are selected alone.

		      var selectedRowIds = Object.assign({}, state.selectedRowIds);

		      if (selectAll) {
		        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
		          selectedRowIds[rowId] = true;
		        });
		      } else {
		        Object.keys(nonGroupedRowsById).forEach(function (rowId) {
		          delete selectedRowIds[rowId];
		        });
		      }

		      return _extends({}, state, {
		        selectedRowIds: selectedRowIds
		      });
		    }

		    if (action.type === actions.toggleRowSelected) {
		      var id = action.id,
		          _setSelected = action.value;
		      var _rowsById = instance.rowsById,
		          _instance$selectSubRo = instance.selectSubRows,
		          selectSubRows = _instance$selectSubRo === void 0 ? true : _instance$selectSubRo,
		          getSubRows = instance.getSubRows;
		      var isSelected = state.selectedRowIds[id];
		      var shouldExist = typeof _setSelected !== 'undefined' ? _setSelected : !isSelected;

		      if (isSelected === shouldExist) {
		        return state;
		      }

		      var newSelectedRowIds = _extends({}, state.selectedRowIds);

		      var handleRowById = function handleRowById(id) {
		        var row = _rowsById[id];

		        if (row) {
		          if (!row.isGrouped) {
		            if (shouldExist) {
		              newSelectedRowIds[id] = true;
		            } else {
		              delete newSelectedRowIds[id];
		            }
		          }

		          if (selectSubRows && getSubRows(row)) {
		            return getSubRows(row).forEach(function (row) {
		              return handleRowById(row.id);
		            });
		          }
		        }
		      };

		      handleRowById(id);
		      return _extends({}, state, {
		        selectedRowIds: newSelectedRowIds
		      });
		    }

		    if (action.type === actions.toggleAllPageRowsSelected) {
		      var _setSelected2 = action.value;

		      var page = instance.page,
		          _rowsById2 = instance.rowsById,
		          _instance$selectSubRo2 = instance.selectSubRows,
		          _selectSubRows = _instance$selectSubRo2 === void 0 ? true : _instance$selectSubRo2,
		          isAllPageRowsSelected = instance.isAllPageRowsSelected,
		          _getSubRows = instance.getSubRows;

		      var _selectAll = typeof _setSelected2 !== 'undefined' ? _setSelected2 : !isAllPageRowsSelected;

		      var _newSelectedRowIds = _extends({}, state.selectedRowIds);

		      var _handleRowById = function _handleRowById(id) {
		        var row = _rowsById2[id];

		        if (!row.isGrouped) {
		          if (_selectAll) {
		            _newSelectedRowIds[id] = true;
		          } else {
		            delete _newSelectedRowIds[id];
		          }
		        }

		        if (_selectSubRows && _getSubRows(row)) {
		          return _getSubRows(row).forEach(function (row) {
		            return _handleRowById(row.id);
		          });
		        }
		      };

		      page.forEach(function (row) {
		        return _handleRowById(row.id);
		      });
		      return _extends({}, state, {
		        selectedRowIds: _newSelectedRowIds
		      });
		    }

		    return state;
		  }

		  function useInstance$8(instance) {
		    var data = instance.data,
		        rows = instance.rows,
		        getHooks = instance.getHooks,
		        plugins = instance.plugins,
		        rowsById = instance.rowsById,
		        _instance$nonGroupedR2 = instance.nonGroupedRowsById,
		        nonGroupedRowsById = _instance$nonGroupedR2 === void 0 ? rowsById : _instance$nonGroupedR2,
		        _instance$autoResetSe = instance.autoResetSelectedRows,
		        autoResetSelectedRows = _instance$autoResetSe === void 0 ? true : _instance$autoResetSe,
		        selectedRowIds = instance.state.selectedRowIds,
		        _instance$selectSubRo3 = instance.selectSubRows,
		        selectSubRows = _instance$selectSubRo3 === void 0 ? true : _instance$selectSubRo3,
		        dispatch = instance.dispatch,
		        page = instance.page,
		        getSubRows = instance.getSubRows;
		    ensurePluginOrder(plugins, ['useFilters', 'useGroupBy', 'useSortBy', 'useExpanded', 'usePagination'], 'useRowSelect');
		    var selectedFlatRows = React.useMemo(function () {
		      var selectedFlatRows = [];
		      rows.forEach(function (row) {
		        var isSelected = selectSubRows ? getRowIsSelected(row, selectedRowIds, getSubRows) : !!selectedRowIds[row.id];
		        row.isSelected = !!isSelected;
		        row.isSomeSelected = isSelected === null;

		        if (isSelected) {
		          selectedFlatRows.push(row);
		        }
		      });
		      return selectedFlatRows;
		    }, [rows, selectSubRows, selectedRowIds, getSubRows]);
		    var isAllRowsSelected = Boolean(Object.keys(nonGroupedRowsById).length && Object.keys(selectedRowIds).length);
		    var isAllPageRowsSelected = isAllRowsSelected;

		    if (isAllRowsSelected) {
		      if (Object.keys(nonGroupedRowsById).some(function (id) {
		        return !selectedRowIds[id];
		      })) {
		        isAllRowsSelected = false;
		      }
		    }

		    if (!isAllRowsSelected) {
		      if (page && page.length && page.some(function (_ref5) {
		        var id = _ref5.id;
		        return !selectedRowIds[id];
		      })) {
		        isAllPageRowsSelected = false;
		      }
		    }

		    var getAutoResetSelectedRows = useGetLatest(autoResetSelectedRows);
		    useMountedLayoutEffect(function () {
		      if (getAutoResetSelectedRows()) {
		        dispatch({
		          type: actions.resetSelectedRows
		        });
		      }
		    }, [dispatch, data]);
		    var toggleAllRowsSelected = React.useCallback(function (value) {
		      return dispatch({
		        type: actions.toggleAllRowsSelected,
		        value: value
		      });
		    }, [dispatch]);
		    var toggleAllPageRowsSelected = React.useCallback(function (value) {
		      return dispatch({
		        type: actions.toggleAllPageRowsSelected,
		        value: value
		      });
		    }, [dispatch]);
		    var toggleRowSelected = React.useCallback(function (id, value) {
		      return dispatch({
		        type: actions.toggleRowSelected,
		        id: id,
		        value: value
		      });
		    }, [dispatch]);
		    var getInstance = useGetLatest(instance);
		    var getToggleAllRowsSelectedProps = makePropGetter(getHooks().getToggleAllRowsSelectedProps, {
		      instance: getInstance()
		    });
		    var getToggleAllPageRowsSelectedProps = makePropGetter(getHooks().getToggleAllPageRowsSelectedProps, {
		      instance: getInstance()
		    });
		    Object.assign(instance, {
		      selectedFlatRows: selectedFlatRows,
		      isAllRowsSelected: isAllRowsSelected,
		      isAllPageRowsSelected: isAllPageRowsSelected,
		      toggleRowSelected: toggleRowSelected,
		      toggleAllRowsSelected: toggleAllRowsSelected,
		      getToggleAllRowsSelectedProps: getToggleAllRowsSelectedProps,
		      getToggleAllPageRowsSelectedProps: getToggleAllPageRowsSelectedProps,
		      toggleAllPageRowsSelected: toggleAllPageRowsSelected
		    });
		  }

		  function prepareRow$3(row, _ref6) {
		    var instance = _ref6.instance;

		    row.toggleRowSelected = function (set) {
		      return instance.toggleRowSelected(row.id, set);
		    };

		    row.getToggleRowSelectedProps = makePropGetter(instance.getHooks().getToggleRowSelectedProps, {
		      instance: instance,
		      row: row
		    });
		  }

		  function getRowIsSelected(row, selectedRowIds, getSubRows) {
		    if (selectedRowIds[row.id]) {
		      return true;
		    }

		    var subRows = getSubRows(row);

		    if (subRows && subRows.length) {
		      var allChildrenSelected = true;
		      var someSelected = false;
		      subRows.forEach(function (subRow) {
		        // Bail out early if we know both of these
		        if (someSelected && !allChildrenSelected) {
		          return;
		        }

		        if (getRowIsSelected(subRow, selectedRowIds, getSubRows)) {
		          someSelected = true;
		        } else {
		          allChildrenSelected = false;
		        }
		      });
		      return allChildrenSelected ? true : someSelected ? null : false;
		    }

		    return false;
		  }

		  var defaultInitialRowStateAccessor = function defaultInitialRowStateAccessor(row) {
		    return {};
		  };

		  var defaultInitialCellStateAccessor = function defaultInitialCellStateAccessor(cell) {
		    return {};
		  }; // Actions


		  actions.setRowState = 'setRowState';
		  actions.setCellState = 'setCellState';
		  actions.resetRowState = 'resetRowState';
		  var useRowState = function useRowState(hooks) {
		    hooks.stateReducers.push(reducer$9);
		    hooks.useInstance.push(useInstance$9);
		    hooks.prepareRow.push(prepareRow$4);
		  };
		  useRowState.pluginName = 'useRowState';

		  function reducer$9(state, action, previousState, instance) {
		    var _instance$initialRowS = instance.initialRowStateAccessor,
		        initialRowStateAccessor = _instance$initialRowS === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS,
		        _instance$initialCell = instance.initialCellStateAccessor,
		        initialCellStateAccessor = _instance$initialCell === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell,
		        rowsById = instance.rowsById;

		    if (action.type === actions.init) {
		      return _extends({
		        rowState: {}
		      }, state);
		    }

		    if (action.type === actions.resetRowState) {
		      return _extends({}, state, {
		        rowState: instance.initialState.rowState || {}
		      });
		    }

		    if (action.type === actions.setRowState) {
		      var _extends2;

		      var rowId = action.rowId,
		          value = action.value;
		      var oldRowState = typeof state.rowState[rowId] !== 'undefined' ? state.rowState[rowId] : initialRowStateAccessor(rowsById[rowId]);
		      return _extends({}, state, {
		        rowState: _extends({}, state.rowState, (_extends2 = {}, _extends2[rowId] = functionalUpdate(value, oldRowState), _extends2))
		      });
		    }

		    if (action.type === actions.setCellState) {
		      var _oldRowState$cellStat, _rowsById$_rowId, _rowsById$_rowId$cell, _extends3, _extends4;

		      var _rowId = action.rowId,
		          columnId = action.columnId,
		          _value = action.value;

		      var _oldRowState = typeof state.rowState[_rowId] !== 'undefined' ? state.rowState[_rowId] : initialRowStateAccessor(rowsById[_rowId]);

		      var oldCellState = typeof (_oldRowState == null ? void 0 : (_oldRowState$cellStat = _oldRowState.cellState) == null ? void 0 : _oldRowState$cellStat[columnId]) !== 'undefined' ? _oldRowState.cellState[columnId] : initialCellStateAccessor((_rowsById$_rowId = rowsById[_rowId]) == null ? void 0 : (_rowsById$_rowId$cell = _rowsById$_rowId.cells) == null ? void 0 : _rowsById$_rowId$cell.find(function (cell) {
		        return cell.column.id === columnId;
		      }));
		      return _extends({}, state, {
		        rowState: _extends({}, state.rowState, (_extends4 = {}, _extends4[_rowId] = _extends({}, _oldRowState, {
		          cellState: _extends({}, _oldRowState.cellState || {}, (_extends3 = {}, _extends3[columnId] = functionalUpdate(_value, oldCellState), _extends3))
		        }), _extends4))
		      });
		    }
		  }

		  function useInstance$9(instance) {
		    var _instance$autoResetRo = instance.autoResetRowState,
		        autoResetRowState = _instance$autoResetRo === void 0 ? true : _instance$autoResetRo,
		        data = instance.data,
		        dispatch = instance.dispatch;
		    var setRowState = React.useCallback(function (rowId, value) {
		      return dispatch({
		        type: actions.setRowState,
		        rowId: rowId,
		        value: value
		      });
		    }, [dispatch]);
		    var setCellState = React.useCallback(function (rowId, columnId, value) {
		      return dispatch({
		        type: actions.setCellState,
		        rowId: rowId,
		        columnId: columnId,
		        value: value
		      });
		    }, [dispatch]);
		    var getAutoResetRowState = useGetLatest(autoResetRowState);
		    useMountedLayoutEffect(function () {
		      if (getAutoResetRowState()) {
		        dispatch({
		          type: actions.resetRowState
		        });
		      }
		    }, [data]);
		    Object.assign(instance, {
		      setRowState: setRowState,
		      setCellState: setCellState
		    });
		  }

		  function prepareRow$4(row, _ref) {
		    var instance = _ref.instance;
		    var _instance$initialRowS2 = instance.initialRowStateAccessor,
		        initialRowStateAccessor = _instance$initialRowS2 === void 0 ? defaultInitialRowStateAccessor : _instance$initialRowS2,
		        _instance$initialCell2 = instance.initialCellStateAccessor,
		        initialCellStateAccessor = _instance$initialCell2 === void 0 ? defaultInitialCellStateAccessor : _instance$initialCell2,
		        rowState = instance.state.rowState;

		    if (row) {
		      row.state = typeof rowState[row.id] !== 'undefined' ? rowState[row.id] : initialRowStateAccessor(row);

		      row.setState = function (updater) {
		        return instance.setRowState(row.id, updater);
		      };

		      row.cells.forEach(function (cell) {
		        if (!row.state.cellState) {
		          row.state.cellState = {};
		        }

		        cell.state = typeof row.state.cellState[cell.column.id] !== 'undefined' ? row.state.cellState[cell.column.id] : initialCellStateAccessor(cell);

		        cell.setState = function (updater) {
		          return instance.setCellState(row.id, cell.column.id, updater);
		        };
		      });
		    }
		  }

		  actions.resetColumnOrder = 'resetColumnOrder';
		  actions.setColumnOrder = 'setColumnOrder';
		  var useColumnOrder = function useColumnOrder(hooks) {
		    hooks.stateReducers.push(reducer$a);
		    hooks.visibleColumnsDeps.push(function (deps, _ref) {
		      var instance = _ref.instance;
		      return [].concat(deps, [instance.state.columnOrder]);
		    });
		    hooks.visibleColumns.push(visibleColumns$2);
		    hooks.useInstance.push(useInstance$a);
		  };
		  useColumnOrder.pluginName = 'useColumnOrder';

		  function reducer$a(state, action, previousState, instance) {
		    if (action.type === actions.init) {
		      return _extends({
		        columnOrder: []
		      }, state);
		    }

		    if (action.type === actions.resetColumnOrder) {
		      return _extends({}, state, {
		        columnOrder: instance.initialState.columnOrder || []
		      });
		    }

		    if (action.type === actions.setColumnOrder) {
		      return _extends({}, state, {
		        columnOrder: functionalUpdate(action.columnOrder, state.columnOrder)
		      });
		    }
		  }

		  function visibleColumns$2(columns, _ref2) {
		    var columnOrder = _ref2.instance.state.columnOrder;

		    // If there is no order, return the normal columns
		    if (!columnOrder || !columnOrder.length) {
		      return columns;
		    }

		    var columnOrderCopy = [].concat(columnOrder); // If there is an order, make a copy of the columns

		    var columnsCopy = [].concat(columns); // And make a new ordered array of the columns

		    var columnsInOrder = []; // Loop over the columns and place them in order into the new array

		    var _loop = function _loop() {
		      var targetColumnId = columnOrderCopy.shift();
		      var foundIndex = columnsCopy.findIndex(function (d) {
		        return d.id === targetColumnId;
		      });

		      if (foundIndex > -1) {
		        columnsInOrder.push(columnsCopy.splice(foundIndex, 1)[0]);
		      }
		    };

		    while (columnsCopy.length && columnOrderCopy.length) {
		      _loop();
		    } // If there are any columns left, add them to the end


		    return [].concat(columnsInOrder, columnsCopy);
		  }

		  function useInstance$a(instance) {
		    var dispatch = instance.dispatch;
		    instance.setColumnOrder = React.useCallback(function (columnOrder) {
		      return dispatch({
		        type: actions.setColumnOrder,
		        columnOrder: columnOrder
		      });
		    }, [dispatch]);
		  }

		  defaultColumn.canResize = true; // Actions

		  actions.columnStartResizing = 'columnStartResizing';
		  actions.columnResizing = 'columnResizing';
		  actions.columnDoneResizing = 'columnDoneResizing';
		  actions.resetResize = 'resetResize';
		  var useResizeColumns = function useResizeColumns(hooks) {
		    hooks.getResizerProps = [defaultGetResizerProps];
		    hooks.getHeaderProps.push({
		      style: {
		        position: 'relative'
		      }
		    });
		    hooks.stateReducers.push(reducer$b);
		    hooks.useInstance.push(useInstance$b);
		    hooks.useInstanceBeforeDimensions.push(useInstanceBeforeDimensions$1);
		  };

		  var defaultGetResizerProps = function defaultGetResizerProps(props, _ref) {
		    var instance = _ref.instance,
		        header = _ref.header;
		    var dispatch = instance.dispatch;

		    var onResizeStart = function onResizeStart(e, header) {
		      var isTouchEvent = false;

		      if (e.type === 'touchstart') {
		        // lets not respond to multiple touches (e.g. 2 or 3 fingers)
		        if (e.touches && e.touches.length > 1) {
		          return;
		        }

		        isTouchEvent = true;
		      }

		      var headersToResize = getLeafHeaders(header);
		      var headerIdWidths = headersToResize.map(function (d) {
		        return [d.id, d.totalWidth];
		      });
		      var clientX = isTouchEvent ? Math.round(e.touches[0].clientX) : e.clientX;
		      var raf;
		      var mostRecentClientX;

		      var dispatchEnd = function dispatchEnd() {
		        window.cancelAnimationFrame(raf);
		        raf = null;
		        dispatch({
		          type: actions.columnDoneResizing
		        });
		      };

		      var dispatchMove = function dispatchMove() {
		        window.cancelAnimationFrame(raf);
		        raf = null;
		        dispatch({
		          type: actions.columnResizing,
		          clientX: mostRecentClientX
		        });
		      };

		      var scheduleDispatchMoveOnNextAnimationFrame = function scheduleDispatchMoveOnNextAnimationFrame(clientXPos) {
		        mostRecentClientX = clientXPos;

		        if (!raf) {
		          raf = window.requestAnimationFrame(dispatchMove);
		        }
		      };

		      var handlersAndEvents = {
		        mouse: {
		          moveEvent: 'mousemove',
		          moveHandler: function moveHandler(e) {
		            return scheduleDispatchMoveOnNextAnimationFrame(e.clientX);
		          },
		          upEvent: 'mouseup',
		          upHandler: function upHandler(e) {
		            document.removeEventListener('mousemove', handlersAndEvents.mouse.moveHandler);
		            document.removeEventListener('mouseup', handlersAndEvents.mouse.upHandler);
		            dispatchEnd();
		          }
		        },
		        touch: {
		          moveEvent: 'touchmove',
		          moveHandler: function moveHandler(e) {
		            if (e.cancelable) {
		              e.preventDefault();
		              e.stopPropagation();
		            }

		            scheduleDispatchMoveOnNextAnimationFrame(e.touches[0].clientX);
		            return false;
		          },
		          upEvent: 'touchend',
		          upHandler: function upHandler(e) {
		            document.removeEventListener(handlersAndEvents.touch.moveEvent, handlersAndEvents.touch.moveHandler);
		            document.removeEventListener(handlersAndEvents.touch.upEvent, handlersAndEvents.touch.moveHandler);
		            dispatchEnd();
		          }
		        }
		      };
		      var events = isTouchEvent ? handlersAndEvents.touch : handlersAndEvents.mouse;
		      var passiveIfSupported = passiveEventSupported() ? {
		        passive: false
		      } : false;
		      document.addEventListener(events.moveEvent, events.moveHandler, passiveIfSupported);
		      document.addEventListener(events.upEvent, events.upHandler, passiveIfSupported);
		      dispatch({
		        type: actions.columnStartResizing,
		        columnId: header.id,
		        columnWidth: header.totalWidth,
		        headerIdWidths: headerIdWidths,
		        clientX: clientX
		      });
		    };

		    return [props, {
		      onMouseDown: function onMouseDown(e) {
		        return e.persist() || onResizeStart(e, header);
		      },
		      onTouchStart: function onTouchStart(e) {
		        return e.persist() || onResizeStart(e, header);
		      },
		      style: {
		        cursor: 'col-resize'
		      },
		      draggable: false,
		      role: 'separator'
		    }];
		  };

		  useResizeColumns.pluginName = 'useResizeColumns';

		  function reducer$b(state, action) {
		    if (action.type === actions.init) {
		      return _extends({
		        columnResizing: {
		          columnWidths: {}
		        }
		      }, state);
		    }

		    if (action.type === actions.resetResize) {
		      return _extends({}, state, {
		        columnResizing: {
		          columnWidths: {}
		        }
		      });
		    }

		    if (action.type === actions.columnStartResizing) {
		      var clientX = action.clientX,
		          columnId = action.columnId,
		          columnWidth = action.columnWidth,
		          headerIdWidths = action.headerIdWidths;
		      return _extends({}, state, {
		        columnResizing: _extends({}, state.columnResizing, {
		          startX: clientX,
		          headerIdWidths: headerIdWidths,
		          columnWidth: columnWidth,
		          isResizingColumn: columnId
		        })
		      });
		    }

		    if (action.type === actions.columnResizing) {
		      var _clientX = action.clientX;

		      var _state$columnResizing = state.columnResizing,
		          startX = _state$columnResizing.startX,
		          _columnWidth = _state$columnResizing.columnWidth,
		          _state$columnResizing2 = _state$columnResizing.headerIdWidths,
		          _headerIdWidths = _state$columnResizing2 === void 0 ? [] : _state$columnResizing2;

		      var deltaX = _clientX - startX;
		      var percentageDeltaX = deltaX / _columnWidth;
		      var newColumnWidths = {};

		      _headerIdWidths.forEach(function (_ref2) {
		        var headerId = _ref2[0],
		            headerWidth = _ref2[1];
		        newColumnWidths[headerId] = Math.max(headerWidth + headerWidth * percentageDeltaX, 0);
		      });

		      return _extends({}, state, {
		        columnResizing: _extends({}, state.columnResizing, {
		          columnWidths: _extends({}, state.columnResizing.columnWidths, {}, newColumnWidths)
		        })
		      });
		    }

		    if (action.type === actions.columnDoneResizing) {
		      return _extends({}, state, {
		        columnResizing: _extends({}, state.columnResizing, {
		          startX: null,
		          isResizingColumn: null
		        })
		      });
		    }
		  }

		  var useInstanceBeforeDimensions$1 = function useInstanceBeforeDimensions(instance) {
		    var flatHeaders = instance.flatHeaders,
		        disableResizing = instance.disableResizing,
		        getHooks = instance.getHooks,
		        columnResizing = instance.state.columnResizing;
		    var getInstance = useGetLatest(instance);
		    flatHeaders.forEach(function (header) {
		      var canResize = getFirstDefined(header.disableResizing === true ? false : undefined, disableResizing === true ? false : undefined, true);
		      header.canResize = canResize;
		      header.width = columnResizing.columnWidths[header.id] || header.originalWidth || header.width;
		      header.isResizing = columnResizing.isResizingColumn === header.id;

		      if (canResize) {
		        header.getResizerProps = makePropGetter(getHooks().getResizerProps, {
		          instance: getInstance(),
		          header: header
		        });
		      }
		    });
		  };

		  function useInstance$b(instance) {
		    var plugins = instance.plugins,
		        dispatch = instance.dispatch,
		        _instance$autoResetRe = instance.autoResetResize,
		        autoResetResize = _instance$autoResetRe === void 0 ? true : _instance$autoResetRe,
		        columns = instance.columns;
		    ensurePluginOrder(plugins, ['useAbsoluteLayout'], 'useResizeColumns');
		    var getAutoResetResize = useGetLatest(autoResetResize);
		    useMountedLayoutEffect(function () {
		      if (getAutoResetResize()) {
		        dispatch({
		          type: actions.resetResize
		        });
		      }
		    }, [columns]);
		    var resetResizing = React.useCallback(function () {
		      return dispatch({
		        type: actions.resetResize
		      });
		    }, [dispatch]);
		    Object.assign(instance, {
		      resetResizing: resetResizing
		    });
		  }

		  function getLeafHeaders(header) {
		    var leafHeaders = [];

		    var recurseHeader = function recurseHeader(header) {
		      if (header.columns && header.columns.length) {
		        header.columns.map(recurseHeader);
		      }

		      leafHeaders.push(header);
		    };

		    recurseHeader(header);
		    return leafHeaders;
		  }

		  var cellStyles = {
		    position: 'absolute',
		    top: 0
		  };
		  var useAbsoluteLayout = function useAbsoluteLayout(hooks) {
		    hooks.getTableBodyProps.push(getRowStyles);
		    hooks.getRowProps.push(getRowStyles);
		    hooks.getHeaderGroupProps.push(getRowStyles);
		    hooks.getFooterGroupProps.push(getRowStyles);
		    hooks.getHeaderProps.push(function (props, _ref) {
		      var column = _ref.column;
		      return [props, {
		        style: _extends({}, cellStyles, {
		          left: column.totalLeft + "px",
		          width: column.totalWidth + "px"
		        })
		      }];
		    });
		    hooks.getCellProps.push(function (props, _ref2) {
		      var cell = _ref2.cell;
		      return [props, {
		        style: _extends({}, cellStyles, {
		          left: cell.column.totalLeft + "px",
		          width: cell.column.totalWidth + "px"
		        })
		      }];
		    });
		    hooks.getFooterProps.push(function (props, _ref3) {
		      var column = _ref3.column;
		      return [props, {
		        style: _extends({}, cellStyles, {
		          left: column.totalLeft + "px",
		          width: column.totalWidth + "px"
		        })
		      }];
		    });
		  };
		  useAbsoluteLayout.pluginName = 'useAbsoluteLayout';

		  var getRowStyles = function getRowStyles(props, _ref4) {
		    var instance = _ref4.instance;
		    return [props, {
		      style: {
		        position: 'relative',
		        width: instance.totalColumnsWidth + "px"
		      }
		    }];
		  };

		  var cellStyles$1 = {
		    display: 'inline-block',
		    boxSizing: 'border-box'
		  };

		  var getRowStyles$1 = function getRowStyles(props, _ref) {
		    var instance = _ref.instance;
		    return [props, {
		      style: {
		        display: 'flex',
		        width: instance.totalColumnsWidth + "px"
		      }
		    }];
		  };

		  var useBlockLayout = function useBlockLayout(hooks) {
		    hooks.getRowProps.push(getRowStyles$1);
		    hooks.getHeaderGroupProps.push(getRowStyles$1);
		    hooks.getFooterGroupProps.push(getRowStyles$1);
		    hooks.getHeaderProps.push(function (props, _ref2) {
		      var column = _ref2.column;
		      return [props, {
		        style: _extends({}, cellStyles$1, {
		          width: column.totalWidth + "px"
		        })
		      }];
		    });
		    hooks.getCellProps.push(function (props, _ref3) {
		      var cell = _ref3.cell;
		      return [props, {
		        style: _extends({}, cellStyles$1, {
		          width: cell.column.totalWidth + "px"
		        })
		      }];
		    });
		    hooks.getFooterProps.push(function (props, _ref4) {
		      var column = _ref4.column;
		      return [props, {
		        style: _extends({}, cellStyles$1, {
		          width: column.totalWidth + "px"
		        })
		      }];
		    });
		  };
		  useBlockLayout.pluginName = 'useBlockLayout';

		  function useFlexLayout(hooks) {
		    hooks.getTableProps.push(getTableProps);
		    hooks.getRowProps.push(getRowStyles$2);
		    hooks.getHeaderGroupProps.push(getRowStyles$2);
		    hooks.getFooterGroupProps.push(getRowStyles$2);
		    hooks.getHeaderProps.push(getHeaderProps);
		    hooks.getCellProps.push(getCellProps);
		    hooks.getFooterProps.push(getFooterProps);
		  }
		  useFlexLayout.pluginName = 'useFlexLayout';

		  var getTableProps = function getTableProps(props, _ref) {
		    var instance = _ref.instance;
		    return [props, {
		      style: {
		        minWidth: instance.totalColumnsMinWidth + "px"
		      }
		    }];
		  };

		  var getRowStyles$2 = function getRowStyles(props, _ref2) {
		    var instance = _ref2.instance;
		    return [props, {
		      style: {
		        display: 'flex',
		        flex: '1 0 auto',
		        minWidth: instance.totalColumnsMinWidth + "px"
		      }
		    }];
		  };

		  var getHeaderProps = function getHeaderProps(props, _ref3) {
		    var column = _ref3.column;
		    return [props, {
		      style: {
		        boxSizing: 'border-box',
		        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
		        minWidth: column.totalMinWidth + "px",
		        width: column.totalWidth + "px"
		      }
		    }];
		  };

		  var getCellProps = function getCellProps(props, _ref4) {
		    var cell = _ref4.cell;
		    return [props, {
		      style: {
		        boxSizing: 'border-box',
		        flex: cell.column.totalFlexWidth + " 0 auto",
		        minWidth: cell.column.totalMinWidth + "px",
		        width: cell.column.totalWidth + "px"
		      }
		    }];
		  };

		  var getFooterProps = function getFooterProps(props, _ref5) {
		    var column = _ref5.column;
		    return [props, {
		      style: {
		        boxSizing: 'border-box',
		        flex: column.totalFlexWidth ? column.totalFlexWidth + " 0 auto" : undefined,
		        minWidth: column.totalMinWidth + "px",
		        width: column.totalWidth + "px"
		      }
		    }];
		  };

		  actions.columnStartResizing = 'columnStartResizing';
		  actions.columnResizing = 'columnResizing';
		  actions.columnDoneResizing = 'columnDoneResizing';
		  actions.resetResize = 'resetResize';
		  function useGridLayout(hooks) {
		    hooks.stateReducers.push(reducer$c);
		    hooks.getTableProps.push(getTableProps$1);
		    hooks.getHeaderProps.push(getHeaderProps$1);
		    hooks.getRowProps.push(getRowProps);
		  }
		  useGridLayout.pluginName = 'useGridLayout';

		  var getTableProps$1 = function getTableProps(props, _ref) {
		    var instance = _ref.instance;
		    var gridTemplateColumns = instance.visibleColumns.map(function (column) {
		      var _instance$state$colum;

		      if (instance.state.gridLayout.columnWidths[column.id]) return instance.state.gridLayout.columnWidths[column.id] + "px"; // When resizing, lock the width of all unset columns
		      // instead of using user-provided width or defaultColumn width,
		      // which could potentially be 'auto' or 'fr' units that don't scale linearly

		      if ((_instance$state$colum = instance.state.columnResizing) == null ? void 0 : _instance$state$colum.isResizingColumn) return instance.state.gridLayout.startWidths[column.id] + "px";
		      if (typeof column.width === 'number') return column.width + "px";
		      return column.width;
		    });
		    return [props, {
		      style: {
		        display: "grid",
		        gridTemplateColumns: gridTemplateColumns.join(" ")
		      }
		    }];
		  };

		  var getHeaderProps$1 = function getHeaderProps(props, _ref2) {
		    var column = _ref2.column;
		    return [props, {
		      id: "header-cell-" + column.id,
		      style: {
		        position: "sticky",
		        //enables a scroll wrapper to be placed around the table and have sticky headers
		        gridColumn: "span " + column.totalVisibleHeaderCount
		      }
		    }];
		  };

		  var getRowProps = function getRowProps(props, _ref3) {
		    var row = _ref3.row;

		    if (row.isExpanded) {
		      return [props, {
		        style: {
		          gridColumn: "1 / " + (row.cells.length + 1)
		        }
		      }];
		    }

		    return [props, {}];
		  };

		  function reducer$c(state, action, previousState, instance) {
		    if (action.type === actions.init) {
		      return _extends({
		        gridLayout: {
		          columnWidths: {}
		        }
		      }, state);
		    }

		    if (action.type === actions.resetResize) {
		      return _extends({}, state, {
		        gridLayout: {
		          columnWidths: {}
		        }
		      });
		    }

		    if (action.type === actions.columnStartResizing) {
		      var columnId = action.columnId,
		          headerIdWidths = action.headerIdWidths;
		      var columnWidth = getElementWidth(columnId);

		      if (columnWidth !== undefined) {
		        var startWidths = instance.visibleColumns.reduce(function (acc, column) {
		          var _extends2;

		          return _extends({}, acc, (_extends2 = {}, _extends2[column.id] = getElementWidth(column.id), _extends2));
		        }, {});
		        var minWidths = instance.visibleColumns.reduce(function (acc, column) {
		          var _extends3;

		          return _extends({}, acc, (_extends3 = {}, _extends3[column.id] = column.minWidth, _extends3));
		        }, {});
		        var maxWidths = instance.visibleColumns.reduce(function (acc, column) {
		          var _extends4;

		          return _extends({}, acc, (_extends4 = {}, _extends4[column.id] = column.maxWidth, _extends4));
		        }, {});
		        var headerIdGridWidths = headerIdWidths.map(function (_ref4) {
		          var headerId = _ref4[0];
		          return [headerId, getElementWidth(headerId)];
		        });
		        return _extends({}, state, {
		          gridLayout: _extends({}, state.gridLayout, {
		            startWidths: startWidths,
		            minWidths: minWidths,
		            maxWidths: maxWidths,
		            headerIdGridWidths: headerIdGridWidths,
		            columnWidth: columnWidth
		          })
		        });
		      } else {
		        return state;
		      }
		    }

		    if (action.type === actions.columnResizing) {
		      var clientX = action.clientX;
		      var startX = state.columnResizing.startX;

		      var _state$gridLayout = state.gridLayout,
		          _columnWidth = _state$gridLayout.columnWidth,
		          _minWidths = _state$gridLayout.minWidths,
		          _maxWidths = _state$gridLayout.maxWidths,
		          _state$gridLayout$hea = _state$gridLayout.headerIdGridWidths,
		          _headerIdGridWidths = _state$gridLayout$hea === void 0 ? [] : _state$gridLayout$hea;

		      var deltaX = clientX - startX;
		      var percentageDeltaX = deltaX / _columnWidth;
		      var newColumnWidths = {};

		      _headerIdGridWidths.forEach(function (_ref5) {
		        var headerId = _ref5[0],
		            headerWidth = _ref5[1];
		        newColumnWidths[headerId] = Math.min(Math.max(_minWidths[headerId], headerWidth + headerWidth * percentageDeltaX), _maxWidths[headerId]);
		      });

		      return _extends({}, state, {
		        gridLayout: _extends({}, state.gridLayout, {
		          columnWidths: _extends({}, state.gridLayout.columnWidths, {}, newColumnWidths)
		        })
		      });
		    }

		    if (action.type === actions.columnDoneResizing) {
		      return _extends({}, state, {
		        gridLayout: _extends({}, state.gridLayout, {
		          startWidths: {},
		          minWidths: {},
		          maxWidths: {}
		        })
		      });
		    }
		  }

		  function getElementWidth(columnId) {
		    var _document$getElementB;

		    var width = (_document$getElementB = document.getElementById("header-cell-" + columnId)) == null ? void 0 : _document$getElementB.offsetWidth;

		    if (width !== undefined) {
		      return width;
		    }
		  }

		  exports._UNSTABLE_usePivotColumns = _UNSTABLE_usePivotColumns;
		  exports.actions = actions;
		  exports.defaultColumn = defaultColumn;
		  exports.defaultGroupByFn = defaultGroupByFn;
		  exports.defaultOrderByFn = defaultOrderByFn;
		  exports.defaultRenderer = defaultRenderer;
		  exports.emptyRenderer = emptyRenderer;
		  exports.ensurePluginOrder = ensurePluginOrder;
		  exports.flexRender = flexRender;
		  exports.functionalUpdate = functionalUpdate;
		  exports.loopHooks = loopHooks;
		  exports.makePropGetter = makePropGetter;
		  exports.makeRenderer = makeRenderer;
		  exports.reduceHooks = reduceHooks;
		  exports.safeUseLayoutEffect = safeUseLayoutEffect;
		  exports.useAbsoluteLayout = useAbsoluteLayout;
		  exports.useAsyncDebounce = useAsyncDebounce;
		  exports.useBlockLayout = useBlockLayout;
		  exports.useColumnOrder = useColumnOrder;
		  exports.useExpanded = useExpanded;
		  exports.useFilters = useFilters;
		  exports.useFlexLayout = useFlexLayout;
		  exports.useGetLatest = useGetLatest;
		  exports.useGlobalFilter = useGlobalFilter;
		  exports.useGridLayout = useGridLayout;
		  exports.useGroupBy = useGroupBy;
		  exports.useMountedLayoutEffect = useMountedLayoutEffect;
		  exports.usePagination = usePagination;
		  exports.useResizeColumns = useResizeColumns;
		  exports.useRowSelect = useRowSelect;
		  exports.useRowState = useRowState;
		  exports.useSortBy = useSortBy;
		  exports.useTable = useTable;

		  Object.defineProperty(exports, '__esModule', { value: true });

		})));
		
	} (reactTable_development, reactTable_development.exports));
	return reactTable_development.exports;
}

if (process.env.NODE_ENV === 'production') {
  reactTable.exports = requireReactTable_production_min();
} else {
  reactTable.exports = requireReactTable_development();
}

var reactTableExports = reactTable.exports;

const PAGE_SIZE_OPTIONS = [5, 10, 20, 30, 40, 50];

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$5 = ".pagination-container{align-items:center;display:flex;justify-content:space-between;margin-top:10px;padding:12px}.pagination-button{background-color:#2c3e50;border:none;border-radius:4px;color:#fff;cursor:pointer;margin:0 4px;padding:6px 12px}.pagination-button:disabled{cursor:not-allowed;opacity:.5}.pagination-info{color:#2c3e50;margin-left:8px}.pagination-select{background-color:#fff;border:1px solid #e0e0e0;border-radius:4px;color:#2c3e50;padding:6px 12px}";
styleInject(css_248z$5,{"insertAt":"top"});

/**
 * Renders pagination controls for the table
 * @component
 * @param {PaginationProps} props - Component props
 * @returns {JSX.Element} Rendered pagination controls
 */
const Pagination = ({ canPreviousPage, canNextPage, pageOptions, pageCount, pageIndex, gotoPage, nextPage, previousPage, pageSize, setPageSize, theme }) => {
    return (jsxs("div", { className: "pagination-container", children: [jsxs("div", { children: [jsx("button", { onClick: () => gotoPage(0), disabled: !canPreviousPage, className: "pagination-button", style: {
                            backgroundColor: theme.pagination?.button?.background,
                            color: theme.pagination?.button?.textColor,
                            opacity: !canPreviousPage ? theme.pagination?.button?.disabledOpacity : '1',
                        }, children: '<<' }), jsx("button", { onClick: () => previousPage(), disabled: !canPreviousPage, className: "pagination-button", style: {
                            backgroundColor: theme.pagination?.button?.background,
                            color: theme.pagination?.button?.textColor,
                            opacity: !canPreviousPage ? theme.pagination?.button?.disabledOpacity : '1',
                        }, children: '<' }), jsx("button", { onClick: () => nextPage(), disabled: !canNextPage, className: "pagination-button", style: {
                            backgroundColor: theme.pagination?.button?.background,
                            color: theme.pagination?.button?.textColor,
                            opacity: !canNextPage ? theme.pagination?.button?.disabledOpacity : '1',
                        }, children: '>' }), jsx("button", { onClick: () => gotoPage(pageCount - 1), disabled: !canNextPage, className: "pagination-button", style: {
                            backgroundColor: theme.pagination?.button?.background,
                            color: theme.pagination?.button?.textColor,
                            opacity: !canNextPage ? theme.pagination?.button?.disabledOpacity : '1',
                        }, children: '>>' })] }), jsxs("div", { children: [jsxs("span", { style: { color: theme.pagination?.info?.textColor }, children: ["Page", ' ', jsxs("strong", { children: [pageIndex + 1, " of ", pageOptions.length] })] }), jsx("select", { value: pageSize, onChange: e => {
                            setPageSize(Number(e.target.value));
                        }, style: {
                            marginLeft: '8px',
                            padding: '4px',
                            backgroundColor: theme.pagination?.select?.background,
                            color: theme.pagination?.select?.textColor,
                            border: `1px solid ${theme.pagination?.select?.borderColor}`,
                            borderRadius: '4px',
                        }, children: PAGE_SIZE_OPTIONS.map(pageSize => (jsxs("option", { value: pageSize, children: ["Show ", pageSize] }, pageSize))) })] })] }));
};

var css_248z$4 = ".table-header th{background-color:#2c3e50;border-bottom:2px solid #e0e0e0;color:#fff;font-weight:600;padding:12px}.table-header th.sortable{cursor:pointer}.table-header-cell{align-items:center;display:flex;flex-wrap:wrap;gap:4px;padding:12px}.filter-container{padding:1px}.filter-input{border:1px solid #e0e0e0;border-radius:4px;padding:6px}.table-header-cell span{align-items:center;display:flex;font-size:18px;gap:4px}.sort-icon{width:10px}";
styleInject(css_248z$4,{"insertAt":"top"});

/**
 * Renders the table header with support for sorting and filtering
 * @component
 * @param {TableHeaderProps} props - Component props
 * @returns {JSX.Element} Rendered table header
 */
const TableHeader = ({ headerGroups, theme, sortable = false, ascendingIcon, descendingIcon, selectable = false, isAllSelected = false, onSelectAll, }) => {
    return (jsx("thead", { children: headerGroups.map((headerGroup) => {
            const { key: headerGroupKey, ...headerGroupProps } = headerGroup.getHeaderGroupProps();
            return (jsx("tr", { ...headerGroupProps, children: headerGroup.headers.map((column, index) => {
                    const isColumnSortable = sortable && !column.disableSortBy;
                    const { key: columnKey } = isColumnSortable
                        ? column.getHeaderProps(column.getSortByToggleProps())
                        : column.getHeaderProps();
                    const sortProps = isColumnSortable ? column.getSortByToggleProps() : {};
                    return (jsx("th", { style: {
                            backgroundColor: theme.table?.header?.background,
                            color: theme.table?.header?.textColor,
                            borderColor: theme.table?.cell?.borderColor,
                        }, children: jsxs("div", { className: "table-header-cell", children: [index === 0 && selectable && (jsx("input", { type: "checkbox", checked: isAllSelected, onChange: onSelectAll, style: { marginRight: 8, cursor: 'pointer' } })), jsxs("span", { style: { display: 'inline-flex', alignItems: 'center', cursor: isColumnSortable ? 'pointer' : 'default', userSelect: 'none' }, onClick: isColumnSortable ? (e) => { e.stopPropagation(); sortProps.onClick?.(e); } : undefined, children: [column.render('Header'), jsx("span", { className: "sort-icon", style: { marginLeft: 4 }, children: column.isSorted
                                                ? column.isSortedDesc
                                                    ? descendingIcon || "↓"
                                                    : ascendingIcon || "↑"
                                                : " " })] }), column.Filter && (jsx("div", { className: "filter-container", children: jsx("input", { className: "filter-input", value: column.filterValue || "", onChange: (e) => column.setFilter?.(e.target.value), placeholder: `Filter ${typeof column.title === 'string' ? column.title : column.id}...`, style: {
                                            color: theme.table?.filter?.textColor,
                                            borderColor: theme.table?.filter?.borderColor,
                                            backgroundColor: theme.table?.filter?.background,
                                        } }) }))] }) }, columnKey));
                }) }, headerGroupKey));
        }) }));
};

var css_248z$3 = ".expand-icon{margin-right:8px}";
styleInject(css_248z$3,{"insertAt":"top"});

/**
 * Renders an expand/collapse icon for table rows
 * @component
 * @param {ExpandIconProps} props - Component props
 * @returns {JSX.Element} Rendered expand/collapse icon
 */
const ExpandIcon = ({ isExpanded, theme }) => {
    return (jsx("span", { className: "expand-icon", style: { color: theme.expandIcon?.color }, children: isExpanded ? '▼' : '▶' }));
};

var css_248z$2 = ".table-cell{border-bottom:1px solid #e0e0e0;color:#2c3e50;padding:12px}.table-cell-content{align-items:center;display:flex;padding:0 12px}.expand-button{align-items:center;background:none;border:none;cursor:pointer;display:flex;margin-right:2px;padding:0;width:20px}.row-checkbox{cursor:pointer;margin-right:8px}";
styleInject(css_248z$2,{"insertAt":"top"});

/**
 * Renders a table cell with support for expand/collapse icons
 * @component
 * @param {TableCellProps} props - Component props
 * @returns {JSX.Element} Rendered table cell
 */
const TableCell = ({ cell, hasChildren, isExpanded, onToggle, paddingLeft = 0, theme, expandIcon, selectable = false, isRowSelected = false, onRowSelect, rowId, }) => {
    const { key, ...cellProps } = cell.getCellProps();
    const isSelectionColumn = cell.column.id === 'selection';
    const handleExpandClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        onToggle();
    };
    const onSelect = () => {
        if (rowId && onRowSelect)
            onRowSelect(rowId);
    };
    return (jsx("td", { ...cellProps, className: "table-cell", style: {
            paddingLeft: `${paddingLeft}px`,
            color: theme.table?.cell?.textColor,
            borderColor: theme.table?.cell?.borderColor,
        }, children: jsxs("div", { className: "table-cell-content", children: [selectable && (jsx("input", { type: "checkbox", checked: isRowSelected, onChange: onSelect, className: "row-checkbox" })), isSelectionColumn ? (cell.render('Cell')) : (jsxs(Fragment, { children: [hasChildren ? (jsx("button", { onClick: handleExpandClick, className: "expand-button", children: expandIcon || jsx(ExpandIcon, { isExpanded: isExpanded, theme: theme }) })) : jsx("div", { className: "expand-button" }), cell.render('Cell')] }))] }) }, key));
};

var css_248z$1 = ".table-row-clickable{cursor:pointer}.table-row-nested{background-color:#f1f3f5}.table-row-expanded{background-color:#f8f9fa}.table-row-main{background-color:#fff}.table-cell-nested{padding-left:0}";
styleInject(css_248z$1,{"insertAt":"top"});

/**
 * Renders a table row with support for nested rows and expansion
 * @component
 * @param {TableRowProps} props - Component props
 * @returns {JSX.Element} Rendered table row
 */
const TableRow = ({ row, columns, hasChildren, isExpanded, onToggle, level = 0, theme, expandIcon, selectable = false, isRowSelected = false, onRowSelect, onRowClick, }) => {
    const getRowClassName = useMemo(() => {
        const classes = [];
        if (isExpanded)
            classes.push("table-row-expanded");
        if (level === 0)
            classes.push("table-row-main");
        if (onRowClick)
            classes.push("table-row-clickable");
        else
            classes.push("table-row-nested");
        return classes.join(" ");
    }, [isExpanded, level, onRowClick]);
    const getRowStyle = useMemo(() => {
        const rowShades = theme.table?.row?.levelColors || [];
        // Use the level to determine which shade to use, defaulting to the lightest shade for deeper nesting
        const shadeIndex = Math.min(level, rowShades.length - 1);
        return { backgroundColor: rowShades[shadeIndex]?.background };
    }, [level, theme.table?.row?.levelColors]);
    const handleExpandClick = (e) => {
        e.stopPropagation();
        onToggle();
    };
    const handleRowClick = () => {
        if (onRowClick && level === 0) {
            const dataItem = "original" in row ? row.original : row;
            onRowClick(dataItem);
        }
    };
    // For nested rows that don't have getRowProps
    if (!("getRowProps" in row)) {
        const dataItem = row;
        return (jsx("tr", { className: getRowClassName, style: getRowStyle, onClick: handleRowClick, children: columns.map((column, index) => {
                const value = dataItem[column.key];
                const displayValue = typeof value === "string" || typeof value === "number" ? value : "";
                return (jsx("td", { className: `table-cell ${level > 0 ? "table-cell-nested" : ""}`, style: {
                        color: theme.table?.cell?.textColor,
                        borderColor: theme.table?.cell?.borderColor,
                    }, children: jsxs("div", { className: "table-cell-content", children: [index === 0 && selectable && (jsx("input", { type: "checkbox", checked: isRowSelected, onChange: () => onRowSelect?.(dataItem.id), style: { marginRight: 8, cursor: 'pointer' } })), hasChildren && index === 0 ? (jsx("button", { onClick: handleExpandClick, className: "expand-button", children: expandIcon || (jsx(ExpandIcon, { isExpanded: isExpanded, theme: theme })) })) : (jsx("div", { className: "expand-button" })), column.render
                                ? column.render(displayValue, dataItem)
                                : String(displayValue)] }) }, column.key));
            }) }));
    }
    // For main table rows that have getRowProps
    const tableRow = row;
    const { key, ...rowProps } = tableRow.getRowProps();
    return (jsx("tr", { ...rowProps, className: getRowClassName, style: getRowStyle, onClick: handleRowClick, children: tableRow.cells.map((cell, index) => (jsx(TableCell, { cell: cell, hasChildren: hasChildren && index === 0, isExpanded: isExpanded, onToggle: onToggle, paddingLeft: level > 0 ? 32 + level * 16 : 0, theme: theme, expandIcon: expandIcon, selectable: selectable && index === 0, isRowSelected: isRowSelected, onRowSelect: onRowSelect, rowId: tableRow.original.id }, cell.column.id))) }, key));
};

var SortType;
(function (SortType) {
    SortType["Custom"] = "custom";
    SortType["Basic"] = "basic";
})(SortType || (SortType = {}));

const defaultTheme = {
    colors: {
        primaryColor: "#2c3e50",
        textColor: "#2c3e50",
        borderColor: "#e0e0e0",
        background: "#ffffff",
    },
    table: {
        header: {
            background: "#2c3e50",
            textColor: "#ffffff",
            borderColor: "#e0e0e0",
        },
        row: {
            levelColors: [
                { background: "#ffffff" },
                { background: "#f1f3f5" },
                { background: "#f8f9fa" },
            ],
        },
        cell: {
            textColor: "#2c3e50",
            borderColor: "#e0e0e0",
            nestedPadding: "16px",
        },
    },
    pagination: {
        button: {
            background: "#2c3e50",
            textColor: "#ffffff",
            disabledOpacity: "0.5",
        },
        select: {
            background: "#ffffff",
            textColor: "#2c3e50",
            borderColor: "#e0e0e0",
        },
        info: {
            textColor: "#2c3e50",
        },
    },
    expandIcon: {
        color: "#2c3e50",
    },
};

function mergeThemeProps(defaults, custom) {
    if (!custom)
        return defaults;
    const result = { ...defaults };
    for (const key in custom)
        if (typeof custom[key] === 'object' &&
            custom[key] !== null &&
            !Array.isArray(custom[key]))
            result[key] = mergeThemeProps(defaults[key], custom[key]);
        else if (custom[key] !== undefined)
            result[key] = custom[key];
    return result;
}

var css_248z = ".table-container{border-collapse:collapse;border-spacing:0;width:100%}.table-wrapper{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.table-container{min-width:100%;white-space:nowrap}.table-container td,.table-container th{padding:8px;white-space:nowrap}.selection-cell,.selection-header{align-items:center;display:flex;justify-content:center;padding:8px}.selection-cell input[type=checkbox],.selection-header input[type=checkbox]{height:16px;margin:0;width:16px}";
styleInject(css_248z,{"insertAt":"top"});

/**
 * A multi-level table component that supports hierarchical data, sorting, filtering, and pagination
 * @component
 * @param {MultiLevelTableProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
const MultiLevelTable = ({ data, columns, pageSize = 10, theme, renderCustomPagination = null, sortable = false, ascendingIcon, descendingIcon, expandIcon, selectable = false, onSelectionChange, onRowClick, }) => {
    const mergedTheme = mergeThemeProps(defaultTheme, theme);
    const [filterInput, setFilterInput] = useState("");
    const [selectionState, setSelectionState] = useState({
        selectedRows: new Set(),
        isAllSelected: false,
    });
    // Get all parent row IDs (level 0)
    const parentRowIds = useMemo(() => data.map(item => item.id), [data]);
    const handleSelectAll = () => {
        const newIsAllSelected = !selectionState.isAllSelected;
        const newSelectedRows = new Set();
        if (newIsAllSelected)
            parentRowIds.forEach(id => newSelectedRows.add(id));
        setSelectionState({
            selectedRows: newSelectedRows,
            isAllSelected: newIsAllSelected,
        });
        onSelectionChange?.(newSelectedRows);
    };
    const handleRowSelect = (rowId) => {
        const newSelectedRows = new Set(selectionState.selectedRows);
        if (newSelectedRows.has(rowId))
            newSelectedRows.delete(rowId);
        else
            newSelectedRows.add(rowId);
        const newIsAllSelected = newSelectedRows.size === parentRowIds.length;
        setSelectionState({
            selectedRows: newSelectedRows,
            isAllSelected: newIsAllSelected,
        });
        onSelectionChange?.(newSelectedRows);
    };
    /**
     * Prepares columns configuration for react-table
     * @returns {Array} Array of column configurations
     */
    const tableColumns = useMemo(() => {
        return columns.map((col) => ({
            id: col.key,
            Header: () => col.title,
            accessor: (row) => row[col.key],
            disableSortBy: sortable ? col.sortable === false : true,
            sortType: col.customSortFn ? SortType.Custom : SortType.Basic,
            sortFn: col.customSortFn,
            Cell: ({ row, value, }) => {
                const item = row.original;
                return (jsx("div", { children: col.render ? col.render(value, item) : value?.toString() }));
            },
            Filter: col.filterable
                ? ({ column }) => (jsx("input", { value: filterInput, onChange: (e) => {
                        setFilterInput(e.target.value);
                        column.setFilter(e.target.value);
                    }, placeholder: `Filter ${typeof col.title === 'string' ? col.title : col.key}...` }))
                : undefined,
        }));
    }, [columns, filterInput, sortable]);
    const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow, canPreviousPage, canNextPage, pageOptions, pageCount, gotoPage, nextPage, previousPage, setPageSize, state: { pageIndex, pageSize: currentPageSize, sortBy, filters }, } = reactTableExports.useTable({
        columns: tableColumns,
        data,
        initialState: { pageSize },
        // @ts-expect-error - sortTypes is not included in the type definition but is supported by react-table
        sortTypes: {
            custom: (rowA, rowB, columnId) => {
                const column = columns.find((col) => col.key === columnId);
                if (column?.customSortFn)
                    return column.customSortFn(rowA.original, rowB.original, columnId);
                return 0;
            },
        },
    }, reactTableExports.useFilters, ...(sortable ? [reactTableExports.useSortBy] : []), reactTableExports.usePagination);
    const rowsMap = useMemo(() => {
        const map = new Map();
        const processItem = (item) => {
            if (item.children) {
                map.set(item.id, item.children);
                item.children.forEach(processItem);
            }
        };
        data.forEach(processItem);
        return map;
    }, [data]);
    const [expandedRows, setExpandedRows] = useState(new Set());
    // Collapse expanded rows when filtering or sorting occurs
    useEffect(() => {
        if (expandedRows.size > 0)
            setExpandedRows(new Set());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortBy, filters]);
    const toggleRow = (rowId) => {
        setExpandedRows((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(rowId))
                newSet.delete(rowId);
            else
                newSet.add(rowId);
            return newSet;
        });
    };
    const renderNestedRows = (parentId, level = 1) => {
        if (!expandedRows.has(parentId))
            return null;
        const children = rowsMap.get(parentId) || [];
        return children.map((child) => {
            const hasChildren = rowsMap.has(child.id);
            return (jsxs(require$$0.Fragment, { children: [jsx(TableRow, { row: child, columns: columns, hasChildren: hasChildren, isExpanded: expandedRows.has(child.id), onToggle: () => hasChildren && toggleRow(child.id), level: level, theme: mergedTheme, expandIcon: expandIcon, selectable: false, isRowSelected: false }), renderNestedRows(child.id, level + 1)] }, child.id));
        });
    };
    const renderPagination = () => {
        if (renderCustomPagination)
            return renderCustomPagination({
                canPreviousPage,
                canNextPage,
                pageOptions,
                pageCount,
                pageIndex,
                pageSize: currentPageSize,
                gotoPage,
                nextPage,
                previousPage,
                setPageSize,
                theme: mergedTheme,
            });
        return (jsx(Pagination, { canPreviousPage: canPreviousPage, canNextPage: canNextPage, pageOptions: pageOptions, pageCount: pageCount, pageIndex: pageIndex, gotoPage: gotoPage, nextPage: nextPage, previousPage: previousPage, pageSize: currentPageSize, setPageSize: setPageSize, theme: mergedTheme }));
    };
    const renderTableBody = () => {
        return (jsx("tbody", { ...getTableBodyProps(), children: page.map((row) => {
                prepareRow(row);
                const parentId = row.original.id;
                const hasChildren = rowsMap.has(parentId);
                return (jsxs(require$$0.Fragment, { children: [jsx(TableRow, { row: row, columns: columns, hasChildren: hasChildren, isExpanded: expandedRows.has(parentId), onToggle: () => hasChildren && toggleRow(parentId), level: 0, theme: mergedTheme, expandIcon: expandIcon, selectable: true, isRowSelected: selectionState.selectedRows.has(row.original.id), onRowSelect: handleRowSelect, onRowClick: onRowClick }), renderNestedRows(parentId)] }, parentId));
            }) }));
    };
    return (jsx("div", { style: { backgroundColor: mergedTheme.colors?.background }, children: jsxs("div", { className: "table-wrapper", children: [jsxs("table", { ...getTableProps(), className: "table-container", style: { borderColor: mergedTheme.table?.cell?.borderColor }, children: [jsx(TableHeader, { headerGroups: headerGroups, theme: mergedTheme, sortable: sortable, ascendingIcon: ascendingIcon, descendingIcon: descendingIcon, selectable: selectable, isAllSelected: selectionState.isAllSelected, onSelectAll: handleSelectAll }), renderTableBody()] }), renderPagination()] }) }));
};

export { MultiLevelTable };
//# sourceMappingURL=index.esm.js.map
