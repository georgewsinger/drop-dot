goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__14729__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__14729 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14730__i = 0, G__14730__a = new Array(arguments.length -  0);
while (G__14730__i < G__14730__a.length) {G__14730__a[G__14730__i] = arguments[G__14730__i + 0]; ++G__14730__i;}
  args = new cljs.core.IndexedSeq(G__14730__a,0);
} 
return G__14729__delegate.call(this,args);};
G__14729.cljs$lang$maxFixedArity = 0;
G__14729.cljs$lang$applyTo = (function (arglist__14731){
var args = cljs.core.seq(arglist__14731);
return G__14729__delegate(args);
});
G__14729.cljs$core$IFn$_invoke$arity$variadic = G__14729__delegate;
return G__14729;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__14732__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__14732 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14733__i = 0, G__14733__a = new Array(arguments.length -  0);
while (G__14733__i < G__14733__a.length) {G__14733__a[G__14733__i] = arguments[G__14733__i + 0]; ++G__14733__i;}
  args = new cljs.core.IndexedSeq(G__14733__a,0);
} 
return G__14732__delegate.call(this,args);};
G__14732.cljs$lang$maxFixedArity = 0;
G__14732.cljs$lang$applyTo = (function (arglist__14734){
var args = cljs.core.seq(arglist__14734);
return G__14732__delegate(args);
});
G__14732.cljs$core$IFn$_invoke$arity$variadic = G__14732__delegate;
return G__14732;
})()
;

return null;
});
