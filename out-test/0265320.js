goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13160__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13160 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13161__i = 0, G__13161__a = new Array(arguments.length -  0);
while (G__13161__i < G__13161__a.length) {G__13161__a[G__13161__i] = arguments[G__13161__i + 0]; ++G__13161__i;}
  args = new cljs.core.IndexedSeq(G__13161__a,0);
} 
return G__13160__delegate.call(this,args);};
G__13160.cljs$lang$maxFixedArity = 0;
G__13160.cljs$lang$applyTo = (function (arglist__13162){
var args = cljs.core.seq(arglist__13162);
return G__13160__delegate(args);
});
G__13160.cljs$core$IFn$_invoke$arity$variadic = G__13160__delegate;
return G__13160;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13163__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13163 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13164__i = 0, G__13164__a = new Array(arguments.length -  0);
while (G__13164__i < G__13164__a.length) {G__13164__a[G__13164__i] = arguments[G__13164__i + 0]; ++G__13164__i;}
  args = new cljs.core.IndexedSeq(G__13164__a,0);
} 
return G__13163__delegate.call(this,args);};
G__13163.cljs$lang$maxFixedArity = 0;
G__13163.cljs$lang$applyTo = (function (arglist__13165){
var args = cljs.core.seq(arglist__13165);
return G__13163__delegate(args);
});
G__13163.cljs$core$IFn$_invoke$arity$variadic = G__13163__delegate;
return G__13163;
})()
;

return null;
});
