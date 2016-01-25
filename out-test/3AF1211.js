goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__19160__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__19160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19161__i = 0, G__19161__a = new Array(arguments.length -  0);
while (G__19161__i < G__19161__a.length) {G__19161__a[G__19161__i] = arguments[G__19161__i + 0]; ++G__19161__i;}
  args = new cljs.core.IndexedSeq(G__19161__a,0);
} 
return G__19160__delegate.call(this,args);};
G__19160.cljs$lang$maxFixedArity = 0;
G__19160.cljs$lang$applyTo = (function (arglist__19162){
var args = cljs.core.seq(arglist__19162);
return G__19160__delegate(args);
});
G__19160.cljs$core$IFn$_invoke$arity$variadic = G__19160__delegate;
return G__19160;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__19163__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__19163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19164__i = 0, G__19164__a = new Array(arguments.length -  0);
while (G__19164__i < G__19164__a.length) {G__19164__a[G__19164__i] = arguments[G__19164__i + 0]; ++G__19164__i;}
  args = new cljs.core.IndexedSeq(G__19164__a,0);
} 
return G__19163__delegate.call(this,args);};
G__19163.cljs$lang$maxFixedArity = 0;
G__19163.cljs$lang$applyTo = (function (arglist__19165){
var args = cljs.core.seq(arglist__19165);
return G__19163__delegate(args);
});
G__19163.cljs$core$IFn$_invoke$arity$variadic = G__19163__delegate;
return G__19163;
})()
;

return null;
});
