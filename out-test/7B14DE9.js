goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10434__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10434 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10435__i = 0, G__10435__a = new Array(arguments.length -  0);
while (G__10435__i < G__10435__a.length) {G__10435__a[G__10435__i] = arguments[G__10435__i + 0]; ++G__10435__i;}
  args = new cljs.core.IndexedSeq(G__10435__a,0);
} 
return G__10434__delegate.call(this,args);};
G__10434.cljs$lang$maxFixedArity = 0;
G__10434.cljs$lang$applyTo = (function (arglist__10436){
var args = cljs.core.seq(arglist__10436);
return G__10434__delegate(args);
});
G__10434.cljs$core$IFn$_invoke$arity$variadic = G__10434__delegate;
return G__10434;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10437__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10437 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10438__i = 0, G__10438__a = new Array(arguments.length -  0);
while (G__10438__i < G__10438__a.length) {G__10438__a[G__10438__i] = arguments[G__10438__i + 0]; ++G__10438__i;}
  args = new cljs.core.IndexedSeq(G__10438__a,0);
} 
return G__10437__delegate.call(this,args);};
G__10437.cljs$lang$maxFixedArity = 0;
G__10437.cljs$lang$applyTo = (function (arglist__10439){
var args = cljs.core.seq(arglist__10439);
return G__10437__delegate(args);
});
G__10437.cljs$core$IFn$_invoke$arity$variadic = G__10437__delegate;
return G__10437;
})()
;

return null;
});
