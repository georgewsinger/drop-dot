goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__359902__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__359902 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__359903__i = 0, G__359903__a = new Array(arguments.length -  0);
while (G__359903__i < G__359903__a.length) {G__359903__a[G__359903__i] = arguments[G__359903__i + 0]; ++G__359903__i;}
  args = new cljs.core.IndexedSeq(G__359903__a,0);
} 
return G__359902__delegate.call(this,args);};
G__359902.cljs$lang$maxFixedArity = 0;
G__359902.cljs$lang$applyTo = (function (arglist__359904){
var args = cljs.core.seq(arglist__359904);
return G__359902__delegate(args);
});
G__359902.cljs$core$IFn$_invoke$arity$variadic = G__359902__delegate;
return G__359902;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__359905__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__359905 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__359906__i = 0, G__359906__a = new Array(arguments.length -  0);
while (G__359906__i < G__359906__a.length) {G__359906__a[G__359906__i] = arguments[G__359906__i + 0]; ++G__359906__i;}
  args = new cljs.core.IndexedSeq(G__359906__a,0);
} 
return G__359905__delegate.call(this,args);};
G__359905.cljs$lang$maxFixedArity = 0;
G__359905.cljs$lang$applyTo = (function (arglist__359907){
var args = cljs.core.seq(arglist__359907);
return G__359905__delegate(args);
});
G__359905.cljs$core$IFn$_invoke$arity$variadic = G__359905__delegate;
return G__359905;
})()
;

return null;
});
