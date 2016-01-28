goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__383691__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__383691 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__383692__i = 0, G__383692__a = new Array(arguments.length -  0);
while (G__383692__i < G__383692__a.length) {G__383692__a[G__383692__i] = arguments[G__383692__i + 0]; ++G__383692__i;}
  args = new cljs.core.IndexedSeq(G__383692__a,0);
} 
return G__383691__delegate.call(this,args);};
G__383691.cljs$lang$maxFixedArity = 0;
G__383691.cljs$lang$applyTo = (function (arglist__383693){
var args = cljs.core.seq(arglist__383693);
return G__383691__delegate(args);
});
G__383691.cljs$core$IFn$_invoke$arity$variadic = G__383691__delegate;
return G__383691;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__383694__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__383694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__383695__i = 0, G__383695__a = new Array(arguments.length -  0);
while (G__383695__i < G__383695__a.length) {G__383695__a[G__383695__i] = arguments[G__383695__i + 0]; ++G__383695__i;}
  args = new cljs.core.IndexedSeq(G__383695__a,0);
} 
return G__383694__delegate.call(this,args);};
G__383694.cljs$lang$maxFixedArity = 0;
G__383694.cljs$lang$applyTo = (function (arglist__383696){
var args = cljs.core.seq(arglist__383696);
return G__383694__delegate(args);
});
G__383694.cljs$core$IFn$_invoke$arity$variadic = G__383694__delegate;
return G__383694;
})()
;

return null;
});
