goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15101__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15102__i = 0, G__15102__a = new Array(arguments.length -  0);
while (G__15102__i < G__15102__a.length) {G__15102__a[G__15102__i] = arguments[G__15102__i + 0]; ++G__15102__i;}
  args = new cljs.core.IndexedSeq(G__15102__a,0);
} 
return G__15101__delegate.call(this,args);};
G__15101.cljs$lang$maxFixedArity = 0;
G__15101.cljs$lang$applyTo = (function (arglist__15103){
var args = cljs.core.seq(arglist__15103);
return G__15101__delegate(args);
});
G__15101.cljs$core$IFn$_invoke$arity$variadic = G__15101__delegate;
return G__15101;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15104__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15104 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15105__i = 0, G__15105__a = new Array(arguments.length -  0);
while (G__15105__i < G__15105__a.length) {G__15105__a[G__15105__i] = arguments[G__15105__i + 0]; ++G__15105__i;}
  args = new cljs.core.IndexedSeq(G__15105__a,0);
} 
return G__15104__delegate.call(this,args);};
G__15104.cljs$lang$maxFixedArity = 0;
G__15104.cljs$lang$applyTo = (function (arglist__15106){
var args = cljs.core.seq(arglist__15106);
return G__15104__delegate(args);
});
G__15104.cljs$core$IFn$_invoke$arity$variadic = G__15104__delegate;
return G__15104;
})()
;

return null;
});
