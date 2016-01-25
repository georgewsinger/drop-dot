goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__15691__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__15691 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15692__i = 0, G__15692__a = new Array(arguments.length -  0);
while (G__15692__i < G__15692__a.length) {G__15692__a[G__15692__i] = arguments[G__15692__i + 0]; ++G__15692__i;}
  args = new cljs.core.IndexedSeq(G__15692__a,0);
} 
return G__15691__delegate.call(this,args);};
G__15691.cljs$lang$maxFixedArity = 0;
G__15691.cljs$lang$applyTo = (function (arglist__15693){
var args = cljs.core.seq(arglist__15693);
return G__15691__delegate(args);
});
G__15691.cljs$core$IFn$_invoke$arity$variadic = G__15691__delegate;
return G__15691;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__15694__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__15694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15695__i = 0, G__15695__a = new Array(arguments.length -  0);
while (G__15695__i < G__15695__a.length) {G__15695__a[G__15695__i] = arguments[G__15695__i + 0]; ++G__15695__i;}
  args = new cljs.core.IndexedSeq(G__15695__a,0);
} 
return G__15694__delegate.call(this,args);};
G__15694.cljs$lang$maxFixedArity = 0;
G__15694.cljs$lang$applyTo = (function (arglist__15696){
var args = cljs.core.seq(arglist__15696);
return G__15694__delegate(args);
});
G__15694.cljs$core$IFn$_invoke$arity$variadic = G__15694__delegate;
return G__15694;
})()
;

return null;
});
