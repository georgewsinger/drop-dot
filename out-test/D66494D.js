goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__77324__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__77324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77325__i = 0, G__77325__a = new Array(arguments.length -  0);
while (G__77325__i < G__77325__a.length) {G__77325__a[G__77325__i] = arguments[G__77325__i + 0]; ++G__77325__i;}
  args = new cljs.core.IndexedSeq(G__77325__a,0);
} 
return G__77324__delegate.call(this,args);};
G__77324.cljs$lang$maxFixedArity = 0;
G__77324.cljs$lang$applyTo = (function (arglist__77326){
var args = cljs.core.seq(arglist__77326);
return G__77324__delegate(args);
});
G__77324.cljs$core$IFn$_invoke$arity$variadic = G__77324__delegate;
return G__77324;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__77327__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__77327 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77328__i = 0, G__77328__a = new Array(arguments.length -  0);
while (G__77328__i < G__77328__a.length) {G__77328__a[G__77328__i] = arguments[G__77328__i + 0]; ++G__77328__i;}
  args = new cljs.core.IndexedSeq(G__77328__a,0);
} 
return G__77327__delegate.call(this,args);};
G__77327.cljs$lang$maxFixedArity = 0;
G__77327.cljs$lang$applyTo = (function (arglist__77329){
var args = cljs.core.seq(arglist__77329);
return G__77327__delegate(args);
});
G__77327.cljs$core$IFn$_invoke$arity$variadic = G__77327__delegate;
return G__77327;
})()
;

return null;
});
