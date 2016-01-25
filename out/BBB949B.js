goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__99345__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__99345 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__99346__i = 0, G__99346__a = new Array(arguments.length -  0);
while (G__99346__i < G__99346__a.length) {G__99346__a[G__99346__i] = arguments[G__99346__i + 0]; ++G__99346__i;}
  args = new cljs.core.IndexedSeq(G__99346__a,0);
} 
return G__99345__delegate.call(this,args);};
G__99345.cljs$lang$maxFixedArity = 0;
G__99345.cljs$lang$applyTo = (function (arglist__99347){
var args = cljs.core.seq(arglist__99347);
return G__99345__delegate(args);
});
G__99345.cljs$core$IFn$_invoke$arity$variadic = G__99345__delegate;
return G__99345;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__99348__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__99348 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__99349__i = 0, G__99349__a = new Array(arguments.length -  0);
while (G__99349__i < G__99349__a.length) {G__99349__a[G__99349__i] = arguments[G__99349__i + 0]; ++G__99349__i;}
  args = new cljs.core.IndexedSeq(G__99349__a,0);
} 
return G__99348__delegate.call(this,args);};
G__99348.cljs$lang$maxFixedArity = 0;
G__99348.cljs$lang$applyTo = (function (arglist__99350){
var args = cljs.core.seq(arglist__99350);
return G__99348__delegate(args);
});
G__99348.cljs$core$IFn$_invoke$arity$variadic = G__99348__delegate;
return G__99348;
})()
;

return null;
});
