goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10716__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10717__i = 0, G__10717__a = new Array(arguments.length -  0);
while (G__10717__i < G__10717__a.length) {G__10717__a[G__10717__i] = arguments[G__10717__i + 0]; ++G__10717__i;}
  args = new cljs.core.IndexedSeq(G__10717__a,0);
} 
return G__10716__delegate.call(this,args);};
G__10716.cljs$lang$maxFixedArity = 0;
G__10716.cljs$lang$applyTo = (function (arglist__10718){
var args = cljs.core.seq(arglist__10718);
return G__10716__delegate(args);
});
G__10716.cljs$core$IFn$_invoke$arity$variadic = G__10716__delegate;
return G__10716;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10719__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10720__i = 0, G__10720__a = new Array(arguments.length -  0);
while (G__10720__i < G__10720__a.length) {G__10720__a[G__10720__i] = arguments[G__10720__i + 0]; ++G__10720__i;}
  args = new cljs.core.IndexedSeq(G__10720__a,0);
} 
return G__10719__delegate.call(this,args);};
G__10719.cljs$lang$maxFixedArity = 0;
G__10719.cljs$lang$applyTo = (function (arglist__10721){
var args = cljs.core.seq(arglist__10721);
return G__10719__delegate(args);
});
G__10719.cljs$core$IFn$_invoke$arity$variadic = G__10719__delegate;
return G__10719;
})()
;

return null;
});
