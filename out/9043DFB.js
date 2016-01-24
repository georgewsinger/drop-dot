goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__33202__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__33202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33203__i = 0, G__33203__a = new Array(arguments.length -  0);
while (G__33203__i < G__33203__a.length) {G__33203__a[G__33203__i] = arguments[G__33203__i + 0]; ++G__33203__i;}
  args = new cljs.core.IndexedSeq(G__33203__a,0);
} 
return G__33202__delegate.call(this,args);};
G__33202.cljs$lang$maxFixedArity = 0;
G__33202.cljs$lang$applyTo = (function (arglist__33204){
var args = cljs.core.seq(arglist__33204);
return G__33202__delegate(args);
});
G__33202.cljs$core$IFn$_invoke$arity$variadic = G__33202__delegate;
return G__33202;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__33205__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__33205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33206__i = 0, G__33206__a = new Array(arguments.length -  0);
while (G__33206__i < G__33206__a.length) {G__33206__a[G__33206__i] = arguments[G__33206__i + 0]; ++G__33206__i;}
  args = new cljs.core.IndexedSeq(G__33206__a,0);
} 
return G__33205__delegate.call(this,args);};
G__33205.cljs$lang$maxFixedArity = 0;
G__33205.cljs$lang$applyTo = (function (arglist__33207){
var args = cljs.core.seq(arglist__33207);
return G__33205__delegate(args);
});
G__33205.cljs$core$IFn$_invoke$arity$variadic = G__33205__delegate;
return G__33205;
})()
;

return null;
});
