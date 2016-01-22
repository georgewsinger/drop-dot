goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14740__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14740 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14741__i = 0, G__14741__a = new Array(arguments.length -  0);
while (G__14741__i < G__14741__a.length) {G__14741__a[G__14741__i] = arguments[G__14741__i + 0]; ++G__14741__i;}
  args = new cljs.core.IndexedSeq(G__14741__a,0);
} 
return G__14740__delegate.call(this,args);};
G__14740.cljs$lang$maxFixedArity = 0;
G__14740.cljs$lang$applyTo = (function (arglist__14742){
var args = cljs.core.seq(arglist__14742);
return G__14740__delegate(args);
});
G__14740.cljs$core$IFn$_invoke$arity$variadic = G__14740__delegate;
return G__14740;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14743__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14744__i = 0, G__14744__a = new Array(arguments.length -  0);
while (G__14744__i < G__14744__a.length) {G__14744__a[G__14744__i] = arguments[G__14744__i + 0]; ++G__14744__i;}
  args = new cljs.core.IndexedSeq(G__14744__a,0);
} 
return G__14743__delegate.call(this,args);};
G__14743.cljs$lang$maxFixedArity = 0;
G__14743.cljs$lang$applyTo = (function (arglist__14745){
var args = cljs.core.seq(arglist__14745);
return G__14743__delegate(args);
});
G__14743.cljs$core$IFn$_invoke$arity$variadic = G__14743__delegate;
return G__14743;
})()
;

return null;
});
