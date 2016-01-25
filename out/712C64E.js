goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61160__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__61160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61161__i = 0, G__61161__a = new Array(arguments.length -  0);
while (G__61161__i < G__61161__a.length) {G__61161__a[G__61161__i] = arguments[G__61161__i + 0]; ++G__61161__i;}
  args = new cljs.core.IndexedSeq(G__61161__a,0);
} 
return G__61160__delegate.call(this,args);};
G__61160.cljs$lang$maxFixedArity = 0;
G__61160.cljs$lang$applyTo = (function (arglist__61162){
var args = cljs.core.seq(arglist__61162);
return G__61160__delegate(args);
});
G__61160.cljs$core$IFn$_invoke$arity$variadic = G__61160__delegate;
return G__61160;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__61163__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__61163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61164__i = 0, G__61164__a = new Array(arguments.length -  0);
while (G__61164__i < G__61164__a.length) {G__61164__a[G__61164__i] = arguments[G__61164__i + 0]; ++G__61164__i;}
  args = new cljs.core.IndexedSeq(G__61164__a,0);
} 
return G__61163__delegate.call(this,args);};
G__61163.cljs$lang$maxFixedArity = 0;
G__61163.cljs$lang$applyTo = (function (arglist__61165){
var args = cljs.core.seq(arglist__61165);
return G__61163__delegate(args);
});
G__61163.cljs$core$IFn$_invoke$arity$variadic = G__61163__delegate;
return G__61163;
})()
;

return null;
});
