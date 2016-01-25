goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53993__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53993 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53994__i = 0, G__53994__a = new Array(arguments.length -  0);
while (G__53994__i < G__53994__a.length) {G__53994__a[G__53994__i] = arguments[G__53994__i + 0]; ++G__53994__i;}
  args = new cljs.core.IndexedSeq(G__53994__a,0);
} 
return G__53993__delegate.call(this,args);};
G__53993.cljs$lang$maxFixedArity = 0;
G__53993.cljs$lang$applyTo = (function (arglist__53995){
var args = cljs.core.seq(arglist__53995);
return G__53993__delegate(args);
});
G__53993.cljs$core$IFn$_invoke$arity$variadic = G__53993__delegate;
return G__53993;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53996__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53997__i = 0, G__53997__a = new Array(arguments.length -  0);
while (G__53997__i < G__53997__a.length) {G__53997__a[G__53997__i] = arguments[G__53997__i + 0]; ++G__53997__i;}
  args = new cljs.core.IndexedSeq(G__53997__a,0);
} 
return G__53996__delegate.call(this,args);};
G__53996.cljs$lang$maxFixedArity = 0;
G__53996.cljs$lang$applyTo = (function (arglist__53998){
var args = cljs.core.seq(arglist__53998);
return G__53996__delegate(args);
});
G__53996.cljs$core$IFn$_invoke$arity$variadic = G__53996__delegate;
return G__53996;
})()
;

return null;
});
